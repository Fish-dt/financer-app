"use client"

import { Globe } from "lucide-react"

interface NavbarProps {
  language: "en" | "am"
  setLanguage: (lang: "en" | "am") => void
}

const translations = {
  en: {
    about: "About",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    login: "Log In",
    signUp: "Sign Up",
  },
  am: {
    about: "ስለ እኛ",
    features: "ባህሪያት",
    pricing: "ዋጋ",
    contact: "ያግኙን",
    login: "ግባ",
    signUp: "ተመዝገብ",
  },
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const t = translations[language]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#22c55e" />
              <path
                d="M2 17L12 22L22 17"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white text-xl font-medium">Financer</span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-2 glassmorphic-button rounded-full px-2 py-2">
          <a
            href="/about"
            className="px-5 py-2 text-white hover:bg-white hover:text-[#22c55e] rounded-full transition-all duration-200 text-sm font-normal"
          >
            {t.about}
          </a>
          <a
            href="/features"
            className="px-5 py-2 text-white hover:bg-white hover:text-[#22c55e] rounded-full transition-all duration-200 text-sm font-normal"
          >
            {t.features}
          </a>
          <a
            href="/pricing"
            className="px-5 py-2 text-white hover:bg-white hover:text-[#22c55e] rounded-full transition-all duration-200 text-sm font-normal"
          >
            {t.pricing}
          </a>
          <a
            href="/contact"
            className="px-5 py-2 text-white hover:bg-white hover:text-[#22c55e] rounded-full transition-all duration-200 text-sm font-normal"
          >
            {t.contact}
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "am" : "en")}
            className="p-2 text-white hover:bg-white/20 rounded-full transition-all duration-200"
            aria-label="Change language"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button className="px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-200 text-sm font-normal">
            {t.login}
          </button>
          <button className="px-6 py-2.5 glassmorphic-button text-white rounded-full hover:bg-white/30 transition-all duration-200 text-sm font-medium">
            {t.signUp}
          </button>
        </div>
      </div>
    </nav>
  )
}
