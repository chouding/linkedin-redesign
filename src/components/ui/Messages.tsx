"use client";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Messages() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-8 z-50 w-80">
      <div
        className="bg-white rounded-t-lg shadow-lg flex items-center justify-between px-4 py-2 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open messages"
      >
        <div className="flex items-center gap-2">
          <Image 
            src="/ExampleProfile.jpg"
            width={32}
            height={32}
            alt="Profile Picture"
            className="rounded-full"
          />
          <span className="font-semibold text-gray-800">Messaging</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineDotsHorizontal size={24} color="#666" />
          {open ? (
            <IoIosArrowDown size={22} />
          ) : (
            <IoIosArrowUp size={22} />
          )}
        </div>
      </div>
      {open && (
        <div className="bg-white border-t border-gray-200 rounded-b-lg shadow-lg p-4 h-64 flex flex-col">
          <div className="text-gray-500 text-center my-auto">
            No new messages
          </div>
        </div>
      )}
    </div>
  );
}