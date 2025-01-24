"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={cn("min-h-[calc(100vh-4rem)]", className)}>
      {isMounted ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  )
} 