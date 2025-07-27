"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 transition ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-extrabold text-yellow-400">LIOSH</h1>
      <nav className="space-x-6 hidden md:flex">
        <Link href="#roadmap" className="hover:text-yellow-400">
          Roadmap
        </Link>
        <Link href="#tokenomics" className="hover:text-yellow-400">
          Tokenomics
        </Link>
        <Link href="#contact" className="hover:text-yellow-400">
          Contact
        </Link>
      </nav>
      <Link href="/presale">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition shadow-glow">
          🚀 Presale
        </button>
      </Link>
    </header>
  );
}
