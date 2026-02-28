# 🦜 OpenMacaw Website

**The high-performance source code for [openmacaw.com](https://openmacaw.com).**

This repository contains the React/Vite source code for the OpenMacaw landing page. It is designed to be a high-conversion, "Apple-esque" showcase of the OpenMacaw mission, utilizing 2026 design trends like modular Bento Grids and scroll-triggered storytelling.

## 🛠️ Tech Stack

- **Framework:** [React 18+](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🎨 Design Philosophy
- **Glassmorphism 2.0:** Deep background blurs (`backdrop-blur-xl`) and high-contrast translucent borders.
- **Bento Architecture:** Information density managed via responsive, grid-based layouts.
- **Motion Storytelling:** Subtle, scroll-linked reveals to keep the user engaged with the "Macaw" narrative.

## 🚀 Local Development

To run the landing page locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OpenMacaw/openmacaw-website.git
   cd openmacaw-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:5173`.*

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `/src/components`: Modular React components (Hero, FeatureBento, WhySection, etc.)
- `/src/App.tsx`: The main page wrapper and layout engine.
- `/public`: Static assets (Logos, mockups).
- `.geminirules`: AI-system instructions for maintaining consistent design patterns in Google Antigravity.

## 🤝 Contributing
The website is the "First Impression" of the OpenMacaw movement. We welcome PRs that:
- Improve mobile responsiveness.
- Optimize asset loading/LCP.
- Enhance animations or accessibility.

*Note: For the actual OpenMacaw application code, visit the [Main Repository](https://github.com/silentoplayz/OpenMacaw).*

---
© 2026 OpenMacaw. Built for the Mac. 🦜
