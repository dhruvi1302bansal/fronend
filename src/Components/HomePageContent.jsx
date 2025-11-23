import React, { useState } from 'react';
import { Leaf, Stethoscope, Clock, ArrowRight, ArrowUp, Star, PlayCircle, BookOpen, Calendar } from 'lucide-react';

// --- Data Definitions ---

const doctors = [
  {
    name: "Dr. Ananya Rao",
    role: "BAMS, MD (Ay) • Autoimmune Specialist",
    quote: "Healing begins when we listen to the body's quiet signals.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Rajesh Verma",
    role: "BAMS, PhD • Pain Management",
    quote: "We don't just treat the pain, we treat the person.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Meera Kapoor",
    role: "BAMS, MS • Women's Health & Fertility",
    quote: "Balance your hormones, and you balance your life.",
    image: "https://images.unsplash.com/photo-1594824476969-51c44d7e618e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Vikram Singh",
    role: "BAMS • Gut Health & Metabolism",
    quote: "Agni (digestive fire) is the root of all health.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Priya Sharma",
    role: "MD (Ay) • Dermatology & Skin Care",
    quote: "True radiance comes from inner purification.",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Sanjay Gupta",
    role: "PhD (Ayurveda) • Mental Wellness & Sleep",
    quote: "A calm mind is the most potent medicine.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop"
  }
];

const testimonials = [
  {
    name: "Sarah J.",
    role: "Tech Executive",
    text: "I was skeptical about Ayurveda being too 'slow.' Vedara changed that. My chronic acidity resolved in 3 weeks. No heavy metals, no magic pills.",
  },
  {
    name: "Arjun M.",
    role: "Architect",
    text: "Finally, a doctor who looked at my blood work AND my lifestyle. The integration of modern science is seamless here.",
  },
  {
    name: "Priya K.",
    role: "Creative Designer",
    text: "Dealing with PCOS was exhausting. The approach wasn't just about herbs; it was about syncing with my cycle. I feel like myself again for the first time in years.",
  },
  {
    name: "Michael R.",
    role: "Management Consultant",
    text: "My insomnia was ruining my work. The specific diet changes and evening routines did what sleeping pills couldn't. I actually wake up refreshed now.",
  },
  {
    name: "Linda W.",
    role: "School Teacher",
    text: "I lost 12kg, but more importantly, my energy levels are stable. No crash diets, just understanding my body type (Dosha) and eating right.",
  },
  {
    name: "David C.",
    role: "Musician",
    text: "The skin analysis was spot on. My eczema flared up for years. 2 months of the internal detox and oil application, and my skin is finally clear.",
  }
];

const allPrograms = [
  { 
    title: "Gut Reset & Metabolism", 
    for: "Bloating, IBS", 
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    title: "Stress & Sleep", 
    for: "Anxiety, Burnout", 
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    title: "Hormonal Harmony", 
    for: "PCOS, Thyroid", 
    img: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    title: "Radiant Skin", 
    for: "Acne, Psoriasis", 
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    title: "Immunity Boost", 
    for: "Frequent Cold, Allergies", 
    img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    title: "Joint & Mobility", 
    for: "Arthritis, Chronic Pain", 
    img: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=500" 
  }
];

// --- Main Component ---

