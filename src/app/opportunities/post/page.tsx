"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, DollarSign, Trophy, Building2, Upload, Info } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/ui/page-transition"

const eventTypes = [
  "Professional",
  "Amateur",
  "Exhibition",
  "Tournament",
]

const weightClasses = [
  "Flyweight",
  "Bantamweight",
  "Featherweight",
  "Lightweight",
  "Welterweight",
  "Middleweight",
  "Light Heavyweight",
  "Heavyweight",
]

export default function PostOpportunityPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

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
            href="/opportunities"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Opportunities
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Progress Bar */}
          <motion.div variants={item} className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Post Progress</span>
              <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            </div>
            <div className="h-2 bg-accent rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Basic Information</h1>
                <p className="text-muted-foreground">Enter the basic details of the fight opportunity</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., Professional MMA Fight Opportunity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select className="w-full rounded-md border border-input bg-background px-4 py-2">
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Weight Class</label>
                  <select className="w-full rounded-md border border-input bg-background px-4 py-2">
                    <option value="">Select weight class</option>
                    {weightClasses.map((weight) => (
                      <option key={weight} value={weight}>{weight}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Purse</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., $5,000"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Event Details</h1>
                <p className="text-muted-foreground">Provide specific details about the event</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Date</label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Application Deadline</label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Venue</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Enter venue name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contract Type</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., Single fight contract"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Requirements</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[100px]"
                    placeholder="List all fighter requirements..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Additional Information */}
          {step === 3 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Additional Information</h1>
                <p className="text-muted-foreground">Final details about the opportunity</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[150px]"
                    placeholder="Provide a detailed description of the opportunity..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Medical Requirements</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[100px]"
                    placeholder="List all medical requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Travel & Accommodation</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Specify any travel assistance or accommodation provided..."
                  />
                </div>

                <div className="rounded-lg border border-dashed p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload event images or promotional materials
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Select Files
                  </button>
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <label className="text-sm text-muted-foreground">
                    I confirm that all information provided is accurate and complies with local regulations
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <motion.div variants={item} className="flex justify-between pt-6 border-t">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            {step < totalSteps ? (
              <button
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Next Step
              </button>
            ) : (
              <button
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Post Opportunity
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 