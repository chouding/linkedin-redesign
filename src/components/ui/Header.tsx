"use client";

import Image from "next/image";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Header({ onHamburgerClick }: { onHamburgerClick: () => void }) {
  return (
    <div className="flex items-center p-2 px-10 shadow-sm relative z-20">
      <button
        className="mr-8 flex flex-col justify-center gap-1"
        onClick={onHamburgerClick}
        aria-label="Toggle navigation"
      >
        <div className="w-9 h-1 bg-gray-600 rounded-full" />
        <div className="w-9 h-1 bg-gray-600 rounded-full" />
        <div className="w-9 h-1 bg-gray-600 rounded-full" />
      </button>
      <Link href="/">
        <Image 
          className="rounded-xs"
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          width={48}
          height={48}
          alt="LinkedIn Logo"
        />
      </Link>
      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <form className="flex items-center bg-gray-100 rounded-sm p-2 w-[200px] sm:w-[400px] gap-2">
          <SearchIcon 
            size={16}
            strokeWidth={3}
          />
          <input 
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-500" 
          />
        </form>
      </div>
      {/* For Business */}
      <div className="hidden sm:inline-flex items-center space-x-2 ml-4 flex-col">
        <Image 
          src="https://cdn4.iconfinder.com/data/icons/finite-application/16/grid-9-1024.png"
          width={32}
          height={32}
          alt="Business Icon"
        />
        <div className="flex space-x-1">
          <p className="text-sm text-gray-600">
            For Business
          </p>
          <Image
            src="https://www.svgrepo.com/show/61705/down-arrow.svg"
            width={10}
            height={10}
            alt="Down Arrow Icon"
          />
        </div>
      </div>
    </div>
  );
}