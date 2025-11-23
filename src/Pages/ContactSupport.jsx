// import React from 'react'

// const ContactSupport = () => {
//   return (
//     <div>
//       this is Contact Support page
//     </div>
//   )
// }

// export default ContactSupport;
import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Plus, 
  Minus, 
  FileText, 
  RefreshCcw, 
  Truck, 
  Clock,
  Send
} from 'lucide-react';

// --- THEME CONSTANTS ---
const COLORS = {
  oliveDark: "#2F3E28",
  oliveLight: "#4A5D41",
  beige: "#F9F5E3", // Lighter parchment for readability
  gold: "#D4AF37",
  textDark: "#1a0f0d"
};

// --- DATA ---
const FAQS = [
  {
    question: "How do I book a consultation with a Vaidya?",
    answer: "You can book a 1:1 consultation through our 'Consultation' page. We offer video calls and in-person visits at select centers. Choose your preferred time slot, and you will receive a confirmation email with a meeting link."
  },
  {
    question: "Are your products 100% natural?",
    answer: "Yes, Vedara implies strict adherence to classical Ayurvedic texts. All formulations are made from ethically sourced herbs, free from synthetic preservatives, heavy metals, and artificial fragrances."
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic orders typically arrive within 3-5 business days. International shipments may take 7-14 days depending on customs clearance. You will receive a tracking number once your order is dispatched."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the nature of herbal products, we accept returns only if the product is damaged upon arrival. Please notify us within 48 hours of delivery with photos."
  }
];

