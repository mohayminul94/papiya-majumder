# Papiya Rani Majumder – Executive Portfolio Website

A premium, modern, and fully responsive personal branding portfolio website built for **Papiya Rani Majumder** — Digital Marketing Manager, Google Ads Specialist, and Performance Marketing Expert (*"The PPC Queen"*).

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript / JSX only (Strictly No TypeScript)
- **Styling:** Tailwind CSS (Custom executive navy, violet & purple palette)
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS hardware-accelerated transitions
- **Celebration Effects:** Canvas Confetti
- **Typography:** Google Fonts (Plus Jakarta Sans, Inter, Hind Siliguri for Bengali)
- **Internationalization:** Native English / Bengali (বাংলা) dynamic switcher
- **Theming:** Seamless Dark Mode / Light Mode toggle with local storage persistence

---

## 📁 Project Structure

```
papiya-portfolio/
├── app/
│   ├── globals.css         # Custom typography, glassmorphism, subtle grid patterns
│   ├── layout.jsx          # SEO, OpenGraph metadata, theme & language providers
│   └── page.jsx            # Assembled landing page
├── components/
│   ├── Navbar.jsx          # Sticky glass navigation, mobile drawer, EN/BN switcher, theme toggle
│   ├── Hero.jsx            # Impactful hero with real portrait photo, badges, dual CTAs
│   ├── About.jsx           # Executive summary & 5 key leadership highlights
│   ├── CoreExpertise.jsx   # 15 skill cards with interactive category tabs
│   ├── Experience.jsx      # Vertical career timeline (Ilmify Tech Agency & Scale-up Ad Agency)
│   ├── Certifications.jsx  # 4 official credentials with verification badges
│   ├── Achievements.jsx    # 6 career milestones with interactive confetti triggers
│   ├── Industries.jsx      # 12 industries served in responsive grid
│   ├── Strengths.jsx       # 6 strategic advantage cards
│   ├── Education.jsx       # Academic credentials timeline
│   ├── Contact.jsx         # Contact cards, social links & validated inquiry form
│   ├── Footer.jsx          # Branding, quick navigation & back-to-top button
│   ├── CvModal.jsx         # Printable & downloadable Curriculum Vitae
│   └── IconHelper.jsx      # Dynamic Lucide icon mapper
├── context/
│   ├── LanguageContext.jsx # EN/BN toggle state provider
│   └── ThemeContext.jsx    # Dark/Light mode state provider
├── data/
│   └── portfolioData.js    # Source of truth data (bilingual English & Bengali)
├── public/
│   └── images/
│       └── papiya-profile.jpg # Professional portrait image
├── package.json
└── tailwind.config.js
```

---

## 🛠️ How to Run Locally

1. Open a terminal in the project directory:
   ```bash
   cd C:\Users\mohay\.gemini\antigravity\scratch\papiya-portfolio
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. For production build:
   ```bash
   npm run build
   npm run start
   ```
