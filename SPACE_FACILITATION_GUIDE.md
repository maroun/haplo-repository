# Building a Community Engagement Facilitation Layer on Haplo

## A Comprehensive Implementation Guide

This guide explains the SPACE Community Engagement Facilitation plugin - a meaningful MVP that demonstrates how facilitation support can enhance graduate education management in Haplo.

## Table of Contents

1. [Overview](#overview)
2. [Philosophical Foundation](#philosophical-foundation)
3. [Architecture](#architecture)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage Guide](#usage-guide)
7. [Extension Points](#extension-points)
8. [Troubleshooting](#troubleshooting)

---

## Overview

### What We've Built

The SPACE Facilitation plugin acts as an intelligent layer on top of Haplo's graduate education capabilities. Think of it as a knowledgeable colleague who knows when to offer guidance, resources, or prompts to help PhD advisors navigate community engagement challenges.

This system monitors the graduate education workflow and injects helpful interventions at precisely the right moments - without disrupting existing workflows.

### Why This Matters

Traditional facilitation approaches often fall into two traps:
1. **Over-prescription**: Forcing everyone through the same curriculum regardless of context
2. **Under-support**: Leaving people to figure things out completely on their own

Our approach finds the middle path: **emergence through thoughtful scaffolding**. Resources become available when needed, adapted to context, and always respectful of user autonomy.

---

## Philosophical Foundation

### Core Principles

#### 1. Emergence Over Prescription
Resources "rise to usefulness" rather than competing for attention. The system doesn't force interventions but makes support accessible when most relevant.

**Implementation**: The intervention engine calculates urgency and relevance scores, but always respects user preferences for minimal intervention.

#### 2. Scalar Awareness
Community engagement works differently at individual, group, community, and institutional scales. The plugin recognizes these differences.

**Implementation**: Each resource is tagged with applicable scale levels, and the system considers which scales are active in the current context.

#### 3. Disciplinary Translation
Rather than imposing universal frameworks, resources adapt to disciplinary contexts while maintaining core principles.

**Implementation**: Resources can include discipline-specific adaptations that are surfaced based on user context.

#### 4. Respectful Presence
Support is available but never forced. Users maintain full autonomy.

**Implementation**: Multiple intervention modes (ambient, scaffolded, emergent, responsive) with user-configurable preferences.

---

## Architecture

### Component Overview

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│  (Templates: dashboard, resource-detail, prompts)       │
└──────────────────┬──────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────┐
│              Core Facilitation Engine                    │
│  - Context Analysis                                      │
│  - User Preference Management                            │
│  - Service Integration                                   │
└──────┬───────────────┬───────────────┬──────────────────┘
       │               │               │
┌──────▼──────┐ ┌─────▼─────┐ ┌───────▼────────┐
│  Workflow   │ │ Resource  │ │ Intervention   │
│  Monitor    │ │ Provider  │ │   Engine       │
└──────┬──────┘ └─────┬─────┘ └───────┬────────┘
       │              │               │
       └──────────────┼───────────────┘
                      │
              ┌───────▼────────┐
              │ Haplo Platform │
              │  - Workflows   │
              │  - Objects     │
              │  - Services    │
              └────────────────┘
```

### Key Components

#### 1. Workflow Monitor (`workflow_monitor.js`)
- **Purpose**: Watches for moments when facilitation might be helpful
- **Key Insight**: Resources should appear at critical moments, not constantly
- **Trigger Points**: Proposal development, ethics review, community engagement planning, data collection, dissemination

#### 2. Resource Provider (`resource_provider.js`)
- **Purpose**: Manages and adapts facilitation resources
- **Key Insight**: Building on existing foundations rather than duplicating efforts
- **Resources**: Guides, frameworks, checklists, templates, worksheets

#### 3. Intervention Engine (`intervention_engine.js`)
- **Purpose**: Decides when and how to intervene
- **Key Insight**: Support should match context and user preferences
- **Modes**: Emergent, scaffolded, responsive, ambient

#### 4. Core Module (`space_facilitation.js`)
- **Purpose**: Integration and coordination
- **Services**: Exposes functionality to other plugins
- **Hooks**: Integrates with Haplo's UI and workflow systems

---

## Installation

### Prerequisites

1. **Haplo Platform** with Repository installed
2. **Required plugins**:
   - `std:workflow`
   - `std:reporting`
   - `hres_repository`

### Installation Steps

#### Method 1: Direct Integration (For Development)

```bash
# Navigate to your Haplo repository
cd /path/to/haplo-repository

# The space_facilitation plugin is already in the repository
# Verify the structure:
ls -la space_facilitation/

# You should see:
# - plugin.json
# - requirements.schema
# - developer.json
# - readme.txt
# - js/ (directory with .js files)
# - template/ (directory with .hsvt files)
# - static/ (directory with CSS)
```

#### Method 2: Using Haplo Plugin Tool

```bash
# Install the Haplo Plugin Tool (if not already installed)
gem install haplo-plugin

# Authenticate with your Haplo server
haplo-plugin auth YOUR_SERVER_URL

# Deploy the plugin
cd space_facilitation
haplo-plugin install YOUR_SERVER_URL
```

#### Post-Installation

1. Log into your Haplo instance as an administrator
2. Navigate to **System Management > Plugins**
3. Find "SPACE Community Engagement Facilitation" in the list
4. Click **Activate**
5. The plugin is now active and ready for configuration

---

## Configuration

### Initial Setup

#### 1. Access the Dashboard

Navigate to: `/do/space-facilitation/dashboard`

You should see:
- Current facilitation opportunities (if any)
- Resource library categories
- Preference settings

#### 2. Configure User Preferences

Users can customize how they receive facilitation support:

- **Intervention Mode**:
  - `minimal`: Only respond to explicit requests
  - `balanced`: Mix of proactive and reactive support (default)
  - `proactive`: More active suggestions and scaffolding

- **Notification Preference**:
  - `gentle`: Subtle indicators only
  - `standard`: Gentle notifications for important moments
  - `comprehensive`: Full intervention system active

#### 3. Customize for Your Institution

The plugin can be adapted to your specific context:

**Adding Institution-Specific Resources**:
```javascript
// In resource_provider.js, add to the resources object:
"your_resource_key": {
    title: "Your Resource Title",
    type: "guide|framework|checklist|template|worksheet",
    scaleLevels: [P.ScaleLevels.INDIVIDUAL, ...],
    disciplineAgnostic: true/false,
    connectsTo: ["existing_resource_ids"],
    content: {
        overview: "Description...",
        sections: [...],
        adaptations: {
            "discipline_name": "Discipline-specific guidance"
        }
    }
}
```

**Adding Custom Trigger Points**:
```javascript
// In workflow_monitor.js, add to triggerPoints:
"your_trigger_key": {
    description: "Description of when this occurs",
    facilitation: ["resource_key1", "resource_key2"],
    mode: P.FacilitationModes.SCAFFOLDED,
    scaleLevel: [P.ScaleLevels.GROUP]
}
```

---

## Usage Guide

### For Researchers and PhD Advisors

#### Accessing Support

**Proactive Prompts**:
As you work through graduate education workflows, facilitation prompts may appear contextually. These are designed to be helpful, not intrusive.

**On-Demand Resources**:
1. Visit `/do/space-facilitation/dashboard`
2. Browse the resource library
3. Search for specific topics or challenges
4. Resources adapt to your discipline and current context

**Intervention Modes You Might Encounter**:

- **Ambient** 💡: A subtle indicator that resources are available
  - *Action*: Click to explore if interested

- **Scaffolded** 📋: Structured guidance for a known pathway
  - *Action*: Follow the sequence or adjust as needed

- **Emergent** 🌱: Diverse resources for complex situations
  - *Action*: Explore different approaches

- **Responsive** 💬: Direct answers to your questions
  - *Action*: Engage with targeted resources

#### Providing Feedback

Your feedback helps the system learn and improve:

- **"This was helpful"**: Increases relevance scoring for similar contexts
- **"Not now"**: Defers the intervention without penalizing it
- **"This isn't quite right"**: Helps calibrate future interventions
- **Detailed feedback**: Use the feedback form for specific suggestions

### For Administrators

#### Monitoring Effectiveness

**Dashboard Analytics** (future enhancement):
- Intervention acceptance rates
- Resource usage patterns
- User feedback trends
- Workflow completion correlations

#### Customizing Resources

**Discipline-Specific Adaptations**:
1. Identify disciplines represented in your institution
2. Work with faculty to develop discipline-specific guidance
3. Add adaptations to resource content
4. Test with users from those disciplines

**Connecting to Existing Resources**:
```javascript
// Link to existing course modules, guides, or processes
connectsTo: [
    "PG6025",  // Your CBPR course
    "ethics_review_process",
    "data_management_policy"
]
```

---

## Extension Points

### Adding New Resources

The plugin is designed to grow with your needs:

```javascript
// Use the service from another plugin or configuration:
O.service("space_facilitation:register_resource", {
    key: "community_impact_assessment",
    title: "Community Impact Assessment Framework",
    type: "framework",
    scaleLevels: [
        P.ScaleLevels.COMMUNITY,
        P.ScaleLevels.INSTITUTIONAL
    ],
    disciplineAgnostic: false,
    connectsTo: ["partnership_agreement_template"],
    content: {
        overview: "Assessing research impact from community perspectives",
        components: [
            "Co-Defining Success Metrics",
            "Ongoing Impact Monitoring",
            "Community-Led Evaluation",
            "Long-term Sustainability Planning"
        ],
        adaptations: {
            "health_sciences": "Patient and community health outcomes",
            "education": "Student and community learning outcomes",
            "environmental_science": "Environmental and social indicators"
        }
    }
});
```

### Integrating with Other Workflows

```javascript
// In your workflow plugin:
P.workflow.registerWorkflowFeature("my-workflow", "my-feature",
    function(workflow, spec) {
        spec.observeEnter({state: "community_engagement"}, function(M) {
            // Request facilitation support
            var support = O.service("space_facilitation:should_intervene", {
                activeScales: [
                    P.ScaleLevels.GROUP,
                    P.ScaleLevels.COMMUNITY
                ],
                hasEthicalImplications: true,
                userInitiated: false
            });

            if(support.intervene) {
                // Display facilitation resources
                M.context.facilitationResources = support.resources;
            }
        });
    }
);
```

### Custom Intervention Logic

Extend the intervention engine with your own decision logic:

```javascript
// Add custom scoring factors
P.InterventionEngine.customScoring = function(context) {
    var score = 0;

    // Your institution-specific factors
    if(context.involvesIndigenousCommunities) {
        score += 0.4;
    }

    if(context.crossCulturalEngagement) {
        score += 0.3;
    }

    return score;
};
```

---

## Troubleshooting

### Common Issues

#### Plugin Not Appearing After Installation

**Check**:
1. Plugin is activated in System Management > Plugins
2. Required dependencies are installed and activated
3. Browser cache cleared
4. User has appropriate permissions

**Solution**:
```bash
# Verify plugin structure
ls -la space_facilitation/

# Check for JavaScript syntax errors
grep -r "syntax" logs/
```

#### Resources Not Appearing

**Check**:
1. Workflow triggers are properly configured
2. User context matches resource criteria
3. Intervention thresholds are appropriate

**Debug**:
```javascript
// Add logging to intervention engine
console.log("Intervention context:", context);
console.log("Intervention decision:", decision);
```

#### Customizations Not Taking Effect

**Check**:
1. Changes saved to correct files
2. Plugin reloaded after changes
3. Cache cleared

**Reload Plugin**:
```bash
haplo-plugin reload YOUR_SERVER_URL
```

---

## Advanced Topics

### Multi-Lingual Support (Future Enhancement)

The architecture supports adding translations:

```javascript
// Resource structure with translations
content: {
    overview: {
        en: "English description",
        es: "Descripción en español",
        fr: "Description en français"
    }
}
```

### Integration with External Systems

The plugin can integrate with external CBPR frameworks or resource repositories:

```javascript
// Fetch resources from external API
P.ResourceLibrary.fetchExternal = function(source) {
    var response = O.httpClient(source.url).request("GET");
    var externalResources = JSON.parse(response.body);

    _.each(externalResources, function(resource) {
        P.ResourceLibrary.register(resource);
    });
};
```

### Machine Learning Integration (Future Enhancement)

The feedback system is designed to support ML-based improvements:

```javascript
// Collect training data
P.InterventionEngine.recordOutcome = function(intervention, outcome) {
    // Store for analysis
    O.service("analytics:record_event", {
        type: "facilitation_intervention",
        context: intervention.context,
        decision: intervention.decision,
        outcome: outcome.helpful,
        userFeedback: outcome.feedback
    });
};
```

---

## Best Practices

### For Plugin Developers

1. **Respect User Autonomy**: Always provide a way to dismiss or defer interventions
2. **Context Over Content**: Better to show fewer, more relevant resources than many generic ones
3. **Learn and Adapt**: Use feedback to continuously improve relevance
4. **Document Assumptions**: Make your intervention logic clear and adjustable
5. **Test Across Contexts**: Ensure resources work across disciplines and scales

### For Administrators

1. **Start Small**: Begin with core resources and add based on user feedback
2. **Involve Community**: Work with researchers and community partners to validate resources
3. **Monitor Patterns**: Watch which resources are most useful and when
4. **Iterate Thoughtfully**: Make changes based on evidence, not assumptions
5. **Communicate Purpose**: Help users understand the philosophy behind the system

### For Researchers

1. **Engage Early**: Explore resources before you think you need them
2. **Provide Feedback**: Your input makes the system better for everyone
3. **Share Insights**: Contribute resources based on your experience
4. **Customize Settings**: Adjust intervention preferences to your work style
5. **Connect with Peers**: Use the system to find others working on similar challenges

---

## Future Roadmap

### Near Term (3-6 months)
- Enhanced analytics dashboard
- User-contributed resources
- Mobile-optimized interface
- Integration with calendar systems

### Medium Term (6-12 months)
- Machine learning for intervention timing
- Cross-institutional resource sharing
- Multi-language support
- Advanced search and filtering

### Long Term (1-2 years)
- Community of practice platform
- Peer learning and mentoring connections
- Integration with external CBPR frameworks
- AI-assisted resource adaptation

---

## Contributing

This is an open-source project. We welcome contributions:

### Ways to Contribute

1. **New Resources**: Share facilitation materials that have worked for you
2. **Code Improvements**: Enhance the intervention logic or UI
3. **Documentation**: Help make this guide clearer and more comprehensive
4. **Testing**: Try the system in different contexts and report findings
5. **Feedback**: Share what works and what doesn't

### Contribution Process

1. Review the existing code and documentation
2. Discuss your proposed contribution (via issue or discussion)
3. Implement your changes following the existing patterns
4. Test thoroughly in a development environment
5. Submit with clear documentation of what and why

---

## Conclusion

This plugin represents a different approach to facilitation - one that respects complexity, honors context, and trusts users to make good choices when provided with thoughtful support.

The goal is not to automate facilitation but to augment human judgment with timely, contextual resources. As the system learns from usage and feedback, it becomes increasingly helpful while remaining unobtrusive.

We believe that community-engaged research can be transformative for both academia and communities. This plugin is a small step toward making that transformation more accessible and sustainable.

---

## Support

For questions, issues, or suggestions:
- Review the code in `space_facilitation/`
- Read the detailed `readme.txt`
- Consult Haplo platform documentation at docs.haplo.org
- Engage with the SPACE research community

Remember: The best facilitation respects emergence, honors context, and trusts in the wisdom of practitioners and communities.
