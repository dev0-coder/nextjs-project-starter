"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import DemoForm from '@/components/DemoForm'

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const scrollToROI = () => {
    const roiSection = document.getElementById('roi-calculator')
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Aap panel lagao —{' '}
                <span className="text-primary">Calls hum karenge.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Zero upfront investment — automated scraping, multi-channel outreach aur AI calling — 
                solar leads ko convert karo efficiently.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Book Free Demo (7-day Trial)
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
                onClick={scrollToROI}
              >
                See ROI Calculator
              </Button>
            </div>

            {/* Microcopy */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Daily 800+ targeted calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>LinkedIn, Email, FB & Insta automation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>CRM sync</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-2xl border">
              <img 
                src="https://placehold.co/600x400?text=Animated+6-step+automation+flow+diagram+with+process+arrows+showing+Scrape+Enrich+Outreach+AI+Call+Qualify+Book+Meeting"
                alt="Animated 6-step automation flow: Scrape → Enrich → Multi-Channel Outreach → AI Call → Qualified Leads → Booked Meetings"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Overlay with step indicators */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { step: '1', label: 'Scrape', color: 'bg-red-500' },
                    { step: '2', label: 'Enrich', color: 'bg-orange-500' },
                    { step: '3', label: 'Outreach', color: 'bg-yellow-500' },
                    { step: '4', label: 'AI Call', color: 'bg-green-500' },
                    { step: '5', label: 'Qualify', color: 'bg-blue-500' },
                    { step: '6', label: 'Book', color: 'bg-purple-500' },
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-center space-y-2">
                      <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                        {item.step}
                      </div>
                      <span className="text-xs font-medium text-foreground bg-background/80 px-2 py-1 rounded">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm">Sales Uplift</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">800+</div>
              <div className="text-sm">Daily Calls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
