import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile view */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={30}
            className="cursor-pointer tracking-wide"
          />
        </Link>
        <Menu />
      </div>
      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* left section  */}
        <div className="w-1/3 xl:w-1/2 items-center gap-12 flex">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={40}
              className="cursor-pointer tracking-wide"
            />
          </Link>
          <div className='hidden xl:flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {/* <Link href="/cart">Cart</Link> */}
          </div>
        </div>

        {/* right section  */}
        <div className="2/3 xl:w-1/2 flex items-center justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
