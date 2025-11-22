// import React from 'react'

// const Shop = () => {
//   return (
//     <div>
//       this is Shop page
//     </div>
//   )
// }

// export default Shop
import React, { useState } from 'react';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../components/CartContext'; // Adjust path as needed

const PRODUCTS = [
  {
    id: 1,
    category: "Herbal Formulations",
    name: "Organic Triphala Powder",
    price: 24.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    category: "Herbal Formulations",
    name: "Pure Ashwagandha Root",
    price: 32.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1607989198526-5d159a91e527?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    category: "Subscription Kits",
    name: "Monthly Dosha Balance Kit",
    price: 85.00,
    rating: 5.0,
    isSub: true,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    category: "Detox Packs",
    name: "7-Day Kitchari Cleanse",
    price: 55.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1626365183209-b29b85c998d5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    category: "Detox Packs",
    name: "Liver Detox Tincture",
    price: 40.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    category: "Herbal Formulations",
    name: "Brahmi Focus Ghee",
    price: 28.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=400"
  }
];

const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Herbal Formulations', 'Subscription Kits', 'Detox Packs'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-[#FAFAF5] min-h-screen pt-24 pb-20 font-sans">
      
      {/* Header */}
      <div className="bg-[#2F3E28] text-[#F1F3EB] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ayurvedic Apothecary</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Time-tested formulations, ethically sourced ingredients, and modern convenience.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300
                ${filter === cat 
                  ? 'bg-[#2F3E28] text-[#D4AF37] border-[#2F3E28]' 
                  : 'bg-white text-[#2F3E28] border-[#2F3E28]/20 hover:border-[#D4AF37]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isSub && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2F3E28] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Monthly
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2F3E28] mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <Star size={16} className="text-[#D4AF37] fill-current" />
                  <span className="ml-2 text-sm text-gray-600">{product.rating} / 5.0</span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-serif text-[#2F3E28]">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-[#2F3E28] hover:bg-[#4A5D41] text-white px-4 py-2 rounded-sm transition-colors"
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
