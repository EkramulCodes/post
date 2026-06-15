// components/Navbar.jsx
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 mt-4  text-black shadow-xl border-white px-8 py-4 flex items-center justify-around">
      
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <FiBookOpen className="text-green-400 w-7 h-7" />

        <h1 className="text-2xl font-bold text-emerald-400">
          Storyfy
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="hover:text-cyan-400 transition duration-300 text-white"
        >
          Home
        </Link>

        <Link
          href="/login"
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
