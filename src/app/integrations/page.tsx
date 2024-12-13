import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function IntegrationsPage() {
  const mockIntegrations = [
    {
      title: "GitHub Integration",
      description: "Seamlessly connect your repositories and manage your code workflow"
    },
    {
      title: "Slack Integration",
      description: "Real-time notifications and team collaboration tools"
    },
    {
      title: "AWS Services",
      description: "Deploy and manage your cloud infrastructure effortlessly"
    },
    {
      title: "Jira Integration",
      description: "Track issues and manage project development cycles"
    },
    {
      title: "Docker Hub",
      description: "Containerize and manage your application deployments"
    },
    {
      title: "MongoDB Atlas",
      description: "Manage your database clusters and monitoring"
    }
  ]

  return (
    <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-alabaster mb-4">Integrations</h1>
        <p className="text-xl text-alabaster/60">Coming Soon</p>
      </div>

      {/* Blurred integration cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {/* Overlay to make it look disabled */}
        <div className="absolute inset-0 backdrop-blur-sm bg-eerie/30 z-10" />
        
        {mockIntegrations.map((integration, index) => (
          <Card 
            key={index}
            className="bg-eerie/40 border-alabaster/10 hover:border-alabaster/20 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-alabaster">{integration.title}</CardTitle>
              <CardDescription className="text-alabaster/60">
                {integration.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Coming soon overlay message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-xanthous text-eerie font-bold px-6 py-3 rounded-lg shadow-lg">
          Coming Soon
        </div>
      </div>
    </main>
  )
} 