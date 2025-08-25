"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { toast } from 'sonner'

interface HowItWorksProps {
  preview?: boolean
}

const HowItWorks = ({ preview = false }: HowItWorksProps) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: 'Auto-Scrape Targets',
      description: 'System public sources se targeted solar prospects scrape karega (company, contact, role, city).',
      buttonText: 'Scrape Sample Now',
      buttonAction: () => {
        toast.success('Sample scrape initiated! Found 50+ solar companies in your region.')
      },
      details: {
        schedule: 'Daily at 6 AM local time',
        frequency: 'Configurable: Daily, Weekly, or Custom',
        sources: 'LinkedIn, Google Maps, Industry directories',
        queryTemplates: [
          'site:linkedin.com "Solar Installer" "India" OR "USA"',
          'site:yellowpages.com "Solar Panel Installation"',
          '"Solar Energy" AND "Installation" AND "Company"'
        ],
        maxConcurrency: '10 concurrent requests',
        dedupeRules: 'Email and phone number matching',
        compliance: 'Respects robots.txt and rate limits',
        optOut: 'Automatic suppression list management'
      },
      icon: '🔍',
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Enrich & Score',
      description: 'Email, phone, social handles enrich, and lead scoring (intent, size, proximity).',
      buttonText: 'View Scoring Rules',
      buttonAction: () => {
        toast.info('Lead scoring: Company size (40%), Intent signals (30%), Geographic proximity (30%)')
      },
      details: {
        enrichmentSources: 'Clearbit-like APIs, SignalHire integration',
        fallbackPatterns: 'firstname.lastname@company.com patterns',
        confidenceScores: 'Email: 95%, Phone: 80%, Social: 70%',
        scoringFactors: [
          'Company size (employees, revenue)',
          'Intent signals (website visits, content downloads)',
          'Geographic proximity to service area',
          'Industry relevance score',
          'Contact role seniority'
        ],
        manualOverride: 'Admin can adjust scores manually',
        dataRetention: '90 days default, configurable'
      },
      icon: '⚡',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'Auto Outreach: Email / IG / FB / LinkedIn',
      description: 'Automated messages across channels with personalization tokens & delay strategies.',
      buttonText: 'See Message Templates',
      buttonAction: () => {
        toast.info('Templates loaded: Email (5 variants), LinkedIn (3 variants), Social (2 variants)')
      },
      details: {
        channelCadence: 'Day 0: Email → Day 2: LinkedIn → Day 4: Social → Day 7: Follow-up',
        spamSafety: 'Gradual warm-up, sender reputation monitoring',
        personalizationTokens: '{{Company}}, {{FirstName}}, {{Industry}}, {{Location}}',
        sendingQuotas: 'Email: 200/day, LinkedIn: 50/day, Social: 30/day',
        abTestVariants: 'Subject lines, message content, send times',
        cooldownRules: '48-hour minimum between same-channel messages',
        unsubscribeHandling: 'Automatic suppression across all channels'
      },
      icon: '📧',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'AI Calling Agent',
      description: 'Real-time voice AI that qualifies, handles objections & books meetings.',
      buttonText: 'Hear a Demo Call',
      buttonAction: () => {
        toast.success('Playing sample call: "Hi, main Solar AI Agent se call kar raha hun..."')
      },
      details: {
        voiceProvider: 'Vapi AI with Indian accent support',
        scriptBranches: 'Qualification → Interest → Objection handling → Booking',
        fallbackToHuman: 'Complex objections route to human agent',
        dynamicScripting: 'Adapts based on lead score and previous interactions',
        liveMonitoring: 'Real-time call monitoring dashboard',
        callRecording: 'All calls recorded, 30-day retention',
        crmPush: 'Call outcomes automatically sync to CRM',
        qualificationCriteria: 'Budget, Authority, Need, Timeline (BANT)'
      },
      icon: '📞',
      color: 'bg-green-500'
    },
    {
      id: 5,
      title: 'Auto Follow-up & Schedule',
      description: 'If prospect shows interest, system schedules demo via Calendly/Integrated calendar.',
      buttonText: 'Configure Calendly',
      buttonAction: () => {
        toast.info('Calendly integration: Available slots synced, booking confirmations automated')
      },
      details: {
        calendarIntegration: 'Google Calendar, Outlook, Calendly',
        timezoneHandling: 'Automatic timezone detection and conversion',
        doubleBookProtection: 'Real-time availability checking',
        followUpSequence: 'Confirmation email → 24h reminder → 1h reminder',
        rescheduleHandling: 'Automatic rescheduling with 2-click process',
        noShowFollowup: 'Automatic re-engagement sequence',
        meetingPrep: 'Pre-meeting brief sent to sales team'
      },
      icon: '📅',
      color: 'bg-blue-500'
    },
    {
      id: 6,
      title: 'Realtime Dashboard & ROI',
      description: 'Calls, conversions, CPL, predicted revenue — all in one dashboard.',
      buttonText: 'Open Demo Dashboard',
      buttonAction: () => {
        toast.success('Dashboard loaded: 47 calls today, 12% conversion rate, $2,340 predicted revenue')
      },
      details: {
        kpiTracking: 'Calls made, connected, qualified, booked',
        funnelVisualization: 'Lead source → Conversion → Revenue attribution',
        exportOptions: 'CSV, PDF reports with custom date ranges',
        automatedReports: 'Weekly client reports via email',
        realtimeAlerts: 'High-value lead notifications',
        performanceMetrics: 'Cost per lead, conversion rates, ROI calculations',
        predictiveAnalytics: 'Revenue forecasting based on pipeline'
      },
      icon: '📊',
      color: 'bg-purple-500'
    }
  ]

  const displaySteps = preview ? steps.slice(0, 3) : steps

  return (
    <div className="space-y-6">
      {preview && (
        <div className="text-center mb-8">
          <Button variant="outline" asChild>
            <a href="/product">View Complete 6-Step Process →</a>
          </Button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displaySteps.map((step) => (
          <Card key={step.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                  {step.icon}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Step {step.id}
                </div>
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription className="text-sm">
                {step.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Button 
                onClick={step.buttonAction}
                className="w-full"
                variant="outline"
              >
                {step.buttonText}
              </Button>

              {!preview && (
                <Collapsible 
                  open={expandedStep === step.id} 
                  onOpenChange={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full text-xs">
                      {expandedStep === step.id ? 'Hide Details' : 'How it works'}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 pt-3 border-t">
                    <div className="text-xs space-y-2">
                      {Object.entries(step.details).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium capitalize text-muted-foreground">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                          </span>
                          <div className="ml-2 text-foreground">
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside space-y-1">
                                {value.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <span>{value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </CardContent>

            {/* Step connector line for non-preview */}
            {!preview && step.id < steps.length && (
              <div className="absolute -right-3 top-1/2 w-6 h-0.5 bg-border hidden lg:block" />
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
