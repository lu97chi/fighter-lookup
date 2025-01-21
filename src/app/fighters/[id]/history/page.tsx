"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Trophy, Shield, Star, Award, Timer, MapPin } from "lucide-react"
import { PageTransition } from "@/components/ui/page-transition"

// Mock data for demonstration
const mockFighter = {
  id: 1,
  name: "Alex 'The Thunder' Thompson",
  image: "/profile-1.avif",
  verified: true,
  record: "15-2",
  style: "Mixed Martial Arts",
  weightClass: "Middleweight",
  careerStats: {
    totalFights: 17,
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
    averageFightTime: "2:45",
    finishRate: "87%",
    strikeAccuracy: "68%",
    takedownAccuracy: "72%"
  },
  fightHistory: [
    {
      date: "2023-12-15",
      event: "Fight Night 45",
      opponent: "Mike Wilson",
      result: "Win",
      method: "KO",
      round: 2,
      time: "2:45",
      location: "Las Vegas, USA",
      highlights: true,
      rating: 4.8,
    },
    {
      date: "2023-08-20",
      event: "Championship Series",
      opponent: "John Martinez",
      result: "Win",
      method: "Submission",
      round: 1,
      time: "4:30",
      location: "New York, USA",
      highlights: true,
      rating: 4.9,
    },
    {
      date: "2023-05-10",
      event: "Fight League 32",
      opponent: "Chris Anderson",
      result: "Loss",
      method: "Decision",
      round: 3,
      time: "5:00",
      location: "London, UK",
      highlights: false,
      rating: 4.5,
    },
    // Add more fight history as needed
  ],
  titles: [
    {
      title: "Regional MMA Champion",
      organization: "Fight League",
      year: 2022,
      defenses: 2,
    },
    {
      title: "Tournament Champion",
      organization: "Championship Series",
      year: 2021,
      defenses: 1,
    },
  ]
}

export default function FightHistoryPage() {
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/fighters/1"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fighter Profile
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Fighter Info */}
          <motion.div variants={item} className="flex items-center gap-6 rounded-lg border bg-card p-6">
            <div className="relative h-24 w-24">
              <Image
                src={mockFighter.image}
                alt={mockFighter.name}
                fill
                className="rounded-full object-cover"
              />
              {mockFighter.verified && (
                <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1 text-white shadow-lg">
                  <Shield className="h-3 w-3" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{mockFighter.name}</h1>
              <p className="text-muted-foreground">
                {mockFighter.record} • {mockFighter.style} • {mockFighter.weightClass}
              </p>
            </div>
          </motion.div>

          {/* Career Stats */}
          <motion.div variants={item} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm text-muted-foreground">Total Fights</div>
              <div className="mt-1 text-2xl font-semibold">{mockFighter.careerStats.totalFights}</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm text-muted-foreground">Finish Rate</div>
              <div className="mt-1 text-2xl font-semibold">{mockFighter.careerStats.finishRate}</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm text-muted-foreground">Strike Accuracy</div>
              <div className="mt-1 text-2xl font-semibold">{mockFighter.careerStats.strikeAccuracy}</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm text-muted-foreground">Takedown Accuracy</div>
              <div className="mt-1 text-2xl font-semibold">{mockFighter.careerStats.takedownAccuracy}</div>
            </div>
          </motion.div>

          {/* Fight Record */}
          <motion.div variants={item} className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 rounded-lg bg-primary/10 p-4">
              <div className="text-sm text-muted-foreground">Total Wins</div>
              <div className="text-3xl font-bold text-primary">{mockFighter.careerStats.wins.total}</div>
              <div className="text-sm text-muted-foreground">
                KO: {mockFighter.careerStats.wins.ko} | Sub: {mockFighter.careerStats.wins.submission} | Dec: {mockFighter.careerStats.wins.decision}
              </div>
            </div>
            <div className="space-y-2 rounded-lg bg-destructive/10 p-4">
              <div className="text-sm text-muted-foreground">Total Losses</div>
              <div className="text-3xl font-bold text-destructive">{mockFighter.careerStats.losses.total}</div>
              <div className="text-sm text-muted-foreground">
                KO: {mockFighter.careerStats.losses.ko} | Sub: {mockFighter.careerStats.losses.submission} | Dec: {mockFighter.careerStats.losses.decision}
              </div>
            </div>
          </motion.div>

          {/* Titles & Achievements */}
          <motion.div variants={item} className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">Titles & Achievements</h2>
            <div className="space-y-4">
              {mockFighter.titles.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border p-4"
                >
                  <div className="rounded-full bg-primary/10 p-3">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{title.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {title.organization} • {title.year} • {title.defenses} Title Defense{title.defenses !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fight History */}
          <motion.div variants={item} className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">Fight History</h2>
            <div className="space-y-4">
              {mockFighter.fightHistory.map((fight, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{fight.event}</div>
                        <div className="text-sm text-muted-foreground">
                          vs {fight.opponent}
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
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground sm:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      <span>Round {fight.round} • {fight.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{fight.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(fight.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>Rating: {fight.rating}</span>
                    </div>
                  </div>
                  {fight.highlights && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <Award className="h-4 w-4" />
                      <span>Fight Highlights Available</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 