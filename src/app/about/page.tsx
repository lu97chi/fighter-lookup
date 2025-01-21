"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Target, Shield, Trophy } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PageTransition } from "@/components/ui/page-transition"

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "https://placehold.co/400x400/333/FFF?text=JS",
    bio: "Former professional fighter with 15 years of industry experience",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Fighter Relations",
    image: "https://placehold.co/400x400/333/FFF?text=SJ",
    bio: "10+ years experience in sports management and athlete development",
  },
  {
    name: "Mike Chen",
    role: "Technical Director",
    image: "https://placehold.co/400x400/333/FFF?text=MC",
    bio: "Tech veteran specializing in sports platforms and analytics",
  },
]

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive network for fighters and managers worldwide",
  },
  {
    icon: Target,
    title: "Opportunity Focus",
    description: "Creating meaningful connections that lead to career advancement",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Ensuring a secure and verified platform for all participants",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Promoting the highest standards in combat sports",
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container py-8">
        {/* Hero Section */}
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">About Fighter Lookup</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We&apos;re revolutionizing how fighters and managers connect in the combat sports industry,
            making opportunities more accessible and transparent for everyone.
          </p>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="mb-16">
          <div className="rounded-lg bg-primary/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Fighter Lookup is dedicated to transforming the combat sports industry by creating
              a transparent, efficient, and accessible platform where talented fighters can connect
              with reputable managers and find meaningful opportunities. We believe in empowering
              athletes and professionals while fostering a community built on trust and mutual success.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection>
          <h2 className="mb-8 text-center text-2xl font-bold">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="mb-2 text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  )
} 