import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const tiers = [
  {
    name: 'Basic Tier',
    description: 'Perfect for small projects',
    price: '$50/hour',
    features: [
      'Code review',
      'Bug fixing',
      'Basic feature implementation'
    ]
  },
  {
    name: 'Premium Tier',
    description: 'Ideal for medium to large projects',
    price: '$100/hour',
    features: [
      'Everything in Basic',
      'Architecture design',
      'Performance optimization',
      'Team collaboration'
    ]
  },
  {
    name: 'Custom Tier',
    description: 'Tailored for your specific needs',
    price: 'Contact for pricing',
    features: [
      'Everything in Premium',
      'On-site consultation',
      'Long-term project planning',
      'Dedicated support'
    ]
  }
]

export default function Pricing() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left sm:text-center">
          <h2 className="text-3xl font-extrabold text-xanthous sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-alabaster">
            Choose the perfect plan for your project needs
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => (
            <Card key={tier.name} className="bg-eerie border-xanthous transform transition-all duration-300 
              hover:scale-105 hover:bg-eerie/80 hover:border-tekhelet hover:shadow-xl hover:shadow-tekhelet/20 
              hover:z-10">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-xanthous">{tier.name}</CardTitle>
                <CardDescription className="mt-4 text-alabaster">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-extrabold text-alabaster">{tier.price}</span>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3 text-alabaster">
                      <svg className="flex-shrink-0 h-5 w-5 text-tekhelet" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-tekhelet hover:bg-tekhelet/90 text-alabaster">
                  Get started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

