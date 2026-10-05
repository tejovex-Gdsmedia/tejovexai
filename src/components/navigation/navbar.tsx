import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-bg/50 border-b border-surface">
      <Link href="/" className="text-xl font-bold tracking-tighter">
        <Image src="/logo123.png" alt="Tejovex AI" width={120} height={40} className="w-auto h-8" />
      </Link>

      <div className="flex gap-8 text-sm font-medium">
        {['Home', 'About', 'System', 'Contact'].map((item) => (
          <Link
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="hover:text-accent transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="px-6 py-2 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-transform">
        START A PROJECT
      </button>
    </nav>
  );
};
