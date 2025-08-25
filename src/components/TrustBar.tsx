const TrustBar = () => {
  const trustItems = [
    { name: 'SolarTech Pro', logo: 'ST' },
    { name: 'Green Energy Solutions', logo: 'GE' },
    { name: 'Solar Dynamics', logo: 'SD' },
    { name: 'Renewable Power Co', logo: 'RP' },
    { name: 'EcoSolar Systems', logo: 'ES' },
  ]

  return (
    <section className="py-12 border-b bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Trusted by solar leaders
          </p>
          
          {/* Trust Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{item.logo}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Pilot Case Study */}
          <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Pilot case: 30% sales uplift in first month
            </span>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">800+</div>
            <div className="text-sm text-muted-foreground">Daily Calls</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Channels</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Automation</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Upfront Cost</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBar
