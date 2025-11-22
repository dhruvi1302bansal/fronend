// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X, Search, ShoppingBag, User } from 'lucide-react';

// // --- COLOR PALETTE ---
// const COLORS = {
//   oliveDark: "#2F3E28",      // Main Navbar
//   oliveLight: "#4A5D41",     // Hover text
//   beigeText: "#F1F3EB",      // Icons/Text
//   paper: "#cbab1cff",          // Scroll Paper
//   gold: "#D4AF37",           // Accents
//   wood: "linear-gradient(to bottom, #5D4037, #3E2723, #1a0f0d)", // Rod Texture
// };

// // --- DATA ---
// const NAV_DATA = {
//   programs: {
//     title: "Programs",
//     layout: "grid",
//     items: [
//       "Gut & Digestion Care", "Women's Hormonal Balance", "Stress, Anxiety & Sleep",
//       "Skin Care & Radiance", "Chronic Pain & Migraine", "Weight & Metabolic Health",
//       "Thyroid & Autoimmune", "Respiratory & Allergies", "Hair & Scalp Restoration",
//       "Sexual Wellness", "Pediatrics", "Post-Illness Immunity"
//     ]
//   },
//   assessments: {
//     title: "Assessments",
//     layout: "list",
//     items: ["Free Dosha Quiz (AI)", "Skin Disease Analysis", "Upload Medical Reports", "Track Progress"]
//   },
//   consultation: {
//     title: "Consultation",
//     layout: "list",
//     items: ["Book 1:1 with Vaidya", "Pricing & Packages", "Follow-up Booking", "Find a Center"]
//   },
//   wisdom: {
//     title: "Wisdom Hub",
//     layout: "list",
//     items: ["Our Mission", "Doctor Profiles", "Science of Ayurveda", "Blog & Insights", "Case Studies"]
//   }
// };

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // --- THE SCROLL ANIMATION COMPONENT ---
//   const ScrollDropdown = ({ categoryKey }) => {
//     const data = NAV_DATA[categoryKey];
//     const isOpen = activeDropdown === categoryKey;

//     return (
//       <div 
//         className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-0 transition-all duration-300
//           ${isOpen ? 'visible' : 'invisible delay-500'}`} // Delay invisible so animation finishes
//         style={{ width: data.layout === 'grid' ? '600px' : '300px' }}
//       >
//         {/* 1. TOP ROD (Fixed Anchor) */}
//         <div 
//           className="w-full h-5 rounded-full relative z-30 shadow-lg"
//           style={{ background: COLORS.wood }}
//         >
//           {/* Gold Tips */}
//           <div className="absolute left-0 top-0 h-full w-4 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//           <div className="absolute right-0 top-0 h-full w-4 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>

//         {/* 2. THE PAPER (Unrolling Action) */}
//         <div 
//           className={`relative mx-auto bg-[#F9F5E3] overflow-hidden shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
//           style={{ 
//             width: '92%', // Paper is narrower than rods
//             marginTop: '-8px', // Tucked inside top rod
//             marginBottom: '-8px', // Tucked inside bottom rod
//             zIndex: 10, // Behind the rods
//             backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")'
//           }}
//         >
//           <div className="p-8 pt-6">
//             {/* Om Symbol Watermark */}
//             {/* <div className="text-center mb-4 opacity-40 select-none">
//               <span className="text-[#2F3E28] text-2xl font-serif">ॐ*</span>
//             </div> */}

