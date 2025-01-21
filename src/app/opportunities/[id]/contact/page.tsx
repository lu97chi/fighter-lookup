"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Building2, Shield, Star } from "lucide-react"
import { PageTransition } from "@/components/ui/page-transition"

// Mock data for demonstration
const mockPromoter = {
  id: 1,
  name: "Fight League International",
  image: "/profile-1.avif",
  verified: true,
  location: "Las Vegas, USA",
  established: 2015,
  eventsHosted: 45,
  rating: "4.9",
}

export default function ContactPromoterPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <PageTransition>
      <div className="container max-w-3xl py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/opportunities/1"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Opportunity
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Promoter Info */}
          <motion.div variants={item} className="flex items-center gap-6 rounded-lg border bg-card p-6">
            <div className="relative h-20 w-20 flex items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-10 w-10 text-primary" />
              {mockPromoter.verified && (
                <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1 text-white shadow-lg">
                  <Shield className="h-3 w-3" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{mockPromoter.name}</h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium">{mockPromoter.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Established {mockPromoter.established} • {mockPromoter.eventsHosted} events hosted • {mockPromoter.location}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item} className="rounded-lg border bg-card p-6">
            <h1 className="text-2xl font-bold mb-6">Contact Promoter</h1>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full rounded-md border border-input bg-background px-4 py-2">
                  <option value="">Select a subject</option>
                  <option value="application">Application Inquiry</option>
                  <option value="opportunity">Opportunity Details</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[200px]"
                  placeholder="Write your message here..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Contact Information</label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    className="rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Details</label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    className="rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Your Organization (if applicable)"
                  />
                  <input
                    type="tel"
                    className="rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                />
                <label className="text-sm text-muted-foreground">
                  I agree to the terms of service and privacy policy
                </label>
              </div>
            </div>
          </motion.div>

          {/* Send Button */}
          <motion.div variants={item} className="flex justify-end">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              <MessageSquare className="mr-2 h-4 w-4" />
              Send Message
            </button>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 