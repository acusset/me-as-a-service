import { PricingCard } from "@/components/PricingCard"

const tiers = [
  {
    name: 'Developer Tier',
    description: 'Perfect for smaller projects and maintenance',
    price: '$50/hour',
    features: [
      'Basic code implementation',
      'Follows existing patterns',
      'Works on JIRA only',
      'Either backend or frontend',
      '9 to 5 hours',
      'Remote work only',
    ],
    cta: 'Start Project',
    recommended: false
  },
  {
    name: 'Senior Developer Tier',
    description: 'Ideal for complex technical challenges',
    price: '$100/hour',
    features: [
      'Full stack development',
      'System design',
      'Code review',
      'Up to 2 days per week on-site',
      'Weekday overtime'
    ],
    cta: 'Get Started',
    recommended: false
  },
  {
    name: 'Technical Lead Tier',
    description: 'Complete project leadership and execution',
    price: 'Contact Us',
    features: [
      'Everything in Senior Developer',
      'Solution Architecture',
      'End to end Project Delivery',
      'Technical mentorship',
      '5 days per week on-site',
      'Unlimited overtime'
    ],
    cta: 'Get in touch',
    recommended: true
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
        <div className="mt-12 space-y-4 lg:mt-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  )
}

