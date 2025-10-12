"use client"

import { Play } from "lucide-react"

interface HeroSectionProps {
  language: "en" | "am"
}

const translations = {
  en: {
    badge: "FINANCE",
    title: "Empowering You to Save and Spend Wisely",
    subtitle:
      "Take control of your company's financial future with Financer. Take control of your company's financial future with Financer.",
    getStarted: "Get Started Free",
    watchDemo: "Watch Demo",
  },
  am: {
    badge: "ፋይናንስ",
    title: "በጥበብ እንድታስቀምጡ እና እንድታወጡ እናበረታታለን",
    subtitle: "በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ። በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ።",
    getStarted: "በነጻ ይጀምሩ",
    watchDemo: "ማሳያ ይመልከቱ",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d] overflow-hidden pb-0">
      <div className="absolute inset-0 glow-green-center pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-0 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glassmorphic-button rounded-full mb-8">
            <span className="text-white text-xs font-medium tracking-wider">{t.badge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {t.title}
          </h1>

          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 glassmorphic-button text-white rounded-full hover:bg-white/30 transition-all duration-200 text-base font-medium shadow-lg">
              {t.getStarted}
            </button>
            <button className="px-8 py-4 glassmorphic-button text-white rounded-full hover:bg-white/30 transition-all duration-200 text-base font-normal flex items-center gap-2">
              <Play className="w-5 h-5" />
              {t.watchDemo}
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto pb-0">
          <div
            className="absolute inset-0 glow-green rounded-t-3xl"
            style={{ top: "-30px", left: "-30px", right: "-30px", bottom: "0" }}
          ></div>

          <div className="relative">
            <div
              className="absolute top-0 left-0 right-0 bg-white/5 rounded-t-3xl"
              style={{
                height: "50%",
                borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 -15px 50px rgba(255, 255, 255, 0.15), 0 0 80px rgba(34, 197, 94, 0.4)",
                backdropFilter: "blur(20px)",
                pointerEvents: "none",
              }}
            ></div>

            <div className="relative bg-white rounded-t-3xl shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#22c55e] flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium text-lg">WealthPro</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="5" r="2" fill="currentColor" />
                        <circle cx="12" cy="19" r="2" fill="currentColor" />
                      </svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  </div>
                </div>

                {/* Balance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600 text-xs font-normal">Total Balance</span>
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-semibold text-gray-900">
                      $5,567<span className="text-lg text-gray-500 font-light">.00</span>
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 font-light">From last month</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600 text-xs font-normal">Total Income</span>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-semibold text-gray-900">
                      $3,533<span className="text-lg text-gray-500 font-light">.00</span>
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 font-light">Last month income</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600 text-xs font-normal">Total Expense</span>
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-semibold text-gray-900">
                      $2,324<span className="text-lg text-gray-500 font-light">.00</span>
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 font-light">Last month expense</div>
                  </div>
                </div>

                {/* Transaction Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-900 font-medium">Transactions Overview</h3>
                      <button className="text-gray-400 text-xs font-light">See All</button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 font-medium text-sm">A</span>
                          </div>
                          <div>
                            <div className="text-gray-900 font-normal text-sm">Apple Store</div>
                            <div className="text-gray-500 text-[10px] font-light">Today</div>
                          </div>
                        </div>
                        <div className="text-gray-900 font-medium">-$234.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-900 font-medium">Spending Overview</h3>
                      <button className="text-gray-400 text-xs font-light">This Year</button>
                    </div>
                    <div className="flex items-end justify-between h-24 gap-2">
                      <div
                        className="flex-1 bg-gradient-to-t from-[#22c55e] to-[#4ade80] rounded-lg"
                        style={{ height: "60%" }}
                      ></div>
                      <div className="flex-1 bg-gray-200 rounded-lg" style={{ height: "40%" }}></div>
                      <div className="flex-1 bg-gray-200 rounded-lg" style={{ height: "50%" }}></div>
                      <div className="flex-1 bg-gray-200 rounded-lg" style={{ height: "70%" }}></div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-gray-900 font-medium text-lg">$24,678.20</span>
                      <span className="text-green-500 text-xs font-normal">+12.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
