export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-8">Privacy Policy</h1>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-800">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              Welcome to MathMind. We respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>

            <h2>The Data We Collect About You</h2>
            <p>MathMind is designed to be privacy-friendly. We collect minimal personal information, limited to:</p>
            <ul>
              <li>Your chosen player name</li>
              <li>Your game progress and statistics</li>
              <li>Device information necessary for the game to function properly</li>
            </ul>

            <p>
              All game data is stored locally on your device using browser local storage. This means your game progress
              and settings remain on your device and are not transmitted to our servers.
            </p>

            <h2>How We Use Your Data</h2>
            <p>We use the limited data we collect to:</p>
            <ul>
              <li>Provide and maintain the game service</li>
              <li>Save your progress so you can continue where you left off</li>
              <li>Improve the game experience based on anonymous usage patterns</li>
            </ul>

            <h2>Cookies and Local Storage</h2>
            <p>
              MathMind uses local storage to save your game progress and settings. This is not shared with third parties
              and remains on your device. You can clear this data at any time through your browser settings or using the
              reset option in the game settings.
            </p>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way. Since most data is stored locally on your device, the
              security of your data also depends on your device's security.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page and updating the "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us through the
              contact page on our website.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last Updated: May 20, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
