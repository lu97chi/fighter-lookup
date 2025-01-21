"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Home, Users, Trophy, Info, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/fighters", label: "Fighters", icon: Users },
  { href: "/opportunities", label: "Opportunities", icon: Trophy },
  { href: "/about", label: "About", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-4 w-4 transition-transform" />
        ) : (
          <Menu className="h-4 w-4 transition-transform" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 h-full w-3/4 bg-background p-6 shadow-lg"
            >
              <div className="flex flex-col space-y-6">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {links.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="h-4 w-4" />
                            {link.label}
                          </span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Auth Buttons */}
                <div className="space-y-4 border-t pt-6">
                  <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/login"
                      onClick={toggleMenu}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent"
                    >
                      Sign In
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/signup"
                      onClick={toggleMenu}
                      className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 