"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex justify-between items-center px-8 bg-zinc-900/95 border-b border-zinc-700 shadow-lg backdrop-blur-sm fixed top-0 z-50">
      
      {/* Logo */}
      <Link href="/" aria-label="Go to home page" className="flex h-full items-center gap-3">
        <Image
          src="/IgnitionSparkLogo.png"
          alt="IgnitionSpark"
          width={220}
          height={88}
          priority
          className="h-full w-auto object-contain py-1"
        />
        <span className="text-zinc-100 text-xl font-semibold tracking-wide">IgnitionSparks</span>
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-zinc-300 font-medium">
        <Link className="transition-colors hover:text-zinc-100" href="/">Home</Link>
        <Link className="transition-colors hover:text-zinc-100" href="/about">About</Link>
        <Link className="transition-colors hover:text-zinc-100" href="/projects">Projects</Link>
        <Link className="transition-colors hover:text-zinc-100" href="/services">Services</Link>
        <Link className="transition-colors hover:text-zinc-100" href="/blog">Blog</Link>
        <Link className="transition-colors hover:text-zinc-100" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}