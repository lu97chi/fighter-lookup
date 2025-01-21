"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MainNav } from "@/components/shared/main-nav"
import { MobileNav } from "@/components/shared/mobile-nav"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-primary px-3 py-2 text-lg font-bold text-primary-foreground"
          >
            FL
          </motion.div>
          <span className="hidden font-bold sm:inline-block">
            Fighter Lookup
          </span>
        </Link>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sign In
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
} 