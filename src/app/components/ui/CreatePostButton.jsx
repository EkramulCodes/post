// CreatePostButton.jsx
"use client";

import Link from "next/link";

export default function CreatePostButton() {
  return (
    <Link
      href="/posts/create"
      className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-400 transition duration-300 font-medium inline-block"
    >
      Create Post
    </Link>
  );
}