//             {/* Content */}
//             {data.layout === 'grid' ? (
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//                 {data.items.map((item, idx) => (
//                   <a key={idx} href="#" className="group flex items-center text-[#2F3E28] hover:text-[#D4AF37] transition-colors">
//                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     <span className="font-serif font-medium text-sm">{item}</span>
//                   </a>
//                 ))}
//               </div>
//             ) : (
//               <ul className="space-y-4 text-center">
//                 {data.items.map((item, idx) => (
//                   <li key={idx}>
//                     <a href="#" className="block font-serif text-[#2F3E28] text-lg hover:text-[#8F9648] transition-transform hover:scale-105">
//                       {item}
//                     </a>
//                     {idx !== data.items.length - 1 && <div className="h-px w-16 mx-auto bg-[#2F3E28]/10 mt-3"></div>}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* 3. BOTTOM ROD (Rides the bottom of the paper) */}
//         <div 
//           className={`w-full h-6 rounded-full relative z-30 shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} // Moves up when closed
//           style={{ background: COLORS.wood }}
//         >
//            {/* Gold Tips */}
//            <div className="absolute -left-1 top-0 h-full w-5 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//            <div className="absolute -right-1 top-0 h-full w-5 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav 
//       className={`sticky top-0 w-full z-[100] font-sans shadow-xl transition-all duration-300`}
//       style={{ backgroundColor: COLORS.oliveDark }}
//     >
//       <div className={`w-full px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
//         <div className="flex justify-between items-center relative">
          
//           {/* LOGO */}
//           <div className="flex items-center gap-3 cursor-pointer z-50">
//             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F3EB] text-[#2F3E28] font-bold text-xl font-serif border-2 border-[#D4AF37]">
//               V
//             </div>
//             <div className="flex flex-col text-[#F1F3EB]">
//               <span className="font-serif text-2xl font-bold tracking-widest leading-none">VEDARA</span>
//             </div>
//           </div>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center space-x-10 h-full">
//             {Object.keys(NAV_DATA).map((key) => (
//               <div 
//                 key={key}
//                 className="relative group h-10 flex items-center justify-center"
//                 onMouseEnter={() => setActiveDropdown(key)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <button className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors py-4">
//                   {NAV_DATA[key].title}
//                   <ChevronDown 
//                     size={14} 
//                     className={`transition-transform duration-300 ${activeDropdown === key ? 'rotate-180 text-[#D4AF37]' : 'opacity-70'}`} 
//                   />
//                 </button>
                
//                 {/* DROPDOWN RENDERED HERE */}
//                 <ScrollDropdown categoryKey={key} />
//               </div>
//             ))}
//             <a href="#" className="font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors">
//               Shop
//             </a>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="hidden lg:flex items-center gap-6">
//              <div className="flex gap-4 text-[#F1F3EB]">
//                <Search size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//                <ShoppingBag size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//              </div>
//              <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#2F3E28] px-6 py-2 rounded-sm font-bold font-serif tracking-wide shadow-lg">
//                Book Consultation
//              </button>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="lg:hidden z-50">
//             <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-[#F1F3EB]">
//               {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU (Standard Slide-in, not Scroll) */}
//       <div 
//         className={`fixed inset-0 z-40 bg-[#F9F5E3] transition-transform duration-300 ease-out lg:hidden pt-24 px-6 overflow-y-auto
//         ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//          <div className="flex flex-col space-y-6">
//             {Object.keys(NAV_DATA).map(key => (
//               <div key={key} className="border-b border-[#2F3E28]/10 pb-4">
//                 <h3 className="font-serif text-xl text-[#2F3E28] mb-2 font-bold">{NAV_DATA[key].title}</h3>
//                 <div className="flex flex-col gap-2 pl-4">
//                   {NAV_DATA[key].items.map(item => (
//                     <a key={item} href="#" className="text-[#4A5D41] text-sm hover:text-[#D4AF37]">{item}</a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//          </div>
//       </div>
//     </nav>
//   );
// };



// export default Navbar;
// 
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X, Search, ShoppingBag } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // --- COLOR PALETTE ---
// const COLORS = {
//   oliveDark: "#2F3E28",      
//   oliveLight: "#4A5D41",     
//   beigeText: "#F1F3EB",      
//   paper: "#cbab1cff",          
//   gold: "#D4AF37",           
//   wood: "linear-gradient(to bottom, #5D4037, #3E2723, #1a0f0d)", 
// };

// // --- DATA (Mapped to your App.jsx Routes) ---
// const NAV_DATA = {
//   programs: {
//     title: "Programs",
//     path: "/Programs", // Matches App.jsx
//     layout: "grid",
//     items: [
//       "Gut & Digestion Care", "Women's Hormonal Balance", "Stress, Anxiety & Sleep",
//       "Skin Care & Radiance", "Chronic Pain & Migraine", "Weight & Metabolic Health",
//       "Thyroid & Autoimmune", "Respiratory & Allergies", "Hair & Scalp Restoration",
//       "Sexual Wellness", "Pediatrics", "Post-Illness Immunity"
//     ]
//   },
//   assessments: {
//     title: "Assessments",
//     path: "/Assessments", // Matches App.jsx
//     layout: "list",
//     items: ["Free Dosha Quiz (AI)", "Skin Disease Analysis", "Upload Medical Reports", "Track Progress"]
//   },
//   consultation: {
//     title: "Consultation",
//     path: "/Consulation", // Matches App.jsx (kept your spelling)
//     layout: "list",
//     items: ["Book 1:1 with Vaidya", "Pricing & Packages", "Follow-up Booking", "Find a Center"]
//   },
//   wisdom: {
//     title: "Wisdom Hub",
//     path: "/AboutUs", // Mapped 'Wisdom' to your AboutUs page
//     layout: "list",
//     items: ["Our Mission", "Doctor Profiles", "Science of Ayurveda", "Blog & Insights", "Case Studies"]
//   }
// };

// // --- HELPER: Creates URL-friendly slugs ---
// const slugify = (text) => {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, '-')           
//     .replace(/[^\w\-]+/g, '')       
//     .replace(/\-\-+/g, '-')         
//     .replace(/^-+/, '')             
//     .replace(/-+$/, '');            
// };

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // --- THE SCROLL ANIMATION COMPONENT ---
//   const ScrollDropdown = ({ categoryKey }) => {
//     const data = NAV_DATA[categoryKey];
//     const isOpen = activeDropdown === categoryKey;

//     return (
//       <div 
//         className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-0 transition-all duration-300
//           ${isOpen ? 'visible' : 'invisible delay-500'}`} 
//         style={{ width: data.layout === 'grid' ? '600px' : '300px' }}
//       >
//         {/* 1. TOP ROD */}
//         <div 
//           className="w-full h-5 rounded-full relative z-30 shadow-lg"
//           style={{ background: COLORS.wood }}
//         >
//           <div className="absolute left-0 top-0 h-full w-4 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//           <div className="absolute right-0 top-0 h-full w-4 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>

//         {/* 2. THE PAPER */}
//         <div 
//           className={`relative mx-auto bg-[#F9F5E3] overflow-hidden shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
//           style={{ 
//             width: '92%', 
//             marginTop: '-8px', 
//             marginBottom: '-8px', 
//             zIndex: 10, 
//             backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")'
//           }}
//         >
//           <div className="p-8 pt-6">
//             {data.layout === 'grid' ? (
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//                 {data.items.map((item, idx) => (
//                   <Link 
//                     key={idx} 
//                     // Using Hash (#) to prevent 404s until you add sub-routes in App.jsx
//                     to={`${data.path}#${slugify(item)}`} 
//                     className="group flex items-center text-[#2F3E28] hover:text-[#D4AF37] transition-colors"
//                     onClick={() => setActiveDropdown(null)} 
//                   >
//                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     <span className="font-serif font-medium text-sm">{item}</span>
//                   </Link>
//                 ))}
//               </div>
//             ) : (
//               <ul className="space-y-4 text-center">
//                 {data.items.map((item, idx) => (
//                   <li key={idx}>
//                     <Link 
//                       to={`${data.path}#${slugify(item)}`}
//                       className="block font-serif text-[#2F3E28] text-lg hover:text-[#8F9648] transition-transform hover:scale-105"
//                       onClick={() => setActiveDropdown(null)}
//                     >
//                       {item}
//                     </Link>
//                     {idx !== data.items.length - 1 && <div className="h-px w-16 mx-auto bg-[#2F3E28]/10 mt-3"></div>}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* 3. BOTTOM ROD */}
//         <div 
//           className={`w-full h-6 rounded-full relative z-30 shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} 
//           style={{ background: COLORS.wood }}
//         >
//            <div className="absolute -left-1 top-0 h-full w-5 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//            <div className="absolute -right-1 top-0 h-full w-5 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav 
//       className={`sticky top-0 w-full z-[100] font-sans shadow-xl transition-all duration-300`}
//       style={{ backgroundColor: COLORS.oliveDark }}
//     >
//       <div className={`w-full px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
//         <div className="flex justify-between items-center relative">
          
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3 cursor-pointer z-50">
//             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F3EB] text-[#2F3E28] font-bold text-xl font-serif border-2 border-[#D4AF37]">
//               V
//             </div>
//             <div className="flex flex-col text-[#F1F3EB]">
//               <span className="font-serif text-2xl font-bold tracking-widest leading-none">VEDARA</span>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center space-x-10 h-full">
//             {Object.keys(NAV_DATA).map((key) => (
//               <div 
//                 key={key}
//                 className="relative group h-10 flex items-center justify-center"
//                 onMouseEnter={() => setActiveDropdown(key)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {/* Main Link matches App.jsx path */}
//                 <Link 
//                   to={NAV_DATA[key].path} 
//                   className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors py-4"
//                   onClick={() => setActiveDropdown(null)}
//                 >
//                   {NAV_DATA[key].title}
//                   <ChevronDown 
//                     size={14} 
//                     className={`transition-transform duration-300 ${activeDropdown === key ? 'rotate-180 text-[#D4AF37]' : 'opacity-70'}`} 
//                   />
//                 </Link>
                
