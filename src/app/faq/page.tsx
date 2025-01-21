"use client"

import { FAQItem } from "@/components/ui/faq-item"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Fighter Lookup?",
          a: "Fighter Lookup is a professional platform connecting fighters with career opportunities and managers. We provide tools for fighters to showcase their talents and for managers to discover and evaluate new talent efficiently."
        },
        {
          q: "How does Fighter Lookup verify profiles?",
          a: "We verify all profiles through a comprehensive process that includes document verification, professional references, and background checks to ensure the authenticity of both fighters and managers."
        },
        {
          q: "Is Fighter Lookup available worldwide?",
          a: "Yes, Fighter Lookup is available globally. We support multiple languages and have users from over 50 countries."
        }
      ]
    },
    {
      category: "For Fighters",
      questions: [
        {
          q: "How do I create a professional profile?",
          a: "Creating a profile is simple. Sign up, verify your identity, and follow our profile completion guide. You can add your fight history, upload videos, share achievements, and set your availability status."
        },
        {
          q: "What media can I upload?",
          a: "You can upload photos, videos, fight highlights, training footage, and documents. We support direct uploads and integration with platforms like YouTube and Vimeo."
        },
        {
          q: "How do I connect with managers?",
          a: "You can receive connection requests from interested managers or proactively reach out through our messaging system. Premium members can also boost their profiles for increased visibility."
        }
      ]
    },
    {
      category: "For Managers",
      questions: [
        {
          q: "How do I find fighters?",
          a: "Use our advanced search features to filter fighters by weight class, experience, location, and more. Save searches and receive notifications when new fighters match your criteria."
        },
        {
          q: "What tools are available for talent tracking?",
          a: "Our platform provides tools for organizing prospects, making notes, tracking interactions, and managing your talent pipeline. Premium features include analytics and API access."
        },
        {
          q: "How secure is the platform?",
          a: "We implement industry-standard security measures, including encrypted communications, secure data storage, and privacy controls for sensitive information."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          q: "What plans are available?",
          a: "We offer three main plans: Fighter Basic (free), Fighter Pro, and Manager. Each plan includes different features and capabilities tailored to specific needs."
        },
        {
          q: "Can I change plans?",
          a: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 14-day money-back guarantee for all paid plans. Contact our support team for refund requests."
        }
      ]
    }
  ]

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <AnimatedSection className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Frequently Asked Questions
        </h1>
        <p className="max-w-[900px] text-lg text-muted-foreground sm:text-xl">
          Find answers to common questions about Fighter Lookup.
        </p>
      </AnimatedSection>

      <div className="mt-16 flex flex-col gap-8">
        {faqs.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: `${index * -100}px` }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border p-6"
          >
            <h2 className="text-2xl font-bold">{section.category}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.questions.map((faq, faqIndex) => (
                <FAQItem
                  key={faqIndex}
                  question={faq.q}
                  answer={faq.a}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatedSection className="mt-16">
        <div className="rounded-lg border p-6 text-center">
          <h2 className="text-xl font-semibold">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground">
            Our support team is here to help.
          </p>
          <a
            href="mailto:support@fighter-lookup.com"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Support
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
} 