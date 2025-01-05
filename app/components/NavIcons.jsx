'use client'
import React,{useState} from 'react'
import CartModal from './CartModal';

export default function CartIcon() {
    const [cartOpen, setCartOpen] = useState(false);
   
  return (
    <div className="">
      <main className="relative cursor-pointer">
        <div>
        <button
          onClick={() => setCartOpen((prev) => !prev)}
          className="flex items-center justify-center w-12 h-10 bg-gray-200 text-white rounded-full"
        >
          Cart
        </button>
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center text-xs ">0</div>

        {cartOpen && (<CartModal />)}
        </div>
      </main>
    </div>
  );
}
