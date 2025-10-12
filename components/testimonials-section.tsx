"use client"

import { useRef } from "react"

interface TestimonialsSectionProps {
  language: "en" | "am"
}

const translations = {
  en: {
    title: "What Our Clients Say About Us",
    subtitle:
      "Discover how our solutions have transformed businesses. Hear it directly from our clients who have experienced the difference.",
    testimonials: [
      {
        text: "\"I love financial app! I've used be for managing my finances. It's intuitive, easy to use, and has helped me stay on top of my spending.\"",
        name: "Sarah Miller",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      {
        text: '"I finally feel in control of my finances. Their platform made it so simple to track my expenses and secure my financial future!"',
        name: "John Walker",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      {
        text: '"Managing multiple accounts was always hard. Now, everything is organized in one place. It\'s simple and stress-free. Great user experience!"',
        name: "Emily Davis",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      {
        text: '"I love how intuitive this app is. It makes managing my monthly budget and future savings goals simple and stress-free. Great user experience!"',
        name: "David Smith",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      {
        text: '"Exceptional service! The way they handle my monthly budget is organized and makes me save consistently. Now, it\'s easy, organized, and stress-free!"',
        name: "Liam Foster",
        role: "Business Analyst",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      {
        text: '"Exceptional! It makes me save consistently. Now, it\'s easy, organized, and stress-free. Great setting financial goals!"',
        name: "Adam Ben",
        role: "Financial Advisor",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
      },
    ],
  },
  am: {
    title: "ደንበኞቻችን ስለ እኛ ምን ይላሉ",
    subtitle: "መፍትሄዎቻችን ንግዶችን እንዴት እንደለወጡ ያግኙ። ልዩነቱን ካጋጠማቸው ደንበኞቻችን በቀጥታ ይስሙ።",
    testimonials: [
      {
        text: '"የፋይናንስ መተግበሪያን እወዳለሁ! ፋይናንሴን ለማስተዳደር ተጠቅሜበታለሁ። ቀላል፣ ለመጠቀም ቀላል እና ወጪዬን በላዩ ላይ እንድቆይ ረድቶኛል።"',
        name: "ሳራ ሚለር",
        role: "የምርት አስተዳዳሪ",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      {
        text: '"በመጨረሻ ፋይናንሴን እየቆጣጠርኩ ነው። መድረካቸው ወጪዬን መከታተል እና የፋይናንስ ወደፊቴን ለመጠበቅ በጣም ቀላል አድርጎታል!"',
        name: "ጆን ዎከር",
        role: "የሶፍትዌር መሐንዲስ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      {
        text: '"በርካታ መለያዎችን ማስተዳደር ሁልጊዜ ከባድ ነበር። አሁን ሁሉም ነገር በአንድ ቦታ ተደራጅቷል። ቀላል እና ውጥረት የለሽ ነው። ምርጥ የተጠቃሚ ተሞክሮ!"',
        name: "ኤሚሊ ዴቪስ",
        role: "የስራ አስተዳዳሪ",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      {
        text: '"ይህ መተግበሪያ ምን ያህል ቀላል እንደሆነ እወዳለሁ። ወርሃዊ በጀቴን እና የወደፊት የቁጠባ ግቦቼን ማስተዳደር ቀላል እና ውጥረት የለሽ ያደርገዋል። ምርጥ የተጠቃሚ ተሞክሮ!"',
        name: "ዴቪድ ስሚዝ",
        role: "የግብይት ዳይሬክተር",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      {
        text: '"ልዩ አገልግሎት! ወርሃዊ በጀቴን የሚይዙበት መንገድ የተደራጀ እና በቋሚነት እንድቆጥብ ያደርገኛል። አሁን ቀላል፣ የተደራጀ እና ውጥረት የለሽ ነው!"',
        name: "ሊያም ፎስተር",
        role: "የንግድ ተንታኝ",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      {
        text: '"ልዩ! በቋሚነት እንድቆጥብ ያደርገኛል። አሁን ቀላል፣ የተደራጀ እና ውጥረት የለሽ ነው። ምርጥ የፋይናንስ ግቦችን ማዘጋጀት!"',
        name: "አዳም ቤን",
        role: "የፋይናንስ አማካሪ",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
      },
    ],
  },
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = translations[language]
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">{t.title}</h2>
          <p className="text-white/90 text-base max-w-3xl mx-auto font-light">{t.subtitle}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* First Row - Scrolling Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll" ref={scrollRef}>
            {/* Duplicate testimonials for seamless loop */}
            {[...t.testimonials, ...t.testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 min-w-[380px] max-w-[380px] flex-shrink-0 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm font-light">{testimonial.text}</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs font-light">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#16a34a] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#14532d] to-transparent pointer-events-none"></div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-reverse">
            {/* Duplicate testimonials for seamless loop */}
            {[...t.testimonials, ...t.testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 min-w-[380px] max-w-[380px] flex-shrink-0 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm font-light">{testimonial.text}</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs font-light">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#16a34a] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#14532d] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
