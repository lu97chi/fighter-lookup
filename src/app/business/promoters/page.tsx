"use client"

import { motion } from "framer-motion"
import { Shield, Trophy, Users, Star, ChevronRight } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

const features = [
  {
    icon: Users,
    title: "Talent Discovery",
    description: "Access a vast pool of verified fighters across all weight classes and experience levels."
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every fighter profile is verified to ensure authenticity and maintain high standards."
  },
  {
    icon: Trophy,
    title: "Event Management",
    description: "Streamline your event planning with our comprehensive management tools."
  },
  {
    icon: Star,
    title: "Quality Matches",
    description: "Our matching algorithm helps you find the perfect fighters for your events."
  }
]

const stats = [
  { number: "2,500+", label: "Active Fighters" },
  { number: "150+", label: "Events Hosted" },
  { number: "95%", label: "Match Success Rate" },
  { number: "$1M+", label: "In Opportunities" }
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

export default function PromotersPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              >
                Grow Your Fight Promotion Business
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Connect with talented fighters, streamline event management, and grow your promotion business with our comprehensive platform.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <Link
                  href="/opportunities/post"
                  className="inline-flex items-center justify-center rounded-lg bg-primary/90 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  Post an Opportunity <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/fighters"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-lg"
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools and features designed for fight promoters
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

      {/* CTA Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the platform that&apos;s revolutionizing the fight promotion industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Create Account <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-xl"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  )
} 