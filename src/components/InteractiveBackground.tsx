"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-20 transition-colors duration-700 ${isDark ? 'bg-[#0a0514]' : 'bg-[#f4f3f8]'}`}>
      
      {/* Abstract Data Flow Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${isDark ? '%23ffffff' : '%23000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      ></div>

      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
        }}
      >
        {/* Top right purple glow */}
        <div className={`absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-3xl mix-blend-screen transition-colors duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(0,0,0,0)_60%)]' 
            : 'bg-[radial-gradient(circle,rgba(196,181,253,0.6)_0%,rgba(255,255,255,0)_60%)]'
        }`}></div>
        
        {/* Bottom left indigo glow */}
        <div className={`absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-3xl mix-blend-screen transition-colors duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(79,70,229,0.3)_0%,rgba(0,0,0,0)_60%)]' 
            : 'bg-[radial-gradient(circle,rgba(165,180,252,0.6)_0%,rgba(255,255,255,0)_60%)]'
        }`}></div>
        
        {/* Center highlight */}
        <div 
          className={`absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-3xl mix-blend-screen transition-colors duration-700 ${
            isDark 
              ? 'bg-[radial-gradient(circle,rgba(192,132,252,0.15)_0%,rgba(0,0,0,0)_60%)]' 
              : 'bg-[radial-gradient(circle,rgba(216,180,254,0.4)_0%,rgba(255,255,255,0)_60%)]'
          }`}
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        ></div>
      </div>
    </div>
  );
}
