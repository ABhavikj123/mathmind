"use client"

import { AtSign, Coffee, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Us</h2>

              <div className="space-y-4">
                <a
                  href="mailto:bhavikjoshi8989@gmail.com"
                  className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors"
                >
                  <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded-full mr-3">
                    <AtSign className="text-purple-600 dark:text-purple-300" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Email Us</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bhavik Joshi</p>
                  </div>
                </a>

                <a
                  href="https://x.com/BhavikJoshi7738?t=LoLtZqEyG8UYbYKt2aaDYw&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                >
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                    <Twitter className="text-blue-600 dark:text-blue-300" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">X</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@BhavikJoshi7738</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ABhavikj123/mathmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full mr-3">
                    <Github className="text-gray-700 dark:text-gray-300" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">github.com/ABhavikj123</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bhavik-joshi-0b0636261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                >
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                    <Linkedin className="text-blue-700 dark:text-blue-300" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bhavik Joshi</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Support Our Work</h2>

              <a
                href="https://buymeacoffee.com/bhavikjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 rounded-lg transition-colors"
              >
                <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded-full mr-3">
                  <Coffee className="text-yellow-700 dark:text-yellow-300" size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Buy Me a Coffee</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Support the development of MathMind</p>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-purple-700 dark:text-purple-400 mb-1">How do I report a bug?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can report bugs by sending an email or by creating an issue on our GitHub
                  repository.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-purple-700 dark:text-purple-400 mb-1">Is MathMind free to use?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, MathMind is completely free to use. We rely on donations and support from users like you to keep
                  improving the game.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-purple-700 dark:text-purple-400 mb-1">Can I suggest new features?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We love hearing your ideas. Send your suggestions to ideas@mathmind.com or reach out on social media.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-purple-700 dark:text-purple-400 mb-1">
                  How can I contribute to the project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can contribute by reporting bugs, suggesting features, or even submitting pull requests on our
                  GitHub repository if you're a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
