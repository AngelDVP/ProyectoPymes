"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full bg-white/85 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Logo — VEXA text-only, adapts to theme */}
      <div className="flex items-center cursor-pointer select-none">
        <span className="font-black text-2xl tracking-[0.25em] text-slate-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
          VEXA
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10 font-medium text-[15px]">
        <Link href="#productos" className="text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-200 tracking-wide">
          Productos
        </Link>
        <Link href="#clientes" className="text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-200 tracking-wide">
          Clientes
        </Link>
        <Link href="#enlaces" className="text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-200 tracking-wide">
          Enlaces
        </Link>
      </div>

      {/* Right — WhatsApp Contact */}
      <div className="flex items-center">
        <a
          href="https://wa.me/56950109339?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20tus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="bg-green-500/10 p-2 rounded-xl group-hover:bg-green-500/20 border border-green-500/20 group-hover:border-green-400/50 transition-all">
            <MessageCircle size={22} className="text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" />
          </div>
          <span className="text-[11px] font-semibold mt-1 tracking-wider text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-100 transition-colors uppercase">
            Contacto
          </span>
        </a>
      </div>
    </nav>
  );
}


