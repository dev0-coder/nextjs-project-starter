import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const FeaturesPreview = () => {
  const features = [
    {
      title: 'Lead Scraper',
      description: 'Automated lead discovery from multiple public sources with smart filtering and deduplication.',
      icon: '🔍',
      benefits: ['800+ leads/day', 'Multi-source aggregation', 'Smart deduplication']
    },
    {
      title: 'AI Calling Engine',
      description: 'Intelligent voice AI that qualifies leads, handles objections, and books meetings automatically.',
      icon: '🤖',
      benefits: ['Natural conversations', 'Objection handling', 'Meeting booking']
    },
    {
      title: 'Multi-Channel Outreach',
      description: 'Coordinated campaigns across Email, LinkedIn, Facebook, Instagram with personalization.',
      icon: '📱',
      benefits: ['4 channels', 'Personalized messages', 'Optimal timing']
    },
    {
      title: 'CRM Integration',
      description: 'Seamless sync with HubSpot, Salesforce, and Zoho. All interactions automatically logged.',
      icon: '🔄',
      benefits: ['Real-time sync', 'Activity logging', 'Pipeline management']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time performance tracking with ROI calculations and predictive insights.',
      icon: '📊',
      benefits: ['Live metrics', 'ROI tracking', 'Predictive analytics']
    },
    {
      title: 'Compliance & Security',
      description: 'GDPR/CCPA compliant with enterprise-grade security and audit trails.',
      icon: '🛡️',
      benefits: ['GDPR compliant', 'Audit trails', 'Data encryption']
    }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Complete Solar Lead Generation Suite
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to automate your solar business growth - from lead discovery to deal closure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-2xl">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription>
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <a href="/features">Explore All Features →</a>
        </Button>
      </div>
    </div>
  )
}

export default FeaturesPreview
