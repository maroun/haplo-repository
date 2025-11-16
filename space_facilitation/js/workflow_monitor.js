/* SPACE Community Engagement Facilitation Plugin
 * Workflow Monitor - Watches for facilitation opportunities
 * (c) SPACE Research Community
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.         */

// Monitors workflows for moments when facilitation might be valuable
// Implements the insight about resources "rising to usefulness"

P.WorkflowMonitor = {

    // Define trigger points where facilitation might be valuable
    // These align with critical moments in the PhD/research journey
    triggerPoints: {
        "proposal_development": {
            description: "Researcher beginning to develop research proposal",
            facilitation: ["community_partnership_guide", "ethical_consideration_checklist"],
            mode: P.FacilitationModes.SCAFFOLDED,
            scaleLevel: [P.ScaleLevels.INDIVIDUAL, P.ScaleLevels.GROUP]
        },
        "ethics_review": {
            description: "Preparing for ethics committee submission",
            facilitation: ["participatory_ethics_framework", "community_consent_templates"],
            mode: P.FacilitationModes.EMERGENT,
            scaleLevel: [P.ScaleLevels.INDIVIDUAL, P.ScaleLevels.INSTITUTIONAL]
        },
        "community_engagement_planning": {
            description: "First contact with community partners",
            facilitation: ["partnership_agreement_template", "power_dynamics_worksheet"],
            mode: P.FacilitationModes.RESPONSIVE,
            scaleLevel: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY]
        },
        "data_collection": {
            description: "Beginning fieldwork or data gathering",
            facilitation: ["reciprocity_guidelines", "data_sovereignty_principles"],
            mode: P.FacilitationModes.AMBIENT,
            scaleLevel: [P.ScaleLevels.COMMUNITY]
        },
        "dissemination_planning": {
            description: "Planning research dissemination and outputs",
            facilitation: ["community_authorship_guide", "knowledge_translation_framework"],
            mode: P.FacilitationModes.SCAFFOLDED,
            scaleLevel: [P.ScaleLevels.GROUP, P.ScaleLevels.COMMUNITY]
        }
    },

    // Monitor function runs periodically to check for trigger conditions
    monitor: function() {
        console.log("SPACE Facilitation: Running workflow monitoring");

        // In a full implementation, this would:
        // 1. Query active workflows from the workflow system
        // 2. Check each workflow against trigger points
        // 3. Create facilitation opportunities when matches found

        // For the MVP, we log the monitoring activity
        // This can be expanded to actually query workflows using:
        // var workflows = O.query().link(T.WorkflowType, A.Type).execute();

        var monitoringSummary = {
            timestamp: new Date(),
            triggersChecked: Object.keys(this.triggerPoints).length,
            opportunitiesCreated: 0
        };

        return monitoringSummary;
    },

    // Check if a workflow state matches a trigger
    matchesTrigger: function(state, triggerKey) {
        // Sophisticated matching logic that considers multiple factors
        // This implements insights about scale and complexity

        if(!state || !triggerKey) { return false; }

        // In a full implementation, this would:
        // 1. Check explicit state match
        // 2. Check semantic similarity (related states)
        // 3. Check temporal patterns (is it time for this support?)

        // For MVP, exact string match
        return state === triggerKey;
    },

    // Create a facilitation opportunity
    createFacilitationOpportunity: function(workflow, trigger) {
        // This is where facilitation becomes available but not imposed
        // Implementing the principle of emergence over prescription

        console.log("Creating facilitation opportunity:", trigger.description);

        // In a full implementation, this would create objects using:
        // var opportunity = O.object();
        // opportunity.append(T.FacilitationOpportunity, A.Type);
        // opportunity.append(workflow.ref, A.RelatedWorkflow);
        // opportunity.append(O.datetime(new Date()), A.CreatedDate);
        // opportunity.append(trigger.mode, A.FacilitationMode);
        // opportunity.save();

        return {
            description: trigger.description,
            mode: trigger.mode,
            resources: trigger.facilitation,
            created: new Date()
        };
    },

    // Semantic matcher for related states
    // This enables flexible triggering based on conceptual similarity
    areRelated: function(state1, state2) {
        // Simple implementation for MVP
        // Could be expanded with ontologies or ML in future
        var relatedStates = {
            "proposal_development": ["planning", "design", "scoping"],
            "ethics_review": ["ethics_approval", "irb_submission"],
            "community_engagement_planning": ["partner_engagement", "stakeholder_mapping"],
            "data_collection": ["fieldwork", "interviews", "surveys"],
            "dissemination_planning": ["publication", "presentation", "knowledge_translation"]
        };

        if(relatedStates[state2] && relatedStates[state2].indexOf(state1) !== -1) {
            return true;
        }

        return false;
    },

    // Temporal analyzer to determine if support is timely
    isDue: function(state, triggerKey) {
        // Check if temporal patterns suggest this trigger is relevant
        // For MVP, returns false - could be expanded with:
        // - Historical patterns
        // - Deadline proximity
        // - Workflow phase duration

        return false;
    }
};

// Implement hook to monitor specific workflow transitions
P.workflow.registerWorkflowFeature("space-facilitation-monitor", function(workflow, spec) {
    // This feature can be added to workflows to enable monitoring
    spec.observeEnter({}, function(M) {
        // When any state is entered, check for facilitation triggers
        var stateName = M.state;

        _.each(P.WorkflowMonitor.triggerPoints, function(trigger, key) {
            if(P.WorkflowMonitor.matchesTrigger(stateName, key)) {
                var opportunity = P.WorkflowMonitor.createFacilitationOpportunity(
                    M.workUnit,
                    trigger
                );

                // Notify based on mode
                if(trigger.mode === P.FacilitationModes.SCAFFOLDED) {
                    // Create notification for proactive support
                    console.log("Would notify about:", opportunity.description);
                }
            }
        });
    });
});
