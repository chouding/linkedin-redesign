"use client";

import Image from "next/image";
import { useState } from "react";

export default function Post() {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission logic here
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full max-w-5xl mx-auto"
    >
      <div className="flex items-center gap-3">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          width={80}
          height={80}
          alt="Profile"
          className="rounded-full"
        />
        <input
          className="flex-1 border-1 border-black rounded-full p-6 placeholder:text-xl placeholder:text-gray-700 placeholder:font-bold"
          placeholder="Start a post"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-between gap-4 text-blue-600 w-full max-w-5xl px-12">
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
  );
}