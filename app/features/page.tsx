"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  BarChart3,
  Shield,
  Zap,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Bell,
  FileText,
  CreditCard,
  Smartphone,
  Cloud,
} from "lucide-react"

export default function FeaturesPage() {
  const [language, setLanguage] = useState<"en" | "am">("en")

  const translations = {
    en: {
      title: "Powerful Features",
      subtitle: "Everything you need to manage your finances effectively",
      analytics: "Real-time Analytics",
      analyticsDesc: "Get instant insights into your financial performance with live dashboards and reports.",
      security: "Bank-Level Security",
      securityDesc: "Your data is protected with enterprise-grade encryption and security protocols.",
      automation: "Smart Automation",
      automationDesc: "Automate repetitive tasks and focus on what matters most for your business.",
      collaboration: "Team Collaboration",
      collaborationDesc: "Work seamlessly with your team with role-based access and permissions.",
      multiCurrency: "Multi-Currency Support",
      multiCurrencyDesc: "Handle transactions in multiple currencies with automatic conversion rates.",
      dataProtection: "Data Protection",
      dataProtectionDesc: "Regular backups and disaster recovery ensure your data is always safe.",
      reporting: "Advanced Reporting",
      reportingDesc: "Generate detailed financial reports with customizable templates and filters.",
      notifications: "Smart Notifications",
      notificationsDesc: "Stay informed with real-time alerts for important financial events.",
      invoicing: "Professional Invoicing",
      invoicingDesc: "Create and send professional invoices with automated payment reminders.",
      payments: "Payment Processing",
      paymentsDesc: "Accept payments from multiple sources with integrated payment gateways.",
      mobile: "Mobile Access",
      mobileDesc: "Manage your finances on the go with our mobile-optimized platform.",
      integration: "Cloud Integration",
      integrationDesc: "Seamlessly integrate with your favorite tools and services.",
    },
    am: {
      title: "ኃይለኛ ባህሪያት",
      subtitle: "ፋይናንስዎን በብቃት ለማስተዳደር የሚያስፈልግዎት ሁሉ",
      analytics: "የቅጽበታዊ ትንተና",
      analyticsDesc: "በቀጥታ ዳሽቦርዶች እና ሪፖርቶች ስለ የፋይናንስ አፈጻጸምዎ ቅጽበታዊ ግንዛቤዎችን ያግኙ።",
      security: "የባንክ ደረጃ ደህንነት",
      securityDesc: "መረጃዎ በኢንተርፕራይዝ ደረጃ ምስጠራ እና የደህንነት ፕሮቶኮሎች የተጠበቀ ነው።",
      automation: "ብልህ አውቶሜሽን",
      automationDesc: "ተደጋጋሚ ስራዎችን በራስ-ሰር ያድርጉ እና ለንግድዎ በጣም አስፈላጊ በሆነው ላይ ያተኩሩ።",
      collaboration: "የቡድን ትብብር",
      collaborationDesc: "በሚና ላይ የተመሰረተ መዳረሻ እና ፈቃዶች ከቡድንዎ ጋር በቀላሉ ይስሩ።",
      multiCurrency: "ባለብዙ ምንዛሬ ድጋፍ",
      multiCurrencyDesc: "በራስ-ሰር የልወጣ ተመኖች በብዙ ምንዛሬዎች ግብይቶችን ያስተናግዱ።",
      dataProtection: "የመረጃ ጥበቃ",
      dataProtectionDesc: "መደበኛ ምትኬዎች እና የአደጋ መልሶ ማግኛ መረጃዎ ሁልጊዜ ደህንነቱ የተጠበቀ መሆኑን ያረጋግጣል።",
      reporting: "የላቀ ሪፖርት",
      reportingDesc: "በብጁ አብነቶች እና ማጣሪያዎች ዝርዝር የፋይናንስ ሪፖርቶችን ያመንጩ።",
      notifications: "ብልህ ማሳወቂያዎች",
      notificationsDesc: "ለአስፈላጊ የፋይናንስ ክስተቶች በቅጽበታዊ ማንቂያዎች መረጃ ያግኙ።",
      invoicing: "ሙያዊ ደረሰኝ",
      invoicingDesc: "በራስ-ሰር የክፍያ ማስታወሻዎች ሙያዊ ደረሰኞችን ይፍጠሩ እና ይላኩ።",
      payments: "የክፍያ ሂደት",
      paymentsDesc: "በተዋሃዱ የክፍያ መግቢያዎች ከብዙ ምንጮች ክፍያዎችን ይቀበሉ።",
      mobile: "የሞባይል መዳረሻ",
      mobileDesc: "በሞባይል የተመቻቸ መድረካችን ላይ በመንቀሳቀስ ላይ ፋይናንስዎን ያስተዳድሩ።",
      integration: "የክላውድ ውህደት",
      integrationDesc: "ከሚወዷቸው መሳሪያዎች እና አገልግሎቶች ጋር በቀላሉ ያዋህዱ።",
    },
  }

  const t = translations[language]

  const features = [
    { icon: BarChart3, title: t.analytics, desc: t.analyticsDesc, color: "text-[#22c55e]", bg: "bg-green-50" },
    { icon: Shield, title: t.security, desc: t.securityDesc, color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Zap, title: t.automation, desc: t.automationDesc, color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Users, title: t.collaboration, desc: t.collaborationDesc, color: "text-purple-500", bg: "bg-purple-50" },
    { icon: Globe, title: t.multiCurrency, desc: t.multiCurrencyDesc, color: "text-indigo-500", bg: "bg-indigo-50" },
    { icon: Lock, title: t.dataProtection, desc: t.dataProtectionDesc, color: "text-red-500", bg: "bg-red-50" },
    { icon: FileText, title: t.reporting, desc: t.reportingDesc, color: "text-teal-500", bg: "bg-teal-50" },
    { icon: Bell, title: t.notifications, desc: t.notificationsDesc, color: "text-orange-500", bg: "bg-orange-50" },
    { icon: TrendingUp, title: t.invoicing, desc: t.invoicingDesc, color: "text-pink-500", bg: "bg-pink-50" },
    { icon: CreditCard, title: t.payments, desc: t.paymentsDesc, color: "text-cyan-500", bg: "bg-cyan-50" },
    { icon: Smartphone, title: t.mobile, desc: t.mobileDesc, color: "text-violet-500", bg: "bg-violet-50" },
    { icon: Cloud, title: t.integration, desc: t.integrationDesc, color: "text-emerald-500", bg: "bg-emerald-50" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d]">
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">{t.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer language={language} />
    </main>
  )
}
