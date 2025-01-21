"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition" | "whileHover"> {
  children: React.ReactNode
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background p-6 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
} 