"use client";

import React, { useEffect, useState, useRef } from "react";

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothedMouse, setSmoothedMouse] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const smoothFactor = 0.05;
    const animate = () => {
      setSmoothedMouse(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothFactor,
        y: prev.y + (mousePosition.y - prev.y) * smoothFactor,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [mousePosition]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-20"
      style={{ background: "#020617" }}
    >
      {/* Base deep mesh gradient — always dark */}
      <div
        className="absolute inset-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#0f0c29] via-[#0d1b3e] to-[#020617]"
        style={{
          transform: `translate(${smoothedMouse.x * -30}px, ${smoothedMouse.y * -30}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Primary glow blobs — move with mouse */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate(${smoothedMouse.x * 60}px, ${smoothedMouse.y * 60}px)` }}
      >
        {/* Top-left: deep violet/indigo */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.55) 0%, rgba(0,0,0,0) 70%)" }}
        ></div>

        {/* Bottom-right: dark teal/cyan */}
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(0,0,0,0) 70%)" }}
        ></div>
      </div>

      {/* Slower counter-moving accent */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate(${smoothedMouse.x * -20}px, ${smoothedMouse.y * -20}px)` }}
      >
        <div
          className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 60%)" }}
        ></div>
      </div>
    </div>
  );
}
