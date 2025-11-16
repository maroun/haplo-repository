# SPACE Facilitation Plugin - Demo Setup Guide

## Quick Demo Options

You have three options for demoing the plugin:

### Option 1: Visual Mockup Demo (Fastest - 5 minutes)
Use the standalone HTML demo (no Haplo instance needed)

### Option 2: Local Haplo Instance (Recommended - 30 minutes)
Run a full Haplo instance with the plugin installed

### Option 3: Presentation-Only Demo (15 minutes)
Use slides and code walkthrough

---

## Option 1: Visual Mockup Demo (FASTEST)

This creates a working HTML mockup that demonstrates the UI and flow without requiring Haplo.

### Setup (5 minutes)

I'll create an interactive HTML demo that you can open in any browser. This shows:
- The facilitation dashboard
- Different intervention modes
- Resource library browsing
- User interactions

**Advantages:**
- No installation required
- Works offline
- Easy to present
- Shows the full user experience

**Limitations:**
- No real workflow integration
- Simulated data only

---

## Option 2: Local Haplo Instance (RECOMMENDED)

### Prerequisites

- Docker installed on your machine
- 4GB free RAM
- 10GB free disk space

### Step 1: Set Up Haplo Platform with Docker

```bash
# Create a directory for Haplo
mkdir haplo-demo
cd haplo-demo

# Create configuration file
cat > app-config.txt <<EOF
APPPLUGIN="hresrepodemo_application"
APPNAME="SPACE Facilitation Demo"
APPHOST="haplo-demo.local"
EOF

# Run Haplo using Docker
# Follow the guide at: https://docs.haplo.org/platform/run/docker

# Basic Docker command (adjust based on official guide):
docker run -d \
  --name haplo-demo \
  -p 8080:8080 \
  -v $(pwd)/haplo-data:/haplo \
  haplo/platform:latest

# Wait for Haplo to start (2-3 minutes)
```

### Step 2: Access Haplo and Initial Setup

```bash
# Open browser to:
http://localhost:8080

# Initial login will be provided in docker logs:
docker logs haplo-demo | grep "Initial password"

# Login with admin credentials
# Navigate to System Management > Plugins
```

### Step 3: Install the SPACE Facilitation Plugin

**Method A: Using Haplo Plugin Tool**

```bash
# Install haplo plugin tool
gem install haplo-plugin

# Authenticate with your local server
haplo-plugin auth localhost:8080

# Navigate to plugin directory
cd /path/to/haplo-repository/space_facilitation

# Install the plugin
haplo-plugin install localhost:8080
```

**Method B: Manual File Copy**

```bash
# Copy plugin directory to Haplo plugins folder
cp -r /path/to/haplo-repository/space_facilitation \
  /path/to/haplo-data/plugins/

# Restart Haplo
docker restart haplo-demo
```

### Step 4: Activate the Plugin

1. Log into Haplo admin interface
2. Navigate to **System Management > Plugins**
3. Find "SPACE Community Engagement Facilitation"
4. Click **Activate**
5. Wait for activation to complete

### Step 5: Access the Facilitation Dashboard

```
http://localhost:8080/do/space-facilitation/dashboard
```

### Step 6: Generate Test Data

1. In Haplo, look for "Generate test data" option
2. This creates sample users, workflows, and research projects
3. The facilitation system will begin monitoring these workflows

---

## Option 3: Presentation Demo

### Create a Demo Presentation

I'll create a guided walkthrough document that you can use for presentations.

**What to Show:**

1. **Philosophy (3 minutes)**
   - Explain emergence over prescription
   - Show the four intervention modes
   - Discuss scalar awareness

2. **Architecture (5 minutes)**
   - Show the component diagram
   - Explain how it integrates with Haplo
   - Walk through the code structure

3. **User Experience (7 minutes)**
   - Show mockups/screenshots of the interface
   - Demonstrate different intervention modes
   - Walk through a resource example

4. **Extension Points (5 minutes)**
   - Show how to add new resources
   - Demonstrate customization options
   - Discuss integration possibilities

---

## Creating Demo Scenarios

### Scenario 1: Proposal Development

**Context:** PhD student beginning to develop a research proposal involving community partners

**Trigger:** Workflow enters "proposal_development" state

**Intervention:**
- Mode: Scaffolded
- Resources shown:
  - Community Partnership Guide
  - Ethical Consideration Checklist
  - Power Dynamics Worksheet

**Demo Script:**
```
"Imagine Sarah, a PhD student in Urban Planning, is developing her
dissertation proposal. She wants to work with a local neighborhood
association on affordable housing research.

As she enters the proposal development phase in Haplo, the facilitation
system recognizes this as a key moment. It offers scaffolded support -
a structured sequence of resources to guide her through establishing
the partnership thoughtfully.

Notice how the system doesn't force her through a curriculum. Instead,
it makes relevant resources available, explains why they might be helpful,
and lets her decide how to engage."
```

### Scenario 2: Ethics Review

**Context:** Researcher preparing ethics committee submission for community-engaged research

**Trigger:** Ethics review workflow initiated

**Intervention:**
- Mode: Emergent
- Resources shown:
  - Participatory Ethics Framework
  - Community Consent Templates
  - Data Sovereignty Principles

**Demo Script:**
```
"Now consider Dr. Martinez, supervising a student doing health research
with an indigenous community. The ethics review process is complex
because it involves multiple ethical frameworks - institutional IRB
requirements AND community-defined ethics.

The facilitation system recognizes this complexity and switches to
emergent mode. Rather than a linear path, it offers diverse resources
that enable exploration of different ethical dimensions. Dr. Martinez
can navigate based on the specific needs of this partnership."
```

