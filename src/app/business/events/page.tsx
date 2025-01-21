"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Target, ChevronRight, BarChart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

const features = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Comprehensive tools for scheduling, venue management, and fighter coordination."
  },
  {
    icon: Target,
    title: "Fighter Matching",
    description: "Smart matching system to find the perfect fighters for your events."
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Track event performance, ticket sales, and fighter engagement metrics."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with fighters and promoters from around the world."
  }
]

const upcomingEvents = [
  {
    title: "Summer Fight Night",
    date: "August 15, 2024",
    location: "Las Vegas, USA",
    image: "/profile-1.avif",
    spots: 4
  },
  {
    title: "Championship Series",
    date: "September 22, 2024",
    location: "London, UK",
    image: "/profile-1.avif",
    spots: 2
  },
  {
    title: "International Tournament",
    date: "October 10, 2024",
    location: "Tokyo, Japan",
    image: "/profile-1.avif",
    spots: 6
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

export default function EventsPage() {
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
                Event Management Made Simple
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Organize and promote your tournaments, fights, and events with our powerful management tools.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <Link
                  href="/opportunities/post"
                  className="inline-flex items-center justify-center rounded-lg bg-primary/90 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  Create Event <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/opportunities"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-lg"
                >
                  View Events
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Powerful Event Tools</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage successful fight events
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

      {/* Upcoming Events Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">
              Featured events looking for fighters
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
              <motion.div
                key={event.title}
                variants={itemVariants}
                className="rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.spots} spots left</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Start Planning Your Event</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create and manage your fight events with our comprehensive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all hover:bg-accent hover:scale-105 hover:shadow-xl"
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