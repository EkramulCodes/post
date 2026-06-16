import Link from "next/link";
import CreatePostButton from "./CreatePostButton"; // Relative import targeting the same directory

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-800 mt-4 text-black shadow-xl border-white px-8 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white">
            Thought's
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
            href="/create-post"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            Create Post
          </Link>

          <Link
            href="/login"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
