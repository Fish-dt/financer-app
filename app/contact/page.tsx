"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "am">("en")

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      emailValue: "hello@financer.com",
      phoneValue: "+1 (555) 123-4567",
      addressValue: "123 Finance Street, San Francisco, CA 94102",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      subjectPlaceholder: "How can we help?",
      messagePlaceholder: "Tell us more about your inquiry...",
    },
    am: {
      title: "ያግኙን",
      subtitle: "ከእርስዎ መስማት እንወዳለን። መልእክት ይላኩልን እና በተቻለ ፍጥነት እንመልሳለን።",
      name: "ሙሉ ስም",
      email: "የኢሜል አድራሻ",
      subject: "ርዕስ",
      message: "መልእክት",
      send: "መልእክት ላክ",
      contactInfo: "የመገኛ መረጃ",
      emailLabel: "ኢሜል",
      phoneLabel: "ስልክ",
      addressLabel: "አድራሻ",
      emailValue: "hello@financer.com",
      phoneValue: "+1 (555) 123-4567",
      addressValue: "123 Finance Street, San Francisco, CA 94102",
      namePlaceholder: "ስምዎ",
      emailPlaceholder: "john@example.com",
      subjectPlaceholder: "እንዴት ልንረዳዎ እንችላለን?",
      messagePlaceholder: "ስለ ጥያቄዎ የበለጠ ይንገሩን...",
    },
  }

  const t = translations[language]

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
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">{t.contactInfo}</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.emailLabel}</h3>
                  <p className="text-gray-600 font-light">{t.emailValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.phoneLabel}</h3>
                  <p className="text-gray-600 font-light">{t.phoneValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.addressLabel}</h3>
                  <p className="text-gray-600 font-light">{t.addressValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600 font-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">{t.name}</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#22c55e] transition-colors font-light"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">{t.email}</label>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#22c55e] transition-colors font-light"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">{t.subject}</label>
                <input
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#22c55e] transition-colors font-light"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">{t.message}</label>
                <textarea
                  rows={6}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#22c55e] transition-colors resize-none font-light"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </main>
  )
}
