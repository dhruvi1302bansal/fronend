// import React from 'react'

// const Programs = () => {
//   return (
//     <div>
//     this is Programs page  
//     </div>
//   )
// }

// export default Programs
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Shield, Sun } from 'lucide-react';

// --- HELPER FOR ID GENERATION (Must match Navbar logic) ---
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const PROGRAMS = [
  {
    title: "Gut & Digestion Care",
    desc: "Restore your 'Agni' (digestive fire). Treatments for IBS, bloating, acidity, and constipation using herbal formulations and diet correction.",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop",
    features: ["Agni Restoration", "Detox (Panchakarma)", "Dietary Mapping"]
  },
  {
    title: "Women's Hormonal Balance",
    desc: "Natural solutions for PCOS/PCOD, irregular cycles, menopause, and fertility. We focus on regulating hormones without synthetic pills.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    features: ["Cycle Regulation", "Fertility Support", "Hormonal Acne"]
  },
  {
    title: "Stress, Anxiety & Sleep",
    desc: "Calm the mind and nervous system. Therapies like Shirodhara and adaptogenic herbs to fight insomnia, anxiety, and chronic stress.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    features: ["Sleep Hygiene", "Nervous System Reset", "Meditation Guides"]
  },
  {
    title: "Skin Care & Radiance",
    desc: "Root-cause treatment for Acne, Psoriasis, Eczema, and Dermatitis. We purify the blood (Rakta Dhatu) for lasting inner glow.",
    image: "https://images.unsplash.com/photo-1576426863848-c2185fc6e871?q=80&w=800&auto=format&fit=crop",
    features: ["Blood Purification", "Herbal Lepams", "Glow Therapy"]
  },
  {
    title: "Chronic Pain & Migraine",
    desc: "Management of Arthritis, Spondylitis, Migraines, and Back Pain through anti-inflammatory herbs and oil therapies (Snehan/Swedan).",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    features: ["Pain Relief", "Joint Mobility", "Inflammation Control"]
  },
  {
    title: "Weight & Metabolic Health",
    desc: "Sustainable weight management by correcting metabolism. No crash diets—just balance based on your Kapha/Vata/Pitta body type.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
    features: ["Fat Metabolism", "Udvartana Scrub", "Diet Plans"]
  },
  {
    title: "Thyroid & Autoimmune",
    desc: "Immunomodulatory treatments for Hashimoto's, Rheumatoid Arthritis, and Hypothyroidism. We help the body stop attacking itself.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    features: ["Immune Modulation", "Thyroid Stimulation", "Gut-Brain Axis"]
  },
  {
    title: "Respiratory & Allergies",
    desc: "Build lung strength and immunity against Asthma, Sinusitis, and seasonal allergies using Pranayama and respiratory tonics.",
    image: "https://images.unsplash.com/photo-1527137342181-191f53eb0915?q=80&w=800&auto=format&fit=crop",
    features: ["Lung Toning", "Sinus Cleaning", "Allergy Defense"]
  },
  {
    title: "Hair & Scalp Restoration",
    desc: "Fight hair fall, dandruff, and premature greying (Khalitya/Palitya) with Nasya therapy and potent herbal hair oils.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    features: ["Hair Growth", "Scalp Health", "Stress Reduction"]
  },
  {
    title: "Sexual Wellness",
    desc: "Vajikarana therapy to restore vitality, libido, and reproductive health for both men and women in a confidential setting.",
    image: "https://images.unsplash.com/photo-1620749597697-b0f042c29642?q=80&w=800&auto=format&fit=crop",
    features: ["Libido Boost", "Vitality Tonic", "Reproductive Health"]
  },
  {
    title: "Pediatrics",
    desc: "Gentle, safe, and effective Ayurvedic care for children's immunity, digestion, growth, and recurrent infections.",
    image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=800&auto=format&fit=crop",
    features: ["Immunity Boost", "Growth & Memory", "Gentle Herbs"]
  },
  {
    title: "Post-Illness Immunity",
    desc: "Rasayana (Rejuvenation) therapy to rebuild strength and energy reserves after viral fevers, surgeries, or long-term illness.",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop",
    features: ["Energy Restoration", "Cellular Repair", "Detoxification"]
  }
];

const Programs = () => {
  const location = useLocation();

  // This effect handles the scrolling when you click a dropdown link in the Navbar
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to allow page to load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#2F3E28] text-[#F1F3EB] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-medium mb-6 tracking-wide">
            <Leaf size={16} /> Ayurvedic Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Healing Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            From chronic ailments to lifestyle disorders, our specialized programs integrate 
            ancient wisdom with modern diagnostics for root-cause healing.
          </p>
        </div>
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </section>

      {/* --- INTRO FEATURES --- */}
      <section className="py-12 border-b border-[#2F3E28]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3 shadow-sm rounded-md hover:shadow-md transition-shadow bg-white/50 p-6">
            <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#2F3E28]">
              <Leaf size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2F3E28]">100% Natural</h3>
            <p className="text-sm text-gray-600">Pure herbal formulations without heavy metals.</p>
          </div>
          <div className="flex flex-col items-center gap-3 shadow-sm rounded-md hover:shadow-md transition-shadow bg-white/50 p-6">
            <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#2F3E28]">
              <Sun size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2F3E28]">Personalized</h3>
            <p className="text-sm text-gray-600">Tailored to your unique Prakriti (Dosha).</p>
          </div>
          <div className="flex flex-col items-center gap-3 shadow-sm rounded-md hover:shadow-md transition-shadow bg-white/50 p-6 ">
            <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#2F3E28]">
              <Shield size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2F3E28]">Doctor Led</h3>
            <p className="text-sm text-gray-600">Monitored by experienced Vaidyas.</p>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROGRAMS.map((prog, index) => (
            <div 
              key={index} 
              id={slugify(prog.title)} // Anchor ID for scrolling
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-[#2F3E28]/5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#2F3E28]/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-[#2F3E28] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                  {prog.desc}
                </p>

                {/* Feature List */}
                <div className="space-y-2 mb-8">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#4A5D41]">
                      <CheckCircle size={14} className="text-[#D4AF37]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link 
                  to="/Consulation" 
                  className="w-full py-3 border border-[#2F3E28] text-[#2F3E28] font-bold text-center rounded-sm hover:bg-[#2F3E28] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#2F3E28]"
                >
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM BANNER --- */}
      <section className="bg-[#BA9D8A] py-16 text-center px-6">
        <h2 className="text-3xl font-serif text-white mb-4">Not sure which program fits you?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Take our free AI-powered Dosha Quiz or speak to a health counselor to find your path to wellness.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/Assessments" className="px-8 py-3 bg-[#F1F3EB] text-[#2F3E28] font-bold rounded-sm hover:bg-white transition-colors">
            Take Free Quiz
          </Link>
          <Link to="/Consulation" className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-sm hover:bg-[#D4AF37] hover:text-[#2F3E28] transition-colors">
            Talk to an Expert
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Programs;