//                 {/* SCROLL DROPDOWN */}
//                 <ScrollDropdown categoryKey={key} />
//               </div>
//             ))}
//             <Link to="/Shop" className="font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors">
//               Shop
//             </Link>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="hidden lg:flex items-center gap-6">
//              <div className="flex gap-4 text-[#F1F3EB]">
//                <Search size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//                <Link to="/Shop">
//                  <ShoppingBag size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//                </Link>
//              </div>
//              <Link to="/Consulation" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#2F3E28] px-6 py-2 rounded-sm font-bold font-serif tracking-wide shadow-lg">
//                Book Consultation
//              </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="lg:hidden z-50">
//             <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-[#F1F3EB]">
//               {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div 
//         className={`fixed inset-0 z-40 bg-[#F9F5E3] transition-transform duration-300 ease-out lg:hidden pt-24 px-6 overflow-y-auto
//         ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//          <div className="flex flex-col space-y-6">
//             {Object.keys(NAV_DATA).map(key => (
//               <div key={key} className="border-b border-[#2F3E28]/10 pb-4">
//                 <Link 
//                   to={NAV_DATA[key].path}
//                   onClick={() => setIsMobileOpen(false)}
//                   className="font-serif text-xl text-[#2F3E28] mb-2 font-bold block"
//                 >
//                   {NAV_DATA[key].title}
//                 </Link>
//                 <div className="flex flex-col gap-2 pl-4">
//                   {NAV_DATA[key].items.map(item => (
//                     <Link 
//                       key={item} 
//                       to={`${NAV_DATA[key].path}#${slugify(item)}`}
//                       onClick={() => setIsMobileOpen(false)} 
//                       className="text-[#4A5D41] text-sm hover:text-[#D4AF37]"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
            
//             <div className="flex flex-col gap-4 mt-2">
//               <Link to="/Shop" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
//                 Shop
//               </Link>
//               <Link to="/ContactSupport" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
//                 Support
//               </Link>
//               <Link to="/Consulation" onClick={() => setIsMobileOpen(false)} className="bg-[#D4AF37] text-[#2F3E28] py-3 text-center font-bold font-serif shadow-lg rounded-sm">
//                 Book Consultation
//               </Link>
//             </div>
//          </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X, Search, ShoppingBag } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // --- COLOR PALETTE ---
// const COLORS = {
//   oliveDark: "#2F3E28",      
//   oliveLight: "#4A5D41",     
//   beigeText: "#F1F3EB",      
//   paper: "#cbab1cff",          
//   gold: "#D4AF37",           
//   wood: "linear-gradient(to bottom, #5D4037, #3E2723, #1a0f0d)", 
// };

