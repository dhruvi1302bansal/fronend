
// import React, { useState } from 'react';
// import { Star, ShoppingBag, Check } from 'lucide-react';
// import { useCart } from '../components/CartContext'; // Adjust path as needed

// const PRODUCTS = [
//   {
//     id: 1,
//     category: "Herbal Formulations",
//     name: "Organic Triphala Powder",
//     price: 24.00,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400"
//   },
//   {
//     id: 2,
//     category: "Herbal Formulations",
//     name: "Pure Ashwagandha Root",
//     price: 32.00,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1607989198526-5d159a91e527?auto=format&fit=crop&q=80&w=400"
//   },
//   {
//     id: 3,
//     category: "Subscription Kits",
//     name: "Monthly Dosha Balance Kit",
//     price: 85.00,
//     rating: 5.0,
//     isSub: true,
//     image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=400"
//   },
//   {
//     id: 4,
//     category: "Detox Packs",
//     name: "7-Day Kitchari Cleanse",
//     price: 55.00,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1626365183209-b29b85c998d5?auto=format&fit=crop&q=80&w=400"
//   },
//   {
//     id: 5,
//     category: "Detox Packs",
//     name: "Liver Detox Tincture",
//     price: 40.00,
//     rating: 4.6,
//     image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400"
//   },
//   {
//     id: 6,
//     category: "Herbal Formulations",
//     name: "Brahmi Focus Ghee",
//     price: 28.00,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=400"
//   }
// ];

// const Shop = () => {
//   const { addToCart } = useCart();
//   const [filter, setFilter] = useState('All');
//   const categories = ['All', 'Herbal Formulations', 'Subscription Kits', 'Detox Packs'];

//   const filteredProducts = filter === 'All' 
//     ? PRODUCTS 
//     : PRODUCTS.filter(p => p.category === filter);

//   return (
//     <div className="bg-[#FAFAF5] min-h-screen pt-24 pb-20 font-sans">
      
//       {/* Header */}
//       <div className="bg-[#2F3E28] text-[#F1F3EB] py-16 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ayurvedic Apothecary</h1>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//           Time-tested formulations, ethically sourced ingredients, and modern convenience.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full border transition-all duration-300
//                 ${filter === cat 
//                   ? 'bg-[#2F3E28] text-[#D4AF37] border-[#2F3E28]' 
//                   : 'bg-white text-[#2F3E28] border-[#2F3E28]/20 hover:border-[#D4AF37]'}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {filteredProducts.map(product => (
//             <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
//               <div className="relative h-64 overflow-hidden bg-gray-100">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {product.isSub && (
//                   <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2F3E28] text-xs font-bold px-3 py-1 rounded-full uppercase">
//                     Monthly
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-6">
//                 <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
//                   {product.category}
//                 </div>
//                 <h3 className="text-xl font-serif font-bold text-[#2F3E28] mb-2">{product.name}</h3>
                
//                 <div className="flex items-center mb-4">
//                   <Star size={16} className="text-[#D4AF37] fill-current" />
//                   <span className="ml-2 text-sm text-gray-600">{product.rating} / 5.0</span>
//                 </div>

//                 <div className="flex items-center justify-between mt-6">
//                   <span className="text-2xl font-serif text-[#2F3E28]">${product.price}</span>
//                   <button 
//                     onClick={() => addToCart(product)}
//                     className="flex items-center gap-2 bg-[#2F3E28] hover:bg-[#4A5D41] text-white px-4 py-2 rounded-sm transition-colors"
//                   >
//                     <ShoppingBag size={18} /> Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from 'react';
import { Star, ShoppingBag, ChevronLeft, ChevronRight, Leaf, Activity, HeartPulse } from 'lucide-react';
import { useCart } from '../components/CartContext'; // Adjust path if needed

