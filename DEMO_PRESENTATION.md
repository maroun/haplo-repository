# SPACE Facilitation Plugin - Presentation Script

## Demo Duration: 20 minutes

This script provides a structured walkthrough for presenting the SPACE Community Engagement Facilitation plugin to stakeholders, researchers, or potential users.

---

## SLIDE 1: Title (1 minute)

**Visual:** Plugin logo/title

**Script:**
"Good morning/afternoon. Today I'm excited to share the SPACE Community Engagement Facilitation plugin - a new approach to supporting community-engaged research in graduate education.

This isn't just another tool - it represents a fundamentally different philosophy about how facilitation should work in complex research environments."

---

## SLIDE 2: The Problem (2 minutes)

**Visual:** Split screen showing two failure modes

**Script:**
"Currently, support for community-engaged research tends to fall into two traps:

**Over-prescription:** We force everyone through the same curriculum, regardless of context. 'Complete modules 1 through 10.' This doesn't respect the complexity and diversity of community partnerships across disciplines.

**Under-support:** Or we leave people to figure it out completely on their own. 'Go do community-engaged research.' This can lead to harmful practices and missed opportunities for learning.

Neither approach serves researchers OR communities well."

---

## SLIDE 3: Our Approach (2 minutes)

**Visual:** The four intervention modes as icons

**Script:**
"We've developed a different approach based on three key principles:

**Emergence over Prescription:** Resources don't compete for attention - they 'rise to usefulness' when genuinely needed.

**Scalar Awareness:** Community engagement works differently at individual, group, community, and institutional scales. Our system recognizes and adapts to these differences.

**Respectful Presence:** Support is always available but never forced. Researchers maintain full autonomy over when and how to engage with facilitation resources.

This results in four intervention modes that adapt to context..."

---

## SLIDE 4: The Four Intervention Modes (3 minutes)

**Visual:** Diagram showing when each mode activates

**Script:**
"Let me explain the four modes:

**EMERGENT Mode** - For complex, multi-scale situations with no clear predetermined path. The system offers diverse resources that enable exploration rather than prescribing a single approach. Think of a researcher navigating ethical frameworks from both their institution AND an indigenous community - they need options, not a checklist.

**SCAFFOLDED Mode** - For situations with defined pathways where people still benefit from structured support. The system provides sequential resources that build progressively. Like a PhD student developing their first community partnership - there are known steps, but they need guidance.

**RESPONSIVE Mode** - Activated by user requests. When someone asks 'How do I handle community authorship?', the system provides targeted resources that directly address that question.

**AMBIENT Mode** - Subtle, non-intrusive presence. Just awareness that support is available. No demand for attention."

---

## SLIDE 5: Demo - Scenario 1 (3 minutes)

**Demo:** Open interactive HTML demo, load "Proposal Development" scenario

**Script:**
"Let me show you this in action. Here's a real scenario:

Sarah is a PhD student in Urban Planning. She's developing her dissertation proposal to work with a neighborhood association on affordable housing.

[SHOW DASHBOARD]

As she enters the proposal development phase, the system recognizes this as a key moment. Notice it's offering scaffolded support - a structured sequence of resources.

[CLICK ON RESOURCES]

See how each resource is explained - WHY it might be helpful, not just WHAT it is. She can explore them, dismiss them, or save them for later. The system learns from her choices.

[SHOW FEEDBACK BUTTONS]

Notice the options: 'This is helpful', 'Not now', or 'This isn't quite right'. User autonomy is central to the design."

---

## SLIDE 6: Demo - Scenario 2 (3 minutes)

**Demo:** Switch to "Ethics Review" scenario

**Script:**
"Now let's look at a more complex scenario. Dr. Martinez is supervising a student doing health research with an indigenous community.

[LOAD SCENARIO]

The ethics review is complex because it involves multiple ethical systems. Notice how the system switches to emergent mode?

[SHOW RESOURCES]

Instead of a linear path, it offers diverse resources: participatory ethics frameworks, data sovereignty principles, community-defined ethics. Dr. Martinez can navigate based on the specific needs of THIS partnership, not a generic checklist.

