"use client"

interface TrustSectionProps {
  language: "en" | "am"
}

const translations = {
  en: {
    title: "Trusted By More Than",
    count: "1000+",
    subtitle: "Companies",
  },
  am: {
    title: "በበለጠ ታምነዋል",
    count: "1000+",
    subtitle: "ኩባንያዎች",
  },
}

export function TrustSection({ language }: TrustSectionProps) {
  const t = translations[language]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {t.title} <span className="text-[#8B7FFF]">{t.count}</span> {t.subtitle}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {/* Evernote */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Evernote</span>
          </div>

          {/* Grammarly */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">grammarly</span>
          </div>

          {/* HubSpot */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">HubSpot</span>
          </div>

          {/* Shopify */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h18v18H3z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">shopify</span>
          </div>

          {/* Spotify */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9c3 0 6 1 9 3M6 12c3 0 6 1 9 3M6 15c3 0 6 1 9 3" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Spotify</span>
          </div>
        </div>
      </div>
    </section>
  )
}
