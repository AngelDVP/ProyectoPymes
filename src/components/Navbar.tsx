"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const [imgError, setImgError] = useState(false);

  return (
    <nav className="w-full bg-[#101426] text-white px-6 md:px-12 py-3 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      {/* Logo Area */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          {!imgError ? (
            <img 
              src="/vexa-logo.png" 
              alt="VEXA Logo" 
              className="w-full h-full object-contain drop-shadow-lg"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg">VX</div>
          )}
        </div>
        <span className="font-bold text-xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 hidden sm:block">
          VEXA
        </span>
      </div>

      {/* Navigation Links - Modules */}
      <div className="hidden md:flex items-center gap-10 font-medium text-[15px]">
        <Link href="#productos" className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all tracking-wide">
          Productos
        </Link>
        <Link href="#clientes" className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all tracking-wide">
          Clientes
        </Link>
        <Link href="#enlaces" className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all tracking-wide">
          Enlaces
        </Link>
      </div>

      {/* Right Area (WhatsApp Contact) */}
      <div className="flex items-center">
        <a 
          href="https://wa.me/56950109339?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20tus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="bg-green-500/10 p-2 rounded-xl group-hover:bg-green-500/20 border border-green-500/20 group-hover:border-green-400/50 transition-all shadow-inner">
            <MessageCircle size={22} className="text-green-400 group-hover:text-green-300 group-hover:drop-shadow-[0_0_10px_rgba(7ade80,0.8)] transition-all" />
          </div>
          <span className="text-[11px] font-semibold mt-1 tracking-wider text-gray-400 group-hover:text-gray-100 transition-colors uppercase">
            Contacto
          </span>
        </a>
      </div>
    </nav>
  );
}
