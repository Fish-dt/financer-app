"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [language, setLanguage] = useState<"en" | "am">("en")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const translations = {
    en: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the perfect plan for your business needs",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      starter: "Starter",
      starterDesc: "Perfect for small businesses and startups",
      professional: "Professional",
      professionalDesc: "For growing businesses with advanced needs",
      enterprise: "Enterprise",
      enterpriseDesc: "Custom solutions for large organizations",
      perMonth: "/month",
      perYear: "/year",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      mostPopular: "Most Popular",
      feature1: "Real-time Analytics Dashboard",
      feature2: "Multi-currency Support",
      feature3: "Team Collaboration (up to 5 users)",
      feature4: "Basic Reporting",
      feature5: "Email Support",
      feature6: "Advanced Reporting & Analytics",
      feature7: "Team Collaboration (up to 20 users)",
      feature8: "Priority Support",
      feature9: "API Access",
      feature10: "Custom Integrations",
      feature11: "Unlimited Users",
      feature12: "Dedicated Account Manager",
      feature13: "Custom Development",
      feature14: "SLA Guarantee",
      feature15: "Advanced Security Features",
    },
    am: {
      title: "ቀላል፣ ግልጽ ዋጋ",
      subtitle: "ለንግድዎ ፍላጎቶች ፍጹም እቅድ ይምረጡ",
      monthly: "ወርሃዊ",
      yearly: "ዓመታዊ",
      save: "20% ይቆጥቡ",
      starter: "መጀመሪያ",
      starterDesc: "ለትናንሽ ንግዶች እና ጅምሮች ፍጹም",
      professional: "ሙያዊ",
      professionalDesc: "ከላቀ ፍላጎቶች ጋር ለማደግ ላሉ ንግዶች",
      enterprise: "ኢንተርፕራይዝ",
      enterpriseDesc: "ለትላልቅ ድርጅቶች ብጁ መፍትሄዎች",
      perMonth: "/ወር",
      perYear: "/ዓመት",
      getStarted: "ይጀምሩ",
      contactSales: "ሽያጭን ያግኙ",
      mostPopular: "በጣም ተወዳጅ",
      feature1: "የቅጽበታዊ ትንተና ዳሽቦርድ",
      feature2: "ባለብዙ ምንዛሬ ድጋፍ",
      feature3: "የቡድን ትብብር (እስከ 5 ተጠቃሚዎች)",
      feature4: "መሰረታዊ ሪፖርት",
      feature5: "የኢሜል ድጋፍ",
      feature6: "የላቀ ሪፖርት እና ትንተና",
      feature7: "የቡድን ትብብር (እስከ 20 ተጠቃሚዎች)",
      feature8: "ቅድሚያ የሚሰጠው ድጋፍ",
      feature9: "የኤፒአይ መዳረሻ",
      feature10: "ብጁ ውህደቶች",
      feature11: "ያልተገደበ ተጠቃሚዎች",
      feature12: "ያደረገ የመለያ አስተዳዳሪ",
      feature13: "ብጁ ልማት",
      feature14: "የኤስኤልኤ ዋስትና",
      feature15: "የላቀ የደህንነት ባህሪያት",
    },
  }

  const t = translations[language]

  const plans = [
    {
      name: t.starter,
      desc: t.starterDesc,
      monthlyPrice: 29,
      yearlyPrice: 279,
      features: [t.feature1, t.feature2, t.feature3, t.feature4, t.feature5],
      popular: false,
    },
    {
      name: t.professional,
      desc: t.professionalDesc,
      monthlyPrice: 79,
      yearlyPrice: 759,
      features: [t.feature1, t.feature2, t.feature6, t.feature7, t.feature8, t.feature9, t.feature10],
      popular: true,
    },
    {
      name: t.enterprise,
      desc: t.enterpriseDesc,
      monthlyPrice: null,
      yearlyPrice: null,
      features: [t.feature1, t.feature2, t.feature11, t.feature12, t.feature13, t.feature14, t.feature15],
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d]">
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">{t.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-light">{t.subtitle}</p>

            <div className="inline-flex items-center gap-2 glassmorphic-button rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  billingCycle === "monthly" ? "bg-white text-[#22c55e]" : "text-white"
                }`}
              >
                {t.monthly}
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full transition-all duration-200 text-sm font-medium flex items-center gap-2 ${
                  billingCycle === "yearly" ? "bg-white text-[#22c55e]" : "text-white"
                }`}
              >
                {t.yearly}
                <span className="text-xs bg-[#22c55e] text-white px-2 py-0.5 rounded-full">{t.save}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular ? "border-2 border-[#22c55e] shadow-2xl scale-105" : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#22c55e] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t.mostPopular}
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 font-light">{plan.desc}</p>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-5xl font-semibold text-gray-900">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 font-light">
                      {billingCycle === "monthly" ? t.perMonth : t.perYear}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-semibold text-gray-900">Custom</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all duration-200 mb-8 ${
                  plan.popular
                    ? "bg-[#22c55e] text-white hover:bg-[#16a34a]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.monthlyPrice ? t.getStarted : t.contactSales}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer language={language} />
    </main>
  )
}
