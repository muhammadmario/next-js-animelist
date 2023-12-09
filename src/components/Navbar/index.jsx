"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import UserActionButton from "./UserActionButton";

export default function Navbar() {
  const [state, setState] = useState(true);
  const pathname = usePathname();
  const menus = [
    { title: "Anime", path: "/" },
    { title: "Characters", path: "/characters" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];
  return (
    <nav className="bg-white w-full border-b md:border-0 sticky top-0 left-0 z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="lg:text-3xl font-bold text-purple-600">AnimeList</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              icon
            </button>
          </div>
        </div>
        <div
          className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link
                  className={`link ${
                    pathname === item.path ? "font-bold" : ""
                  }`}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <UserActionButton />
          </ul>
        </div>
      </div>
    </nav>
  );
}