// // --- DATA (Strictly mapped to your App.jsx Routes) ---
// const NAV_DATA = {
//   programs: {
//     title: "Programs",
//     path: "/Programs", // Matches App.jsx
//     layout: "grid",
//     items: [
//       "Gut & Digestion Care", "Women's Hormonal Balance", "Stress, Anxiety & Sleep",
//       "Skin Care & Radiance", "Chronic Pain & Migraine", "Weight & Metabolic Health",
//       "Thyroid & Autoimmune", "Respiratory & Allergies", "Hair & Scalp Restoration",
//       "Sexual Wellness", "Pediatrics", "Post-Illness Immunity"
//     ]
//   },
//   assessments: {
//     title: "Assessments",
//     path: "/Assessments", // Matches App.jsx
//     layout: "list",
//     items: ["Free Dosha Quiz (AI)", "Skin Disease Analysis", "Upload Medical Reports", "Track Progress"]
//   },
//   consultation: {
//     title: "Consultation",
//     path: "/Consulting", // Matches App.jsx spelling
//     layout: "list",
//     items: ["Book 1:1 with Vaidya", "Pricing & Packages", "Follow-up Booking", "Find a Center"]
//   },
//   wisdom: {
//     title: "Knowledge Hub",
//     path: "/KnowledgeHub", // Mapped to AboutUs as per your routes
//     layout: "list",
//     items: ["Our Mission", "Doctor Profiles", "Science of Ayurveda", "Blog & Insights", "Case Studies"]
//   },
//   AboutUs:{
//     title: "About Us",
//     path: "/AboutUs",
//     layout: "list",
//     items: ["Our Story", "Meet the Team", "Careers", "Contact Us"]
//   }
// };

// // --- HELPER: Creates URL-friendly slugs ---
// const slugify = (text) => {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, '-')           
//     .replace(/[^\w\-]+/g, '')       
//     .replace(/\-\-+/g, '-')         
//     .replace(/^-+/, '')             
//     .replace(/-+$/, '');            
// };

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // --- THE SCROLL ANIMATION COMPONENT ---
//   const ScrollDropdown = ({ categoryKey }) => {
//     const data = NAV_DATA[categoryKey];
//     const isOpen = activeDropdown === categoryKey;

//     return (
//       <div 
//         className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-0 transition-all duration-300
//           ${isOpen ? 'visible' : 'invisible delay-500'}`} 
//         style={{ width: data.layout === 'grid' ? '600px' : '300px' }}
//       >
//         {/* 1. TOP ROD */}
//         <div 
//           className="w-full h-5 rounded-full relative z-30 shadow-lg"
//           style={{ background: COLORS.wood }}
//         >
//           <div className="absolute left-0 top-0 h-full w-4 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//           <div className="absolute right-0 top-0 h-full w-4 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>

