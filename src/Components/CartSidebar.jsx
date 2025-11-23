import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from './CartContext';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[150] transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#F9F5E3] shadow-2xl z-[160] transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-6 bg-[#2F3E28] text-[#F1F3EB] flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold">Your Cart ({cartItems.length})</h2>
            <button onClick={toggleCart} className="hover:text-[#D4AF37]">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <p>Your cart is empty.</p>
                <button onClick={toggleCart} className="mt-4 text-[#D4AF37] font-bold underline">Continue Shopping</button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-[#2F3E28]/10 pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md bg-white" />
                  <div className="flex-1">
                    <h3 className="font-serif text-[#2F3E28] font-bold">{item.name}</h3>
                    <p className="text-[#4A5D41] text-sm">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1 border border-[#2F3E28]/20">
                        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1} className="text-[#2F3E28] disabled:opacity-30"><Minus size={14} /></button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-[#2F3E28]"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#2F3E28]/10">
              <div className="flex justify-between mb-4 text-lg font-bold text-[#2F3E28]">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#2F3E28] font-bold py-3 rounded-sm transition-colors shadow-md">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;