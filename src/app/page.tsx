"use client"

import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import HowItWorks from '@/components/HowItWorks'
import FeaturesPreview from '@/components/FeaturesPreview'
import PricingPreview from '@/components/PricingPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* How It Works Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              6-Step Automated Growth System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From lead scraping to booked meetings - completely automated
            </p>
          </div>
          <HowItWorks preview={true} />
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16">
        <div className="container">
          <FeaturesPreview />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <TestimonialsPreview />
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16">
        <div className="container">
          <PricingPreview />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  )
}
