"use client";

import { useState } from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Header onHamburgerClick={() => setNavbarOpen((open) => !open)} />
      </header>
      <div className="flex h-screen pt-[64px]">
        <section className={`${navbarOpen ? "w-66" : "w-30"} flex-shrink-0 transition-all duration-300`}>
          <NavigationBar minimized={!navbarOpen} />
        </section>
        <div className="flex-1 flex flex-col min-h-0">
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  );
}