//         {/* 2. THE PAPER */}
//         <div 
//           className={`relative mx-auto bg-[#F9F5E3] overflow-hidden shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
//           style={{ 
//             width: '92%', 
//             marginTop: '-8px', 
//             marginBottom: '-8px', 
//             zIndex: 10, 
//             backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")'
//           }}
//         >
//           <div className="p-8 pt-6">
//             {data.layout === 'grid' ? (
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//                 {data.items.map((item, idx) => (
//                   <Link 
//                     key={idx} 
//                     // Using Hash (#) ensures it goes to the main page without crashing
//                     to={`${data.path}#${slugify(item)}`} 
//                     className="group flex items-center text-[#2F3E28] hover:text-[#D4AF37] transition-colors"
//                     onClick={() => setActiveDropdown(null)} 
//                   >
//                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     <span className="font-serif font-medium text-sm">{item}</span>
//                   </Link>
//                 ))}
//               </div>
//             ) : (
//               <ul className="space-y-4 text-center">
//                 {data.items.map((item, idx) => (
//                   <li key={idx}>
//                     <Link 
//                       to={`${data.path}#${slugify(item)}`}
//                       className="block font-serif text-[#2F3E28] text-lg hover:text-[#8F9648] transition-transform hover:scale-105"
//                       onClick={() => setActiveDropdown(null)}
//                     >
//                       {item}
//                     </Link>
//                     {idx !== data.items.length - 1 && <div className="h-px w-16 mx-auto bg-[#2F3E28]/10 mt-3"></div>}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* 3. BOTTOM ROD */}
//         <div 
//           className={`w-full h-6 rounded-full relative z-30 shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
//             ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} 
//           style={{ background: COLORS.wood }}
//         >
//            <div className="absolute -left-1 top-0 h-full w-5 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
//            <div className="absolute -right-1 top-0 h-full w-5 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav 
//       className={`sticky top-0 w-full z-[100] font-sans shadow-xl transition-all duration-300`}
//       style={{ backgroundColor: COLORS.oliveDark }}
//     >
//       <div className={`w-full px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
//         <div className="flex justify-between items-center relative">
          
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3 cursor-pointer z-50">
//             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F3EB] text-[#2F3E28] font-bold text-xl font-serif border-2 border-[#D4AF37]">
//               V
//             </div>
//             <div className="flex flex-col text-[#F1F3EB]">
//               <span className="font-serif text-2xl font-bold tracking-widest leading-none">VEDARA</span>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center space-x-10 h-full">
//             {Object.keys(NAV_DATA).map((key) => (
//               <div 
//                 key={key}
//                 className="relative group h-10 flex items-center justify-center"
//                 onMouseEnter={() => setActiveDropdown(key)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {/* Main Link (Clicking 'Programs' goes to /Programs) */}
//                 <Link 
//                   to={NAV_DATA[key].path} 
//                   className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors py-4"
//                   onClick={() => setActiveDropdown(null)}
//                 >
//                   {NAV_DATA[key].title}
//                   <ChevronDown 
//                     size={14} 
//                     className={`transition-transform duration-300 ${activeDropdown === key ? 'rotate-180 text-[#D4AF37]' : 'opacity-70'}`} 
//                   />
//                 </Link>
                
//                 {/* SCROLL DROPDOWN */}
//                 <ScrollDropdown categoryKey={key} />
//               </div>
//             ))}
//             <Link to="/Shop" className="font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors">
//               Shop
//             </Link>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="hidden lg:flex items-center gap-6">
//              <div className="flex gap-4 text-[#F1F3EB]">
//                <Search size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//                <Link to="/Shop">
//                  <ShoppingBag size={20} className="cursor-pointer hover:text-[#D4AF37]" />
//                </Link>
//              </div>
//              {/* Note: Updated to match your App.jsx spelling */}
//              <Link to="/Consulting" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#2F3E28] px-6 py-2 rounded-sm font-bold font-serif tracking-wide shadow-lg">
//                Book Consultation
//              </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="lg:hidden z-50">
//             <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-[#F1F3EB]">
//               {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div 
//         className={`fixed inset-0 z-40 bg-[#F9F5E3] transition-transform duration-300 ease-out lg:hidden pt-24 px-6 overflow-y-auto
//         ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//          <div className="flex flex-col space-y-6">
//             {Object.keys(NAV_DATA).map(key => (
//               <div key={key} className="border-b border-[#2F3E28]/10 pb-4">
//                 <Link 
//                   to={NAV_DATA[key].path}
//                   onClick={() => setIsMobileOpen(false)}
//                   className="font-serif text-xl text-[#2F3E28] mb-2 font-bold block"
//                 >
//                   {NAV_DATA[key].title}
//                 </Link>
//                 <div className="flex flex-col gap-2 pl-4">
//                   {NAV_DATA[key].items.map(item => (
//                     <Link 
//                       key={item} 
//                       to={`${NAV_DATA[key].path}#${slugify(item)}`}
//                       onClick={() => setIsMobileOpen(false)} 
//                       className="text-[#4A5D41] text-sm hover:text-[#D4AF37]"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
            
