"use client";

import { useState } from "react";

export default function HeaderProvider() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/" className="hover:underline">
            Zantex
          </a>
        </h1>
        {/* Burger Button (visible on small screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {/* Navigation (hidden on small screens, visible on medium+) */}
        <nav className="hidden md:flex space-x-4">
          <a href="/convert" className="hover:underline">
            PNG to PDF
          </a>
          <a href="/remove-bg" className="hover:underline">
            Remove BG
          </a>
          <a href="/compress" className="hover:underline">
            Compress
          </a>
          {/* Add more links if you have additional features */}
        </nav>
      </div>
      {/* Mobile Menu (visible when burger is clicked) */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2 max-w-4xl mx-auto">
          <a
            href="/convert"
            className="hover:underline py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            PNG to PDF
          </a>
          <a
            href="/remove-bg"
            className="hover:underline py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Remove BG
          </a>
          <a
            href="/compress"
            className="hover:underline py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Compress
          </a>
          {/* Add more links if needed */}
        </nav>
      )}
    </header>
  );
}
