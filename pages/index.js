"use client";
import Header from "../components/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/videos/home-bg.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">LIOSH Token</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">The next generation meme coin. Join our revolution!</p>
          <div className="space-x-4">
            <Link href="/presale"><button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl shadow-glow hover:scale-105 transition">🚀 Join Presale</button></Link>
            <Link href="/staking"><button className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:text-black shadow-glow hover:scale-105 transition">💰 Stake Now</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
