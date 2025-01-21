"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      className={cn("min-h-[calc(100vh-4rem)]", className)}
    >
      {children}
    </motion.div>
  )
} 