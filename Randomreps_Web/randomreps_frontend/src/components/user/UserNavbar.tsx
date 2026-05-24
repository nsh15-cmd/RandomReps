// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMessageSquare, FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 font-body">
      {/* Main Navigation Container */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left Side: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-2xl text-brand-black">
            <FiMenu />
          </button>
          <a
            href="/"
            className="font-heading font-black text-2xl tracking-tighter uppercase text-brand-black"
          >
            RandomReps
          </a>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-brand-black">
          <a
            href="#"
            className="hover:text-brand-textMuted transition-colors flex items-center gap-1"
          >
            Shop
          </a>
          <a href="#" className="hover:text-brand-textMuted transition-colors">
            On Sale
          </a>
          <a href="#" className="hover:text-brand-textMuted transition-colors">
            New Arrivals
          </a>
          <a href="#" className="hover:text-brand-textMuted transition-colors">
            Brands
          </a>
        </div>

        {/* Right Side: Search & Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center bg-brand-gray px-4 py-2 rounded-full w-[300px]">
            <FiSearch className="text-brand-textMuted text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm text-brand-black placeholder:text-brand-textMuted"
            />
          </div>

          {/* Mobile Search Icon */}
          <button className="md:hidden text-xl text-brand-black">
            <FiSearch />
          </button>

          {/* Cart / Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61582440006612"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-brand-black hover:text-gray-600 transition-colors"
          >
            <FiMessageSquare />
          </a>
        </div>
      </nav>
    </header>
  );
}
