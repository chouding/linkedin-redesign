"use client";

import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-start w-full h-full bg-linkedin-background py-12 px-20">
      <div className="bg-white rounded-lg shadow p-0 flex flex-col items-start w-full relative overflow-visible">
        <div className="w-full h-56 relative">
          <Image
            src="/ExampleProfileBanner.jpg"
            alt="Profile Banner"
            fill
            className="object-cover rounded-t-lg"
            priority
          />
          <div className="absolute left-12 -bottom-20 z-10">
            <Image
              src="/ExampleProfile.jpg"
              width={180}
              height={180}
              alt="Profile"
              className="rounded-full bg-white border-6 border-white"
            />
          </div>
        </div>
        <div className="h-24" />
        <div className="px-12 pb-12 flex flex-col items-start w-full">
          <div className="flex gap-4 items-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mel Avera</h1>
            <p className="text-lg text-gray-500">She/Her</p>
          </div>
          <p className="text-2xl text-gray-500 mb-2">Product Designer</p>
          <p className="text-gray-500 mb-2">Irvine, California, United States</p>
          <p className="text-blue-500 mb-2 underline font-bold">https://melavera.com</p>
          <p className="text-blue-500 mb-2 font-bold">457 Connections</p>
          {/* <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">Connect</button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">Message</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}