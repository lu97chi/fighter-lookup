"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.4,
            delay: delay * 0.2,
            bounce: 0.1
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
} 