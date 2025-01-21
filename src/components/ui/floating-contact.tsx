"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:support@fighter-lookup.com",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890",
    },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-2 flex flex-col gap-2"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.a
                  key={option.label}
                  href={option.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium shadow-lg ring-1 ring-border hover:ring-primary"
                >
                  <Icon className="h-4 w-4" />
                  {option.label}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110",
          isOpen && "bg-muted hover:bg-muted/90"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  )
} 