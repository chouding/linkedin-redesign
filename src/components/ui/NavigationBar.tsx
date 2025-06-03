import Image from "next/image";
import { AiFillHome, AiFillBell, AiFillMessage } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function NavigationBar() {
  return (
    <nav className="flex flex-col items-start bg-white h-screen w-60 py-12 shadow-md space-y-4 shadow-md p-6">
      {/* Profile Pic */}
      <div className="flex items-center w-full justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            width={48}
            height={48}
            alt="Profile Picture"
            className="rounded-full border-2 border-blue-500"
          />
          <p className="font-semibold text-lg text-gray-800">
            Mel Avera
          </p>
        </div>
        <Image
          src="https://www.svgrepo.com/show/61705/down-arrow.svg"
          width={20}
          height={20}
          alt="Down Arrow Icon"
        />
      </div>
      <hr className="border-1 border-t border-gray-600 w-full my-2" />  
      {/* Navigation Icons */}
      <div className="flex flex-col items-start space-y-8 mt-4">
        <NavItem icon={<AiFillHome size={36} color="#0A66C2" />} label="Home" />
        <NavItem icon={<MdPeopleAlt size={36} color="#666" />} label="My Network" />
        <NavItem icon={<BsBriefcaseFill size={36} color="#666" />} label="Jobs" />
        <NavItem icon={<AiFillMessage size={36} color="#666" />} label="Messages" />
        <NavItem icon={<AiFillBell size={36} color="#666" />} label="Notifications"/>
      </div>
      <hr className="border-1 border-t border-gray-600 w-full my-2" />
      <NavItem icon={<HiOutlineDotsHorizontal size={48} color="#666" />} label="" />  
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center cursor-pointer group gap-2">
      {icon}
      <span className="text-m mt-1 text-gray-600 group-hover:text-blue-600 font-semibold">{label}</span>
    </div>
  );
}