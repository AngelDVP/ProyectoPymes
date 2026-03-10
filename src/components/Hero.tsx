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

      {/* Two-column grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        {/* LEFT — Text (60%) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left space-y-8">

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

        {/* RIGHT — Isometric Phone Mockup (40%) */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="relative w-full max-w-sm">
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
              {/* Phone body */}
              <rect x="55" y="20" width="230" height="460" rx="32" fill="#0f172a" />
              <rect x="55" y="20" width="230" height="460" rx="32" stroke="#334155" strokeWidth="1.5" />

              {/* Screen area */}
              <rect x="67" y="50" width="206" height="420" rx="20" fill="#0d1b3e" />

              {/* Notch */}
              <rect x="130" y="28" width="80" height="18" rx="9" fill="#1e293b" />

              {/* ── APP UI ── */}

              {/* Header bar */}
              <rect x="67" y="50" width="206" height="44" rx="0" fill="#111827" />
              <rect x="67" y="50" width="206" height="44" rx="20" fill="#111827" />
              <text x="170" y="77" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="700" fontFamily="system-ui">VEXA Inventario</text>

              {/* Status chip */}
              <rect x="82" y="108" width="80" height="20" rx="10" fill="#064e3b" />
              <text x="122" y="122" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="600" fontFamily="system-ui">● En línea</text>

              {/* Summary cards row */}
              <rect x="82" y="140" width="88" height="56" rx="10" fill="#1e3a5f" />
              <text x="126" y="160" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="system-ui">PRODUCTOS</text>
              <text x="126" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily="system-ui">248</text>

              <rect x="178" y="140" width="88" height="56" rx="10" fill="#14532d" />
              <text x="222" y="160" textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="system-ui">VENTAS HOY</text>
              <text x="222" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily="system-ui">$1.2M</text>

              {/* Section label */}
              <text x="82" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui" fontWeight="600">STOCK POR CATEGORÍA</text>

              {/* Bar chart — green bars */}
              {[
                { label: "Electrónica", val: 0.85, y: 235 },
                { label: "Ropa", val: 0.55, y: 258 },
                { label: "Alimentos", val: 0.72, y: 281 },
                { label: "Hogar", val: 0.40, y: 304 },
                { label: "Oficina", val: 0.65, y: 327 },
              ].map((bar) => (
                <g key={bar.label}>
                  <text x="82" y={bar.y + 10} fill="#64748b" fontSize="9" fontFamily="system-ui">{bar.label}</text>
                  <rect x="140" y={bar.y} width={120} height="14" rx="4" fill="#1e293b" />
                  <rect x="140" y={bar.y} width={120 * bar.val} height="14" rx="4" fill={bar.val > 0.7 ? "#34d399" : bar.val > 0.5 ? "#60a5fa" : "#f59e0b"} />
                  <text x={140 + 120 * bar.val + 4} y={bar.y + 10.5} fill="#94a3b8" fontSize="8" fontFamily="system-ui">{Math.round(bar.val * 100)}%</text>
                </g>
              ))}

              {/* Recent activity */}
              <text x="82" y="360" fill="#94a3b8" fontSize="10" fontFamily="system-ui" fontWeight="600">ACTIVIDAD RECIENTE</text>

              {[
                { label: "Laptop HP añadida", time: "hace 2m", dot: "#34d399" },
                { label: "Stock bajo: Sillas", time: "hace 15m", dot: "#f59e0b" },
                { label: "Pedido #4521 listo", time: "hace 1h", dot: "#60a5fa" },
              ].map((item, i) => (
                <g key={i}>
                  <circle cx="88" cy={380 + i * 22} r="4" fill={item.dot} />
                  <text x="98" y={384 + i * 22} fill="#e2e8f0" fontSize="10" fontFamily="system-ui">{item.label}</text>
                  <text x="252" y={384 + i * 22} textAnchor="end" fill="#475569" fontSize="9" fontFamily="system-ui">{item.time}</text>
                </g>
              ))}

              {/* Bottom nav bar */}
              <rect x="67" y="430" width="206" height="40" rx="0" fill="#111827" />
              <rect x="67" y="430" width="206" height="40" rx="20" fill="#111827" />
              {["🏠", "📦", "📊", "⚙️"].map((icon, i) => (
                <text key={i} x={100 + i * 48} y="456" textAnchor="middle" fontSize="16" fontFamily="system-ui">{icon}</text>
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