### Scenario 3: User-Initiated Query

**Context:** Advisor searches for help with authorship issues

**Trigger:** User searches "community authorship"

**Intervention:**
- Mode: Responsive
- Resources shown:
  - Community Authorship Guide
  - Partnership Agreement Template (authorship section)

**Demo Script:**
```
"Dr. Chen is facing a question: How should community members be
recognized as authors when academic publishing conventions don't
fit participatory research?

She initiates a search in the facilitation system. It switches to
responsive mode - directly addressing her query with targeted
resources. The system understands what she's asking and surfaces
the most relevant support."
```

---

## Demo Data Examples

### Sample Resources to Highlight

1. **Community Partnership Guide**
   - Show discipline-specific adaptations
   - Highlight how it links to existing course (PG6025)
   - Demonstrate the multi-scale approach

2. **Power Dynamics Worksheet**
   - Show the reflective exercises
   - Explain how it encourages self-awareness
   - Connect to broader themes of equity

3. **Data Sovereignty Principles**
   - Discuss OCAP® framework
   - Show how it adapts for different research contexts
   - Explain the institutional implications

### Sample User Preferences

Create test users with different preferences:

**User A: Minimal Intervention**
- Prefers ambient mode only
- Gets subtle indicators
- Self-directed resource browsing

**User B: Balanced (Default)**
- Mix of proactive and reactive
- Receives scaffolded support at key moments
- Can adjust as needed

**User C: Proactive Support**
- Wants comprehensive guidance
- Receives more frequent interventions
- Appreciates structured progression

---

## Presenting the Code

### Key Code Sections to Highlight

**1. Intervention Decision Logic** (`intervention_engine.js:50-90`)

```javascript
// Show the multi-factor scoring
calculateInterventionScore: function(context) {
    var score = {
        urgency: 0,
        complexity: 0,
        alignment: 0
    };
    // Demonstrate how different factors contribute
    // ...
}
```

**2. Resource Adaptation** (`resource_provider.js:120-140`)

```javascript
// Show how resources adapt to context
adaptToContext: function(resource) {
    var userDiscipline = "architecture";
    // Show discipline-specific adaptation
    // ...
}
```

**3. Workflow Monitoring** (`workflow_monitor.js:15-40`)

```javascript
// Show the trigger points
triggerPoints: {
    "proposal_development": {
        description: "Researcher beginning research proposal",
        facilitation: ["community_partnership_guide"],
        mode: P.FacilitationModes.SCAFFOLDED
    }
    // ...
}
```

---

## Handling Q&A

### Common Questions and Answers

**Q: How does this integrate with existing workflows?**
A: "The plugin uses Haplo's workflow hook system. It observes state transitions without interrupting the workflow. When a trigger condition is met, it creates facilitation opportunities that appear contextually."

**Q: Can institutions customize the resources?**
A: "Absolutely. Resources are defined in a simple JavaScript object structure. Institutions can add their own resources, create discipline-specific adaptations, or link to existing institutional resources like courses or policies."

**Q: How does the system learn what's helpful?**
A: "The intervention engine tracks user feedback - which resources are accessed, marked as helpful, or dismissed. This builds a history that influences future intervention decisions. Over time, it gets better at knowing when to intervene."

**Q: What if users find it intrusive?**
A: "User autonomy is central to the design. Users can set preferences for minimal intervention, dismiss suggestions, or completely disable proactive prompts. The system respects these preferences while keeping resources available on-demand."

**Q: How does this relate to existing CBPR frameworks?**
A: "Rather than replacing existing frameworks, it connects to them. For example, resources explicitly link to your PG6025 CBPR course. The system builds bridges between institutional resources rather than creating silos."

---

## Technical Demo Tips

### Before the Demo

1. ✅ Test all navigation paths
2. ✅ Prepare browser bookmarks for key pages
3. ✅ Have code editor open to relevant files
4. ✅ Clear browser cache to show fresh load
5. ✅ Prepare a backup (screenshots/video) in case of technical issues

### During the Demo

1. **Start with the Problem**
   - Why is facilitation needed?
   - What's wrong with current approaches?

2. **Show the Solution Philosophy**
   - Emergence over prescription
   - Scalar awareness
   - Respectful presence

3. **Walk Through User Experience**
   - Show actual interface
   - Navigate through a scenario
   - Highlight key interactions

4. **Dive into Technical Implementation**
   - Show architecture diagram
   - Walk through code samples
   - Explain extension points

5. **Invite Feedback and Questions**
   - What would make this more useful?
   - What's missing?
   - How would this fit your context?

### After the Demo

1. Share the repository link
2. Provide documentation (SPACE_FACILITATION_GUIDE.md)
3. Offer to support implementation
4. Collect structured feedback

---

## Next Steps After Successful Demo

1. **Gather Feedback**
   - What resonated?
   - What raised concerns?
   - What's missing?

2. **Prioritize Enhancements**
   - Based on feedback
   - Quick wins vs. long-term goals

3. **Plan Pilot Implementation**
   - Identify test users
   - Define success metrics
   - Set timeline

4. **Iterate**
   - Refine based on real usage
   - Add institution-specific resources
   - Improve intervention logic

---

## Support Resources

- **Full Guide**: `SPACE_FACILITATION_GUIDE.md`
- **Plugin Documentation**: `space_facilitation/readme.txt`
- **Code Repository**: Browse the `space_facilitation/` directory
- **Haplo Documentation**: https://docs.haplo.org

Good luck with your demo! Remember: the goal is to start a conversation about how facilitation can support community-engaged research, not to have a perfect technical implementation.
