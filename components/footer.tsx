"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

interface FooterProps {
  language: "en" | "am"
}

const translations = {
  en: {
    company: "Company",
    about: "About Us",
    careers: "Careers",
    press: "Press",
    blog: "Blog",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    security: "Security",
    enterprise: "Enterprise",
    support: "Support",
    helpCenter: "Help Center",
    documentation: "Documentation",
    community: "Community",
    contact: "Contact Us",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    newsletter: "Subscribe to our newsletter",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    rights: "All rights reserved.",
    description: "Empowering businesses with modern financial solutions for better money management.",
  },
  am: {
    company: "ኩባንያ",
    about: "ስለ እኛ",
    careers: "የስራ እድሎች",
    press: "ፕሬስ",
    blog: "ብሎግ",
    product: "ምርት",
    features: "ባህሪያት",
    pricing: "ዋጋ",
    security: "ደህንነት",
    enterprise: "ኢንተርፕራይዝ",
    support: "ድጋፍ",
    helpCenter: "የእገዛ ማዕከል",
    documentation: "ሰነዶች",
    community: "ማህበረሰብ",
    contact: "ያግኙን",
    legal: "ህጋዊ",
    privacy: "የግላዊነት ፖሊሲ",
    terms: "የአገልግሎት ውል",
    cookies: "የኩኪ ፖሊሲ",
    newsletter: "ለዜና መጽሔታችን ይመዝገቡ",
    emailPlaceholder: "ኢሜልዎን ያስገቡ",
    subscribe: "ይመዝገቡ",
    rights: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    description: "ለተሻለ የገንዘብ አስተዳደር ንግዶችን በዘመናዊ የፋይናንስ መፍትሄዎች እናበረታታለን።",
  },
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold">Financer</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">{t.description}</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#22c55e] flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#22c55e] flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#22c55e] flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#22c55e] flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.careers}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.press}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.blog}
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t.product}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/features" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.features}
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.pricing}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.security}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.enterprise}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t.support}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.documentation}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.community}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t.legal}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm font-light">
                  {t.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3 text-sm">{t.newsletter}</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#22c55e] transition-colors text-sm font-light"
              />
              <button className="px-6 py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full transition-all duration-200 text-sm font-medium">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-light">© 2025 Financer. {t.rights}</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#22c55e] transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="font-light">hello@financer.com</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#22c55e] transition-colors flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="font-light">+1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
