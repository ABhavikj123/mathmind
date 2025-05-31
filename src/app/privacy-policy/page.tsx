export default function PrivacyPolicyPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 dark:from-blue-900 dark:via-indigo-900 dark:to-gray-950 transition-colors duration-500 overflow-hidden">

      <svg
        className="absolute left-0 top-0 w-[400px] h-[400px] opacity-30 dark:opacity-20 blur-2xl pointer-events-none"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <circle cx="200" cy="200" r="180" fill="#6366F1" fillOpacity="0.13" />
        <circle cx="300" cy="100" r="80" fill="#60A5FA" fillOpacity="0.10" />
      </svg>

      <div className="container mx-auto px-4 py-16 relative z-10 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-900 p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-indigo-700 dark:text-blue-200 mb-8 text-center">
              Privacy Policy
            </h1>
            <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-100">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300 mt-0">Introduction</h2>
              <p>
                Welcome to MathMind. We respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">The Data We Collect About You</h2>
              <p>MathMind is designed to be privacy-friendly. We collect minimal personal information, limited to:</p>
              <ul className="list-disc pl-6">
                <li>Your chosen player name</li>
                <li>Your game progress and statistics</li>
                <li>Device information necessary for the game to function properly</li>
              </ul>
              <p>
                All game data is stored locally on your device using browser local storage. This means your game progress
                and settings remain on your device and are not transmitted to our servers.
              </p>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">How We Use Your Data</h2>
              <p>We use the limited data we collect to:</p>
              <ul className="list-disc pl-6">
                <li>Provide and maintain the game service</li>
                <li>Save your progress so you can continue where you left off</li>
                <li>Improve the game experience based on anonymous usage patterns</li>
              </ul>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">Cookies and Local Storage</h2>
              <p>
                MathMind uses local storage to save your game progress and settings. This is not shared with third parties
                and remains on your device. You can clear this data at any time through your browser settings or using the
                reset option in the game settings.
              </p>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way. Since most data is stored locally on your device, the
                security of your data also depends on your device's security.
              </p>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-300">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us through the
                contact page on our website.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-right">Last Updated: May 21, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}