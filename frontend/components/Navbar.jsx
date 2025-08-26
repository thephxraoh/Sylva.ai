"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // ✅ Import Next.js Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Sylva.ai
        </Link>

        {/* Desktop Menu */}
<div className="hidden md:flex space-x-8 items-center">
  <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
  <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
  <Link href="/get-started" className="text-gray-600 hover:text-gray-900">Get Started</Link>
  <Link href="/login">
    <Button>Sign In</Button>
  </Link>
</div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          <Link href="/features" className="block text-gray-700 hover:text-gray-900">Features</Link>
          <Link href="/about" className="block text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/get-started" className="block text-gray-700 hover:text-gray-900">Get Started</Link>
          <Link href="/login">
            <Button className="w-full">Sign In</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
