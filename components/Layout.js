import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-700 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-3xl font-extrabold text-yellow-400">🐶 MemeCoin</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/tokenomics" className="hover:text-yellow-400">Tokenomics</Link>
          <Link href="/roadmap" className="hover:text-yellow-400">Roadmap</Link>
          <Link href="/presale" className="hover:text-yellow-400">Presale</Link>
          <Link href="/whitepaper" className="hover:text-yellow-400">Whitepaper</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 mt-10">
        © 2025 MemeCoin – All rights reserved.
      </footer>
    </div>
  );
}
