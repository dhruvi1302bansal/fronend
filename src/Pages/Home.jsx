import React from 'react';
import { Leaf, Stethoscope, Clock, ArrowRight, Star, PlayCircle, BookOpen, Calendar } from 'lucide-react';
import Navbar  from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';


const Home = () => {
  return (
    
    <main className="font-sans text-gray-800 selection:bg-vedara-clay selection:text-white">
      <Navbar />
      {/* --- Hero Section --- */}
      <section className="relative pt-20 lg:pt-0 min-h-[90vh] flex items-center bg-vedara-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 order-2 lg:order-1 py-12 lg:py-0">
            <div className="inline-flex items-center space-x-2 bg-vedara-green/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-vedara-green animate-pulse"></span>
              <span className="text-sm font-bold text-vedara-green uppercase tracking-wide">Now accepting new patients</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold text-vedara-green leading-[1.1] mb-6">
              Ayurveda for <br/><span className="italic text-vedara-clay">Modern Health.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Root-cause healing derived from the <i>Charak Samhita</i>, calibrated for your 21st-century lifestyle. No judgment, just science-backed balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-vedara-green hover:bg-emerald-900 text-white px-8 py-4 rounded-md font-bold text-lg transition shadow-lg hover:shadow-xl">
                Book 1:1 Consultation
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500 font-medium">
              <p>Trusted by 10,000+ patients globally</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 h-full flex justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vedara-clay/10 rounded-full blur-3xl -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1615656977285-7ff99b427eb6?q=80&w=1000&auto=format&fit=crop" 
               alt="Modern Ayurveda lifestyle" 
               className="rounded-2xl shadow-2xl object-cover h-[400px] md:h-[600px] w-full max-w-lg"
             />
          </div>
        </div>
      </section>

      {/* --- Quick Assessment (The Bridge) --- */}
      <section className="bg-vedara-green text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="font-serif text-3xl md:text-4xl mb-2">Where does your balance lie?</h2>
              <p className="text-emerald-100 text-lg">You are unique. Your healthcare should be too. Take our 3-minute Prakriti analysis.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-white text-vedara-green hover:bg-emerald-50 px-8 py-3 rounded-md font-bold transition transform hover:-translate-y-1">
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
            <h2 className="font-serif text-4xl md:text-5xl text-vedara-green mb-4">Ancient Wisdom. Clinical Precision.</h2>
            <p className="text-gray-600 text-lg">We strip away the mysticism and focus on the medicine.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-vedara-sand rounded-xl hover:shadow-lg transition duration-300">
               <Leaf className="w-12 h-12 text-vedara-clay mb-6" />
               <h3 className="font-serif text-2xl text-vedara-green mb-3">Root-Cause Focus</h3>
               <p className="text-gray-600">We don’t just mask symptoms. We use Nidana Parivarjana to identify and remove the root cause.</p>
            </div>
            <div className="p-8 bg-vedara-sand rounded-xl hover:shadow-lg transition duration-300">
               <Stethoscope className="w-12 h-12 text-vedara-clay mb-6" />
               <h3 className="font-serif text-2xl text-vedara-green mb-3">Doctor-Led</h3>
               <p className="text-gray-600">Protocols designed by BAMS & MD physicians, integrating modern diagnostics with pulse reading.</p>
            </div>
            <div className="p-8 bg-vedara-sand rounded-xl hover:shadow-lg transition duration-300">
               <Clock className="w-12 h-12 text-vedara-clay mb-6" />
               <h3 className="font-serif text-2xl text-vedara-green mb-3">Practical Living</h3>
               <p className="text-gray-600">We adapt ancient regimens (Dinacharya) to fit your busy schedule. No impossible diets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Programs --- */}
      <section className="py-20 bg-vedara-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-vedara-clay font-bold tracking-wider uppercase text-sm">Our Specialties</span>
              <h2 className="font-serif text-4xl md:text-5xl text-vedara-green mt-2">Targeted Care Programs</h2>
            </div>
            <button className="hidden md:flex items-center text-vedara-clay font-bold hover:text-vedara-green transition">
              View all programs <ArrowRight size={18} className="ml-2"/>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Gut Reset & Metabolism", for: "Bloating, IBS", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" },
              { title: "Stress & Sleep", for: "Anxiety, Burnout", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500" },
              { title: "Hormonal Harmony", for: "PCOS, Thyroid", img: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&q=80&w=500" }
            ].map((prog, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"/>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-vedara-green mb-2">{prog.title}</h3>
                  <p className="text-sm text-vedara-clay font-medium mb-4">Best for: {prog.for}</p>
                  <span className="text-gray-600 font-bold border-b-2 border-transparent group-hover:border-vedara-clay group-hover:text-vedara-clay transition-all">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Doctor Profiles --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-vedara-green mb-12">Experts in Integrative Ayurveda</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Doctor 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-vedara-sand border border-stone-100">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" alt="Dr Ananya" className="w-24 h-24 rounded-full object-cover" />
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-2xl text-vedara-green">Dr. Ananya Rao</h3>
                <p className="text-sm font-bold text-gray-500 mb-2">BAMS, MD (Ay) • Autoimmune Specialist</p>
                <p className="text-gray-600 italic">"Healing begins when we listen to the body's quiet signals."</p>
              </div>
            </div>
            {/* Doctor 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-vedara-sand border border-stone-100">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" alt="Dr Rajesh" className="w-24 h-24 rounded-full object-cover" />
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-2xl text-vedara-green">Dr. Rajesh Verma</h3>
                <p className="text-sm font-bold text-gray-500 mb-2">BAMS, PhD • Pain Management</p>
                <p className="text-gray-600 italic">"We don't just treat the pain, we treat the person."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-vedara-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl mb-12 text-center">Real Stories of Restoration</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex text-vedara-gold mb-4">
                {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl italic leading-relaxed mb-6">"I was skeptical about Ayurveda being too 'slow.' Vedara changed that. My chronic acidity resolved in 3 weeks. No heavy metals, no magic pills."</p>
              <div className="font-bold font-serif text-xl">— Sarah J., Tech Executive</div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex text-vedara-gold mb-4">
                {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl italic leading-relaxed mb-6">"Finally, a doctor who looked at my blood work AND my lifestyle. The integration of modern science is seamless here."</p>
              <div className="font-bold font-serif text-xl">— Arjun M., Architect</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Knowledge Hub --- */}
      <section className="py-20 bg-vedara-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-vedara-green">The Science of Life</h2>
            <p className="text-gray-600 mt-2">Latest research, webinars, and lifestyle guides.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-vedara-clay text-sm font-bold mb-3">
                <BookOpen size={16} className="mr-2" /> ARTICLE
              </div>
              <h3 className="font-serif text-xl text-vedara-green mb-2 group-hover:underline">Why "Salads for Dinner" might be hurting your gut</h3>
              <p className="text-gray-600 text-sm">According to Charak Samhita, raw foods in the evening dampen Agni...</p>
            </div>
            {/* Webinar Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-vedara-clay text-sm font-bold mb-3">
                <PlayCircle size={16} className="mr-2" /> WEBINAR
              </div>
              <h3 className="font-serif text-xl text-vedara-green mb-2 group-hover:underline">Managing Cortisol: Ayurveda x Neuroscience</h3>
              <p className="text-gray-600 text-sm">Watch Dr. Rao explain the link between stress hormones and Vata.</p>
            </div>
            {/* Guide Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="flex items-center text-vedara-clay text-sm font-bold mb-3">
                <Calendar size={16} className="mr-2" /> GUIDE
              </div>
              <h3 className="font-serif text-xl text-vedara-green mb-2 group-hover:underline">5 Morning Rituals for High-Performance Days</h3>
              <p className="text-gray-600 text-sm">Simple Dinacharya techniques to boost energy without caffeine.</p>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </main>
  );
};

export default Home;
