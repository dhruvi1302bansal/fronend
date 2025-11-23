import React from 'react';
import { Scroll, Feather, BookOpen, Coffee, Sun, Star, ArrowRight, Leaf } from 'lucide-react';

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-[#E8DFCA] font-serif text-[#3E2723] relative selection:bg-[#808000] selection:text-white">
      
      {/* --- VISUAL EFFECTS --- */}
      {/* Old Paper Texture Overlay (CSS Pattern) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235C4033' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Vignette Effect (Darker Edges) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(62,39,35,0.3)]"></div>

      {/* --- MANUSCRIPT BINDING (Left Border) --- */}
      <div className="fixed left-0 top-0 bottom-0 w-4 md:w-8 bg-[#5D4037] border-r-4 border-[#8B4513] z-50 flex flex-col items-center py-12 shadow-2xl">
        <div className="h-full w-[1px] bg-[#A1887F] opacity-50"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="pl-8 md:pl-16 pr-4 md:pr-8 py-12 max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-16 border-b-4 border-double border-[#808000]/30 pb-8">
          <div className="flex justify-center mb-4">
            <Scroll className="w-12 h-12 text-[#808000]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#2C3E50] drop-shadow-sm mb-2">
            The Vedara Archives
          </h1>
          <p className="text-xl italic text-[#556B2F]">Wisdom from the Ancients, Curated for Modern Life.</p>
        </header>

        {/* --- SECTION 1: ANCIENT WISDOM (Quotes) --- */}
        <section className="mb-20 relative">
          <div className="absolute -top-6 -left-4 text-6xl text-[#808000] opacity-20">“</div>
          <blockquote className="text-center text-2xl md:text-3xl leading-relaxed px-8 md:px-20 py-10 border-y border-[#8B4513]/20 bg-[#F5F5DC]/50 rounded-lg">
            "The individual is the epitome of the universe. Whatever is in the universe is in the individual, and whatever is in the individual is in the universe."
            <footer className="mt-4 text-lg font-bold text-[#8B4513]">— Charaka Samhita, Sharira Sthana</footer>
          </blockquote>
        </section>

        {/* --- SECTION 2: AYURVEDA INSIGHTS (Featured) --- */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Feather className="text-[#808000]" />
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#3E2723]">Ayurveda Insights</h2>
            <div className="h-1 bg-[#808000] flex-grow opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <div className="bg-[#F5F5DC] p-6 rounded-lg border border-[#D7CCC8] shadow-[8px_8px_0px_rgba(93,64,55,0.2)] hover:shadow-[4px_4px_0px_rgba(93,64,55,0.4)] hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <span className="inline-block bg-[#556B2F] text-[#F5F5DC] text-xs font-bold px-2 py-1 mb-4 rounded-sm">CORE PHILOSOPHY</span>
              <h3 className="text-2xl font-bold mb-3 text-[#2C3E50]">Understanding Your Prakriti: Vata, Pitta, Kapha</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Just as the five elements compose the universe, they compose your body. Discover how the unique combination of these elements defines your physical and emotional traits.
              </p>
              <button className="flex items-center gap-2 text-[#8B4513] font-bold hover:underline">
                Read Full Manuscript <ArrowRight className="w-4 h-4" />
              </button>
            </div>

             {/* Secondary Articles */}
             <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 bg-white/40 rounded-md border-l-4 border-[#E25822]">
                   <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#3E2723]">Agni: The Fire of Digestion</h4>
                      <p className="text-sm text-gray-700 mt-1">Why 90% of diseases start in the gut, and how to keep your inner fire burning bright.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white/40 rounded-md border-l-4 border-[#1E90FF]">
                   <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#3E2723]">Ojas: The Essence of Vitality</h4>
                      <p className="text-sm text-gray-700 mt-1">Building immunity and radiance through subtle nutrition and rest.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- SECTION 3: HERBS & FORMULATIONS --- */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Leaf className="text-[#556B2F]" />
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#3E2723]">Herbal Compendium</h2>
            <div className="h-1 bg-[#556B2F] flex-grow opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {/* Herb Cards */}
             {[
                { name: "Ashwagandha", desc: "The Horse's Strength", benefit: "Stress & Vitality", color: "bg-[#8B4513]" },
                { name: "Brahmi", desc: "Herb of Grace", benefit: "Focus & Memory", color: "bg-[#556B2F]" },
                { name: "Triphala", desc: "Three Fruits", benefit: "Detox & Digestion", color: "bg-[#808000]" },
                { name: "Shatavari", desc: "100 Spouses", benefit: "Hormonal Balance", color: "bg-[#C19A6B]" }
             ].map((herb, i) => (
                <div key={i} className="group relative bg-[#F9F3E3] p-6 rounded-t-full rounded-b-xl text-center border border-[#D7CCC8] hover:bg-white transition-colors duration-300 shadow-md">
                   <div className={`w-16 h-16 mx-auto rounded-full ${herb.color} text-white flex items-center justify-center mb-4 shadow-inner font-bold text-xl`}>
                      {herb.name[0]}
                   </div>
                   <h3 className="text-xl font-bold text-[#3E2723] mb-1">{herb.name}</h3>
                   <p className="text-xs uppercase tracking-wide text-[#8B4513] mb-3">{herb.desc}</p>
                   <p className="text-sm italic text-gray-600">"{herb.benefit}"</p>
                </div>
             ))}
          </div>
        </section>

        {/* --- SECTION 4: CASE STUDIES & LIFESTYLE --- */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
           
           {/* Case Studies */}
           <div className="bg-[#556B2F] text-[#F5F5DC] p-8 rounded-xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6B8E23] rounded-full -mr-10 -mt-10 opacity-30"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6"/> Case Studies</h3>
              <div className="space-y-6">
                 <div className="border-b border-[#F5F5DC]/20 pb-4">
                    <h4 className="font-bold text-lg text-white">The Migraine Reset</h4>
                    <p className="text-sm opacity-90 mt-1">How a 34-year-old IT professional cured chronic migraines through Pitta-pacifying diet and Nasya therapy.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-lg text-white">Reversing IBS</h4>
                    <p className="text-sm opacity-90 mt-1">A journey of restoring gut flora using Takra (Buttermilk) therapy and stress management.</p>
                 </div>
              </div>
           </div>

           {/* Lifestyle Guides */}
           <div>
              <h3 className="text-2xl font-bold mb-6 text-[#3E2723] flex items-center gap-2"><Sun className="w-6 h-6 text-[#E25822]"/> Dinacharya (Daily Routine)</h3>
              <div className="grid gap-4">
                 <div className="flex items-center p-4 bg-[#F5F5DC] rounded-lg border border-[#8B4513]/10 shadow-sm hover:shadow-md transition">
                    <div className="p-3 bg-[#E25822]/10 rounded-full mr-4 text-[#E25822] font-bold">06:00</div>
                    <div>
                       <h4 className="font-bold text-[#3E2723]">Brahma Muhurta</h4>
                       <p className="text-sm text-gray-600">Wake up before sunrise to sync with nature.</p>
                    </div>
                 </div>
                 <div className="flex items-center p-4 bg-[#F5F5DC] rounded-lg border border-[#8B4513]/10 shadow-sm hover:shadow-md transition">
                    <div className="p-3 bg-[#556B2F]/10 rounded-full mr-4 text-[#556B2F] font-bold">07:00</div>
                    <div>
                       <h4 className="font-bold text-[#3E2723]">Abhyanga</h4>
                       <p className="text-sm text-gray-600">Self-massage with warm sesame oil.</p>
                    </div>
                 </div>
                 <div className="flex items-center p-4 bg-[#F5F5DC] rounded-lg border border-[#8B4513]/10 shadow-sm hover:shadow-md transition">
                    <div className="p-3 bg-[#2C3E50]/10 rounded-full mr-4 text-[#2C3E50] font-bold">22:00</div>
                    <div>
                       <h4 className="font-bold text-[#3E2723]">Nidra</h4>
                       <p className="text-sm text-gray-600">Lights out. Sleep is the nurse of the world.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 5: RECIPES (Parchment Cards) --- */}
        <section className="mb-20">
           <div className="flex items-center gap-4 mb-8">
            <Coffee className="text-[#8B4513]" />
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#3E2723]">Kitchen Pharmacy</h2>
            <div className="h-1 bg-[#8B4513] flex-grow opacity-50"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
             <div className="flex-1 bg-white p-6 border-2 border-dashed border-[#A1887F] rounded-sm rotate-1 hover:rotate-0 transition duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-[#E25822] mb-2 font-sans">Golden Milk (Haldi Doodh)</h3>
                <p className="text-xs font-bold text-gray-400 mb-4">TIME: 5 MINS • DOSHA: VATA/KAPHA</p>
                <p className="mb-4 text-sm">The ultimate immunity booster and sleep aid.</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                   <li>1 cup warm milk (or almond milk)</li>
                   <li>1/2 tsp turmeric powder</li>
                   <li>Pinch of black pepper (activator)</li>
                   <li>1 tsp raw honey</li>
                </ul>
             </div>
             
             <div className="flex-1 bg-white p-6 border-2 border-dashed border-[#A1887F] rounded-sm -rotate-1 hover:rotate-0 transition duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-[#556B2F] mb-2 font-sans">CCF Tea (Digestive)</h3>
                <p className="text-xs font-bold text-gray-400 mb-4">TIME: 10 MINS • DOSHA: TRIDOSHA</p>
                <p className="mb-4 text-sm">Cumin, Coriander, and Fennel tea to reset digestion.</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                   <li>1/2 tsp Cumin seeds</li>
                   <li>1/2 tsp Coriander seeds</li>
                   <li>1/2 tsp Fennel seeds</li>
                   <li>Boil in 2 cups of water for 5 mins</li>
                </ul>
             </div>
          </div>
        </section>
        
        {/* --- FOOTER QUOTE --- */}
        <section className="text-center py-12 border-t-4 border-double border-[#5D4037]">
            <div className="max-w-2xl mx-auto">
               <Star className="w-8 h-8 text-[#808000] mx-auto mb-4 animate-pulse" />
               <p className="text-xl italic text-[#3E2723] font-medium">
                  "Illness does not arise in a person who eats wholesome food and lives a wholesome lifestyle."
               </p>
               <p className="mt-4 text-[#8B4513] font-bold text-sm tracking-widest uppercase">
                  — Sushruta Samhita
               </p>
            </div>
        </section>

      </div>

      {/* --- PAGE FOOTER --- */}
      {/* <footer className="bg-[#2C3E50] text-[#F5F5DC] py-12 relative z-20 border-t-8 border-[#808000]">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               <h2 className="text-2xl font-serif font-bold tracking-wider">VEDARA</h2>
               <p className="text-sm opacity-70 mt-1">Ancient Roots. Modern Healing.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium">
               <a href="#" className="hover:text-[#808000] transition">Home</a>
               <a href="#" className="hover:text-[#808000] transition">Consultation</a>
               <a href="#" className="hover:text-[#808000] transition">Shop Herbs</a>
               <a href="#" className="hover:text-[#808000] transition">Contact</a>
            </div>
            <div className="text-xs opacity-50">
               &copy; 2024 Vedara Ayurveda. All Rights Reserved.
            </div>
         </div>
      </footer> */}

    </div>
  );
};

export default KnowledgeHub;