const HomePageContent = () => {
  const [showAll, setShowAll] = useState(false);

  // Logic to show 3 or all programs
  const visiblePrograms = showAll ? allPrograms : allPrograms.slice(0, 3);

  return (
    <div className="font-sans text-gray-800 selection:bg-[#556B2F] selection:text-white">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-20 lg:pt-0 min-h-[90vh] flex items-center bg-[#F5F5DC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 order-2 lg:order-1 py-12 lg:py-0">
            <div className="inline-flex items-center space-x-2 bg-[#556B2F]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#556B2F] animate-pulse"></span>
              <span className="text-sm font-bold text-[#556B2F] uppercase tracking-wide">Now accepting new patients</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold text-[#2F3E28] leading-[1.1] mb-6">
              Ayurveda for <br /><span className="italic text-[#8B4513]">Modern Health.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Root-cause healing derived from the <i>Charak Samhita</i>, calibrated for your 21st-century lifestyle. No judgment, just science-backed balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F5F5DC] border-2 border-[#556B2F] text-[#556B2F] hover:bg-[#556B2F] hover:text-white px-8 py-4 rounded-md font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl">
                Book 1:1 Consultation
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500 font-medium">
              <p>Trusted by 10,000+ patients globally</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 h-full flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8B4513]/10 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://media.istockphoto.com/id/1404528547/photo/modern-30-years-old-woman-with-tea-at-modern-green-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=KAxDeuqAM4L2w2j3cv8zRmG8U1jYLTpbCV-T4nCWs-o="
              alt="Modern Ayurveda lifestyle"
              className="rounded-2xl shadow-2xl object-cover h-[400px] md:h-[600px] w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* --- Quick Assessment (The Bridge) --- */}
      <section className="w-full bg-[#556B2F] text-white py-12 relative overflow-hidden shadow-inner">
        {/* Decorative Background Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6B8E23] rounded-full opacity-20 blur-3xl"></div>

        <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="md:w-2/3">
              <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#F5F5DC] tracking-wide">
                Where does your balance lie?
              </h2>
              <p className="text-stone-100 text-lg font-medium leading-relaxed">
                You are unique. Your healthcare should be too. Take our 3-minute Prakriti analysis to discover your inner constitution.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-[#F5F5DC] hover:bg-white text-[#556B2F] hover:text-[#3e4f21] px-10 py-4 rounded-md font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl border-2 border-[#F5F5DC]">
                Take Quick Assessment
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- Philosophy Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E28] mb-4">Ancient Wisdom. Clinical Precision.</h2>
            <p className="text-gray-600 text-lg">We strip away the mysticism and focus on the medicine.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="p-8 bg-[#F5F5DC] rounded-xl shadow-lg shadow-[#5C4033]/20 hover:shadow-2xl hover:shadow-[#5C4033]/40 transition duration-300 transform hover:-translate-y-1">
              <Leaf className="w-12 h-12 text-[#8B4513] mb-6" />
              <h3 className="font-serif text-2xl text-[#556B2F] mb-3">Root-Cause Focus</h3>
              <p className="text-stone-700">We don’t just mask symptoms. We use Nidana Parivarjana to identify and remove the root cause.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-[#F5F5DC] rounded-xl shadow-lg shadow-[#5C4033]/20 hover:shadow-2xl hover:shadow-[#5C4033]/40 transition duration-300 transform hover:-translate-y-1">
              <Stethoscope className="w-12 h-12 text-[#8B4513] mb-6" />
              <h3 className="font-serif text-2xl text-[#556B2F] mb-3">Doctor-Led</h3>
              <p className="text-stone-700">Protocols designed by BAMS & MD physicians, integrating modern diagnostics with pulse reading.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-[#F5F5DC] rounded-xl shadow-lg shadow-[#5C4033]/20 hover:shadow-2xl hover:shadow-[#5C4033]/40 transition duration-300 transform hover:-translate-y-1">
              <Clock className="w-12 h-12 text-[#8B4513] mb-6" />
              <h3 className="font-serif text-2xl text-[#556B2F] mb-3">Practical Living</h3>
              <p className="text-stone-700">We adapt ancient regimens (Dinacharya) to fit your busy schedule. No impossible diets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Programs --- */}
      <section className="py-20 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#8B4513] font-bold tracking-wider uppercase text-sm">Our Specialties</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E28] mt-2">Targeted Care Programs</h2>
            </div>

            {/* Desktop Toggle Button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="hidden md:flex items-center text-[#8B4513] font-bold hover:text-[#2F3E28] transition"
            >
              {showAll ? 'Show Less' : 'View all programs'}
              {showAll ? <ArrowUp size={18} className="ml-2" /> : <ArrowRight size={18} className="ml-2" />}
            </button>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {visiblePrograms.map((prog, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#2F3E28] mb-2">{prog.title}</h3>
                  <p className="text-sm text-[#8B4513] font-medium mb-4">Best for: {prog.for}</p>
                  <span className="text-gray-600 font-bold border-b-2 border-transparent group-hover:border-[#8B4513] group-hover:text-[#8B4513] transition-all">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="mt-8 md:hidden flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center text-[#8B4513] font-bold hover:text-[#2F3E28] transition"
            >
              {showAll ? 'Show Less' : 'View all programs'}
              {showAll ? <ArrowUp size={18} className="ml-2" /> : <ArrowRight size={18} className="ml-2" />}
            </button>
          </div>
        </div>
      </section>

      {/* --- Doctor Profiles --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#2F3E28] mb-4">Experts in Integrative Ayurveda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Vaidyas combine ancient wisdom with modern clinical experience to provide root-cause healing.
            </p>
          </div>

          {/* Grid Layout: 1 col Mobile, 2 cols Tablet, 3 cols Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-5 p-6 rounded-2xl bg-[#F5F5DC] border border-stone-100 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                />
                <div>
                  <h3 className="font-serif text-xl text-[#2F3E28] font-medium">{doc.name}</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{doc.role}</p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">"{doc.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional 'View All' Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-[#2F3E28] text-[#2F3E28] font-serif hover:bg-[#2F3E28] hover:text-white transition-colors rounded-sm">
              View All Specialists
            </button>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl mb-12 text-center text-[#2F3E28]">
            Real Stories of Restoration
          </h2>

          {/* Grid: 1 col Mobile, 2 cols Tablet, 3 cols Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#2F3E28]/10 flex flex-col h-full"
              >
                {/* Stars */}
                <div className="flex text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-grow text-lg">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold font-serif text-xl text-[#2F3E28]">
                    — {item.name}
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Knowledge Hub --- */}
      <section className="py-20 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#2F3E28]">The Science of Life</h2>
            <p className="text-gray-600 mt-2">Latest research, webinars, and lifestyle guides.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-[#8B4513] text-sm font-bold mb-3">
                <BookOpen size={16} className="mr-2" /> ARTICLE
              </div>
              <h3 className="font-serif text-xl text-[#2F3E28] mb-2 group-hover:underline">Why "Salads for Dinner" might be hurting your gut</h3>
              <p className="text-gray-600 text-sm">According to Charak Samhita, raw foods in the evening dampen Agni...</p>
            </div>
            {/* Webinar Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-[#8B4513] text-sm font-bold mb-3">
                <PlayCircle size={16} className="mr-2" /> WEBINAR
              </div>
              <h3 className="font-serif text-xl text-[#2F3E28] mb-2 group-hover:underline">Managing Cortisol: Ayurveda x Neuroscience</h3>
              <p className="text-gray-600 text-sm">Watch Dr. Rao explain the link between stress hormones and Vata.</p>
            </div>
            {/* Guide Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-[#8B4513] text-sm font-bold mb-3">
                <Calendar size={16} className="mr-2" /> GUIDE
              </div>
              <h3 className="font-serif text-xl text-[#2F3E28] mb-2 group-hover:underline">5 Morning Rituals for High-Performance Days</h3>
              <p className="text-gray-600 text-sm">Simple Dinacharya techniques to boost energy without caffeine.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;