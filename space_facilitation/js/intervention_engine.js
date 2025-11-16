/* SPACE Community Engagement Facilitation Plugin
 * Intervention Engine - Decision logic for facilitation interventions
 * (c) SPACE Research Community
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.         */

// Sophisticated decision engine for facilitation interventions
// Embodies philosophical insights about when and how to provide support

P.InterventionEngine = {

    // Threshold configuration based on theoretical framework
    thresholds: {
        urgency: {
            low: 0.3,      // Ambient presence
            medium: 0.6,   // Gentle suggestion
            high: 0.8      // Active intervention
        },
        complexity: {
            simple: 1,     // Single scale
            complicated: 3, // Multiple scales
            complex: 5     // Emergent properties
        }
    },

    // Decide whether and how to intervene
    shouldIntervene: function(context) {
        // Calculate intervention score based on multiple factors
        var score = this.calculateInterventionScore(context);

        // Determine if intervention is needed
        if(score.urgency < this.thresholds.urgency.low) {
            return {
                intervene: false,
                reason: "No intervention needed at this time"
            };
        }

        // Check user preferences for intervention style
        var userPreferences = P.getUserFacilitationPreferences();

        // Respect user autonomy - they can opt for less intervention
        if(userPreferences.mode === "minimal" &&
           score.urgency < this.thresholds.urgency.high) {
            return {
                intervene: false,
                reason: "User prefers minimal intervention"
            };
        }

        // Determine appropriate intervention mode
        var mode = this.selectInterventionMode(score, context, userPreferences);

        // Select appropriate resources
        var resources = this.selectResources(context, mode);

        return {
            intervene: true,
            mode: mode,
            intensity: score.urgency,
            resources: resources,
            reasoning: this.explainIntervention(score, context, mode)
        };
    },

    // Calculate intervention score based on multiple factors
    calculateInterventionScore: function(context) {
        var score = {
            urgency: 0,
            complexity: 0,
            alignment: 0
        };

        // Temporal factors - is this time-sensitive?
        if(context.hasDeadline) {
            var daysUntil = context.daysUntilDeadline || 30;
            // Urgency increases as deadline approaches
            score.urgency += Math.max(0, 1 - (daysUntil / 30));
        }

        // Complexity factors - how many scales are involved?
        score.complexity = (context.activeScales || []).length;

        // Historical factors - has user benefited from past interventions?
        var history = P.getUserFacilitationHistory();
        score.alignment = history.successRate || 0.5; // Default to neutral

        // Risk factors - what are consequences of no intervention?
        if(context.hasEthicalImplications) {
            score.urgency += 0.3;
        }

        if(context.involvesVulnerablePopulations) {
            score.urgency += 0.2;
        }

        if(context.isFirstTimeEngagement) {
            score.urgency += 0.15;
        }

        // Opportunity factors - is this a teachable moment?
        if(context.isNovelSituation) {
            score.urgency += 0.1;
        }

        // Normalize urgency score to 0-1 range
        score.urgency = Math.min(1, score.urgency);

        return score;
    },

    // Select appropriate intervention mode
    selectInterventionMode: function(score, context, preferences) {
        // This implements the taxonomy of facilitation modes

        // User-initiated requests always get responsive mode
        if(context.userInitiated) {
            return P.FacilitationModes.RESPONSIVE;
        }

        // High complexity suggests emergent mode
        // allowing for exploration rather than prescription
        if(score.complexity >= this.thresholds.complexity.complex) {
            return P.FacilitationModes.EMERGENT;
        }

        // Clear pathway and moderate complexity suggests scaffolded mode
        if(context.hasDefinedPath &&
           score.complexity <= this.thresholds.complexity.complicated) {
            return P.FacilitationModes.SCAFFOLDED;
        }

        // Low urgency or user preference for minimal intervention
        // suggests ambient mode
        if(score.urgency < this.thresholds.urgency.medium ||
           preferences.mode === "minimal") {
            return P.FacilitationModes.AMBIENT;
        }

        // Default to scaffolded for balanced approach
        return P.FacilitationModes.SCAFFOLDED;
    },

    // Select appropriate resources based on context and mode
    selectResources: function(context, mode) {
        var resources = [];

        // Get potentially relevant resources
        var candidates = P.ResourceLibrary.findRelevant(context);

        // Filter and select based on mode
        switch(mode) {
            case P.FacilitationModes.EMERGENT:
                // Select diverse resources that enable exploration
                resources = this.selectDiverseResources(candidates, 3);
                break;

            case P.FacilitationModes.SCAFFOLDED:
                // Select sequential resources that build on each other
                resources = this.selectSequentialResources(candidates, context);
                break;

            case P.FacilitationModes.RESPONSIVE:
                // Select resources that directly address the query
                resources = this.selectTargetedResources(candidates, context);
                break;

            case P.FacilitationModes.AMBIENT:
                // Select single most relevant resource
                resources = candidates.slice(0, 1);
                break;
        }

        return resources;
    },

    // Select diverse resources for emergent mode
    selectDiverseResources: function(candidates, count) {
        // Ensure diversity of resource types
        var selected = [];
        var typesSeen = {};

        _.each(candidates, function(candidate) {
            if(selected.length >= count) { return; }

            var resourceType = candidate.resource.type;

            // Prefer resources of types we haven't selected yet
            if(!typesSeen[resourceType]) {
                selected.push(candidate);
                typesSeen[resourceType] = true;
            }
        });

        // Fill remaining slots if needed
        if(selected.length < count) {
            _.each(candidates, function(candidate) {
                if(selected.length >= count) { return; }
                if(!_.contains(selected, candidate)) {
                    selected.push(candidate);
                }
            });
        }

        return selected;
    },

    // Select sequential resources for scaffolded mode
    selectSequentialResources: function(candidates, context) {
        // Order resources by logical progression
        var typeOrder = ["checklist", "guide", "worksheet", "framework", "template"];
        var ordered = [];

        _.each(typeOrder, function(type) {
            var ofType = _.filter(candidates, function(c) {
                return c.resource.type === type;
            });
            ordered = ordered.concat(ofType);
        });

        // Return top 3-4 in sequence
        return ordered.slice(0, 4);
    },

    // Select targeted resources for responsive mode
    selectTargetedResources: function(candidates, context) {
        // If user has a specific query, try to match it
        if(context.query) {
            var queryLower = context.query.toLowerCase();

            var matched = _.filter(candidates, function(c) {
                var titleMatch = c.resource.title.toLowerCase().indexOf(queryLower) !== -1;
                var descMatch = c.resource.content.overview.toLowerCase().indexOf(queryLower) !== -1;
                return titleMatch || descMatch;
            });

            if(matched.length > 0) {
                return matched.slice(0, 3);
            }
        }

        // Fall back to top candidates
        return candidates.slice(0, 3);
    },

    // Explain why intervention is being offered
    explainIntervention: function(score, context, mode) {
        var reasons = [];

        if(score.urgency > this.thresholds.urgency.high) {
            reasons.push("This appears to be a critical moment in your research process");
        }

        if(context.hasEthicalImplications) {
            reasons.push("Ethical considerations deserve careful attention");
        }

        if(context.involvesVulnerablePopulations) {
            reasons.push("Working with vulnerable populations requires additional care");
        }

        if(score.complexity >= this.thresholds.complexity.complex) {
            reasons.push("This involves multiple scales and stakeholders");
        }

        if(context.isNovelSituation) {
            reasons.push("This may be new territory worth exploring carefully");
        }

        return reasons.join(". ");
    },

    // Assess if intervention was helpful (learning mechanism)
    recordFeedback: function(interventionId, wasHelpful, userComment) {
        // In full implementation, this would store feedback
        // to improve future interventions
        console.log("Feedback received:", {
            intervention: interventionId,
            helpful: wasHelpful,
            comment: userComment
        });

        // Could update user's facilitation history
        // to better calibrate future interventions
        return true;
    }
};

// Service to request intervention decision
P.implementService("space_facilitation:should_intervene", function(context) {
    return P.InterventionEngine.shouldIntervene(context);
});

// Service to record feedback on interventions
P.implementService("space_facilitation:record_feedback", function(id, helpful, comment) {
    return P.InterventionEngine.recordFeedback(id, helpful, comment);
});
