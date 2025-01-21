"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedCard } from "@/components/ui/animated-card"
import Image from "next/image"

type UserRole = "fighter" | "manager" | null

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null)

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        {/* Role Selection */}
        <AnimatePresence mode="wait">
          {!selectedRole && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 flex flex-col items-center gap-8 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Choose Your Path</h1>
                <p className="text-lg text-muted-foreground">
                  Select how you want to use Fighter Lookup
                </p>
              </div>
              <div className="grid w-full gap-6 sm:grid-cols-2">
                <AnimatedCard
                  delay={0.1}
                  className={cn(
                    "group cursor-pointer p-8 text-center transition-all hover:ring-2 hover:ring-primary",
                    selectedRole === "fighter" && "ring-2 ring-primary"
                  )}
                  onClick={() => setSelectedRole("fighter")}
                >
                  <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src="/profile-1.avif"
                      alt="Fighter"
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      priority
                    />
                  </div>
                  <Trophy className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h2 className="mb-2 text-2xl font-bold">I&apos;m a Fighter</h2>
                  <p className="text-muted-foreground">
                    Create your profile, showcase your skills, and connect with managers worldwide
                  </p>
                </AnimatedCard>

                <AnimatedCard
                  delay={0.2}
                  className={cn(
                    "group cursor-pointer p-8 text-center transition-all hover:ring-2 hover:ring-primary",
                    selectedRole === "manager" && "ring-2 ring-primary"
                  )}
                  onClick={() => setSelectedRole("manager")}
                >
                  <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src="/profile-1.avif"
                      alt="Manager"
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      priority
                    />
                  </div>
                  <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h2 className="mb-2 text-2xl font-bold">I&apos;m a Manager</h2>
                  <p className="text-muted-foreground">
                    Discover talent, track prospects, and grow your roster efficiently
                  </p>
                </AnimatedCard>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Form */}
        <AnimatePresence mode="wait">
          {selectedRole && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <Image
                  src="/profile-1.avif"
                  alt={selectedRole === "fighter" ? "Fighter" : "Manager"}
                  width={800}
                  height={1000}
                  className="h-full rounded-lg object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    ← Choose different role
                  </button>
                  <h1 className="text-3xl font-bold">
                    Create Your {selectedRole === "fighter" ? "Fighter" : "Manager"} Account
                  </h1>
                  <p className="text-muted-foreground">
                    Fill in your details to get started
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  {selectedRole === "fighter" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="weight-class" className="text-sm font-medium">
                          Weight Class
                        </label>
                        <select
                          id="weight-class"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select weight class</option>
                          <option value="flyweight">Flyweight</option>
                          <option value="bantamweight">Bantamweight</option>
                          <option value="featherweight">Featherweight</option>
                          <option value="lightweight">Lightweight</option>
                          <option value="welterweight">Welterweight</option>
                          <option value="middleweight">Middleweight</option>
                          <option value="light-heavyweight">Light Heavyweight</option>
                          <option value="heavyweight">Heavyweight</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="style" className="text-sm font-medium">
                          Fighting Style
                        </label>
                        <select
                          id="style"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select style</option>
                          <option value="boxer">Boxer</option>
                          <option value="kickboxer">Kickboxer</option>
                          <option value="muay-thai">Muay Thai</option>
                          <option value="wrestler">Wrestler</option>
                          <option value="bjj">Brazilian Jiu-Jitsu</option>
                          <option value="mma">Mixed Martial Arts</option>
                        </select>
                      </div>
                    </>
                  )}

                  {selectedRole === "manager" && (
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company/Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Enter your company name"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 