// --- EXTENDED PRODUCT DATA ---
const PRODUCTS = [
  {
    id: 1,
    category: "Herbal Formulations",
    name: "Organic Triphala Powder",
    price: 24.00,
    rating: 4.8,
    dosha: "Tridoshic",
    cures: "Constipation, Indigestion",
    description: "The classic three-fruit blend for gentle daily detox and digestive regulation.",
    benefits: ["Regulates bowel movements", "Rich in Vitamin C", "Antioxidant support"],
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    category: "Herbal Formulations",
    name: "Pure Ashwagandha Root",
    price: 32.00,
    rating: 4.9,
    dosha: "Vata-Kapha",
    cures: "Stress, Fatigue, Insomnia",
    description: "An ancient adaptogen to help your body manage stress and boost vitality.",
    benefits: ["Reduces cortisol levels", "Boosts energy & stamina", "Improves sleep quality"],
    image: "https://images.unsplash.com/photo-1607989198526-5d159a91e527?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    category: "Subscription Kits",
    name: "Monthly Dosha Balance Kit",
    price: 85.00,
    rating: 5.0,
    isSub: true,
    dosha: "Personalized",
    cures: "General Imbalance",
    description: "A curated monthly box of teas, oils, and herbs specific to your season and body type.",
    benefits: ["Seasonal immunity boost", "Hormonal regulation", "Complete daily routine"],
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    category: "Detox Packs",
    name: "7-Day Kitchari Cleanse",
    price: 55.00,
    rating: 4.7,
    dosha: "Tridoshic",
    cures: "Gut Inflammation, Toxins",
    description: "Everything you need for a traditional mono-diet reset. Includes Mung dal, rice, and spice mix.",
    benefits: ["Resets digestive fire (Agni)", "Eliminates deep-seated toxins", "Improves mental clarity"],
    image: "https://images.unsplash.com/photo-1626365183209-b29b85c998d5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    category: "Wellness Accessories",
    name: "Hand-Hammered Copper Bottle",
    price: 45.00,
    rating: 4.9,
    dosha: "Kapha",
    cures: "Acidity, Bacteria",
    description: "Store water overnight to alkalize it and kill harmful bacteria naturally.",
    benefits: ["Balances pH levels", "Anti-microbial properties", "Aids in weight loss"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    category: "Herbal Formulations",
    name: "Brahmi Focus Ghee",
    price: 28.00,
    rating: 4.8,
    dosha: "Pitta",
    cures: "Brain Fog, Memory Loss",
    description: "Medicinal ghee infused with Brahmi to sharpen intellect and cool the mind.",
    benefits: ["Enhances cognitive function", "Calms the nervous system", "Nourishes deep tissues"],
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    category: "Aromatherapy",
    name: "Sandalwood & Rose Incense",
    price: 18.00,
    rating: 4.6,
    dosha: "Pitta-Vata",
    cures: "Anxiety, Anger",
    description: "Hand-rolled natural incense for meditation and space clearing.",
    benefits: ["Instant mood lifter", "Promotes deep meditation", "Purifies air"],
    image: "https://images.unsplash.com/photo-1602606393866-7d285f184ba8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    category: "Detox Packs",
    name: "Liver Detox Tincture",
    price: 40.00,
    rating: 4.5,
    dosha: "Pitta",
    cures: "Sluggish Liver, Skin Issues",
    description: "Potent extract of Kalmegh and Bhumi Amla for liver regeneration.",
    benefits: ["Flushes metabolic waste", "Clears skin breakouts", "Boosts metabolism"],
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    category: "Wellness Accessories",
    name: "Kansa Wand (Facial Massager)",
    price: 60.00,
    rating: 5.0,
    dosha: "Tridoshic",
    cures: "Wrinkles, Puffiness",
    description: "Bronze-capped massage tool to draw out acidity and heat from the skin.",
    benefits: ["Lymphatic drainage", "Natural face-lift effect", "Reduces puffiness"],
    image: "https://images.unsplash.com/photo-1598300188904-6287d52746ad?auto=format&fit=crop&q=80&w=600"
  }
];

// --- CAROUSEL COMPONENT ---
const FeaturedCarousel = ({ addToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.rating >= 4.9);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));

  const product = featuredProducts[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white">
      <div className="flex flex-col md:flex-row h-[500px] md:h-[400px]">
        {/* Image Side */}
        <div className="md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#2F3E28] px-4 py-1 font-bold uppercase text-xs tracking-widest rounded-sm shadow-md">
            Editor's Pick
          </div>
        </div>
        
        {/* Content Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#F9F5E3] relative">
          <div className="flex items-center gap-2 text-[#2F3E28] mb-2">
            <Star className="fill-[#D4AF37] text-[#D4AF37]" size={20} />
            <span className="font-bold">{product.rating} / 5.0 Rating</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2F3E28] font-bold mb-4 leading-tight">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          
          <div className="flex items-center gap-6 mt-auto">
            <span className="text-3xl font-serif text-[#2F3E28] font-bold">${product.price}</span>
            <button 
              onClick={() => addToCart(product)}
              className="bg-[#2F3E28] hover:bg-[#4A5D41] text-[#F1F3EB] px-8 py-3 rounded-sm font-bold flex items-center gap-2 transition-colors shadow-lg"
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full border border-[#2F3E28] hover:bg-[#2F3E28] hover:text-white transition"><ChevronLeft size={20}/></button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-[#2F3E28] hover:bg-[#2F3E28] hover:text-white transition"><ChevronRight size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN SHOP COMPONENT ---
const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Herbal Formulations', 'Wellness Accessories', 'Detox Packs', 'Aromatherapy', 'Subscription Kits'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-[#FAFAF5] min-h-screen font-sans">
      
      {/* --- 1. JUTE THEME BANNER --- */}
      <div 
        className="relative w-full py-20 md:py-28 px-6 text-center shadow-xl"
        style={{
          backgroundColor: '#Cfb995', // Jute color base
          backgroundImage: `url("https://www.transparenttextures.com/patterns/woven.png")`, // Jute Texture
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="block text-[#2F3E28] font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Nature's Pharmacy
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2F3E28] mb-6 drop-shadow-sm">
            The Ayurvedic <br/><span className="text-white drop-shadow-md italic">Apothecary</span>
          </h1>
          <p className="text-xl text-[#2F3E28] font-medium max-w-2xl mx-auto leading-relaxed">
            Hand-crafted formulations using ancient Vidhi (methods). Ethically sourced from the foothills of the Himalayas.
          </p>
        </div>
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 -mt-10 relative z-20">
        
        {/* --- 2. FEATURED CAROUSEL --- */}
        <FeaturedCarousel addToCart={addToCart} />

        {/* --- 3. FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md
                ${filter === cat 
                  ? 'bg-[#2F3E28] text-[#D4AF37] translate-y-[-2px]' 
                  : 'bg-white text-[#4A5D41] hover:bg-[#F9F5E3]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- 4. VIBRANT PRODUCT GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#2F3E28]/5 flex flex-col">
              
              {/* Image Area */}
              <div className="relative h-72 overflow-hidden bg-[#F1F3EB]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dosha Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#2F3E28] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Leaf size={12} className="text-[#D4AF37]" /> {product.dosha}
                </div>

                {/* Subscription Badge */}
                {product.isSub && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2F3E28] text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-sm">
                    Monthly
                  </div>
                )}
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category & Rating */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#4A5D41] uppercase tracking-wider">{product.category}</span>
                  <div className="flex items-center gap-1 bg-[#F9F5E3] px-2 py-1 rounded-md">
                    <Star size={12} className="text-[#D4AF37] fill-current" />
                    <span className="text-xs font-bold text-[#2F3E28]">{product.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-[#2F3E28] mb-2 leading-tight">{product.name}</h3>
                
                {/* Cure/Target */}
                <div className="flex items-start gap-2 mb-4">
                    <Activity size={16} className="text-[#D4AF37] mt-1 shrink-0" />
                    <span className="text-sm font-medium text-[#2F3E28]">Targets: {product.cures}</span>
                </div>

                {/* Description & Benefits */}
                <div className="mb-6 bg-[#FAFAF5] p-4 rounded-xl border border-[#2F3E28]/5">
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.description}</p>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#2F3E28] uppercase block mb-1">Health Benefits:</span>
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#4A5D41]">
                        <HeartPulse size={10} /> {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#2F3E28]/10">
                  <span className="text-2xl font-serif text-[#2F3E28] font-bold">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-[#2F3E28] hover:bg-[#D4AF37] hover:text-[#2F3E28] text-white px-5 py-2.5 rounded-full transition-all duration-300 font-bold shadow-md transform active:scale-95"
                  >
                    <ShoppingBag size={18} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
