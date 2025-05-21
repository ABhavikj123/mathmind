'use client'
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Challenge Your Brain?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Start playing MathMind today and see how far you can go. Track your progress and improve your skills with each
          level.
        </p>
        <Link
          href="/game"
          className=" bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center mx-auto w-auto"
        >
          Play Now
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  )
}
