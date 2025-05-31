'use client'
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowToPlaySection from "@/components/how-to-play-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <FeaturesSection />
      <HowToPlaySection />
      <CTASection />
    </div>

  )
}