//             <div className="flex flex-col gap-4 mt-2">
//               <Link to="/Shop" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
//                 Shop
//               </Link>
//               <Link to="/ContactSupport" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
//                 Support
//               </Link>
//               <Link to="/Consulting" onClick={() => setIsMobileOpen(false)} className="bg-[#D4AF37] text-[#2F3E28] py-3 text-center font-bold font-serif shadow-lg rounded-sm">
//                 Book Consultation
//               </Link>
//             </div>
//          </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
// --- NEW IMPORTS ---
import { useCart } from './CartContext'; // Ensure path is correct
import CartSidebar from './CartSidebar'; // Ensure path is correct

// --- COLOR PALETTE ---
const COLORS = {
  oliveDark: "#2F3E28",      
  oliveLight: "#4A5D41",     
  beigeText: "#F1F3EB",      
  paper: "#cbab1cff",          
  gold: "#D4AF37",           
  wood: "linear-gradient(to bottom, #5D4037, #3E2723, #1a0f0d)", 
};

// --- DATA (Strictly mapped to your App.jsx Routes) ---
const NAV_DATA = {
  programs: {
    title: "Programs",
    path: "/Programs",
    layout: "grid",
    items: [
      "Gut & Digestion Care", "Women's Hormonal Balance", "Stress, Anxiety & Sleep",
      "Skin Care & Radiance", "Chronic Pain & Migraine", "Weight & Metabolic Health",
      "Thyroid & Autoimmune", "Respiratory & Allergies", "Hair & Scalp Restoration",
      "Sexual Wellness", "Pediatrics", "Post-Illness Immunity"
    ]
  },
  assessments: {
    title: "Assessments",
    path: "/Assessments",
    layout: "list",
    items: ["Free Dosha Quiz (AI)", "Skin Disease Analysis", "Upload Medical Reports", "Track Progress"]
  },
  consultation: {
    title: "Consultation",
    path: "/Consulting",
    layout: "list",
    items: ["Book 1:1 with Vaidya", "Pricing & Packages", "Follow-up Booking", "Find a Center"]
  },
  wisdom: {
    title: "Knowledge Hub",
    path: "/KnowledgeHub",
    layout: "list",
    items: ["Our Mission", "Doctor Profiles", "Science of Ayurveda", "Blog & Insights", "Case Studies"]
  },
  AboutUs:{
    title: "About Us",
    path: "/AboutUs",
    layout: "list",
    items: ["Our Story", "Meet the Team", "Careers", "Contact Us"]
  }
};

