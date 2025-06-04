"use client";

import Image from "next/image";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

type PostType = {
  id: number;
  content: string;
  author: string;
  avatar: string;
  title: string;
  createdAt: Date;
};

export default function Post() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setPosts([
      {
        id: Date.now(),
        content,
        author: "Mel Avera",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        title: "Software Engineer",
        createdAt: new Date(),
      },
      ...posts,
    ]);
    setContent("");
  };

  return (
    <div className="w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full mx-auto"
      >
        <div className="flex items-center gap-3 p-4">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            width={80}
            height={80}
            alt="Profile"
            className="rounded-full"
          />
          <input
            className="flex-1 border border-black rounded-full p-6 placeholder:text-xl placeholder:text-gray-700 placeholder:font-bold"
            placeholder="Start a post"
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleSubmit(e as any);
              }
            }}
          />
        </div>
        <div className="flex w-full justify-between gap-4 text-blue-600 max-w-5xl px-12">
          <button type="button" className="flex items-center gap-4 hover:bg-blue-50 rounded p-1">
            <Image
              src="/VideoIcon.png"
              alt="Video"
              width={32}
              height={32}
            />
            <span className="hidden sm:inline text-xl font-bold text-gray-600">Video</span>
          </button>
          <button type="button" className="flex items-center gap-4 hover:bg-blue-50 rounded p-1">
            <Image
              src="/Photoicon.png"
              alt="Photo"
              width={32}
              height={32}
            />
            <span className="hidden sm:inline text-xl font-bold text-gray-600">Photo</span>
          </button>
          <button type="button" className="flex items-center gap-4 hover:bg-blue-50 rounded p-1">
            <Image
              src="/WriteArticleIcon.png"
              alt="Write Article"
              width={32}
              height={32}
            />
            <span className="hidden sm:inline text-xl font-bold text-gray-600">Write Article</span>
          </button>
        </div>
      </form>
      <div className="flex items-center w-full mt-6">
        <hr className="flex-grow border-t border-gray-600" />
        <button className="flex items-center ml-4 px-4 py-1 border border-black text-black rounded-full">
          Filters
          <IoFilterSharp className="ml-2" size={20} />
        </button>
      </div>
      {/* Posts Feed */}
      <div className="flex flex-col gap-6 mt-8">
        {posts.map(post => (
          <div key={post.id} className="flex flex-col bg-white rounded-lg shadow p-6 flex gap-4">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src={post.avatar}
                width={80}
                height={80}
                alt={post.author}
                className="rounded-full"
              />
              <div className="flex">
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-xl">{post.author}</span>
                  <span className="text-xs text-gray-500">{post.title}</span>
                  <span className="text-xs text-gray-500">{post.createdAt.toLocaleString()}</span>
                </div>
              </div>
              <div className="self-start ml-auto text-gray-500">
                <HiOutlineDotsHorizontal size={24} color="#666" />
              </div>
            </div>
            <div className="mt-2 text-lg text-gray-800">{post.content}</div>
            <hr className="flex-grow border-t border-gray-600" />
            <div className="flex items-center justify-around mt-4 w-full">
              <button className="flex items-center gap-2 text-black hover:text-blue-600">
                <AiOutlineLike size={32} className="scale-x-[-1]" />
                <span className="hidden sm:inline">Like</span>
              </button>
              <button className="flex items-center gap-2 text-black hover:text-blue-600">
                <FaRegCommentDots size={32} className="scale-x-[-1]"/>
                <span className="hidden sm:inline">Comment</span>
              </button>
              <button className="flex items-center gap-2 text-black hover:text-blue-600">
                <BiRepost size={40} />
                <span className="hidden sm:inline">Repost</span>
              </button>
              <button className="flex items-center gap-2 text-black hover:text-blue-600">
                <IoIosSend size={32} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}