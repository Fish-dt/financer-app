"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "am">("en")

  const translations = {
    en: {
      title: "About Financer",
      subtitle: "Empowering businesses with modern financial solutions",
      description:
        "We're on a mission to revolutionize how businesses manage their finances. With cutting-edge technology and user-centric design, we make financial management simple, efficient, and accessible for everyone.",
      missionTitle: "Our Mission",
      missionText:
        "To provide innovative financial tools that empower businesses to make smarter decisions and achieve sustainable growth.",
      visionTitle: "Our Vision",
      visionText:
        "A world where every business, regardless of size, has access to enterprise-grade financial management tools.",
      valuesTitle: "Our Values",
      innovation: "Innovation",
      innovationText: "Constantly pushing boundaries to deliver cutting-edge solutions.",
      transparency: "Transparency",
      transparencyText: "Building trust through open and honest communication.",
      excellence: "Excellence",
      excellenceText: "Committed to delivering the highest quality in everything we do.",
      teamTitle: "Our Team",
      teamText:
        "We're a diverse team of financial experts, designers, and engineers passionate about transforming the financial landscape.",
      statsUsers: "Active Users",
      statsCountries: "Countries",
      statsTransactions: "Transactions",
      statsRating: "User Rating",
    },
    am: {
      title: "ስለ ፋይናንሰር",
      subtitle: "ንግዶችን በዘመናዊ የፋይናንስ መፍትሄዎች እናበረታታለን",
      description:
        "ንግዶች ፋይናንሳቸውን እንዴት እንደሚያስተዳድሩ አብዮት ለማድረግ በተልእኮ ላይ ነን። በዘመናዊ ቴክኖሎጂ እና በተጠቃሚ ላይ ያተኮረ ዲዛይን፣ የፋይናንስ አስተዳደርን ቀላል፣ ቀልጣፋ እና ለሁሉም ተደራሽ እናደርጋለን።",
      missionTitle: "የእኛ ተልእኮ",
      missionText: "ንግዶች ብልህ ውሳኔዎችን እንዲወስኑ እና ዘላቂ እድገት እንዲያሳኩ የሚያበረታቱ አዳዲስ የፋይናንስ መሳሪያዎችን ማቅረብ።",
      visionTitle: "የእኛ ራዕይ",
      visionText: "መጠኑ ምንም ይሁን ምን እያንዳንዱ ንግድ የኢንተርፕራይዝ ደረጃ የፋይናንስ አስተዳደር መሳሪያዎች የሚኖሩበት ዓለም።",
      valuesTitle: "የእኛ እሴቶች",
      innovation: "ፈጠራ",
      innovationText: "ዘመናዊ መፍትሄዎችን ለማቅረብ ድንበሮችን በቋሚነት እንገፋለን።",
      transparency: "ግልጽነት",
      transparencyText: "በግልጽ እና በታማኝነት ግንኙነት እምነት እንገነባለን።",
      excellence: "ብቃት",
      excellenceText: "በምናደርገው ሁሉ ከፍተኛውን ጥራት ለማቅረብ ቁርጠኞች ነን።",
      teamTitle: "የእኛ ቡድን",
      teamText: "የፋይናንስ መልክዓ ምድርን ለመለወጥ ፍላጎት ያላቸው የተለያዩ የፋይናንስ ባለሙያዎች፣ ዲዛይነሮች እና መሐንዲሶች ቡድን ነን።",
      statsUsers: "ንቁ ተጠቃሚዎች",
      statsCountries: "አገሮች",
      statsTransactions: "ግብይቶች",
      statsRating: "የተጠቃሚ ደረጃ",
    },
  }

  const t = translations[language]

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d]">
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">{t.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="mb-20">
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto font-light">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
            <Target className="w-12 h-12 text-[#22c55e] mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.missionTitle}</h2>
            <p className="text-gray-600 leading-relaxed font-light">{t.missionText}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.visionTitle}</h2>
            <p className="text-gray-600 leading-relaxed font-light">{t.visionText}</p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">{t.valuesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.innovation}</h3>
              <p className="text-gray-600 font-light">{t.innovationText}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.transparency}</h3>
              <p className="text-gray-600 font-light">{t.transparencyText}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.excellence}</h3>
              <p className="text-gray-600 font-light">{t.excellenceText}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">{t.teamTitle}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto font-light">{t.teamText}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-semibold text-[#22c55e] mb-2">150k+</div>
            <div className="text-gray-600 font-light">{t.statsUsers}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-[#22c55e] mb-2">50+</div>
            <div className="text-gray-600 font-light">{t.statsCountries}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-[#22c55e] mb-2">10M+</div>
            <div className="text-gray-600 font-light">{t.statsTransactions}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-[#22c55e] mb-2">4.9/5</div>
            <div className="text-gray-600 font-light">{t.statsRating}</div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </main>
  )
}
