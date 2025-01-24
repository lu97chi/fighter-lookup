"use client"

import { motion } from "framer-motion"
import { ChevronRight, Shield, Trophy, Users, Star, Globe, MessageCircle, Calendar, Target, Zap, Award, DollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every fighter and promoter is verified to ensure authenticity and maintain high standards."
  },
  {
    icon: Trophy,
    title: "Quality Matches",
    description: "Smart matching system to find the perfect opportunities for fighters and promoters."
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with fighters, managers, and promoters from around the world."
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Transparent rating system to build trust and reputation in the community."
  }
]

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Professional Fighter",
    image: "/profile-1.avif",
    quote: "This platform has transformed how I find and secure fighting opportunities. The verification system gives me confidence in every interaction."
  },
  {
    name: "Sarah Martinez",
    role: "Fight Manager",
    image: "/profile-1.avif",
    quote: "Managing my fighters has never been easier. The tools and features available have streamlined our entire process."
  },
  {
    name: "Mike Chen",
    role: "Event Promoter",
    image: "/profile-1.avif",
    quote: "We&apos;ve found incredible talent through this platform. The quality of fighters and the ease of communication is unmatched."
  }
]

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "2.5K+", label: "Verified Fighters" },
  { number: "500+", label: "Events Hosted" },
  { number: "$2M+", label: "In Opportunities" }
]

const businessSolutions = [
  {
    icon: Calendar,
    title: "Tournament Management",
    description: "Organize and manage tournaments with our comprehensive suite of tools.",
    href: "/business/events"
  },
  {
    icon: Target,
    title: "Fighter Recruitment",
    description: "Find and recruit the perfect fighters for your events and promotions.",
    href: "/business/promoters"
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Communicate securely with fighters, managers, and promoters.",
    href: "/business/messaging"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your reach and connect with the international fight community.",
    href: "/business/promoters"
  }
]

const upcomingEvents = [
  {
    title: "Summer Fight Series",
    date: "2024-07-15",
    location: "Las Vegas, USA",
    spots: 8,
    image: "/profile-1.avif"
  },
  {
    title: "European Championship",
    date: "2024-08-20",
    location: "London, UK",
    spots: 12,
    image: "/profile-1.avif"
  },
  {
    title: "Asia Pacific Tournament",
    date: "2024-09-10",
    location: "Tokyo, Japan",
    spots: 16,
    image: "/profile-1.avif"
  }
]

const fighterBenefits = [
  {
    icon: Shield,
    title: "Verified Opportunities",
    description: "Access legitimate fighting opportunities from verified promoters."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Track your progress and build your professional fighting career."
  },
  {
    icon: DollarSign,
    title: "Fair Compensation",
    description: "Transparent purse negotiations and payment processes."
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Build your reputation and get noticed by top promoters."
  }
]

const promoterBenefits = [
  {
    icon: Users,
    title: "Talent Pool",
    description: "Access a diverse pool of verified fighters across all weight classes."
  },
  {
    icon: Zap,
    title: "Quick Matching",
    description: "Find the perfect fighters for your events with our matching system."
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Comprehensive tools for planning and managing your events."
  },
  {
    icon: Globe,
    title: "Market Reach",
    description: "Expand your promotion's reach to new markets and audiences."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              >
                Connect with the Fighting Community
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-xl text-muted-foreground"
              >
                The premier platform connecting fighters, promoters, and managers worldwide. Find opportunities, manage events, and grow your career in combat sports.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-primary/90 px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/fighters"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-lg font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-lg"
                >
                  Browse Fighters
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide the tools and features you need to succeed in the fighting industry
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                variants={itemVariants}
                className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:border-primary transition-all hover:scale-105"
              >
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Upcoming Events Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t miss out on these exciting opportunities
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {upcomingEvents.map((event) => (
              <Link key={event.title} href="/opportunities">
                <motion.div
                  variants={itemVariants}
                  className="group rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                      <div className="flex items-center justify-between text-sm text-white/80 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{event.spots} spots left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-xl"
            >
              View All Events <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Fighter Benefits Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">For Fighters</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take your fighting career to the next level
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {fighterBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
            >
              Create Fighter Profile <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Promoter Benefits Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">For Promoters</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline your event management and fighter recruitment
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {promoterBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
            >
              Create Promoter Account <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Business Solutions Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Business Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools for promoters, managers, and organizations
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {businessSolutions.map((solution) => (
              <Link key={solution.title} href={solution.href}>
                <motion.div
                  variants={itemVariants}
                  className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 h-full hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
                >
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from the people who use our platform
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the platform that&apos;s revolutionizing the fighting industry. Connect with fighters, find opportunities, and grow your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Create Account <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-lg font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  )
}
