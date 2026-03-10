"use client";

import React from "react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Background decoration blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-transparent">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      </div>

      {/* Two-column grid — text 40%, phone 60% on desktop */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">

        {/* LEFT — Text (40%) */}
        <div className="lg:col-span-2 flex flex-col items-start text-left space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-600/40 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-ping"></span>
            Soluciones Microsoft para PyMEs
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-balance text-white">
            Datos que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              deciden
            </span>
            .{" "}Procesos que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              escalan
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
            Soluciones ágiles y automatizadas para tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <a
              href="#servicios"
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white font-medium transition-all hover:bg-white/10 hover:-translate-y-1"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* RIGHT — Phone Mockup (60%) */}
        <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[260px] sm:max-w-xs lg:max-w-sm mx-auto lg:mx-0 px-2 lg:px-0">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full scale-75"></div>

            {/* Isometric Phone SVG */}
            <svg
              viewBox="0 0 340 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 w-full drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
              style={{ filter: "drop-shadow(0 40px 60px rgba(99,102,241,0.3))" }}
            >
              <defs>
                {/* Shimmer gradient for skeleton blocks */}
                <linearGradient id="skimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                {/* Subtle purple accent for "text" skeleton rows */}
                <linearGradient id="textSkel" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#312e81" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#164e63" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Phone body */}
              <rect x="55" y="20" width="230" height="460" rx="32" fill="#0f172a" />
              <rect x="55" y="20" width="230" height="460" rx="32" stroke="#334155" strokeWidth="1.5" />

              {/* Screen */}
              <rect x="67" y="50" width="206" height="420" rx="20" fill="#0d1b3e" />

              {/* Notch */}
              <rect x="130" y="28" width="80" height="18" rx="9" fill="#1e293b" />

              {/* ── APP HEADER ── */}
              <rect x="67" y="50" width="206" height="44" rx="20" fill="#111827" />
              <text x="170" y="77" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="700" fontFamily="system-ui">VEXA Inventario</text>

              {/* Status chip */}
              <rect x="82" y="106" width="76" height="20" rx="10" fill="#064e3b" />
              <circle cx="94" cy="116" r="3.5" fill="#34d399" />
              <text x="134" y="120" textAnchor="middle" fill="#34d399" fontSize="9.5" fontWeight="600" fontFamily="system-ui">En línea</text>

              {/* Search bar skeleton */}
              <rect x="164" y="106" width="98" height="20" rx="10" fill="url(#skimmer)" />
              <rect x="172" y="112" width="60" height="8" rx="4" fill="#475569" />

              {/* ── SUMMARY CARDS (abstract) ── */}
              {/* Card 1 */}
              <rect x="82" y="138" width="88" height="56" rx="10" fill="#1e3a5f" />
              <rect x="90" y="148" width="40" height="7" rx="3.5" fill="#3b82f6" opacity="0.5" />
              <rect x="90" y="162" width="56" height="16" rx="4" fill="url(#skimmer)" />
              <rect x="90" y="184" width="30" height="5" rx="2.5" fill="#475569" />

              {/* Card 2 */}
              <rect x="178" y="138" width="88" height="56" rx="10" fill="#14532d" />
              <rect x="186" y="148" width="40" height="7" rx="3.5" fill="#34d399" opacity="0.5" />
              <rect x="186" y="162" width="52" height="16" rx="4" fill="url(#skimmer)" />
              <rect x="186" y="184" width="36" height="5" rx="2.5" fill="#475569" />

              {/* ── SECTION LABEL ── */}
              <rect x="82" y="212" width="80" height="7" rx="3.5" fill="#334155" />

              {/* ── BAR CHART (skeleton bars) ── */}
              {[
                { val: 0.85, y: 228 },
                { val: 0.55, y: 250 },
                { val: 0.72, y: 272 },
                { val: 0.42, y: 294 },
                { val: 0.63, y: 316 },
              ].map((bar, i) => (
                <g key={i}>
                  {/* Label placeholder */}
                  <rect x="82" y={bar.y + 1} width={28 + (i % 3) * 8} height="7" rx="3.5" fill="#334155" />
                  {/* Track */}
                  <rect x="120" y={bar.y} width="130" height="11" rx="5" fill="#1e293b" />
                  {/* Filled bar */}
                  <rect
                    x="120"
                    y={bar.y}
                    width={130 * bar.val}
                    height="11"
                    rx="5"
                    fill={bar.val > 0.7 ? "#34d399" : bar.val > 0.5 ? "#60a5fa" : "#a78bfa"}
                    opacity="0.75"
                  />
                </g>
              ))}

              {/* ── ACTIVITY SECTION LABEL ── */}
              <rect x="82" y="342" width="70" height="7" rx="3.5" fill="#334155" />

              {/* ── ACTIVITY ROWS (skeleton) ── */}
              {[
                { dot: "#34d399", y: 360 },
                { dot: "#f59e0b", y: 382 },
                { dot: "#60a5fa", y: 404 },
              ].map((item, i) => (
                <g key={i}>
                  <circle cx="90" cy={item.y + 4} r="4" fill={item.dot} opacity="0.8" />
                  {/* Main text placeholder */}
                  <rect x="102" y={item.y} width={80 + (i % 2) * 20} height="8" rx="4" fill="url(#textSkel)" />
                  {/* Secondary line */}
                  <rect x="102" y={item.y + 12} width={40 + i * 8} height="5" rx="2.5" fill="#1e293b" />
                  {/* Time placeholder */}
                  <rect x="240" y={item.y + 1} width="22" height="6" rx="3" fill="#1e293b" />
                </g>
              ))}

              {/* ── BOTTOM NAV ── */}
              <rect x="67" y="432" width="206" height="38" rx="20" fill="#111827" />
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={i}
                  x={95 + i * 46}
                  y="443"
                  width="18"
                  height="18"
                  rx="5"
                  fill={i === 0 ? "#3730a3" : "#1e293b"}
                />
              ))}
            </svg>


            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-xl px-4 py-2.5 z-20">
              <p className="text-green-400 text-xs font-semibold">🟢 Automatizado</p>
              <p className="text-white text-sm font-bold">Power Apps + SharePoint</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-18px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
