"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black px-6 py-6 md:px-20 flex items-center justify-between relative z-50">

      <Link href="/" className="text-white text-lg font-semibold">NutriMind</Link>
      <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide ml-auto">
        <Link href="/trainers" className="text-white hover:text-gray-300">TRAINERS</Link>
        <Link href="/pricing" className="text-white hover:text-gray-300 mr-10">PRICING</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/auth/login" className="border border-gray-400 text-gray-300 text-xs px-4 py-2 rounded-md">Login/Signup</Link>
        <Link href="/join-trainer" className="bg-green-600 text-white text-xs px-4 py-2 rounded-md">Join as Trainer</Link>
      </div>

      <button
        className="md:hidden text-white text-2xl z-50 relative cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full right-0 w-full sm:w-[50%]  bg-black flex flex-col gap-6 px-6 py-8 md:hidden z-50 border-t border-gray-800 rounded-md">

          <Link href="/trainers" className="text-white text-sm" onClick={() => setOpen(false)}>TRAINERS</Link>
          <Link href="/pricing" className="text-white text-sm" onClick={() => setOpen(false)}>PRICING</Link>
          <hr className="border-gray-700" />
          <Link href="/login" className="border border-gray-400 text-gray-300 text-xs px-4 py-2 rounded-md w-fit" onClick={() => setOpen(false)}>Login/Signup</Link>
          <Link href="/join-trainer" className="bg-green-600 text-white text-xs px-4 py-2 rounded-md w-fit" onClick={() => setOpen(false)}>Join as Trainer</Link>
        </div>
      )}


    </header>
  );
}