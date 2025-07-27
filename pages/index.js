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

<<<<<<< HEAD
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
=======
      {/* 🔹 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/home-bg.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            LIOSH Token
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            The next generation meme coin. Join our revolution!
          </p>
          <div className="space-x-4">
            <Link href="/presale">
              <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl shadow-glow hover:scale-105 transition">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:text-black shadow-glow hover:scale-105 transition">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 ROADMAP */}
      <section id="roadmap" className="bg-black py-20 text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-12 fade-in">🚀 Roadmap</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {[
            { phase: "Phase 1", text: "Token Launch, Website, Community Building" },
            { phase: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { phase: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { phase: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-in bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-yellow-400/30 transition"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{item.phase}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 TOKENOMICS */}
      <section id="tokenomics" className="bg-gray-900 py-20 text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-12 fade-in">📊 Tokenomics</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Total Supply", text: "1,000,000,000,000 LIOSH" },
            { title: "Presale Allocation", text: "40% – Early Investors" },
            { title: "Liquidity & Marketing", text: "30% – Locked" },
            { title: "Staking Rewards", text: "20% – Incentives" },
            { title: "Team & Advisors", text: "10% – Locked" },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-in bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-yellow-400/30 transition"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
>>>>>>> 658818ad1b33b58d02c9b1615f07818efe2709df
    </div>
  );
}
