import React from "react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-transparent">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-sky-500/10 dark:bg-sky-400/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-600/40 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-400">
          <span className="flex h-2 w-2 rounded-full bg-blue-700 dark:bg-blue-400 mr-2 animate-ping"></span>
          Senior BI Analyst &amp; Low-Code Developer
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Datos que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-indigo-400 dark:to-cyan-400">deciden</span>
          .{" "}Procesos que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600 dark:from-green-400 dark:to-emerald-300">escalan</span>
          .
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto font-light">
          Especializado en <strong className="font-semibold text-slate-900 dark:text-white">Power Platform</strong>, <strong className="font-semibold text-slate-900 dark:text-white">SQL</strong>, <strong className="font-semibold text-slate-900 dark:text-white">Python</strong> y <strong className="font-semibold text-slate-900 dark:text-white">QGIS</strong> para potenciar PyMEs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#proyectos"
            className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full bg-white/70 dark:bg-transparent border border-slate-400 dark:border-gray-700 hover:border-slate-600 dark:hover:border-gray-500 text-slate-900 dark:text-white font-medium transition-all hover:bg-white dark:hover:bg-gray-800"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
