"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/fighters", label: "Fighters" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative px-1 py-2 text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
            {isActive && (
              <motion.div
                layoutId="navbar-active"
                className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        )
      })}
      <Link
        href="/signup"
        className="group relative px-4 py-2 text-sm font-medium"
      >
        <motion.div
          initial={false}
          className="absolute inset-0 rounded-md bg-primary transition-all group-hover:scale-105"
        />
        <span className="relative z-10 text-primary-foreground">Get Started</span>
      </Link>
    </nav>
  )
} 