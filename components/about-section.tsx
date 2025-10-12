"use client"

interface AboutSectionProps {
  language: "en" | "am"
}

const translations = {
  en: {
    badge: "Powerful Features",
    title: "Finance for the Modern Business",
    subtitle:
      "Take control of your company's financial future with Financer. Take control of your company's financial future with Financer.",
    feature1: "Data Insights with Advanced Reporting Tools",
    feature2: "Drive Decisions with Real-Time Analytics",
    feature3: "Optimize Performance through User Feedback",
    feature4: "Enhance Collaboration with Streamlined Workflows",
    stat1: "150k+",
    stat1Label: "Users",
    stat2: "100k+",
    stat2Label: "Downloads",
    stat3: "99%",
    stat3Label: "User Satisfaction",
    stat4: "10:1",
    stat4Label: "Countries",
    useCaseTitle: "Finance for the Modern Business",
    useCaseSubtitle:
      "Take control of your company's financial future with Financer. Take control of your company's financial future with Financer.",
    businessLeaders: "For Business Leaders",
    businessLeadersDesc: "Powerful solutions and insights crafted to help business leaders make informed decisions.",
    users: "Users",
    modernSolutions: "Modern Solutions to Track Your Finances",
    modernSolutionsDesc:
      "Easily monitor your income, expenses, and budgets with smart tools designed for today's fast-paced world.",
    globalTitle: "Trusted by Businesses Around the World",
    globalDesc:
      "From small startups to large enterprises, our solutions for drive growth across industries, and empower their goals with confidence.",
    globalSupport: "Global Support, Anytime, Anywhere",
    globalSupportDesc: "Our dedicated team is available 24/7 to assist wherever you are, no matter your time zone.",
  },
  am: {
    badge: "ኃይለኛ ባህሪያት",
    title: "ለዘመናዊ ንግድ ፋይናንስ",
    subtitle: "በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ። በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ።",
    feature1: "በላቀ የሪፖርት መሳሪያዎች የመረጃ ግንዛቤዎች",
    feature2: "በእውነተኛ ጊዜ ትንተና ውሳኔዎችን ያንቀሳቅሱ",
    feature3: "በተጠቃሚ ግብረመልስ አፈጻጸምን ያሻሽሉ",
    feature4: "በተቀላጠፈ የስራ ፍሰት ትብብርን ያሳድጉ",
    stat1: "150ሺ+",
    stat1Label: "ተጠቃሚዎች",
    stat2: "100ሺ+",
    stat2Label: "ማውረዶች",
    stat3: "99%",
    stat3Label: "የተጠቃሚ እርካታ",
    stat4: "10:1",
    stat4Label: "አገሮች",
    useCaseTitle: "ለዘመናዊ ንግድ ፋይናንስ",
    useCaseSubtitle: "በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ። በፋይናንሰር የኩባንያዎን የፋይናንስ ወደፊት ይቆጣጠሩ።",
    businessLeaders: "ለንግድ መሪዎች",
    businessLeadersDesc: "የንግድ መሪዎች በመረጃ ላይ የተመሰረተ ውሳኔ እንዲያደርጉ የተዘጋጁ ኃይለኛ መፍትሄዎች እና ግንዛቤዎች።",
    users: "ተጠቃሚዎች",
    modernSolutions: "ፋይናንስዎን ለመከታተል ዘመናዊ መፍትሄዎች",
    modernSolutionsDesc: "ለዛሬው ፈጣን ዓለም የተነደፉ ብልህ መሳሪያዎችን በመጠቀም ገቢዎን፣ ወጪዎችን እና በጀቶችን በቀላሉ ይከታተሉ።",
    globalTitle: "በዓለም ዙሪያ በንግዶች የታመነ",
    globalDesc: "ከትናንሽ ጅምሮች እስከ ትላልቅ ድርጅቶች፣ መፍትሄዎቻችን በኢንዱስትሪዎች ዕድገትን ያሳድጋሉ።",
    globalSupport: "ዓለም አቀፍ ድጋፍ፣ በማንኛውም ጊዜ፣ በማንኛውም ቦታ",
    globalSupportDesc: "የእኛ ቁርጠኛ ቡድን የትም ቢሆኑ፣ የጊዜ ዞንዎ ምንም ይሁን ምን 24/7 ለመርዳት ዝግጁ ነው።",
  },
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  return (
    <>
      {/* About Section with Team Photo */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full mb-6">
                <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  </svg>
                </div>
                <span className="text-[#22c55e] text-sm font-medium">{t.badge}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">{t.title}</h2>

              <p className="text-gray-600 text-base mb-8 font-light">{t.subtitle}</p>

              <div className="space-y-4">
                {[t.feature1, t.feature2, t.feature3, t.feature4].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="#22c55e"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-business-team-of-three-people-in-mode.jpg"
                  alt="Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Users */}
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="7" r="4" stroke="#22c55e" strokeWidth="2" />
                  <path
                    d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">{t.stat1}</div>
              <div className="text-gray-600 text-xs font-light">{t.stat1Label}</div>
            </div>

            <div className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl glassmorphic-button flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-4xl font-semibold text-white mb-2">{t.stat2}</div>
              <div className="text-white/90 text-xs font-light">{t.stat2Label}</div>
            </div>

            {/* User Satisfaction */}
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
                  <path
                    d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">{t.stat3}</div>
              <div className="text-gray-600 text-xs font-light">{t.stat3Label}</div>
            </div>

            {/* Countries */}
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">{t.stat4}</div>
              <div className="text-gray-600 text-xs font-light">{t.stat4Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full mb-4">
              <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                </svg>
              </div>
              <span className="text-[#22c55e] text-sm font-medium">USE CASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">{t.useCaseTitle}</h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto font-light">{t.useCaseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Leaders */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.businessLeaders}</h3>
              <p className="text-gray-600 mb-8 text-sm font-light">{t.businessLeadersDesc}</p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium text-sm">{t.users}</span>
                  <span className="text-gray-900 font-semibold text-2xl">$942,325.44</span>
                </div>
                <div className="flex gap-1 mb-4">
                  <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-xs font-normal">
                    Weekly
                  </button>
                  <button className="px-4 py-1.5 bg-white text-gray-600 rounded-full text-xs font-normal hover:bg-gray-100">
                    Annually
                  </button>
                  <button className="px-4 py-1.5 bg-white text-gray-600 rounded-full text-xs font-normal hover:bg-gray-100">
                    Monthly
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 h-48">
                {[
                  { height: "85%", label: "85%" },
                  { height: "60%", label: "60%" },
                  { height: "95%", label: "95%" },
                  { height: "70%", label: "70%" },
                ].map((bar, index) => (
                  <div key={index} className="flex flex-col items-center justify-end">
                    <div
                      className="w-full bg-gradient-to-t from-[#22c55e] to-[#4ade80] rounded-t-xl"
                      style={{ height: bar.height }}
                    ></div>
                    <span className="text-[10px] text-gray-500 mt-2 font-light">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modern Solutions */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.modernSolutions}</h3>
              <p className="text-gray-600 mb-8 text-sm font-light">{t.modernSolutionsDesc}</p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium text-sm">Yearly</span>
                  <span className="text-gray-900 font-semibold text-2xl">$6,689.20</span>
                </div>
              </div>

              <div className="relative h-48 flex items-end justify-between gap-2">
                {[30, 45, 35, 60, 40, 70, 50, 80, 65, 75, 60, 85].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-[#22c55e]/30 to-[#4ade80]/10 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-light">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Trusted by Businesses */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{t.globalTitle}</h2>
              <p className="text-gray-600 mb-8 text-sm font-light">{t.globalDesc}</p>

              <div className="space-y-4">
                {[
                  { country: "United States", flag: "🇺🇸", subtitle: "Fintech, E-commerce & Technology", progress: 85 },
                  { country: "Bangladesh", flag: "🇧🇩", subtitle: "Small, Med & B2B", progress: 45 },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.flag}</span>
                      <div>
                        <div className="text-gray-900 font-medium text-sm">{item.country}</div>
                        <div className="text-gray-500 text-xs font-light">{item.subtitle}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#22c55e] to-[#4ade80] h-2 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Global Support */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{t.globalSupport}</h2>
              <p className="text-gray-600 mb-8 text-sm font-light">{t.globalSupportDesc}</p>

              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", role: "Support Agent", flag: "🇺🇸", progress: 90 },
                  { name: "Ahmed Hassan", role: "Technical Lead", flag: "🇪🇬", progress: 75 },
                  { name: "Maria Garcia", role: "Customer Success", flag: "🇪🇸", progress: 85 },
                ].map((agent, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-white font-medium text-lg">
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900 font-medium text-xs">{agent.name}</span>
                        <span className="text-lg">{agent.flag}</span>
                      </div>
                      <div className="text-gray-500 text-[10px] mb-2 font-light">{agent.role}</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-[#22c55e] to-[#4ade80] h-1.5 rounded-full"
                          style={{ width: `${agent.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
