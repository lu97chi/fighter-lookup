"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, UserCheck } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PageTransition } from "@/components/ui/page-transition"

const sections = [
  {
    icon: Shield,
    title: "Data Collection",
    content: "We collect information that you provide directly to us, including your name, email address, profile information, and any other information you choose to provide. We also automatically collect certain information about your device when you use our platform."
  },
  {
    icon: Lock,
    title: "Data Security",
    content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
  },
  {
    icon: Eye,
    title: "Data Usage",
    content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We do not sell your personal information to third parties."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. Contact us to exercise these rights."
  }
]

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="container py-8">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="mb-16">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="lead">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p>
                This Privacy Policy describes how Fighter Lookup (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
                collects, uses, and shares your personal information when you use our website and services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <AnimatedSection key={section.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg border bg-card p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{section.content}</p>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="mt-16">
            <div className="rounded-lg bg-primary/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Email: privacy@fighterlookup.com</li>
                <li>Address: 123 Fight Street, Combat City, CS 12345</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
} 