This is scalar awareness in action - the system recognizes that institutional and community scales are both active, with different requirements."

---

## SLIDE 7: Resource Library (2 minutes)

**Demo:** Browse resource library

**Script:**
"All resources are also available on-demand. Let's browse the library.

[CLICK BROWSE RESOURCES]

We have:
- **Guides** for establishing partnerships and reciprocity
- **Frameworks** for ethics, data sovereignty, knowledge translation
- **Checklists** for ethical considerations
- **Templates** for partnership agreements
- **Worksheets** for reflecting on power dynamics

[CLICK ON A RESOURCE TYPE]

Each resource includes discipline-specific adaptations. For example, the partnership guide has different notes for architecture, business, computer science, health sciences...

Resources also link to existing institutional resources - like your PG6025 CBPR course - rather than duplicating them."

---

## SLIDE 8: Technical Architecture (2 minutes)

**Visual:** Architecture diagram

**Script:**
"How does this work technically?

The system has four main components:

**Workflow Monitor** watches for critical moments - proposal development, ethics review, community engagement, data collection. It uses semantic matching, not just exact state names.

**Resource Provider** manages our library of facilitation materials. Resources are structured with metadata about scales, disciplines, and connections to existing resources.

**Intervention Engine** makes sophisticated decisions about when and how to intervene. It considers urgency, complexity, user preferences, and historical patterns.

**Core Module** ties it all together, integrating with Haplo's workflow and UI systems.

All of this is built as a standard Haplo plugin, so it integrates seamlessly with existing graduate education management systems."

---

## SLIDE 9: Extension Points (2 minutes)

**Visual:** Code snippet showing resource registration

**Script:**
"The system is designed for extensibility. Adding new resources is straightforward - just register them with the resource library.

Institutions can:
- Add their own resources specific to their context
- Create discipline-specific adaptations
- Connect to existing courses and policies
- Customize trigger points for their workflows
- Adjust intervention thresholds

We see this as a foundation that grows with institutional wisdom about community engagement."

---

## SLIDE 10: Next Steps & Questions (Remaining time)

**Visual:** Project roadmap

**Script:**
"This is an MVP - a proof of concept that demonstrates the core philosophy. Future enhancements could include:

- Machine learning for better intervention timing
- User-contributed resources
- Cross-institutional resource sharing
- Multi-language support
- Enhanced analytics

But the foundation is solid: a system that respects emergence, honors context, and trusts users to make good choices when provided with thoughtful support.

Now I'd love to hear your thoughts:
- What resonates with you about this approach?
- What concerns does it raise?
- What's missing?
- How would this fit into your context?

Let's discuss..."

---

## HANDLING COMMON QUESTIONS

### Q: "Won't this create notification fatigue?"

**A:** "Great question. That's exactly why user autonomy is central to the design. Users can:
- Set preferences for minimal intervention
- Dismiss suggestions without penalty
- Access resources on-demand without any prompts
- Adjust as they learn what's helpful

The system also learns from feedback - if someone consistently dismisses certain types of interventions, it recalibrates."

### Q: "How is this different from just having a resource library?"

**A:** "Two key differences:

First, **context-aware timing**. Resources appear when they're most relevant, not buried in a static list. The proposal development guide appears during proposal development, not randomly.

Second, **adaptive presentation**. Resources adapt to discipline, scale, and user preferences. A computer science student sees different adaptations than a health sciences student, even for the same core resource.

It's the difference between a library and a librarian who knows your research and suggests just what you need."

### Q: "What if the system suggests the wrong resource?"

**A:** "That's valuable feedback! The system includes multiple feedback mechanisms:
- 'This isn't quite right' explicitly tells the system to recalibrate
- Analytics track which resources are actually accessed vs. dismissed
- User preferences can override algorithmic suggestions
- Resources can be accessed directly, bypassing the intervention system

We see wrong suggestions as learning opportunities, not failures."

### Q: "How much work is it to maintain this?"

