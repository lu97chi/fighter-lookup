"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, MapPin, Trophy, Medal, Calendar, MessageSquare, Shield, ChevronRight } from "lucide-react"
import { PageTransition } from "@/components/ui/page-transition"

// Mock data for demonstration
const mockFighter = {
  id: 1,
  name: "Alex 'The Thunder' Thompson",
  record: "15-2",
  weightClass: "Middleweight",
  style: "Mixed Martial Arts",
  location: "Las Vegas, USA",
  available: true,
  rating: "4.8",
  verified: true,
  image: "/profile-1.avif",
  age: 28,
  height: "6'0\"",
  weight: "185 lbs",
  reach: "74\"",
  stance: "Orthodox",
  experience: "7 years",
  wins: {
    total: 15,
    ko: 8,
    submission: 5,
    decision: 2
  },
  losses: {
    total: 2,
    ko: 1,
    submission: 0,
    decision: 1
  },
  achievements: [
    "Regional MMA Champion 2022",
    "BJJ Black Belt",
    "Golden Gloves Champion",
  ],
  recentFights: [
    {
      date: "2023-12-15",
      opponent: "Mike Wilson",
      result: "Win",
      method: "KO",
      round: 2,
      time: "2:45",
      event: "Fight Night 45"
    },
    {
      date: "2023-08-20",
      opponent: "John Martinez",
      result: "Win",
      method: "Submission",
      round: 1,
      time: "4:30",
      event: "Championship Series"
    },
    {
      date: "2023-05-10",
      opponent: "Chris Anderson",
      result: "Loss",
      method: "Decision",
      round: 3,
      time: "5:00",
      event: "Fight League 32"
    },
  ],
  bio: "Professional MMA fighter with a strong background in Brazilian Jiu-Jitsu and Muay Thai. Known for explosive striking and technical ground game. Currently seeking opportunities in major promotions.",
}

export default function FighterDetailPage() {
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
            href="/fighters"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fighters
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mb-12 rounded-lg border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Profile Image */}
            <motion.div variants={item} className="relative aspect-square w-full max-w-[300px]">
              <Image
                src={mockFighter.image}
                alt={mockFighter.name}
                fill
                className="rounded-lg object-cover"
                priority
              />
              {mockFighter.verified && (
                <div className="absolute top-4 left-4 rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white shadow-lg flex items-center gap-1">
                  <Shield className="h-3 w-3" /> Verified
                </div>
              )}
              {mockFighter.available && (
                <div className="absolute top-4 right-4 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                  Available
                </div>
              )}
            </motion.div>

            {/* Fighter Info */}
            <motion.div variants={item} className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">{mockFighter.name}</h1>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-lg font-medium">{mockFighter.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  <span>{mockFighter.record} Record</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{mockFighter.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground">{mockFighter.bio}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/fighters/${mockFighter.id}/contact`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Fighter
                </Link>
                <Link
                  href={`/fighters/${mockFighter.id}/history`}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  View Fight History
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Age", value: mockFighter.age },
            { label: "Height", value: mockFighter.height },
            { label: "Weight", value: mockFighter.weight },
            { label: "Reach", value: mockFighter.reach },
            { label: "Stance", value: mockFighter.stance },
            { label: "Experience", value: mockFighter.experience },
            { label: "Style", value: mockFighter.style },
            { label: "Weight Class", value: mockFighter.weightClass },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="rounded-lg border bg-card p-4"
            >
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="mt-1 text-2xl font-semibold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fight Record */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            Fight Record
          </motion.h2>
          <motion.div variants={item} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 rounded-lg bg-primary/10 p-4">
              <div className="text-sm text-muted-foreground">Total Wins</div>
              <div className="text-3xl font-bold text-primary">{mockFighter.wins.total}</div>
              <div className="text-sm text-muted-foreground">
                KO: {mockFighter.wins.ko} | Sub: {mockFighter.wins.submission} | Dec: {mockFighter.wins.decision}
              </div>
            </div>
            <div className="space-y-2 rounded-lg bg-destructive/10 p-4">
              <div className="text-sm text-muted-foreground">Total Losses</div>
              <div className="text-3xl font-bold text-destructive">{mockFighter.losses.total}</div>
              <div className="text-sm text-muted-foreground">
                KO: {mockFighter.losses.ko} | Sub: {mockFighter.losses.submission} | Dec: {mockFighter.losses.decision}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Recent Fights */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            Recent Fights
          </motion.h2>
          <motion.div variants={item} className="space-y-4">
            {mockFighter.recentFights.map((fight) => (
              <div
                key={fight.date}
                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{fight.event}</div>
                    <div className="text-sm text-muted-foreground">
                      vs {fight.opponent} • Round {fight.round} • {fight.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      fight.result === "Win"
                        ? "bg-primary/10 text-primary"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {fight.result}
                  </span>
                  <span className="rounded-full bg-accent px-2 py-1 text-xs font-medium">
                    {fight.method}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12 rounded-lg border bg-card p-6"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold">
            Achievements
          </motion.h2>
          <motion.div variants={item} className="space-y-4">
            {mockFighter.achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <Medal className="h-5 w-5 text-primary" />
                <span>{achievement}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="rounded-lg border bg-card p-6 text-center"
        >
          <motion.h2 variants={item} className="mb-4 text-2xl font-bold">
            Interested in Working Together?
          </motion.h2>
          <motion.p variants={item} className="mb-6 text-muted-foreground">
            Contact {mockFighter.name} to discuss opportunities
          </motion.p>
          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/fighters/${mockFighter.id}/contact`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={`/fighters/${mockFighter.id}/history`}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              View Fight History
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 