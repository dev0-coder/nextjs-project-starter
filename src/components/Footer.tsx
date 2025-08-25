import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SA</span>
              </div>
              <span className="font-bold text-lg">Solar AI Agent</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automated B2B outreach & growth system for solar installers. 
              Zero upfront investment, maximum results.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Daily 800+ targeted calls</p>
              <p>LinkedIn, Email, FB & Insta automation</p>
              <p>CRM sync & AI calling</p>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <Link href="/product" className="block text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="/features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing & ROI
              </Link>
              <Link href="/integrations" className="block text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </Link>
              <Link href="/security" className="block text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/case-studies" className="block text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog & Templates
              </Link>
              <Link href="/developer" className="block text-muted-foreground hover:text-foreground transition-colors">
                API Docs
              </Link>
              <Link href="/architecture" className="block text-muted-foreground hover:text-foreground transition-colors">
                Technical Architecture
              </Link>
              <Link href="/onboarding" className="block text-muted-foreground hover:text-foreground transition-colors">
                Onboarding Guide
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal & Support</h4>
            <div className="space-y-2 text-sm">
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Sales
              </Link>
              <Link href="/demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Book Demo
              </Link>
              <Link href="/legal" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal" className="block text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 Solar AI Agent. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            <span className="inline-block mr-4">📧 hello@solar-ai-agent.com</span>
            <span className="inline-block">🔒 GDPR/CCPA Compliant</span>
          </div>
        </div>

        {/* Compliance Banner */}
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            We respect privacy. All scraping respects robots.txt and public data only. 
            We follow GDPR/CCPA for storage & consent. System scrapes only publicly available data 
            and respects website robots.txt. All outreach follows platform policies. 
            We require explicit consent for recorded calls. Use responsibly and follow local regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