**A:** "Initial setup requires creating or curating facilitation resources - the ones included are a starting point. Ongoing maintenance is minimal:
- Update resources as practices evolve
- Review analytics to see what's working
- Optionally add new resources based on emerging needs

The system largely maintains itself through feedback learning. Think of it as building institutional knowledge that becomes increasingly useful over time."

### Q: "Can this work across different disciplines?"

**A:** "Absolutely - that's a core design principle. Resources include discipline-specific adaptations:

A partnership guide might have notes for:
- Architecture: Spatial and material considerations
- Business: Value exchange and sustainability models
- Computer Science: Open source collaboration and digital sovereignty
- Health Sciences: CBPR protocols

The core principles (equity, reciprocity, respect) remain constant while the application varies. Institutions can add their own discipline adaptations as they learn what works."

### Q: "What about privacy and data sovereignty?"

**A:** "Excellent question - particularly important for community-engaged research. The system:
- Doesn't store community data, just facilitation interactions
- Includes resources specifically on data sovereignty
- Can be configured to respect institutional privacy policies
- Feedback is aggregated, not linked to specific partnerships

And importantly, resources like 'Data Sovereignty Principles' help researchers think through these issues in their actual research."

---

## DEMO TIPS

### Before the Presentation

- [ ] Test all demo links/scenarios
- [ ] Have backup screenshots in case of technical issues
- [ ] Prepare browser bookmarks for quick navigation
- [ ] Clear browser cache
- [ ] Have code editor open to show architecture if needed
- [ ] Test timing - make sure you can cover everything in allocated time

### During the Presentation

**Do:**
- ✅ Tell stories about real researcher experiences
- ✅ Show actual interactions, not just describe them
- ✅ Acknowledge limitations and areas for improvement
- ✅ Invite questions throughout, not just at the end
- ✅ Connect to audience's specific context

**Don't:**
- ❌ Get lost in technical details (unless audience wants them)
- ❌ Claim this solves all problems
- ❌ Rush through scenarios - let them breathe
- ❌ Ignore skeptical questions
- ❌ Forget to emphasize user autonomy

### After the Presentation

1. **Share resources:**
   - Link to GitHub repository
   - Provide SPACE_FACILITATION_GUIDE.md
   - Offer to support implementation

2. **Collect feedback:**
   - What resonated most?
   - What raised concerns?
   - What's missing?
   - Would you use this? Why/why not?

3. **Follow up:**
   - Send summary of discussion
   - Provide any requested materials
   - Offer pilot implementation support

---

## CUSTOMIZING FOR DIFFERENT AUDIENCES

### For Administrators/Leadership

**Emphasize:**
- Strategic value of supporting community-engaged research
- How this builds institutional capacity
- Extensibility and customization
- Analytics for understanding support effectiveness
- Integration with existing systems

**Deemphasize:**
- Technical implementation details
- Specific resources (unless they ask)

### For Researchers/Faculty

**Emphasize:**
- Real scenarios they'll recognize
- How it helps without getting in the way
- User autonomy and control
- Practical resources they can use immediately
- Learning from their feedback

**Deemphasize:**
- Institutional strategy
- Technical architecture

### For Technical Staff

**Emphasize:**
- Plugin architecture and integration points
- Extensibility mechanisms
- Services provided to other plugins
- Data models and workflows
- Future enhancement possibilities

**Deemphasize:**
- Pedagogical philosophy (unless they're interested)
- User experience details

### For Community Partners

**Emphasize:**
- How this might improve researcher practices
- Resources that address power dynamics and reciprocity
- Your role in shaping what's included
- Accountability mechanisms
- Respect for community knowledge

**Deemphasize:**
- Technical implementation
- Internal university processes

---

## CLOSING THOUGHTS

The goal of this presentation isn't to convince everyone that this is perfect - it's to start a conversation about how facilitation can support community-engaged research more effectively.

Listen as much as you present. The best feedback will come from people who:
- Point out what you missed
- Share their own experiences
- Question your assumptions
- Suggest different approaches

This MVP is a beginning, not an end. The real value emerges through dialogue with practitioners and communities.

Good luck with your presentation!
