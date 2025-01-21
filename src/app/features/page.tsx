import {
  Trophy,
  Users,
  Shield,
  Search,
  MessageSquare,
  BarChart,
  Video,
  Globe,
  Zap
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Trophy,
      title: "Professional Profiles",
      description: "Create a stunning profile that showcases your achievements, skills, and career highlights. Upload high-quality photos and videos to stand out.",
      forUser: "Fighters"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find fighters based on weight class, fighting style, location, and experience level. Save searches and get notifications for new matches.",
      forUser: "Managers"
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Connect directly with fighters or managers through our secure messaging system. Schedule meetings and discuss opportunities privately.",
      forUser: "Both"
    },
    {
      icon: Video,
      title: "Media Management",
      description: "Upload and manage your fight videos, training footage, and highlight reels. Share specific content with interested managers.",
      forUser: "Fighters"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track profile views, connection requests, and engagement metrics. Understand how managers interact with your profile.",
      forUser: "Fighters"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All profiles are verified to ensure authenticity. Managers can trust that they're connecting with legitimate fighters.",
      forUser: "Both"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access opportunities from around the world. Connect with international promotions and management companies.",
      forUser: "Fighters"
    },
    {
      icon: Users,
      title: "Talent Tracking",
      description: "Keep track of promising fighters, make notes, and organize your talent pipeline efficiently.",
      forUser: "Managers"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Streamlined workflows for common tasks like scheduling meetings, sharing media, and updating availability.",
      forUser: "Both"
    }
  ]

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Platform Features
        </h1>
        <p className="max-w-[900px] text-lg text-muted-foreground sm:text-xl">
          Everything you need to succeed in the combat sports industry.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border p-6"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-primary">For {feature.forUser}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Integration Section */}
      <section className="mt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Powerful Integrations
          </h2>
          <p className="max-w-[900px] text-lg text-muted-foreground">
            Fighter Lookup integrates with the tools and platforms you already use.
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Video Platforms",
              description: "Upload and share videos directly from YouTube, Vimeo, and other platforms."
            },
            {
              title: "Calendar Integration",
              description: "Sync with Google Calendar and Outlook for seamless scheduling."
            },
            {
              title: "Social Media",
              description: "Connect your social media profiles to showcase your online presence."
            }
          ].map((integration, index) => (
            <div
              key={index}
              className="rounded-lg border p-6"
            >
              <h3 className="font-semibold">{integration.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* API Access Section */}
      <section className="mt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            API Access
          </h2>
          <p className="max-w-[900px] text-lg text-muted-foreground">
            Build custom solutions using our comprehensive API.
          </p>
          <div className="mt-8 w-full rounded-lg border p-6">
            <p className="text-sm text-muted-foreground">
              Access fighter data, manage profiles, and integrate Fighter Lookup features into your own applications.
              Available for Manager plan subscribers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 