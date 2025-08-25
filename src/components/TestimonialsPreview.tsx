import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder, SolarTech Pro',
      company: 'Mumbai, India',
      content: 'Pehle hum manually 20-30 calls kar rahe the daily. Ab AI agent 800+ calls karta hai aur conversion rate bhi 30% badh gaya. ROI amazing hai!',
      avatar: 'RK',
      stats: '30% increase in sales'
    },
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      company: 'Green Energy Solutions, Texas',
      content: 'The AI calling system is incredible. It handles objections better than some of our human reps and never gets tired. Our pipeline has tripled.',
      avatar: 'SJ',
      stats: '3x pipeline growth'
    },
    {
      name: 'Amit Patel',
      role: 'CEO, EcoSolar Systems',
      company: 'Gujarat, India',
      content: 'LinkedIn automation se humko qualified leads mil rahe hain daily. CRM integration perfect hai - sab kuch automatic sync hota hai.',
      avatar: 'AP',
      stats: '200+ qualified leads/month'
    }
  ]

  const results = [
    { metric: '800+', label: 'Daily Calls Automated' },
    { metric: '30%', label: 'Average Sales Increase' },
    { metric: '4x', label: 'Lead Generation Boost' },
    { metric: '90%', label: 'Time Saved on Outreach' }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Real Results from Solar Leaders
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how solar companies are scaling their business with our AI automation
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {results.map((result, index) => (
          <div key={index} className="space-y-2">
            <div className="text-3xl font-bold text-primary">{result.metric}</div>
            <div className="text-sm text-muted-foreground">{result.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
              
              <blockquote className="text-sm italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  {testimonial.stats}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Case Study CTA */}
      <div className="text-center bg-muted/50 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-2">Want to see detailed case studies?</h3>
        <p className="text-muted-foreground mb-4">
          Learn exactly how these companies achieved their results with our system
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/case-studies" 
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Case Studies
          </a>
          <a 
            href="/demo" 
            className="inline-flex items-center justify-center px-6 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            Book Your Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPreview
