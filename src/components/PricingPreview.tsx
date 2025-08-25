import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const PricingPreview = () => {
  const plans = [
    {
      name: 'Pilot',
      price: 'Free',
      period: '7-day trial',
      description: 'Perfect for testing our system with your solar business',
      features: [
        '1,000 contact limit',
        '100 AI calls included',
        'Email + LinkedIn outreach',
        'Basic analytics',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false,
      href: '/demo'
    },
    {
      name: 'Growth',
      price: '$5,000',
      period: 'per month',
      description: 'Complete automation for growing solar businesses',
      features: [
        '800 calls per day',
        'Full multi-channel automation',
        'CRM integration (1 platform)',
        'Advanced analytics',
        'Priority support',
        'Custom scripts',
        'Lead scoring'
      ],
      cta: 'Get Growth Plan',
      popular: true,
      href: '/demo'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'White-glove setup for large solar operations',
      features: [
        'Unlimited calls & contacts',
        'Dedicated setup team',
        'SLA guarantee',
        'Multiple CRM integrations',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting'
      ],
      cta: 'Contact Sales',
      popular: false,
      href: '/contact'
    }
  ]

  return (
    <div className="space-y-12" id="roi-calculator">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start free, scale as you grow. No hidden fees, no long-term contracts.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {plan.price}
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                {(plan.price === 'Free' || plan.price === 'Custom') && (
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                )}
              </div>
              <CardDescription className="text-center">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
                asChild
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ROI Calculator Preview */}
      <div className="bg-muted/50 rounded-2xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Calculate Your ROI</h3>
          <p className="text-muted-foreground">
            See how much revenue our system can generate for your solar business
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">$15,000</div>
            <div className="text-sm text-muted-foreground">Avg Order Value</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">800</div>
            <div className="text-sm text-muted-foreground">Daily Calls</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">12%</div>
            <div className="text-sm text-muted-foreground">Conversion Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-600">$432K</div>
            <div className="text-sm text-muted-foreground">Monthly Revenue</div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button size="lg" asChild>
            <a href="/pricing">Use Full ROI Calculator →</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PricingPreview
