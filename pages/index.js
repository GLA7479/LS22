import Layout from "../components/Layout.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaCoins, FaUsers, FaChartPie, FaHandHoldingUsd } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      {/* 🔹 Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/videos/home-bg.mp4"
        />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            LIOSH Token
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            The ultimate meme coin inspired by Shiba Inu! Join our presale and become part of the next crypto revolution.
          </p>
          <div className="space-x-4">
            <Link href="/presale">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-110">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-110">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 🔹 Roadmap Section */}
      <section className="bg-black text-white py-20">
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-12">
          🚀 Roadmap
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {[
            { phase: "Phase 1", text: "Token Launch, Website, Community Building" },
            { phase: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { phase: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { phase: "Phase 4", text: "Major Partnerships & Metaverse Utility" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition transform"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{item.phase}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Tokenomics Section */}
      <section className="bg-gray-900 text-white py-20">
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-12">
          📊 Tokenomics
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Total Supply", text: "1,000,000,000,000 LIOSH", icon: <FaCoins size={30} /> },
            { title: "Presale Allocation", text: "40% – Available for early investors", icon: <FaRocket size={30} /> },
            { title: "Liquidity & Marketing", text: "30% – Locked for liquidity & promotions", icon: <FaUsers size={30} /> },
            { title: "Staking Rewards", text: "20% – For staking pools and incentives", icon: <FaHandHoldingUsd size={30} /> },
            { title: "Team & Advisors", text: "10% – Team allocation (locked)", icon: <FaChartPie size={30} /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center hover:scale-105 transition transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-yellow-400 mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/tokenomics">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-110">
              📊 Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="bg-gray-800 text-white py-16">
        <h2 className="text-3xl text-yellow-400 font-bold text-center mb-6">📩 Get in Touch</h2>
        <div className="flex justify-center space-x-6 text-lg">
          <a href="mailto:contact@liosh.com" className="hover:text-yellow-400">📧 Email</a>
          <a href="#" className="hover:text-yellow-400">🐦 Twitter</a>
          <a href="#" className="hover:text-yellow-400">💬 Telegram</a>
          <a href="#" className="hover:text-yellow-400">🌐 Discord</a>
        </div>
      </section>
    </Layout>
  );
}
