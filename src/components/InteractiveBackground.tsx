"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothedMouse, setSmoothedMouse] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1) for more pronounced effect
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth the mouse movement using requestAnimationFrame
  useEffect(() => {
    const smoothFactor = 0.05; // Adjust for more/less smoothing
    
    const animate = () => {
      setSmoothedMouse(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothFactor,
        y: prev.y + (mousePosition.y - prev.y) * smoothFactor
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Dark: slate-950 deep navy base with subtle mesh gradient
  // Light: barely tinted lavender/white — dark text must pop
  const bgClass = isDark 
    ? "bg-gradient-to-br from-[#0f0c29] via-[#0d1b3e] to-[#020617]" 
    : "bg-gradient-to-b from-[#f5f3ff] via-[#eef2ff] to-white opacity-80";

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-20 transition-colors duration-700 ${isDark ? "bg-[#020617]" : "bg-white"}`}>
      
      {/* Main Base Gradient layer that scales up slightly to allow panning */}
      <div 
        className={`absolute inset-[-10%] w-[120%] h-[120%] ${bgClass} transition-opacity duration-700`}
        style={{
          transform: `translate(${smoothedMouse.x * -30}px, ${smoothedMouse.y * -30}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      {/* Glow blobs — move with mouse */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${smoothedMouse.x * 60}px, ${smoothedMouse.y * 60}px)` }}
      >
        {/* Top-left: deep indigo/purple */}
        <div className={`absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-screen transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(109,40,217,0.55)_0%,rgba(0,0,0,0)_70%)]' 
            : 'bg-[radial-gradient(circle,rgba(196,181,253,0.45)_0%,rgba(255,255,255,0)_70%)]'
        }`}></div>
        
        {/* Bottom-right: dark teal/cyan */}
        <div className={`absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] mix-blend-screen transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(6,182,212,0.35)_0%,rgba(0,0,0,0)_70%)]' 
            : 'bg-[radial-gradient(circle,rgba(125,211,252,0.4)_0%,rgba(255,255,255,0)_70%)]'
        }`}></div>
      </div>
      
      {/* Slower floating accent layer */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${smoothedMouse.x * -20}px, ${smoothedMouse.y * -20}px)`
        }}
      >
         {/* Center floating accent */}
         <div className={`absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(0,0,0,0)_60%)]' 
            : 'bg-[radial-gradient(circle,rgba(147,197,253,0.4)_0%,rgba(255,255,255,0)_60%)]'
        }`}></div>
      </div>
    </div>
  );
}
