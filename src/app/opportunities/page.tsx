"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Trophy, Clock, Users, ChevronRight, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

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

const locations = [
  "All Locations",
  "Las Vegas, USA",
  "London, UK",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Rio de Janeiro, Brazil"
]

const mockOpportunities = [
  {
    id: "1",
    title: "Main Event Fight Night",
    location: "Las Vegas, USA",
    weightClass: "Middleweight",
    purse: "$10,000",
    date: "2024-06-15",
    applicants: 12,
    featured: true,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-05-15"
  },
  {
    id: "2",
    title: "European Championship",
    location: "London, UK",
    weightClass: "Lightweight",
    purse: "$15,000",
    date: "2024-07-20",
    applicants: 24,
    featured: true,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-06-20"
  },
  {
    id: "3",
    title: "Rising Stars Tournament",
    location: "Tokyo, Japan",
    weightClass: "Welterweight",
    purse: "$8,000",
    date: "2024-08-10",
    applicants: 8,
    featured: false,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-07-10"
  },
  {
    id: "4",
    title: "Pacific Fight Series",
    location: "Sydney, Australia",
    weightClass: "Featherweight",
    purse: "$12,000",
    date: "2024-09-05",
    applicants: 15,
    featured: false,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-08-05"
  },
  {
    id: "5",
    title: "South American Showdown",
    location: "Rio de Janeiro, Brazil",
    weightClass: "Heavyweight",
    purse: "$20,000",
    date: "2024-10-15",
    applicants: 18,
    featured: true,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-09-15"
  },
  {
    id: "6",
    title: "Fight Night Series",
    location: "Las Vegas, USA",
    weightClass: "Bantamweight",
    purse: "$7,500",
    date: "2024-11-20",
    applicants: 10,
    featured: false,
    verified: true,
    image: "/profile-1.avif",
    deadline: "2024-10-20"
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

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedWeightClass, setSelectedWeightClass] = useState("All Weight Classes")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false)

  const filteredOpportunities = mockOpportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = selectedLocation === "All Locations" || opportunity.location === selectedLocation
    const matchesWeightClass = selectedWeightClass === "All Weight Classes" || opportunity.weightClass === selectedWeightClass
    const matchesFeatured = !showFeaturedOnly || opportunity.featured
    const matchesVerified = !showVerifiedOnly || opportunity.verified

    return matchesSearch && matchesLocation && matchesWeightClass && matchesFeatured && matchesVerified
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
                Find Fight Opportunities
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Discover verified fight opportunities from promoters worldwide
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <Link
                  href="/opportunities/post"
                  className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
                >
                  Post Opportunity <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
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
                  placeholder="Search opportunities..."
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
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="rounded border-primary"
                />
                <label htmlFor="featured" className="text-sm">Featured Only</label>
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
              {filteredOpportunities.length} {filteredOpportunities.length === 1 ? "opportunity" : "opportunities"} found
            </h2>
            <select className="px-4 py-2 rounded-lg border bg-background">
              <option value="date">Sort by Date</option>
              <option value="purse">Sort by Purse</option>
              <option value="location">Sort by Location</option>
            </select>
          </div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredOpportunities.map((opportunity) => (
              <Link key={opportunity.id} href={`/opportunities/${opportunity.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="group rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={opportunity.image}
                      alt={opportunity.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-white">{opportunity.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin className="h-4 w-4" />
                        <span>{opportunity.location}</span>
                      </div>
                    </div>
                    {opportunity.featured && (
                      <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Trophy className="h-3 w-3" />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{opportunity.weightClass}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{opportunity.purse}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{new Date(opportunity.date).toLocaleDateString()}</span>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                        {opportunity.applicants} Applicants
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Ready to Post?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create your opportunity listing and connect with fighters worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/opportunities/post"
                className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary hover:scale-105 hover:shadow-xl"
              >
                Post Opportunity <ChevronRight className="ml-2 h-5 w-5" />
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