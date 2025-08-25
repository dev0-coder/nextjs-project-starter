"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import DemoForm from '@/components/DemoForm'

const CTASection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main CTA Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to 10x Your Solar Leads?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join successful solar companies using AI automation to scale their business. 
              Zero upfront investment, maximum results.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">800+</div>
              <div className="text-sm text-muted-foreground">Automated calls daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">Average sales increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Upfront investment</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6">
                  Start 7-Day Free Trial
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DemoForm onClose={() => setIsDemoOpen(false)} />
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="/pricing">See Pricing & ROI</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>GDPR/CCPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>No Long-term Contracts</span>
              </div>
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-muted/50 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Get setup within 48 hours with our dedicated onboarding team. 
              First 100 customers get priority implementation.
            </p>
          </div>

          {/* Final Reassurance */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              <strong>Risk-free trial:</strong> Cancel anytime during your 7-day trial. 
              No setup fees, no hidden costs. Start generating leads in 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
