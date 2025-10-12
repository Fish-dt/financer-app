"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "am">("en")

  return (
    <main className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <TrustSection language={language} />
      <FeaturesSection language={language} />
      <AboutSection language={language} />
      <TestimonialsSection language={language} />
      <Footer language={language} />
    </main>
  )
}
