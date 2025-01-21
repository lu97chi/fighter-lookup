"use client"

import { motion } from "framer-motion"
import { FileText, AlertTriangle, Scale, Ban } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PageTransition } from "@/components/ui/page-transition"

const sections = [
  {
    icon: FileText,
    title: "User Agreement",
    content: [
      "By accessing or using Fighter Lookup, you agree to be bound by these Terms of Service.",
      "You must be at least 18 years old to use our services.",
      "You are responsible for maintaining the security of your account."
    ]
  },
  {
    icon: AlertTriangle,
    title: "User Conduct",
    content: [
      "You agree to provide accurate and truthful information.",
      "You will not impersonate others or provide false information.",
      "You will not use the service for any illegal or unauthorized purpose."
    ]
  },
  {
    icon: Scale,
    title: "Content Policy",
    content: [
      "You retain rights to content you post on Fighter Lookup.",
      "We reserve the right to remove content that violates our policies.",
      "You grant us license to use your content to provide our services."
    ]
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    content: [
      "Harassment or abuse of other users",
      "Posting false or misleading information",
      "Attempting to gain unauthorized access to our systems"
    ]
  }
]

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="container py-8">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Please read these terms carefully before using Fighter Lookup.
          </p>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="mb-16">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="lead">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of Fighter Lookup&apos;s
                website and services. By using our services, you agree to be bound by these Terms.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
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
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="mt-16">
            <div className="rounded-lg bg-primary/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Email: legal@fighterlookup.com</li>
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