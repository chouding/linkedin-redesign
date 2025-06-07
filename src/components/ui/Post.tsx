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
  picture?: string;
  mutual?: string;
  title: string;
  createdAt: Date;
  likes?: number;
  comments?: number;
  reposts?: number;
};


let initialPosts: PostType[] = [
  {
    id: 1,
    content: "Hello! I’m so excited to share that I will be starting a new position at Southwest as a Product Designer! Thank you so much for everyone who helped me with this opportunity and I am so excited to learn and grow with my team!",
    author: "Natalie Do",
    avatar: "/ExampleProfile2.jpg",
    picture: "/ExamplePostContent.png",
    mutual: "Thea Smith",
    title: "Product Designer",
    createdAt: new Date("2023-10-01T12:00:00Z"),
    likes: 48,
    comments: 3,
    reposts: 4,
  },
    {
    id: 2,
    content: "🚀 Just wrapped up one of the most exciting projects of my software engineering journey!\nOver the past few months, I’ve been working on designing and building a scalable backend system that now supports     ...more",
    author: "Thea Smith",
    avatar: "/ExampleProfile3.jpg",
    picture: "/ExamplePostContent2.jpg",
    mutual: "Natalie Do",
    title: "Software Engineer",
    createdAt: new Date("2023-09-01T12:00:00Z"),
    likes: 8,
    comments: 2,
    reposts: 1,
  }
];

export default function Post() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<PostType[]>(initialPosts);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [filters, setFilters] = useState({
    byFollowed: false,
    byConnections: false,
    reacted: false,
    commented: false,
    reposted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setPosts([
      {
        id: Date.now(),
        content,
        author: "Mel Avera",
        avatar: "/ExampleProfile.jpg",
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
        <div className="flex items-center gap-12 p-4">
          <Image
            src="/ExampleProfile.jpg"
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
        <div className="flex grow w-full justify-around text-blue-600">
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
              src="/PhotoIcon.png"
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
      <div className="flex items-center w-full mt-6 relative">
        <hr className="flex-grow border-t border-gray-600" />
        <button
          className="flex items-center ml-4 px-4 py-1 border border-black text-black rounded-full"
          onClick={() => setShowFilterPanel((v) => !v)}
          type="button"
        >
          Filter
          <IoFilterSharp className="ml-2" size={20} />
        </button>
        {showFilterPanel && (
          <div className="absolute right-0 top-12 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
            <div className="font-bold text-xl mb-1">
              Show only:
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.byFollowed}
                  onChange={e => setFilters(f => ({ ...f, byFollowed: e.target.checked }))}
                />
                Posts by people you follow
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.byConnections}
                  onChange={e => setFilters(f => ({ ...f, byConnections: e.target.checked }))}
                />
                Posts by connections
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.reacted}
                  onChange={e => setFilters(f => ({ ...f, reacted: e.target.checked }))}
                />
                Posts connections reacted to
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.commented}
                  onChange={e => setFilters(f => ({ ...f, commented: e.target.checked }))}
                />
                Posts connections commented on
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.reposted}
                  onChange={e => setFilters(f => ({ ...f, reposted: e.target.checked }))}
                />
                Posts connections reposted
              </label>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-1 rounded-full border-1 border-black hover:bg-gray-300"
                onClick={() => setShowFilterPanel(false)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="font-bold px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setShowFilterPanel(false)}
                type="button"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
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
            {post.picture && (
              <div className="-mx-6">
                <Image
                  src={post.picture}
                  width={1033}
                  height={426}
                  alt="Post Content"
                  className="object-contain w-full flex justify-center"
                />
              </div>)
            }
            <div className="flex items-center justify-between text-gray-500 text-sm mt-2 px-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/ExampleReactionsIcon.png"
                  alt="Reactions"
                  width={80}
                  height={80}
                />
                <span>{post.mutual} and {post.likes ?? 0} others</span>
              </div>
              <div className="flex items-center gap-4">
                <span>{post.comments ?? 0} comments | {post.reposts ?? 0} reposts</span>
              </div>
          </div>
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