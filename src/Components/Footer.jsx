import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-vedara-green text-vedara-light py-16 border-t border-white/10 font-sans">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Footer CTA */}
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to reclaim your vitality?</h2>
        <p className="text-lg md:text-xl text-emerald-100 mb-10">
          Your journey to root-cause healing starts with a single conversation.
        </p>
        <button className="bg-vedara-clay hover:bg-orange-800 text-white px-10 py-4 rounded-md font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Book Your Consultation
        </button>

        {/* Copyright & Links */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-emerald-200/60">
          <span>© 2025 VEDARA Health. All rights reserved.</span>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;