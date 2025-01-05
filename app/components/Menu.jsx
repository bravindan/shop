'use client'

import Link from 'next/link';
import React, { useState } from 'react'


export default function Menu() {
    const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </h1>
      {open && (
        <div className='absolute top-20 left-0 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Deals</Link>
          <Link href="/cart">Cart</Link>
        </div>
      )}
    </div>
  );
}
