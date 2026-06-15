import Link from "next/link"
import { ImUserTie } from "react-icons/im";
import { BsEye } from "react-icons/bs"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"

export default function PostCards({ post }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition duration-300">
      
      <div className="flex items-center gap-2 mt-4 text-sm mb-4">
       <div className="bg-green-500 w-12 h-12 flex justify-center items-center rounded-full">
            <ImUserTie className="text-2xl rounded-full  text-white " />
       </div>
        <span className="font-bold text-base text-white">User ID: {post?.userId}</span>
      </div>
      {/* Title */}
      <Link href={`/${post?.id}`} className="text-2xl font-bold hover:text-blue-600 transition text-white mb-3">
        {post?.title}
      </Link>

      {/* Body */}
      <p className="text-white mb-5 line-clamp-3 py-3">
        {post?.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post?.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-green-700 text-sm px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-4 text-gray-600">
        
        {/* Reactions */}
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-1">
            <FaThumbsUp className="text-blue-500" />
            <span>{post?.reactions?.likes}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaThumbsDown className="text-red-500" />
            <span>{post?.reactions?.dislikes}</span>
          </div>
        <div className="flex items-center gap-1">
          <BsEye className="text-yellow-500" />
          <span>{post?.views}</span>
        </div>
        </div>

        {/* Views */}
      </div>

      {/* User */}
    </div>
  )
}
