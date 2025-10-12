"use client"

interface FeaturesSectionProps {
  language: "en" | "am"
}

const translations = {
  en: {
    badge: "Powerful Features",
    title: "Finance for the Modern Business",
    subtitle: "Take control of your company's financial future with Financer.",
    feature1Title: "Smart Invoicing",
    feature1Desc: "Manage Invoices for Your Business",
    feature2Title: "Real-time Analytics",
    feature2Desc: "Track Your Financial Data in Real-Time",
    feature3Title: "24/7 Support Chatbot",
    feature3Desc: "Get Assistance 24/7 with Questions",
    learnMore: "Learn more",
  },
  am: {
    badge: "ኃይለኛ ባህሪያት",
    title: "ለዘመናዊ ንግድ ፋይናንስ",
    subtitle: "በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ።",
    feature1Title: "ብልህ ደረሰኝ",
    feature1Desc: "ለንግድዎ ደረሰኞችን ያስተዳድሩ",
    feature2Title: "በእውነተኛ ጊዜ ትንተና",
    feature2Desc: "የፋይናንስ መረጃዎን በእውነተኛ ጊዜ ይከታተሉ",
    feature3Title: "24/7 የድጋፍ ቻትቦት",
    feature3Desc: "በጥያቄዎች 24/7 እገዛ ያግኙ",
    learnMore: "ተጨማሪ ይወቁ",
  },
}

export function FeaturesSection({ language }: FeaturesSectionProps) {
  const t = translations[language]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full mb-4">
            <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              </svg>
            </div>
            <span className="text-[#22c55e] text-sm font-medium">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">{t.subtitle}</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Smart Invoicing */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#22c55e" strokeWidth="2" />
                <path d="M8 10h8M8 14h5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.feature1Title}</h3>
            <p className="text-gray-600 mb-6 text-sm font-light">{t.feature1Desc}</p>
            <button className="flex items-center gap-2 text-[#22c55e] font-medium hover:gap-3 transition-all duration-200">
              <span>{t.learnMore}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Real-time Analytics - Featured */}
          <div className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 md:scale-105">
            <div className="w-14 h-14 rounded-2xl glassmorphic-button flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M7 14l4-4 4 4 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{t.feature2Title}</h3>
            <p className="text-white/90 mb-6 text-sm font-light">{t.feature2Desc}</p>
            <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-200">
              <span>{t.learnMore}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="1" fill="#22c55e" />
                <circle cx="12" cy="10" r="1" fill="#22c55e" />
                <circle cx="15" cy="10" r="1" fill="#22c55e" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.feature3Title}</h3>
            <p className="text-gray-600 mb-6 text-sm font-light">{t.feature3Desc}</p>
            <button className="flex items-center gap-2 text-[#22c55e] font-medium hover:gap-3 transition-all duration-200">
              <span>{t.learnMore}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
