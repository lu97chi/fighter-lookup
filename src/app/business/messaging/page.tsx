"use client"

import { motion } from "framer-motion"
import { MessageCircle, Bell, Clock, Lock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

const features = [
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Connect directly with fighters, managers, and promoters through our secure messaging system."
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay updated with instant notifications for messages, applications, and opportunities."
  },
  {
    icon: Lock,
    title: "Secure Messaging",
    description: "End-to-end encrypted messaging to protect your sensitive communications."
  },
  {
    icon: Clock,
    title: "Response Tracking",
    description: "Track response times and manage conversations efficiently."
  }
]

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Professional Fighter",
    image: "/profile-1.avif",
    quote: "The messaging system has made it incredibly easy to communicate with promoters and negotiate opportunities."
  },
  {
    name: "Sarah Martinez",
    role: "Fight Manager",
    image: "/profile-1.avif",
    quote: "Being able to manage all my communications in one place has streamlined our entire recruitment process."
  },
  {
    name: "Mike Chen",
    role: "Event Promoter",
    image: "/profile-1.avif",
    quote: "The platform&apos;s messaging features have helped us find and book fighters more efficiently than ever."
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

export default function MessagingPage() {
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
                Connect and Communicate
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Direct messaging system designed for the fight industry. Connect with fighters, managers, and promoters securely.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-primary/90 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Messaging Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to communicate effectively
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

      {/* Testimonials Section */}
      <AnimatedSection className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg">
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
      <AnimatedSection className="py-32 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Start Connecting Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our platform and start communicating with the fight industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Create Account <ChevronRight className="ml-2 h-5 w-5" />
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