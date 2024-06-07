// components/NavBar.js
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/shopping-icon.svg" alt="Shopping Icon" className="h-[3rem] w-[2.5rem]" />
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/products" className="mr-5 hover:text-gray-900">Products</Link>
          <Link href="/contactus" className="mr-5 hover:text-gray-900">Contact Us</Link>
        </nav>
        <button className="my-2 text-white bg-indigo-500 border-0 py-1 px-4 md:py-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">Log In</button>
      </div>
    </header>
  );
};

export default NavBar;
