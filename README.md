# MathMind

MathMind is a modern, interactive web application designed to challenge and improve your arithmetic memory and mental math skills. The game features 100 levels of increasing difficulty, progress tracking, and a clean, responsive UI with support for both light and dark themes.

## Features

- **100 Levels:** Progressively challenging arithmetic memory puzzles.
- **Player Progress:** Your highest level and progress are saved automatically.
- **Responsive Design:** Works great on desktop and mobile devices.
- **Light & Dark Mode:** Seamless theme switching for comfortable play.
- **Modern UI:** Built with React, Next.js, and Tailwind CSS.
- **Persistent Storage:** Player name and progress are stored in localStorage.
- **MIT Licensed:** Free to use, modify, and distribute.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mathsmind.git
   cd mathsmind
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mathsmind/
│
├── src/
│   ├── app/
│   │   ├── contact/
|   |   ├── game/
|   |   ├── privacy-policy/
|   |   ├── records/             
│   │   └── settings/          
│   ├── components/           # All React components (UI, game logic, modals, etc.)
│   └── lib/                  # Utility functions (problem generator, storage, etc.)
│
├── public/                   # Static assets (images, favicon, etc.)
├── styles/                   # Global styles (if any)
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
├── Dockerfile                # Docker container definition
├── README.md                 # Project documentation
└── LICENSE                   # MIT License
```

- **Game Logic:** `src/components/game-container.tsx`, `src/lib/problem-generator.ts`
- **Progress Tracking:** `src/lib/storage.ts`, `src/app/records/page.tsx`
- **UI Components:** `src/components/hero-section.tsx`, `src/components/game-content.tsx`, etc.

## Usage

- Enter your name to start playing.
- Your progress is saved automatically.
- View your progress and records on the **Records** page.

## License

This project is licensed under the [MIT License](./LICENSE).

---

**© 2025 Bhavik Joshi**