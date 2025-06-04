"use client";

import Image from "next/image";
import { AiFillHome, AiFillBell, AiFillMessage } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function NavigationBar({ minimized = false }: { minimized?: boolean }) {
  return (
    <nav className={`flex flex-col items-start bg-white h-screen shadow-md p-8 transition-all duration-300`}>
      {/* Profile section always visible */}
      <div className={`flex items-center w-full ${minimized ? "gap-2" : "gap-2 justify-between"} mb-2`}>
        <div className="flex items-center">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            width={40}
            height={40}
            alt="Profile Picture"
            className="rounded-full border-2 border-blue-500 flex-shrink-0"
          />
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
        <Image
          src="https://www.svgrepo.com/show/61705/down-arrow.svg"
          width={20}
          height={20}
          alt="Down Arrow Icon"
        />
      </div>
      <hr className="border-t border-gray-600 self-center w-[calc(100%+32px)] my-2" />
      {/* Navigation Icons */}
      <div className={`flex flex-col ${minimized ? "items-center" : "items-start"} space-y-8 mt-4`}>
        <NavItem icon={<AiFillHome size={48} color="#0A66C2" />} label={minimized ? "" : "Home"} />
        <NavItem icon={<MdPeopleAlt size={48} color="#666" />} label={minimized ? "" : "My Network"} />
        <NavItem icon={<BsBriefcaseFill size={48} color="#666" />} label={minimized ? "" : "Jobs"} />
        <NavItem icon={<AiFillMessage size={48} color="#666" />} label={minimized ? "" : "Messages"} />
        <NavItem icon={<AiFillBell size={48} color="#666" />} label={minimized ? "" : "Notifications"} />
      </div>
      <hr className="border-t border-gray-600 self-center w-[calc(100%+32px)] my-2" />
      <NavItem icon={<HiOutlineDotsHorizontal size={48} color="#666" />} label="" />
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center cursor-pointer group gap-2">
      {icon}
      {label && (
        <span className="text-m mt-1 text-gray-600 group-hover:text-blue-600 font-semibold">
          {label}
        </span>
      )}
    </div>
  );
}