import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Background: Deep Olive | Border: Subtle Lighter Olive
    <footer className="bg-[#2F3E28] text-[#F1F3EB] py-16 border-t border-[#44523e] font-sans">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Footer CTA */}
        <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide text-[#F4F1E1]">
          Ready to reclaim your vitality?
        </h2>
        
        {/* Subtext: Soft Sage Green */}
        <p className="text-lg md:text-xl text-[#BCC8B4] mb-10">
          Your journey to root-cause healing starts with a single conversation.
        </p>
        
        {/* Button: Antique Gold/Moss (Stands out beautifully on Olive) */}
        <button className="bg-[#8F9648] hover:bg-[#7A8235] text-white px-10 py-4 rounded-sm font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 tracking-wider border border-[#aeb56d]/30 hover:shadow-white">
          Book Your Consultation
        </button>

        {/* Copyright & Links: Muted Olive/Grey */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-[#7D8C74]">
          <span>© 2025 VEDARA Health. All rights reserved.</span>
          <p className=' className=" hover:text-white transition-colors duration-300"'><Link to="/Privacy-policy">Privacy Policy</Link></p>
          <p className=' className=" hover:text-white transition-colors duration-300"'><Link to="/terms-conditions">Terms of Service</Link></p>
          {/* Careers / Doctor Registration */}
          <div className="">
            <p className=" text-sm hover:text-white">
              Partner with us as a Registered Ayurvedic Practitioner. Explore Careers
            </p>

            {/* <a 
              href="/careers"
              className="inline-block bg-transparent border border-[#8F9648] text-[#F1F3EB] px-6 py-3 rounded-sm font-semibold hover:bg-[#8F9648]/20 transition-all duration-300"
            >
              Explore Careers
            </a> */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;