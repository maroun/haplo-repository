/* SPACE Community Engagement Facilitation Plugin
 * Resource Provider - Manages and provides facilitation resources
 * (c) SPACE Research Community
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.         */

// Manages facilitation resources intelligently
// Embodies the insight about building on existing foundations
// rather than duplicating efforts

P.ResourceLibrary = {

    // Resources are categorized by the theoretical framework
    // Each resource is designed to adapt to context
    resources: {
        "community_partnership_guide": {
            title: "Building Reciprocal Community Partnerships",
            type: "guide",
            scaleLevels: [P.ScaleLevels.INDIVIDUAL, P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY],
            disciplineAgnostic: false,  // Has discipline-specific versions
            connectsTo: ["PG6025"],      // Links to existing CBPR module
            content: {
                overview: "Framework for establishing equitable partnerships that honor community knowledge and agency",
                sections: [
                    "Understanding Power Dynamics",
                    "Negotiating Reciprocity",
                    "Establishing Communication Protocols",
                    "Creating Feedback Loops"
                ],
                adaptations: {
                    "architecture": "Spatial and material considerations in community co-design",
                    "business": "Value exchange and economic sustainability models",
                    "computer_science": "Open source collaboration and digital sovereignty",
                    "health_sciences": "Community-based participatory research (CBPR) protocols",
                    "education": "Participatory action research in educational settings"
                }
            }
        },

        "ethical_consideration_checklist": {
            title: "Community-Centered Ethics Beyond IRB",
            type: "checklist",
            scaleLevels: [P.ScaleLevels.INDIVIDUAL, P.ScaleLevels.INSTITUTIONAL],
            disciplineAgnostic: true,
            connectsTo: ["ethics_review_process"],
            content: {
                overview: "Expanding ethical consideration beyond institutional requirements to community-defined ethics",
                checkpoints: [
                    "Have community partners defined their own ethical priorities?",
                    "Does the research honor indigenous data sovereignty principles?",
                    "Are benefits and risks equitably distributed?",
                    "Is there a clear exit strategy that doesn't abandon the community?",
                    "Have power imbalances been acknowledged and addressed?",
                    "Is there a process for ongoing consent rather than one-time approval?"
                ]
            }
        },

        "participatory_ethics_framework": {
            title: "Co-Developing Ethical Frameworks with Communities",
            type: "framework",
            scaleLevels: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY, P.ScaleLevels.INSTITUTIONAL],
            disciplineAgnostic: false,
            connectsTo: ["PG6025", "ethics_committee"],
            content: {
                overview: "Moving from ethics as compliance to ethics as ongoing dialogue",
                components: [
                    "Establishing Ethical Co-Governance",
                    "Creating Community Review Processes",
                    "Navigating Multiple Ethical Systems",
                    "Documenting Evolving Consent"
                ]
            }
        },

        "partnership_agreement_template": {
            title: "Community Partnership Agreement Template",
            type: "template",
            scaleLevels: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY],
            disciplineAgnostic: true,
            connectsTo: [],
            content: {
                overview: "Template for creating formal partnership agreements that center community agency",
                sections: [
                    "Partnership Vision and Values",
                    "Roles and Responsibilities",
                    "Decision-Making Processes",
                    "Resource Sharing and Compensation",
                    "Data Ownership and Use Rights",
                    "Dissemination and Authorship",
                    "Conflict Resolution",
                    "Partnership Evolution and Exit Strategies"
                ]
            }
        },

        "power_dynamics_worksheet": {
            title: "Mapping and Addressing Power Dynamics",
            type: "worksheet",
            scaleLevels: [P.ScaleLevels.INDIVIDUAL, P.ScaleLevels.GROUP],
            disciplineAgnostic: true,
            connectsTo: [],
            content: {
                overview: "Reflective tool for identifying and addressing power imbalances in research partnerships",
                exercises: [
                    "Positionality Mapping: Where do you stand?",
                    "Resource Audit: Who controls what?",
                    "Decision-Making Analysis: Whose voice shapes outcomes?",
                    "Knowledge Valuation: What counts as expertise?",
                    "Action Planning: Concrete steps to share power"
                ]
            }
        },

        "reciprocity_guidelines": {
            title: "Principles of Research Reciprocity",
            type: "guide",
            scaleLevels: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY],
            disciplineAgnostic: true,
            connectsTo: [],
            content: {
                overview: "Moving beyond extraction to mutual benefit in community-engaged research",
                principles: [
                    "Community-Defined Value: Partners determine what constitutes benefit",
                    "Ongoing Exchange: Reciprocity as process, not one-time transaction",
                    "Non-Transactional: Benefits that can't be reduced to compensation",
                    "Capacity Building: Supporting community research capabilities",
                    "Knowledge Sharing: Making research accessible and useful"
                ]
            }
        },

        "data_sovereignty_principles": {
            title: "Data Sovereignty and Community Ownership",
            type: "framework",
            scaleLevels: [P.ScaleLevels.COMMUNITY, P.ScaleLevels.INSTITUTIONAL],
            disciplineAgnostic: true,
            connectsTo: ["data_management"],
            content: {
                overview: "Centering community rights and governance in research data",
                components: [
                    "OCAP® Principles (Ownership, Control, Access, Possession)",
                    "Community Data Governance Structures",
                    "Data Sharing Agreements",
                    "Cultural Protocols for Data",
                    "Long-term Data Stewardship"
                ]
            }
        },

        "community_authorship_guide": {
            title: "Collaborative Authorship and Attribution",
            type: "guide",
            scaleLevels: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY],
            disciplineAgnostic: false,
            connectsTo: ["publication_process"],
            content: {
                overview: "Ensuring equitable recognition of community contributions to research",
                sections: [
                    "Expanding Notions of Authorship",
                    "Community Review Processes",
                    "Multi-Format Outputs",
                    "Navigating Academic Conventions",
                    "Alternative Forms of Attribution"
                ]
            }
        },

        "knowledge_translation_framework": {
            title: "Community-Centered Knowledge Translation",
            type: "framework",
            scaleLevels: [P.ScaleLevels.COMMUNITY],
            disciplineAgnostic: true,
            connectsTo: ["dissemination"],
            content: {
                overview: "Making research findings accessible and actionable for communities",
                approaches: [
                    "Co-Creating Dissemination Strategies",
                    "Multiple Knowledge Products",
                    "Accessible Communication",
                    "Action-Oriented Translation",
                    "Sustained Engagement Beyond Publication"
                ]
            }
        }
    },

    // Intelligent resource retrieval based on context
    get: function(resourceKey) {
        var resource = this.resources[resourceKey];
        if(!resource) { return null; }

        // Adapt resource to current context
        var adapted = this.adaptToContext(resource);

        return adapted;
    },

    // Adapt resource to user's context
    adaptToContext: function(resource) {
        // Clone to avoid modifying the original
        var adaptedResource = _.extend({}, resource);

        // Get user's discipline context (would be from user profile)
        var userDiscipline = "general"; // Default

        // Apply discipline-specific adaptation if available
        if(!resource.disciplineAgnostic && resource.content.adaptations) {
            var disciplineAdaptation = resource.content.adaptations[userDiscipline];
            if(disciplineAdaptation) {
                adaptedResource.disciplineNote = disciplineAdaptation;
            }
        }

        return adaptedResource;
    },

    // Find resources based on current needs
    findRelevant: function(context) {
        var relevant = [];

        _.each(this.resources, function(resource, key) {
            // Check if resource matches any active scale levels
            var scaleMatch = _.intersection(
                resource.scaleLevels,
                context.activeScales || []
            ).length > 0;

            if(scaleMatch) {
                relevant.push({
                    key: key,
                    resource: resource,
                    relevance: 1.0  // Could be made more sophisticated
                });
            }
        });

        // Sort by relevance
        relevant.sort(function(a, b) {
            return b.relevance - a.relevance;
        });

        // Limit to avoid overwhelming
        return relevant.slice(0, 5);
    },

    // Register new resources (allows extension)
    register: function(resource) {
        if(!resource.key || !resource.title) {
            throw new Error("Resource must have key and title");
        }

        this.resources[resource.key] = resource;
        console.log("Registered new facilitation resource:", resource.title);

        return true;
    },

    // Get all resource keys (for admin/configuration)
    listAll: function() {
        return Object.keys(this.resources);
    },

    // Get resources by type
    getByType: function(type) {
        var byType = {};

        _.each(this.resources, function(resource, key) {
            if(resource.type === type) {
                byType[key] = resource;
            }
        });

        return byType;
    }
};

// Service to expose resource library to other plugins
P.implementService("space_facilitation:resource_library:get", function(key) {
    return P.ResourceLibrary.get(key);
});

P.implementService("space_facilitation:resource_library:find_relevant", function(context) {
    return P.ResourceLibrary.findRelevant(context);
});
