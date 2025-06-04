"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillHome, AiFillBell, AiFillMessage } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

export default function NavigationBar({ minimized = false }: { minimized?: boolean }) {
  const [showStats, setShowStats] = useState(false);

  return (
    <nav className={`flex flex-col items-start bg-white h-screen shadow-md p-8 transition-all duration-300`}>
      <div className={`flex -ml-2 items-center w-full ${minimized ? "gap-7" : "gap-2 justify-between"} mb-2`}>
        <div className="flex items-center">
          <Link href="/profile" className="flex-shrink-0">
            <Image
              src="/ExampleProfile.jpg"
              width={48}
              height={48}
              alt="Profile Picture"
              className="rounded-full border-2 border-blue-500"
            />
          </Link>
        </div>
        <p
          className={`
            font-semibold text-lg text-gray-800 transition-opacity duration-200
            ${minimized ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto ml-2"}
          `}
          style={{ transitionProperty: "opacity" }}
        >
          Mel Avera
        </p>
        <button
          className="ml-2 p-1 rounded-full hover:bg-gray-100 transition"
          onClick={() => setShowStats((s) => !s)}
          tabIndex={0}
          aria-label="Toggle profile stats"
        >
          {showStats ? (
            <IoIosArrowUp width={20} height={20} />
          ) : (
            <IoIosArrowDown width={20} height={20} />
          )}
        </button>
      </div>
      {!minimized && showStats && (
        <div className="w-full mb-2 py-3 rounded-lg flex flex-col gap-1">
          <div className="flex justify-between text-sm font-semibold text-gray-700">
            <span>Profile viewers</span>
            <span className="text-blue-400">198</span>
          </div>
          <div className="flex justify-between text-sm font-semibold text-gray-700">
            <span>Connections</span>
            <span className="text-blue-400">2</span>
          </div>
          <div className="flex justify-between text-sm font-semibold text-gray-700">
            <span>Post impressions</span>
            <span className="text-blue-400">94</span>
          </div>
          <Link className="text-center font-bold text-blue-500 border border-blue-400 rounded-full py-1 mt-4 hover:bg-blue-50 transition" href="/profile">
            View Profile
          </Link>
        </div>
      )}
      <hr className="border-t border-gray-600 self-center w-[calc(100%+32px)] my-2" />
      <div className={`flex flex-col ${minimized ? "items-center" : "items-start"} space-y-8 mt-4`}>
        <NavItem icon={<AiFillHome size={48} color="#666" />} label={minimized ? "" : "Home"} href="/" />
        <NavItem icon={<MdPeopleAlt size={48} color="#666" />} label={minimized ? "" : "My Network"}  href="/network" />
        <NavItem icon={<BsBriefcaseFill size={48} color="#666" />} label={minimized ? "" : "Jobs"} />
        <NavItem icon={<AiFillMessage size={48} color="#666" />} label={minimized ? "" : "Messages"} />
        <NavItem icon={<AiFillBell size={48} color="#666" />} label={minimized ? "" : "Notifications"} />
      </div>
      <hr className="border-t border-gray-600 self-center w-[calc(100%+32px)] my-2" />
      <NavItem icon={<HiOutlineDotsHorizontal size={48} color="#666" />} label="" />
    </nav>
  );
}

function NavItem({ icon, label, href }: { icon: React.ReactNode; label: string, href?: string }) {
  const content = (
    <div className="flex items-center cursor-pointer group gap-2">
      {icon}
      {label && (
        <span className="text-m mt-1 text-gray-600 group-hover:text-blue-600 font-semibold">
          {label}
        </span>
      )}
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}