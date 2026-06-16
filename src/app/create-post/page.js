// src/app/posts/create/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
// Import your centralized API Client
import { apiClient } from "@/app/lib/apiClient"; 

export default function CreatePostPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Form Input States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setLoading(true);

    const postData = {
      title: title,
      body: description,
      userId: 5, // Required by dummyjson API
    };

    // Hits: https://dummyjson.com/posts/add via your centralized apiClient
    const response = await apiClient.post("/posts/add", postData);

    setLoading(false);

    if (response.success === false) {
      alert(`Failed to create post: ${response.message}`);
    } else {
      setSuccess(true);
      setTitle("");
      setDescription("");
      console.log("API Success Response:", response);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6 border border-gray-100">
        
        {/* Success Screen */}
        {success ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">The post is created.</p>
            <Link
              href="/"
              className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-400 font-medium transition"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Create a New Post</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your post title..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                required
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What's on your mind?..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-gray-800 resize-none"
              />
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Submit Post"}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}