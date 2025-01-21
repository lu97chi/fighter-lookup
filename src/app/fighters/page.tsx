"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Star, Shield, ChevronRight, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

const locations = [
  "All Locations",
  "Las Vegas, USA",
  "London, UK",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Rio de Janeiro, Brazil"
]

const weightClasses = [
  "All Weight Classes",
  "Heavyweight",
  "Light Heavyweight",
  "Middleweight",
  "Welterweight",
  "Lightweight",
  "Featherweight",
  "Bantamweight",
  "Flyweight"
]

const mockFighters = [
  {
    id: "1",
    name: "Alex 'The Thunder' Thompson",
    location: "Las Vegas, USA",
    weightClass: "Middleweight",
    record: "15-2-0",
    rating: 4.8,
    verified: true,
    available: true,
    image: "/profile-1.avif"
  },
  {
    id: "2",
    name: "Sarah 'The Striker' Martinez",
    location: "London, UK",
    weightClass: "Bantamweight",
    record: "12-1-0",
    rating: 4.9,
    verified: true,
    available: true,
    image: "/profile-1.avif"
  },
  {
    id: "3",
    name: "Mike 'Iron Fist' Chen",
    location: "Tokyo, Japan",
    weightClass: "Welterweight",
    record: "18-3-0",
    rating: 4.7,
    verified: true,
    available: false,
    image: "/profile-1.avif"
  },
  {
    id: "4",
    name: "Lisa 'The Phoenix' Anderson",
    location: "Sydney, Australia",
    weightClass: "Flyweight",
    record: "10-0-0",
    rating: 5.0,
    verified: true,
    available: true,
    image: "/profile-1.avif"
  },
  {
    id: "5",
    name: "Carlos 'The Jaguar' Silva",
    location: "Rio de Janeiro, Brazil",
    weightClass: "Lightweight",
    record: "14-2-1",
    rating: 4.6,
    verified: true,
    available: true,
    image: "/profile-1.avif"
  },
  {
    id: "6",
    name: "Emma 'The Hurricane' Wilson",
    location: "London, UK",
    weightClass: "Featherweight",
    record: "11-1-0",
    rating: 4.8,
    verified: true,
    available: true,
    image: "/profile-1.avif"
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

export default function FightersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedWeightClass, setSelectedWeightClass] = useState("All Weight Classes")
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false)

  const filteredFighters = mockFighters.filter(fighter => {
    const matchesSearch = fighter.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = selectedLocation === "All Locations" || fighter.location === selectedLocation
    const matchesWeightClass = selectedWeightClass === "All Weight Classes" || fighter.weightClass === selectedWeightClass
    const matchesAvailability = !showAvailableOnly || fighter.available
    const matchesVerification = !showVerifiedOnly || fighter.verified

    return matchesSearch && matchesLocation && matchesWeightClass && matchesAvailability && matchesVerification
  })

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20">
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
                Find Your Next Fight
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Connect with verified fighters worldwide. Filter by location, weight class, and availability.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <AnimatedSection className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search fighters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border bg-background"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <select
                value={selectedWeightClass}
                onChange={(e) => setSelectedWeightClass(e.target.value)}
                className="px-4 py-2 rounded-lg border bg-background"
              >
                {weightClasses.map((weightClass) => (
                  <option key={weightClass} value={weightClass}>{weightClass}</option>
                ))}
              </select>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className="rounded border-primary"
                />
                <label htmlFor="available" className="text-sm">Available Only</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showVerifiedOnly}
                  onChange={(e) => setShowVerifiedOnly(e.target.checked)}
                  className="rounded border-primary"
                />
                <label htmlFor="verified" className="text-sm">Verified Only</label>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Results Section */}
      <AnimatedSection className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredFighters.length} {filteredFighters.length === 1 ? "fighter" : "fighters"} found
            </h2>
            <select className="px-4 py-2 rounded-lg border bg-background">
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
              <option value="location">Sort by Location</option>
            </select>
          </div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredFighters.map((fighter) => (
              <Link key={fighter.id} href={`/fighters/${fighter.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="group rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={fighter.image}
                      alt={fighter.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-white">{fighter.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin className="h-4 w-4" />
                        <span>{fighter.location}</span>
                      </div>
                    </div>
                    {fighter.verified && (
                      <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Verified
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{fighter.weightClass}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>{fighter.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Record: {fighter.record}</div>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                        fighter.available 
                          ? "bg-green-500/10 text-green-500" 
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}>
                        {fighter.available ? "Available" : "Not Available"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Ready to Join?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create your fighter profile and start connecting with promoters worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Create Profile <ChevronRight className="ml-2 h-5 w-5" />
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