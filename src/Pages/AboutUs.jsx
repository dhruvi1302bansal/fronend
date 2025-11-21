// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div>
//       this is About Us page
//     </div>
//   )
// }

// export default AboutUs
import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Heart, Award, Sprout, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative py-24 bg-[#2F3E28] text-[#F1F3EB] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
            Reviving the Science of Life
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Vedara is where 5,000 years of Vedic wisdom meets modern clinical evidence. 
            We are redefining Ayurveda for the modern world.
          </p>
        </div>
      </section>

      {/* --- 2. MISSION: REVIVING AYURVEDA --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#D4AF37]"></div>
            <img 
              src="https://images.unsplash.com/photo-1600663758064-17e3e651123d?q=80&w=800&auto=format&fit=crop" 
              alt="Traditional Mortar and Pestle" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#D4AF37]"></div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] font-bold tracking-widest uppercase mb-4">
              <Sprout size={20} /> Our Mission
            </div>
            <h2 className="text-4xl font-serif text-[#2F3E28] mb-6">
              Moving Beyond "Grandma's Remedies" to Clinical Precision.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              For too long, Ayurveda has been reduced to spa treatments or generic home remedies. 
              We are on a mission to restore it to its rightful place: as a highly sophisticated, 
              data-driven medical science.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              At Vedara, we don't just manage symptoms. We use the principles of 
              <span className="font-bold text-[#2F3E28]"> Dosha (Bio-energy)</span>, 
              <span className="font-bold text-[#2F3E28]"> Dhatu (Tissues)</span>, and 
              <span className="font-bold text-[#2F3E28]"> Agni (Metabolism) </span> 
              to eradicate disease from the root.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F5F5DC] p-4 rounded-lg border border-[#2F3E28]/10">
                <h4 className="font-serif font-bold text-[#2F3E28] text-2xl">50+</h4>
                <p className="text-sm text-gray-600">Certified Vaidyas</p>
              </div>
              <div className="bg-[#F5F5DC] p-4 rounded-lg border border-[#2F3E28]/10">
                <h4 className="font-serif font-bold text-[#2F3E28] text-2xl">12k+</h4>
                <p className="text-sm text-gray-600">Patients Healed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SCIENCE-BACKED METHODOLOGY --- */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#2F3E28] mb-4">Science-Backed Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bridge the gap between ancient Shastras and modern labs. Every treatment plan 
              goes through a rigorous 4-step protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: <BookOpen size={32} />, 
                title: "1. Nadi Pariksha", 
                desc: "Pulse diagnosis to detect deep-seated imbalances." 
              },
              { 
                icon: <Microscope size={32} />, 
                title: "2. Modern Labs", 
                desc: "Integration of blood work, X-rays, and modern markers." 
              },
              { 
                icon: <Users size={32} />, 
                title: "3. Root Analysis", 
                desc: "Mapping symptoms to your specific Prakriti (Body Type)." 
              },
              { 
                icon: <CheckCircle size={32} />, 
                title: "4. Precision Herbs", 
                desc: "Formulations customized to the exact milligram." 
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-[#2F3E28]/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-[#2F3E28] text-[#D4AF37] flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2F3E28] text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. DOCTORS & CREDENTIALS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-4xl font-serif text-[#2F3E28] mb-2">Our Experts</h2>
             <p className="text-gray-600">Led by MD & PhD Scholars in Ayurveda.</p>
          </div>
          <Link to="/Consulation" className="hidden md:flex items-center gap-2 text-[#D4AF37] font-bold hover:underline">
             Book a Consultation <ArrowRight size={20}/>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Ananya Rao",
              degree: "BAMS, MD (Ayurveda)",
              spec: "Autoimmune Specialist",
              exp: "15 Years Experience",
              img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Dr. Rajesh Verma",
              degree: "BAMS, PhD (Kayachikitsa)",
              spec: "Chronic Pain Management",
              exp: "22 Years Experience",
              img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Dr. Meera Kapoor",
              degree: "BAMS, MS (Prasuti Tantra)",
              spec: "Women's Health & Fertility",
              exp: "12 Years Experience",
              img: "https://images.unsplash.com/photo-1594824476969-51c44d7e618e?q=80&w=400&auto=format&fit=crop"
            }
          ].map((doc, i) => (
            <div key={i} className="flex flex-col bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img src={doc.img} alt={doc.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-[#2F3E28]">{doc.name}</h3>
                <p className="text-[#D4AF37] font-bold text-sm mb-2">{doc.degree}</p>
                <div className="h-px w-full bg-stone-100 my-3"></div>
                <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Focus:</span> {doc.spec}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">{doc.exp}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Button */}
        <div className="mt-8 md:hidden text-center">
          <Link to="/Consulation" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold">
             Book a Consultation <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

      {/* --- 5. WHY AYURVEDA WORKS --- */}
      <section className="py-20 bg-[#F5F5DC] text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Why Ayurveda Works?</h2>
               <p className="text-lg text-gray-300 leading-relaxed mb-6">
                 Modern medicine often asks "What is the disease?" Ayurveda asks "Who is the patient?"
               </p>
               <p className="text-lg text-grey-800 leading-relaxed mb-8">
                 By focusing on the individual rather than the symptoms, we unlock the body's innate 
                 intelligence to heal itself. This isn't magic; it's biology aligned with nature.
               </p>
               
               <ul className="space-y-4">
                 {[
                   "Treats the Root Cause, not just symptoms.",
                   "No harmful side-effects or dependency.",
                   "Personalized diet & lifestyle integration.",
                   "Restores mental & emotional balance."
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="bg-[#D4AF37] rounded-full p-1 text-[#2F3E28]">
                       <CheckCircle size={16} />
                     </div>
                     <span className="text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Abstract Illustration Card */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4A5D41] rounded-lg"><Award size={24} className="text-[#D4AF37]"/></div>
                    <div>
                      <h4 className="font-bold text-xl text-[#F1F3EB]">Agni (Metabolic Fire)</h4>
                      <p className="text-sm text-gray-400 mt-1">We fix digestion first. If you can't digest food, you can't digest medicine.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4A5D41] rounded-lg"><Heart size={24} className="text-[#D4AF37]"/></div>
                    <div>
                      <h4 className="font-bold text-xl text-[#F1F3EB]">Ojas (Vitality)</h4>
                      <p className="text-sm text-gray-400 mt-1">Building immunity buffers to prevent disease recurrence.</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