// --- HELPER: Creates URL-friendly slugs ---
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

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // --- NEW: GET CART DATA ---
  const { cartItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- THE SCROLL ANIMATION COMPONENT ---
  const ScrollDropdown = ({ categoryKey }) => {
    const data = NAV_DATA[categoryKey];
    const isOpen = activeDropdown === categoryKey;

    return (
      <div 
        className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-0 transition-all duration-300
          ${isOpen ? 'visible' : 'invisible delay-500'}`} 
        style={{ width: data.layout === 'grid' ? '600px' : '300px' }}
      >
        {/* 1. TOP ROD */}
        <div 
          className="w-full h-5 rounded-full relative z-30 shadow-lg"
          style={{ background: COLORS.wood }}
        >
          <div className="absolute left-0 top-0 h-full w-4 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
          <div className="absolute right-0 top-0 h-full w-4 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
        </div>

        {/* 2. THE PAPER */}
        <div 
          className={`relative mx-auto bg-[#F9F5E3] overflow-hidden shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
            ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ 
            width: '92%', 
            marginTop: '-8px', 
            marginBottom: '-8px', 
            zIndex: 10, 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")'
          }}
        >
          <div className="p-8 pt-6">
            {data.layout === 'grid' ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {data.items.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={`${data.path}#${slugify(item)}`} 
                    className="group flex items-center text-[#2F3E28] hover:text-[#D4AF37] transition-colors"
                    onClick={() => setActiveDropdown(null)} 
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="font-serif font-medium text-sm">{item}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <ul className="space-y-4 text-center">
                {data.items.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`${data.path}#${slugify(item)}`}
                      className="block font-serif text-[#2F3E28] text-lg hover:text-[#8F9648] transition-transform hover:scale-105"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item}
                    </Link>
                    {idx !== data.items.length - 1 && <div className="h-px w-16 mx-auto bg-[#2F3E28]/10 mt-3"></div>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 3. BOTTOM ROD */}
        <div 
          className={`w-full h-6 rounded-full relative z-30 shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-700
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} 
          style={{ background: COLORS.wood }}
        >
           <div className="absolute -left-1 top-0 h-full w-5 rounded-l-full bg-yellow-600 border-r border-yellow-900"></div>
           <div className="absolute -right-1 top-0 h-full w-5 rounded-r-full bg-yellow-600 border-l border-yellow-900"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* --- NEW: Cart Drawer Component --- */}
      <CartSidebar />

      <nav 
        className={`sticky top-0 w-full z-[100] font-sans shadow-xl transition-all duration-300`}
        style={{ backgroundColor: COLORS.oliveDark }}
      >
        <div className={`w-full px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
          <div className="flex justify-between items-center relative">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer z-50">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F3EB] text-[#2F3E28] font-bold text-xl font-serif border-2 border-[#D4AF37]">
                V
              </div>
              <div className="flex flex-col text-[#F1F3EB]">
                <span className="font-serif text-2xl font-bold tracking-widest leading-none">VEDARA</span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10 h-full">
              {Object.keys(NAV_DATA).map((key) => (
                <div 
                  key={key}
                  className="relative group h-10 flex items-center justify-center"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={NAV_DATA[key].path} 
                    className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors py-4"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {NAV_DATA[key].title}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === key ? 'rotate-180 text-[#D4AF37]' : 'opacity-70'}`} 
                    />
                  </Link>
                  <ScrollDropdown categoryKey={key} />
                </div>
              ))}
              <Link to="/Shop" className="font-medium text-sm uppercase tracking-wider text-[#F1F3EB] hover:text-[#D4AF37] transition-colors">
                Shop
              </Link>
            </div>

            {/* RIGHT ICONS */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-4 text-[#F1F3EB]">
                <Search size={20} className="cursor-pointer hover:text-[#D4AF37]" />
                
                {/* --- MODIFIED: Shopping Bag Icon --- */}
                <button onClick={toggleCart} className="relative cursor-pointer hover:text-[#D4AF37] transition-colors">
                  <ShoppingBag size={20} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#2F3E28] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
              <Link to="/Consulting" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#2F3E28] px-6 py-2 rounded-sm font-bold font-serif tracking-wide shadow-lg">
                Book Consultation
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="lg:hidden z-50 flex items-center gap-4">
              {/* Mobile Cart Icon */}
              <button onClick={toggleCart} className="relative text-[#F1F3EB]">
                <ShoppingBag size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#2F3E28] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </button>

              <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-[#F1F3EB]">
                {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div 
          className={`fixed inset-0 z-40 bg-[#F9F5E3] transition-transform duration-300 ease-out lg:hidden pt-24 px-6 overflow-y-auto
          ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col space-y-6">
              {Object.keys(NAV_DATA).map(key => (
                <div key={key} className="border-b border-[#2F3E28]/10 pb-4">
                  <Link 
                    to={NAV_DATA[key].path}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-serif text-xl text-[#2F3E28] mb-2 font-bold block"
                  >
                    {NAV_DATA[key].title}
                  </Link>
                  <div className="flex flex-col gap-2 pl-4">
                    {NAV_DATA[key].items.map(item => (
                      <Link 
                        key={item} 
                        to={`${NAV_DATA[key].path}#${slugify(item)}`}
                        onClick={() => setIsMobileOpen(false)} 
                        className="text-[#4A5D41] text-sm hover:text-[#D4AF37]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="flex flex-col gap-4 mt-2">
                <Link to="/Shop" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
                  Shop
                </Link>
                <Link to="/ContactSupport" onClick={() => setIsMobileOpen(false)} className="font-serif text-xl text-[#2F3E28] font-bold">
                  Support
                </Link>
                <Link to="/Consulting" onClick={() => setIsMobileOpen(false)} className="bg-[#D4AF37] text-[#2F3E28] py-3 text-center font-bold font-serif shadow-lg rounded-sm">
                  Book Consultation
                </Link>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;