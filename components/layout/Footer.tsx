"use client";
import Image from "next/image";
import Link from "next/link";
import play from "../../assets/google-play.png"
import apple from "../../assets/app-store.png"

export default function Footer() {
  return (
    <footer className="w-full  bg-black py-10 px-6 md:px-12 flex items-center justify-between">

      <div>
        <h2 className="text-white text-xl font-semibold">NutriMind</h2>
        <p className="text-gray-400 text-sm mt-1">Body. Mind. Connected.</p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://play.google.com" target="_blank">
          <Image
            src={play}
            alt="Google Play"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>


        <Link href="https://apps.apple.com" target="_blank">
          <Image
            src={apple} 
            alt="App Store"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>

     
      <div className="text-right">
        <p className="text-gray-400 text-sm">Contact</p>
        <Link
          href="mailto:contact@nutrimind.com"
          className="text-white text-sm hover:text-gray-300"
        >
          contact@nutrimind.com
        </Link>
      </div>

    </footer>
  );
}
