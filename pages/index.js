import Layout from "../components/Layout.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaCoins, FaUsers, FaChartPie, FaHandHoldingUsd } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      {/* 🔹 Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-primary mb-4"
          >
            LIOSH Token
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-200 mb-6"
          >
            The ultimate meme coin inspired by Shiba Inu! Join our presale and become part of the next crypto revolution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-x-4"
          >
            <Link href="/presale">
              <button className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-black">
                💰 Stake Now
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src="/images/dog1.jpg"
            alt="Liosh"
            className="rounded-2xl shadow-2xl max-w-md"
          />
        </div>
      </section>

      {/* 🔹 Roadmap Section */}
      <section className="bg-black text-white py-20">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">🚀 Roadmap</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {[
            { phase: "Phase 1", text: "Token Launch, Website, Community Building" },
            { phase: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { phase: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { phase: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary p-6 rounded-xl shadow-xl text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{item.phase}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Tokenomics Section */}
      <section className="bg-gray-900 text-white py-20">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">📊 Tokenomics</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Total Supply", text: "1,000,000,000,000 LIOSH", icon: <FaCoins size={30} /> },
            { title: "Presale Allocation", text: "40% – Available for early investors", icon: <FaRocket size={30} /> },
            { title: "Liquidity & Marketing", text: "30% – Locked for liquidity & promotions", icon: <FaUsers size={30} /> },
            { title: "Staking Rewards", text: "20% – For staking pools and incentives", icon: <FaHandHoldingUsd size={30} /> },
            { title: "Team & Advisors", text: "10% – Team allocation (locked)", icon: <FaChartPie size={30} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center text-center"
            >
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tokenomics">
            <button className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500">
              📊 Learn More
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
