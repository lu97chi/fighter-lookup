"use client"

import { PageTransition } from "@/components/ui/page-transition"
import { motion } from "framer-motion"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ApplyPage() {
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
          {/* Progress Bar */}
          <motion.div variants={item} className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Application Progress</span>
              <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            </div>
            <div className="h-2 bg-accent rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </motion.div>

          {step === 1 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Basic Information</h1>
                <p className="text-muted-foreground">Let&apos;s start with your basic details</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Record</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="e.g., 10-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Weight</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Enter your current weight"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Fight History & Documents</h1>
                <p className="text-muted-foreground">Upload your recent fight history and required documents</p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your fight record or click to upload
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Select File
                  </button>
                </div>

                <div className="rounded-lg border border-dashed p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload medical documents (if required)
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Select Files
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div variants={item} className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Additional Information</h1>
                <p className="text-muted-foreground">Final details before submitting your application</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Why are you interested in this opportunity?</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[100px]"
                    placeholder="Tell us why you're a good fit..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Availability</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="When are you available to fight?"
                  />
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <label className="text-sm text-muted-foreground">
                    I confirm that all information provided is accurate and I meet all the requirements for this opportunity
                  </label>
                </div>
              </div>
            </motion.div>
          )}

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
                Submit Application
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
} 