const ContactSupport = () => {
  const [openFaq, setOpenFaq] = useState(0); // Index of open FAQ
  const [activePolicy, setActivePolicy] = useState('refund'); // 'refund' or 'shipping'

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F1F3EB]">
      
      {/* --- HERO SECTION --- */}
      <div 
        className="w-full py-20 px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: COLORS.oliveDark }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#4A5D41] opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37] opacity-10 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <h1 className="font-serif text-4xl md:text-5xl text-[#F1F3EB] mb-4 relative z-10">
          Support & Guidance
        </h1>
        <p className="text-[#F1F3EB]/80 max-w-2xl mx-auto font-light tracking-wide relative z-10">
          Whether you have a question about your Dosha, an order inquiry, or need assistance with a return, our team is here to help you on your wellness journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT COLUMN: CONTACT OPTIONS & FORM (7 Cols) --- */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chat Card */}
            <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-[#D4AF37] flex flex-col items-center text-center hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-[#F9F5E3] rounded-full flex items-center justify-center text-[#2F3E28] mb-4 group-hover:bg-[#2F3E28] group-hover:text-[#D4AF37] transition-colors">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-serif text-xl text-[#2F3E28] font-bold mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with our wellness advisors for instant queries.</p>
              <button className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest border-b border-[#D4AF37] pb-1">
                Start Chat
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-[#2F3E28] flex flex-col items-center text-center hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-[#F9F5E3] rounded-full flex items-center justify-center text-[#2F3E28] mb-4 group-hover:bg-[#2F3E28] group-hover:text-[#D4AF37] transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="font-serif text-xl text-[#2F3E28] font-bold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 mb-4">For detailed medical queries or order issues.</p>
              <button className="text-[#2F3E28] font-bold uppercase text-xs tracking-widest border-b border-[#2F3E28] pb-1">
                care@vedara.com
              </button>
            </div>
          </div>

          {/* Contact Form - Styled as a Letter */}
          <div 
            className="p-8 rounded-sm shadow-lg relative"
            style={{ backgroundColor: COLORS.beige }} // Parchment look
          >
            {/* Paper texture overlay (optional CSS pattern) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#b89425] to-[#D4AF37]"></div>
            
            <h3 className="font-serif text-2xl text-[#2F3E28] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#2F3E28]"></span>
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold tracking-widest text-[#4A5D41] mb-1 uppercase">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#2F3E28]/30 py-2 focus:border-[#D4AF37] focus:outline-none transition-colors text-[#2F3E28] font-serif" placeholder="Your full name" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold tracking-widest text-[#4A5D41] mb-1 uppercase">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#2F3E28]/30 py-2 focus:border-[#D4AF37] focus:outline-none transition-colors text-[#2F3E28] font-serif" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs font-bold tracking-widest text-[#4A5D41] mb-1 uppercase">Subject</label>
                <select className="w-full bg-transparent border-b border-[#2F3E28]/30 py-2 focus:border-[#D4AF37] focus:outline-none transition-colors text-[#2F3E28] font-serif cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Consultation Issue</option>
                  <option>Product Question</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-bold tracking-widest text-[#4A5D41] mb-1 uppercase">Message</label>
                <textarea rows="4" className="w-full bg-[#F1F3EB] border border-[#2F3E28]/10 p-3 mt-2 focus:border-[#D4AF37] focus:outline-none transition-colors text-[#2F3E28] font-serif" placeholder="How can we assist you today?"></textarea>
              </div>

              <button 
                type="button"
                className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-[#2F3E28] text-[#F1F3EB] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#2F3E28] transition-all duration-300 shadow-md"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* --- RIGHT COLUMN: FAQ & POLICIES (5 Cols) --- */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* FAQ Section */}
          <div>
            <h3 className="font-serif text-2xl text-[#2F3E28] mb-6 font-bold">Common Questions</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#2F3E28]/10 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-[#F9F5E3] transition-colors"
                  >
                    <span className="font-serif text-[#2F3E28] font-medium">{faq.question}</span>
                    {openFaq === idx ? <Minus size={16} className="text-[#D4AF37]" /> : <Plus size={16} className="text-[#2F3E28]/60" />}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-[#2F3E28]/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies Section - Tabbed Interface */}
          <div className="bg-[#2F3E28] text-[#F1F3EB] p-6 rounded-sm shadow-xl">
            <div className="flex items-center justify-between mb-6 border-b border-[#F1F3EB]/20 pb-4">
               <h3 className="font-serif text-xl text-[#D4AF37]">Policies</h3>
               <div className="flex gap-2">
                  <button 
                    onClick={() => setActivePolicy('refund')}
                    className={`p-2 rounded transition-colors ${activePolicy === 'refund' ? 'bg-[#F1F3EB]/20 text-[#D4AF37]' : 'text-[#F1F3EB]/50 hover:text-white'}`}
                    title="Refund Policy"
                  >
                    <RefreshCcw size={20} />
                  </button>
                  <button 
                    onClick={() => setActivePolicy('shipping')}
                    className={`p-2 rounded transition-colors ${activePolicy === 'shipping' ? 'bg-[#F1F3EB]/20 text-[#D4AF37]' : 'text-[#F1F3EB]/50 hover:text-white'}`}
                    title="Shipping Policy"
                  >
                    <Truck size={20} />
                  </button>
               </div>
            </div>

            <div className="min-h-[200px]">
              {activePolicy === 'refund' ? (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                    <FileText size={18} />
                    <span className="font-bold uppercase tracking-wider text-sm">Return & Refund</span>
                  </div>
                  <p className="text-sm text-[#F1F3EB]/80 leading-relaxed mb-4">
                    We take great pride in our Ayurvedic formulations. However, if you are not satisfied:
                  </p>
                  <ul className="text-sm text-[#F1F3EB]/70 space-y-2 list-disc pl-4">
                    <li>Returns accepted within 14 days of delivery.</li>
                    <li>Products must be unopened and in original seal.</li>
                    <li>Full refund processed within 5-7 business days after inspection.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#F1F3EB]/10 text-xs text-[#F1F3EB]/50 italic">
                    * Consultations are non-refundable once the session has started.
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                    <Truck size={18} />
                    <span className="font-bold uppercase tracking-wider text-sm">Shipping & Delivery</span>
                  </div>
                  <p className="text-sm text-[#F1F3EB]/80 leading-relaxed mb-4">
                    We ship globally with eco-friendly packaging.
                  </p>
                  <ul className="text-sm text-[#F1F3EB]/70 space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock size={14} className="text-[#D4AF37]" /> 
                      Processing: 1-2 Business Days
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck size={14} className="text-[#D4AF37]" /> 
                      Domestic: 3-5 Business Days
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck size={14} className="text-[#D4AF37]" /> 
                      International: 7-14 Business Days
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#F1F3EB]/10 text-xs text-[#F1F3EB]/50 italic">
                    Free shipping on orders above $100.
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
