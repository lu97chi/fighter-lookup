"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, MapPin, Trophy, Calendar, DollarSign, Users, Clock, Shield, ChevronRight, Building, Scale, Award } from "lucide-react"
import { PageTransition } from "@/components/ui/page-transition"

// Mock data for demonstration
const mockOpportunity = {
  id: 1,
  title: "Professional MMA Fight Opportunity",
  eventType: "Professional",
  location: "Las Vegas, USA",
  date: "2024-03-15",
  purse: "$5,000",
  weightClass: "Middleweight",
  requirements: "Professional record required (minimum 3-1), must be licensed in Nevada",
  organization: "Fight League International",
  applicationDeadline: "2024-02-15",
  applicants: 28,
  featured: true,
  verified: true,
  image: "/profile-1.avif",
  venue: "MGM Grand Garden Arena",
  broadcast: "Pay-per-view and streaming platforms",
  matchmaker: "John Anderson",
  contractType: "Single fight contract",
  medicalRequirements: [
    "Pre-fight medical examination",
    "Blood work (HIV, Hepatitis B, Hepatitis C)",
    "Eye examination",
    "Brain MRI (within last 12 months)",
  ],
  additionalInfo: {
    weightLimit: "185 lbs (no weight allowance)",
    rounds: "3 x 5 minutes",
    rules: "Unified Rules of MMA",
    travelAssistance: "Available for international fighters",
    accommodations: "3 nights hotel included",
  },
  promoterInfo: {
    name: "Fight League International",
    established: 2015,
    eventsHosted: 45,
    rating: "4.9",
    verified: true,
  },
  description: "Looking for a skilled middleweight fighter for our upcoming main card event. This is a high-profile opportunity with significant exposure. The event will be broadcast internationally, featuring some of the top talents in the sport. We offer competitive purse and performance bonuses.",
}

export default function OpportunityDetailPage() {
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
      <div className="container py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/opportunities"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Opportunities
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mb-12 rounded-lg border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Event Image */}
            <motion.div variants={item} className="relative aspect-video w-full md:w-2/5">
              <Image
                src={mockOpportunity.image}
                alt={mockOpportunity.title}
                fill
                className="rounded-lg object-cover"
                priority
              />
              {mockOpportunity.featured && (
                <div className="absolute top-4 right-4 rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                  Featured
                </div>
              )}
              {mockOpportunity.verified && (
                <div className="absolute top-4 left-4 rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-lg flex items-center gap-1">
                  <Shield className="h-3 w-3" /> Verified
                </div>
              )}
            </motion.div>

            {/* Event Info */}
            <motion.div variants={item} className="flex-1 space-y-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {mockOpportunity.eventType}
                  </span>
                  <span className="rounded-full bg-accent px-2 py-1 text-xs font-medium">
                    {mockOpportunity.weightClass}
                  </span>
                </div>
                <h1 className="text-4xl font-bold">{mockOpportunity.title}</h1>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span>{mockOpportunity.organization}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{mockOpportunity.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Purse: {mockOpportunity.purse}</span>
                </div>
              </div>

              <p className="text-muted-foreground">{mockOpportunity.description}</p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/opportunities/${mockOpportunity.id}/apply`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{mockOpportunity.applicants} fighters have applied</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Event Details Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { icon: Calendar, label: "Event Date", value: new Date(mockOpportunity.date).toLocaleDateString() },
            { icon: Clock, label: "Application Deadline", value: new Date(mockOpportunity.applicationDeadline).toLocaleDateString() },
            { icon: Building, label: "Venue", value: mockOpportunity.venue },
            { icon: Trophy, label: "Contract Type", value: mockOpportunity.contractType },
            { icon: Scale, label: "Weight Limit", value: mockOpportunity.additionalInfo.weightLimit },
            { icon: Award, label: "Rounds", value: mockOpportunity.additionalInfo.rounds },
          ].map((detail) => (
            <motion.div
              key={detail.label}
              variants={item}
              className="flex items-start gap-4 rounded-lg border bg-card p-4"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{detail.label}</div>
                <div className="font-medium">{detail.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            Requirements
          </motion.h2>
          <motion.div variants={item} className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Fighter Requirements</h3>
              <p className="text-sm text-muted-foreground">{mockOpportunity.requirements}</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Medical Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {mockOpportunity.medicalRequirements.map((req) => (
                  <li key={req} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            Additional Information
          </motion.h2>
          <motion.div variants={item} className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4 rounded-lg border p-4">
              <h3 className="font-medium">Event Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-between">
                  <span>Rules:</span>
                  <span className="font-medium text-foreground">{mockOpportunity.additionalInfo.rules}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Broadcast:</span>
                  <span className="font-medium text-foreground">{mockOpportunity.broadcast}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Matchmaker:</span>
                  <span className="font-medium text-foreground">{mockOpportunity.matchmaker}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-lg border p-4">
              <h3 className="font-medium">Travel & Accommodation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-between">
                  <span>Travel Assistance:</span>
                  <span className="font-medium text-foreground">{mockOpportunity.additionalInfo.travelAssistance}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Accommodation:</span>
                  <span className="font-medium text-foreground">{mockOpportunity.additionalInfo.accommodations}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Promoter Information */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            About the Promoter
          </motion.h2>
          <motion.div variants={item} className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{mockOpportunity.promoterInfo.name}</span>
                  {mockOpportunity.promoterInfo.verified && (
                    <Shield className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  Established {mockOpportunity.promoterInfo.established} • {mockOpportunity.promoterInfo.eventsHosted} events hosted
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-medium">{mockOpportunity.promoterInfo.rating}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Apply Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="rounded-lg border bg-card p-6 text-center"
        >
          <motion.h2 variants={item} className="mb-4 text-2xl font-bold">
            Ready to Apply?
          </motion.h2>
          <motion.p variants={item} className="mb-6 text-muted-foreground">
            Submit your application before {new Date(mockOpportunity.applicationDeadline).toLocaleDateString()}
          </motion.p>
          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/opportunities/${mockOpportunity.id}/apply`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Apply Now <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={`/opportunities/${mockOpportunity.id}/contact`}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Contact Promoter
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 