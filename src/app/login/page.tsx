"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="grid w-full max-w-[1200px] gap-8 lg:grid-cols-2">
        {/* Left Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to your Fighter Lookup account
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign In <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Image
                src="https://placehold.co/20x20/333/FFF?text=G"
                alt="Google"
                width={20}
                height={20}
                className="rounded-sm"
              />
              Google
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Image
                src="https://placehold.co/20x20/333/FFF?text=A"
                alt="Apple"
                width={20}
                height={20}
                className="rounded-sm"
              />
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
          <Image
            src="https://placehold.co/800x1000/333/FFF?text=Fighter+Lookup"
            alt="Login"
            width={800}
            height={1000}
            className="h-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <blockquote className="space-y-2 bg-background/95 p-6 backdrop-blur">
              <p className="text-lg">
                &ldquo;Fighter Lookup has transformed how I connect with opportunities in the industry.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                ― Alex Thompson, Professional MMA Fighter
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 