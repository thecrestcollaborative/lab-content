import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Circle, Sparkles, Download, Target, Users, FileText, MessageSquare, Megaphone, Rocket, Share2, TrendingUp, BarChart3, Home, BookOpen, AlertCircle, ExternalLink } from 'lucide-react';

const CultureTransformationApp = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [orgData, setOrgData] = useState({
    organizationName: '',
    companyValues: '',
    missionStatement: '',
    culturalArtifacts: '',
    existingCommitments: '',
    benchmarkNotes: '',
    identifiedCapabilities: [],
    gapAnalysis: null,
    commitments: [],
    microContent: [],
    enablementPlan: null,
    campaignMaterials: [],
    embeddingStrategy: null,
    activationPlan: null,
    goals: [],
    measurementPlan: null
  });
  
  const [phaseCompletion, setPhaseCompletion] = useState({
    phase1: false, phase2: false, phase3: false, phase4: false, phase5: false,
    phase6: false, phase7: false, phase8: false, phase9: false, phase10: false
  });

  const phases = [
    { id: 'phase1', name: 'Benchmark Current State', icon: BarChart3, description: 'Identify what to measure and current gaps' },
    { id: 'phase2', name: 'Identify Core Capabilities', icon: Target, description: 'Map values to the 5 C\'s framework' },
    { id: 'phase3', name: 'Create Commitments', icon: Users, description: 'Transform capabilities into organizational promises' },
    { id: 'phase4', name: 'Develop Customized Content', icon: FileText, description: 'Create bite-sized, engaging micro-content' },
    { id: 'phase5', name: 'Develop Enablement Tools', icon: MessageSquare, description: 'Build platforms for self-serve and group utilization' },
    { id: 'phase6', name: 'Launch & Drive Momentum', icon: Rocket, description: 'Deploy pledge campaigns and build portal' },
    { id: 'phase7', name: 'Embed Solutions', icon: Share2, description: 'Integrate into daily operations' },
    { id: 'phase8', name: 'Activate Employees', icon: Users, description: 'Empower culture champions and ambassadors' },
    { id: 'phase9', name: 'Goal Setting & Accountability', icon: Target, description: 'Establish measurable goals and dashboards' },
    { id: 'phase10', name: 'Measure Impact', icon: TrendingUp, description: 'Demonstrate ROI and business impact' }
  ];

  // Sample 5 C's Core Capabilities for Phase 2
  const fiveCsCapabilities = [
    {
      c: 'Curiosity',
      capabilities: [
        {
          name: 'Empathetic Inquiry',
          description: 'Fostering questions that seek genuine understanding',
          behaviors: [
            'Ask "What am I missing?" before making decisions',
            'Schedule regular listening sessions with diverse team members',
            'Create safe spaces for questions without judgment'
          ]
        },
        {
          name: 'Growth Mindset',
          description: 'Embracing learning and experimentation',
          behaviors: [
            'Share failures as learning opportunities in team meetings',
            'Allocate 10% of time for exploratory projects',
            'Celebrate questions as much as answers'
          ]
        }
      ]
    },
    {
      c: 'Connection',
      capabilities: [
        {
          name: 'Authentic Relationships',
          description: 'Building trust through vulnerability and transparency',
          behaviors: [
            'Share personal stories that build understanding',
            'Make time for non-work conversations',
            'Follow through on commitments consistently'
          ]
        },
        {
          name: 'Belonging',
          description: 'Creating environments where everyone feels valued',
          behaviors: [
            'Acknowledge contributions from all team members',
            'Design inclusive spaces and processes',
            'Check in on both task and relationship regularly'
          ]
        }
      ]
    },
    {
      c: 'Collaboration',
      capabilities: [
        {
          name: 'Collective Intelligence',
          description: 'Leveraging diverse perspectives for better outcomes',
          behaviors: [
            'Actively seek input from underrepresented voices',
            'Use structured facilitation to ensure equal participation',
            'Make decisions visible and explain rationale'
          ]
        },
        {
          name: 'Shared Ownership',
          description: 'Building commitment through co-creation',
          behaviors: [
            'Involve teams in problem definition, not just solutions',
            'Create opportunities for cross-functional collaboration',
            'Recognize team achievements over individual wins'
          ]
        }
      ]
    },
    {
      c: 'Constructive Conflict',
      capabilities: [
        {
          name: 'Healthy Debate',
          description: 'Engaging in productive disagreement',
          behaviors: [
            'Distinguish between task and relationship conflict',
            'Use "Yes, and..." to build on others\' ideas',
            'Practice active listening before responding'
          ]
        },
        {
          name: 'Resolution Skills',
          description: 'Navigating differences with respect and clarity',
          behaviors: [
            'Address issues directly and promptly',
            'Focus on interests, not positions',
            'Seek win-win solutions collaboratively'
          ]
        }
      ]
    },
    {
      c: 'Community',
      capabilities: [
        {
          name: 'Collective Purpose',
          description: 'Creating shared meaning and direction',
          behaviors: [
            'Connect daily work to larger organizational mission',
            'Celebrate milestones as a community',
            'Support colleagues\' growth and success'
          ]
        },
        {
          name: 'Reciprocal Care',
          description: 'Demonstrating mutual support and well-being',
          behaviors: [
            'Check in on team members holistically',
            'Offer help without being asked',
            'Respect boundaries and sustainable work practices'
          ]
        }
      ]
    }
  ];

  // Sample Pledge Communication for Phase 6
  const samplePledgeCommunication = {
    emailSubject: "Join Us: Take the [Organization Name] Culture Pledge",
    emailBody: `Dear Team,

Today marks an exciting milestone in our journey to create a workplace where everyone can thrive.

We're launching the [Organization Name] Culture Pledge—a personal commitment to the values and behaviors that make our culture strong. This isn't about checking a box. It's about making a conscious choice to show up as the colleague, leader, and community member we want to be.

**Why a Pledge?**

Research shows that when we publicly commit to something we believe in, three powerful things happen:
• We're more likely to follow through because others are counting on us
• We start to see ourselves as someone who lives these values
• We create momentum that's bigger than any one person

**What We're Asking:**

Take 5 minutes to read our 10 Culture Commitments and pledge your personal commitment to living them. Your pledge is a promise to yourself and to our community.

[TAKE THE PLEDGE BUTTON]

**What Happens Next:**

• You'll receive a welcome kit with resources to help you live these commitments
• You'll be invited to join our Culture Champions community
• You'll see your name added to our collective commitment wall (with your permission)

This is just the beginning. Together, we're building something remarkable—a workplace that brings out the best in all of us.

With appreciation,
[Leadership Name]

P.S. Questions about the pledge? Visit our Culture Portal or reach out to [contact]`,
    
    slackMessage: `🌟 **It's Pledge Day!** 🌟

Today we're launching something special: The [Organization Name] Culture Pledge.

This is your chance to make a personal commitment to the values that make our workplace thrive.

✅ Read our 10 Culture Commitments
✅ Take the pledge (5 minutes)
✅ Join thousands of colleagues building our culture together

👉 [Link to Pledge]

Questions? Drop them in #culture-questions or visit the Culture Portal.

Let's do this together! 🚀`,

    talkingPoints: [
      'This pledge is voluntary and personal—it\'s about individual agency, not compliance',
      'Research shows public commitments increase follow-through by 65%',
      'The pledge connects to tangible behaviors we can all practice',
      'This is the start of an ongoing conversation, not a one-time event',
      'Leaders are pledging first to model commitment'
    ]
  };

  // Portal Technology Options for Phase 6
  const portalTechnologyOptions = [
    {
      name: 'Blue Ocean Brain',
      type: 'Learning & Development Platform',
      description: 'Micro-learning platform with neuroscience-based content delivery',
      strengths: [
        'Bite-sized content (3-5 minutes)',
        'Mobile-first design',
        'Habit formation focus',
        'Analytics on engagement'
      ],
      bestFor: 'Organizations prioritizing behavioral change through consistent micro-learning',
      approximateCost: '$15-25 per user/year'
    },
    {
      name: 'Degreed',
      type: 'Learning Experience Platform (LXP)',
      description: 'Comprehensive learning platform with content curation and skill development',
      strengths: [
        'Content aggregation from multiple sources',
        'Skills tracking and pathways',
        'Social learning features',
        'Integration with existing systems'
      ],
      bestFor: 'Larger organizations wanting integrated learning ecosystems',
      approximateCost: '$20-40 per user/year'
    },
    {
      name: 'EdCast (Cornerstone)',
      type: 'Knowledge Cloud Platform',
      description: 'AI-powered content curation and knowledge sharing platform',
      strengths: [
        'AI-driven content recommendations',
        'User-generated content support',
        'Multiple content formats',
        'Integration with Microsoft Teams/Slack'
      ],
      bestFor: 'Organizations emphasizing knowledge sharing and community learning',
      approximateCost: '$25-45 per user/year'
    },
    {
      name: 'Custom SharePoint/Intranet',
      type: 'Internal Platform',
      description: 'Customized portal using existing Microsoft 365 infrastructure',
      strengths: [
        'Leverages existing technology investment',
        'Full customization capability',
        'Deep integration with Microsoft tools',
        'No per-user licensing (if already using M365)'
      ],
      bestFor: 'Organizations with strong IT resources and Microsoft 365 foundation',
      approximateCost: '$50K-200K initial build + maintenance'
    },
    {
      name: 'Notion / Confluence',
      type: 'Collaborative Workspace',
      description: 'Flexible documentation and collaboration platforms',
      strengths: [
        'Highly customizable',
        'User-friendly content creation',
        'Strong search and organization',
        'Lower cost for smaller teams'
      ],
      bestFor: 'Smaller organizations or pilot programs testing portal concept',
      approximateCost: '$8-15 per user/month'
    },
    {
      name: 'Workday Learning / SAP SuccessFactors',
      type: 'Enterprise HCM Learning Module',
      description: 'Learning modules within enterprise HR systems',
      strengths: [
        'Integrated with HR data',
        'Compliance tracking',
        'Reporting and analytics',
        'Already in ecosystem for many enterprises'
      ],
      bestFor: 'Large enterprises already using these HCM platforms',
      approximateCost: 'Included in HCM license or $15-30 per user/year'
    }
  ];

  const download5CsCapabilities = () => {
    const content = `
5 C'S CORE CAPABILITIES FRAMEWORK
===================================

${fiveCsCapabilities.map(c => `
${c.c.toUpperCase()}
${'='.repeat(c.c.length)}

${c.capabilities.map(cap => `
${cap.name}
${'-'.repeat(cap.name.length)}
Description: ${cap.description}

Observable Behaviors:
${cap.behaviors.map(b => `• ${b}`).join('\n')}
`).join('\n')}
`).join('\n')}

---
This framework was generated by the Human-Centered Culture Transformation Wizard
Visit thecrestcollaborative.com for more information
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '5Cs-Core-Capabilities-Framework.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPledgeCommunication = () => {
    const content = `
PLEDGE CAMPAIGN COMMUNICATION TEMPLATES
========================================

EMAIL TEMPLATE
--------------
Subject: ${samplePledgeCommunication.emailSubject}

${samplePledgeCommunication.emailBody}


SLACK MESSAGE TEMPLATE
----------------------
${samplePledgeCommunication.slackMessage}


TALKING POINTS FOR LEADERS
---------------------------
${samplePledgeCommunication.talkingPoints.map((point, i) => `${i + 1}. ${point}`).join('\n')}


---
Generated by the Human-Centered Culture Transformation Wizard
Visit thecrestcollaborative.com for more information
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pledge-Campaign-Communications.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const WelcomeScreen = () => (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Human-Centered Culture Transformation</h1>
        <p className="text-xl text-blue-100">Create a More Human-Centered Culture Using the 5 C's Framework</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Transformation Journey</h2>
        <p className="text-gray-600 mb-6">
          This wizard guides you through 10 phases of culture transformation, from benchmarking your current state 
          to measuring lasting impact. Each phase includes AI-powered tools, templates, and guidance to accelerate your work.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h3 className="font-bold text-blue-900 mb-2">How to Use This Tool:</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Navigate through phases sequentially or jump to what you need</li>
            <li>• Your progress is automatically saved</li>
            <li>• Use AI generation tools or input your own content</li>
            <li>• Download templates and frameworks at any time</li>
            <li>• Skip phases that don't apply to your current needs</li>
          </ul>
        </div>

        <button
          onClick={() => setCurrentView('dashboard')}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center space-x-2"
        >
          <span>Get Started</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-3">The 5 C's Framework</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Curiosity:</strong> Creating space for questions and learning</li>
            <li>• <strong>Connection:</strong> Building authentic relationships</li>
            <li>• <strong>Collaboration:</strong> Leveraging collective intelligence</li>
            <li>• <strong>Constructive Conflict:</strong> Engaging in healthy debate</li>
            <li>• <strong>Community:</strong> Fostering shared purpose and care</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-3">What You'll Create</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Gap analysis and benchmarks</li>
            <li>• Core capabilities mapped to your values</li>
            <li>• Organizational commitments</li>
            <li>• Micro-content and campaign materials</li>
            <li>• Launch strategy and measurement plan</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Culture Transformation Dashboard</h1>
            <p className="text-blue-100">
              {orgData.organizationName || 'Your Organization'} - Track progress across all 10 phases
            </p>
          </div>
          <Home className="w-12 h-12 opacity-50" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Organization Setup</h2>
        <input
          type="text"
          placeholder="Organization Name"
          value={orgData.organizationName}
          onChange={(e) => setOrgData({ ...orgData, organizationName: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phases.map((phase) => {
          const PhaseIcon = phase.icon;
          const isComplete = phaseCompletion[phase.id];
          
          return (
            <div
              key={phase.id}
              onClick={() => setCurrentView(phase.id)}
              className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <PhaseIcon className={`w-8 h-8 ${isComplete ? 'text-green-600' : 'text-blue-600'}`} />
                {isComplete ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              <h3 className="font-bold text-lg mb-2">{phase.name}</h3>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const Phase2Content = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Phase 2: Identify Core Capabilities</h1>
        <p className="text-blue-100">Map your organizational values to the 5 C's framework</p>
      </div>

      {/* Example: 5 C's Core Capabilities */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">5 C's Core Capabilities Framework</h2>
            <p className="text-gray-600">
              Example capabilities and behaviors for each of the 5 C's. Download this framework to use as a 
              template for mapping your organization's values.
            </p>
          </div>
          <button
            onClick={download5CsCapabilities}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>

        <div className="space-y-6 mt-6">
          {fiveCsCapabilities.map((cData, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-blue-900 mb-4">{cData.c}</h3>
              
              {cData.capabilities.map((cap, capIdx) => (
                <div key={capIdx} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-lg mb-2">{cap.name}</h4>
                  <p className="text-gray-600 mb-3 italic">{cap.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-sm text-gray-700 mb-2">Observable Behaviors:</p>
                    <ul className="space-y-2">
                      {cap.behaviors.map((behavior, bIdx) => (
                        <li key={bIdx} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{behavior}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Input Section for Organization's Values */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Map Your Organization's Values</h2>
        <p className="text-gray-600 mb-4">
          Enter your organization's values, mission, and existing cultural commitments. The AI will help map 
          these to the 5 C's framework and identify your core capabilities.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Company Values</label>
            <textarea
              value={orgData.companyValues}
              onChange={(e) => setOrgData({ ...orgData, companyValues: e.target.value })}
              placeholder="List your company's stated values..."
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Mission Statement</label>
            <textarea
              value={orgData.missionStatement}
              onChange={(e) => setOrgData({ ...orgData, missionStatement: e.target.value })}
              placeholder="Enter your organization's mission statement..."
              className="w-full p-3 border border-gray-300 rounded-lg h-24"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Cultural Artifacts</label>
            <textarea
              value={orgData.culturalArtifacts}
              onChange={(e) => setOrgData({ ...orgData, culturalArtifacts: e.target.value })}
              placeholder="Paste any existing cultural documents, leadership principles, behavioral expectations..."
              className="w-full p-3 border border-gray-300 rounded-lg h-40"
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>AI: Generate Core Capabilities Map</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => {
            setPhaseCompletion({ ...phaseCompletion, phase2: true });
            setCurrentView('phase3');
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <span>Continue to Phase 3</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const Phase6Content = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Phase 6: Launch & Drive Momentum</h1>
        <p className="text-blue-100">Deploy pledge campaigns and build your Culture Portal</p>
      </div>

      {/* Pledge Campaign Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Pledge Campaign Communications</h2>
            <p className="text-gray-600">
              Sample communication templates for launching your culture pledge campaign. Customize these 
              for your organization's voice and channels.
            </p>
          </div>
          <button
            onClick={downloadPledgeCommunication}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>

        <div className="space-y-6 mt-6">
          {/* Email Template */}
          <div className="border-l-4 border-blue-500 pl-6 py-4">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Email Template</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-sm text-gray-700 mb-2">Subject Line:</p>
              <p className="text-gray-800 mb-4">{samplePledgeCommunication.emailSubject}</p>
              
              <p className="font-semibold text-sm text-gray-700 mb-2">Email Body:</p>
              <div className="text-gray-700 whitespace-pre-line text-sm">
                {samplePledgeCommunication.emailBody}
              </div>
            </div>
          </div>

          {/* Slack Message */}
          <div className="border-l-4 border-purple-500 pl-6 py-4">
            <h3 className="text-xl font-bold text-purple-900 mb-3">Slack/Teams Message</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-700 whitespace-pre-line">
                {samplePledgeCommunication.slackMessage}
              </div>
            </div>
          </div>

          {/* Talking Points */}
          <div className="border-l-4 border-green-500 pl-6 py-4">
            <h3 className="text-xl font-bold text-green-900 mb-3">Leader Talking Points</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2">
                {samplePledgeCommunication.talkingPoints.map((point, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-bold text-blue-900 mb-2">Research-Backed Insight:</h4>
          <p className="text-blue-800">
            Studies show that public commitments increase follow-through by up to 65%. When people pledge 
            in front of peers, they're more likely to align their behavior with their stated values because 
            of three psychological factors: social accountability, identity formation, and collective momentum.
          </p>
        </div>
      </div>

      {/* Portal Technology Options */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Culture Portal Technology Options</h2>
        <p className="text-gray-600 mb-6">
          Building a People-First Portal requires selecting the right technology platform. Here are proven 
          options used by leading organizations, from enterprise solutions to cost-effective alternatives.
        </p>

        <div className="space-y-4">
          {portalTechnologyOptions.map((platform, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{platform.type}</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">{platform.approximateCost}</span>
              </div>

              <p className="text-gray-700 mb-3">{platform.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm text-gray-700 mb-2">Key Strengths:</p>
                  <ul className="space-y-1">
                    {platform.strengths.map((strength, sIdx) => (
                      <li key={sIdx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-sm text-gray-700 mb-2">Best For:</p>
                  <p className="text-sm text-gray-600 italic">{platform.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 p-4">
          <h4 className="font-bold text-purple-900 mb-2">Selection Criteria:</h4>
          <p className="text-purple-800 mb-2">When choosing a portal technology, consider:</p>
          <ul className="space-y-1 text-purple-800 text-sm">
            <li>• <strong>Integration:</strong> Does it connect with your existing tech stack?</li>
            <li>• <strong>User Experience:</strong> Is it intuitive and mobile-friendly?</li>
            <li>• <strong>Content Flexibility:</strong> Can you easily update and customize content?</li>
            <li>• <strong>Analytics:</strong> Does it provide meaningful engagement data?</li>
            <li>• <strong>Scalability:</strong> Will it grow with your organization?</li>
            <li>• <strong>Support:</strong> What level of vendor support is included?</li>
          </ul>
        </div>
      </div>

      {/* Launch Planning Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Your Launch Plan</h2>
        <p className="text-gray-600 mb-4">
          Customize your launch strategy using these templates as a starting point.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Launch Timeline</label>
            <textarea
              placeholder="Outline your launch timeline: pre-launch activities, launch day events, post-launch momentum..."
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Key Stakeholders & Champions</label>
            <textarea
              placeholder="List executives, managers, and employee champions who will help drive momentum..."
              className="w-full p-3 border border-gray-300 rounded-lg h-24"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Communication Channels</label>
            <textarea
              placeholder="Identify all channels you'll use: email, Slack, Teams, town halls, team meetings, posters..."
              className="w-full p-3 border border-gray-300 rounded-lg h-24"
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>AI: Generate Complete Launch Plan</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => {
            setPhaseCompletion({ ...phaseCompletion, phase6: true });
            setCurrentView('phase7');
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <span>Continue to Phase 7</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // Example commitments from white paper
  const organizationalCommitments = [
    {
      number: 1,
      text: "We ask 'What can we learn?' before 'Who is right?'",
      description: "We approach challenges and disagreements with genuine interest in understanding different perspectives and discovering new solutions."
    },
    {
      number: 2,
      text: "We celebrate questions and embrace 'I don't know' as the beginning of discovery",
      description: "We create psychological safety where team members feel valued for their curiosity and supported in their learning journey."
    },
    {
      number: 3,
      text: "We see and value each person as a whole human being, not just their job function",
      description: "We invest time in understanding our colleagues' experiences, perspectives, and aspirations beyond their work responsibilities."
    },
    {
      number: 4,
      text: "We build trust through consistent actions, transparent communication, and keeping our commitments",
      description: "We demonstrate reliability in both our words and behaviors, acknowledging when we cannot meet commitments and working to repair trust when it's been damaged."
    },
    {
      number: 5,
      text: "We share success and take collective responsibility for challenges",
      description: "We recognize that our strongest achievements come from working together and support each other through difficulties."
    },
    {
      number: 6,
      text: "We actively seek diverse perspectives and leverage different strengths to achieve better results",
      description: "We intentionally include voices from across the organization and combine different skills and experiences to solve problems and drive innovation."
    },
    {
      number: 7,
      text: "We address disagreements directly and respectfully, focusing on solutions rather than blame",
      description: "We engage in difficult conversations promptly and constructively, separating ideas from individuals."
    },
    {
      number: 8,
      text: "We repair and strengthen relationships after conflicts, knowing that working through challenges together builds stronger teams",
      description: "We invest in healing and learning from conflicts rather than avoiding them or letting them fester."
    },
    {
      number: 9,
      text: "We support each other's well-being and success, especially during challenging times",
      description: "We create networks of mutual care that help all team members thrive both personally and professionally."
    },
    {
      number: 10,
      text: "We come together to celebrate achievements and contribute to our broader community",
      description: "We build shared traditions and engage in collective action that strengthens our bonds and creates positive impact beyond our immediate team."
    }
  ];

  // Example SMART goals for Phase 9
  const exampleGoals = [
    {
      id: 1,
      category: 'Pledge Participation',
      goal: 'Achieve 80% employee pledge participation within 6 months of launch',
      current: 62,
      target: 80,
      status: 'on-track',
      owner: 'Culture Team'
    },
    {
      id: 2,
      category: 'Portal Engagement',
      goal: 'Reach 50% monthly active users on Culture Portal by end of Q2',
      current: 38,
      target: 50,
      status: 'on-track',
      owner: 'HR Technology'
    },
    {
      id: 3,
      category: 'Content Completion',
      goal: 'Average of 3 micro-learning modules completed per employee per quarter',
      current: 1.8,
      target: 3.0,
      status: 'at-risk',
      owner: 'L&D Team'
    },
    {
      id: 4,
      category: 'Champion Network',
      goal: 'Establish Culture Champions in 90% of departments',
      current: 75,
      target: 90,
      status: 'on-track',
      owner: 'Culture Champions Lead'
    },
    {
      id: 5,
      category: 'Psychological Safety',
      goal: 'Increase psychological safety score from 3.2 to 4.0 (out of 5) by year end',
      current: 3.6,
      target: 4.0,
      status: 'on-track',
      owner: 'All Leaders'
    },
    {
      id: 6,
      category: 'Employee Connection',
      goal: 'Improve "sense of belonging" score from 68% to 85%',
      current: 76,
      target: 85,
      status: 'ahead',
      owner: 'All Leaders'
    }
  ];

  const downloadCommitments = () => {
    const content = `
OUR 10 CORE COMMITMENTS
========================

${organizationalCommitments.map(c => `
${c.number}. ${c.text}

${c.description}
`).join('\n')}

---
Generated by the Human-Centered Culture Transformation Wizard
Visit thecrestcollaborative.com for more information
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Our-10-Core-Commitments.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const Phase3Content = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Phase 3: Create Commitments</h1>
        <p className="text-blue-100">Transform capabilities into organizational promises</p>
      </div>

      {/* Example: 10 Core Commitments */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Our 10 Core Commitments</h2>
            <p className="text-gray-600">
              Example organizational commitments that bring the 5 C's framework to life. These commitments 
              are designed to be memorable, actionable, and create immediate positive impact.
            </p>
          </div>
          <button
            onClick={downloadCommitments}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>

        <div className="space-y-4 mt-6">
          {organizationalCommitments.map((commitment) => (
            <div key={commitment.number} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {commitment.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{commitment.text}</h3>
                  <p className="text-gray-600 text-sm">{commitment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="font-bold text-green-900 mb-2">Why These Commitments Work:</h4>
          <ul className="space-y-1 text-green-800 text-sm">
            <li>• <strong>Behavioral:</strong> Each describes observable actions, not abstract values</li>
            <li>• <strong>Accessible:</strong> Written in plain language everyone can understand</li>
            <li>• <strong>Memorable:</strong> Concrete phrases that stick in people's minds</li>
            <li>• <strong>Interconnected:</strong> Each commitment reinforces the others</li>
            <li>• <strong>Universal:</strong> Applicable across all levels and functions</li>
          </ul>
        </div>
      </div>

      {/* Create Your Own Commitments */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Create Your Organization's Commitments</h2>
        <p className="text-gray-600 mb-4">
          Use the example commitments above as a starting point, or create your own based on your 
          organization's core capabilities and values.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Your Organization's Commitments</label>
            <textarea
              placeholder="Enter or paste your commitments here, or use AI to generate them based on your Phase 2 capabilities..."
              className="w-full p-3 border border-gray-300 rounded-lg h-48"
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>AI: Generate Commitments from Core Capabilities</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => {
            setPhaseCompletion({ ...phaseCompletion, phase3: true });
            setCurrentView('phase4');
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <span>Continue to Phase 4</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const Phase9Content = () => {
    const getStatusColor = (status) => {
      switch(status) {
        case 'ahead': return 'text-green-600 bg-green-100';
        case 'on-track': return 'text-blue-600 bg-blue-100';
        case 'at-risk': return 'text-orange-600 bg-orange-100';
        case 'off-track': return 'text-red-600 bg-red-100';
        default: return 'text-gray-600 bg-gray-100';
      }
    };

    const getStatusText = (status) => {
      switch(status) {
        case 'ahead': return 'Ahead of Target';
        case 'on-track': return 'On Track';
        case 'at-risk': return 'At Risk';
        case 'off-track': return 'Off Track';
        default: return 'Not Started';
      }
    };

    const calculateProgress = (current, target) => {
      return Math.min((current / target) * 100, 100);
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Phase 9: Goal Setting & Accountability</h1>
          <p className="text-blue-100">Establish measurable goals and transparent dashboards</p>
        </div>

        {/* Dashboard Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Culture Transformation Dashboard</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Ahead</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>On Track</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>At Risk</span>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <div className="text-3xl font-bold text-blue-900">6</div>
              <div className="text-sm text-blue-700">Active Goals</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <div className="text-3xl font-bold text-green-900">4</div>
              <div className="text-sm text-green-700">On Track</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
              <div className="text-3xl font-bold text-orange-900">1</div>
              <div className="text-sm text-orange-700">At Risk</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <div className="text-3xl font-bold text-purple-900">68%</div>
              <div className="text-sm text-purple-700">Avg Progress</div>
            </div>
          </div>

          {/* Individual Goals */}
          <div className="space-y-4">
            {exampleGoals.map((goal) => (
              <div key={goal.id} className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {goal.category}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(goal.status)}`}>
                        {getStatusText(goal.status)}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{goal.goal}</h3>
                    <p className="text-sm text-gray-600">Owner: {goal.owner}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {typeof goal.current === 'number' && goal.current % 1 !== 0 
                        ? goal.current.toFixed(1) 
                        : goal.current}
                      {goal.category.includes('score') || goal.category.includes('%') ? '' : '%'}
                    </div>
                    <div className="text-xs text-gray-500">
                      of {goal.target}{goal.category.includes('score') || goal.category.includes('%') ? '' : '%'}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      goal.status === 'ahead' ? 'bg-green-500' :
                      goal.status === 'on-track' ? 'bg-blue-500' :
                      goal.status === 'at-risk' ? 'bg-orange-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${calculateProgress(goal.current, goal.target)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard Insights & Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Strong Momentum</h4>
                  <p className="text-green-800 text-sm">
                    Pledge participation and portal engagement are tracking well. Employee connection scores 
                    are exceeding targets, indicating strong cultural buy-in.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Action Needed</h4>
                  <p className="text-orange-800 text-sm">
                    Micro-learning completion is below target. Consider: shorter modules, gamification, 
                    manager encouragement, or integration into team meetings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Trend to Watch</h4>
                  <p className="text-blue-800 text-sm">
                    Psychological safety scores are improving steadily (+0.4 in Q1). Continue current 
                    initiatives and celebrate progress with teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMART Goals Framework */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Creating SMART Goals for Your Organization</h2>
          <p className="text-gray-600 mb-6">
            Use the SMART framework to set clear, measurable goals that align with your Phase 1 benchmarks 
            and drive adoption of your culture commitments.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">SMART Criteria</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">S</span>
                  <span><strong>Specific:</strong> Clear and precise goal statement</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">M</span>
                  <span><strong>Measurable:</strong> Quantifiable metrics to track</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">A</span>
                  <span><strong>Achievable:</strong> Realistic given resources</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">R</span>
                  <span><strong>Relevant:</strong> Aligned to business objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">T</span>
                  <span><strong>Time-bound:</strong> Clear deadline or timeframe</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-900 mb-3">Goal Categories</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Participation:</strong> Pledge rates, portal registration</li>
                <li>• <strong>Engagement:</strong> Active users, content completion</li>
                <li>• <strong>Behavioral:</strong> Observable practice of commitments</li>
                <li>• <strong>Network:</strong> Champion activation, peer connections</li>
                <li>• <strong>Cultural:</strong> Survey scores, sentiment shifts</li>
                <li>• <strong>Business Impact:</strong> Retention, innovation, performance</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-900 mb-2">Best Practice: Multi-Level Goal Setting</h4>
            <p className="text-purple-800 text-sm mb-3">
              The most successful implementations cascade goals across multiple levels:
            </p>
            <ul className="space-y-1 text-purple-800 text-sm">
              <li>• <strong>Enterprise-level:</strong> Overall adoption and culture metrics</li>
              <li>• <strong>Business unit:</strong> Team-specific participation and engagement</li>
              <li>• <strong>Individual:</strong> Personal commitments and micro-learning completion</li>
            </ul>
            <p className="text-purple-800 text-sm mt-3">
              Real-time dashboard access for all levels creates both accountability and empowerment, 
              allowing leaders to track progress without dependency on central reporting.
            </p>
          </div>
        </div>

        {/* Create Your Goals */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Define Your Organization's Goals</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Goal Statement</label>
              <input
                type="text"
                placeholder="e.g., Achieve 85% employee pledge participation within 6 months"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-2">Category</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Select category...</option>
                  <option>Pledge Participation</option>
                  <option>Portal Engagement</option>
                  <option>Content Completion</option>
                  <option>Champion Network</option>
                  <option>Cultural Metrics</option>
                  <option>Business Impact</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Owner</label>
                <input
                  type="text"
                  placeholder="Who is accountable?"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-2">Baseline</label>
                <input
                  type="number"
                  placeholder="Current state"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Target</label>
                <input
                  type="number"
                  placeholder="Desired outcome"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Timeline</label>
                <input
                  type="text"
                  placeholder="e.g., 6 months, Q2 2025"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>AI: Generate Goals Based on Phase 1 Benchmarks</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => {
              setPhaseCompletion({ ...phaseCompletion, phase9: true });
              setCurrentView('phase10');
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
          >
            <span>Continue to Phase 10</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const PlaceholderPhase = ({ phase }) => {
    const PhaseIcon = phase.icon;
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">{phase.name}</h1>
          <p className="text-blue-100">{phase.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <PhaseIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Under Construction</h2>
          <p className="text-gray-600 mb-6">
            This phase is being built out. Check back soon for full functionality including templates, 
            AI-powered tools, and downloadable resources.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left max-w-2xl mx-auto">
            <h3 className="font-bold text-blue-900 mb-2">What This Phase Will Include:</h3>
            <p className="text-blue-800 text-sm">{phase.description}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (currentView === 'welcome') return <WelcomeScreen />;
    if (currentView === 'dashboard') return <Dashboard />;
    if (currentView === 'phase2') return <Phase2Content />;
    if (currentView === 'phase3') return <Phase3Content />;
    if (currentView === 'phase6') return <Phase6Content />;
    if (currentView === 'phase9') return <Phase9Content />;
    
    const phase = phases.find(p => p.id === currentView);
    if (phase) return <PlaceholderPhase phase={phase} />;
    
    return <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default CultureTransformationApp;
