import React from "react";
import { ExternalLink, Database, Activity } from "lucide-react";

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Casos de éxito reales desarrollando soluciones eficientes para negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Project Card */}
          <div className="group rounded-2xl bg-white/90 dark:bg-[#111111]/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-800/40 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
              <Database className="w-24 h-24 text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] dark:text-cyan-400 dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sistema de Gestión de Inventario para Pymes</h3>
                <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                Desarrollo completo de una aplicación a la medida utilizando Power Apps y SharePoint como base de datos, optimizando el control de stock, gestión de ventas y reportes en tiempo real.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Power Apps</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">SharePoint</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">Power Automate</span>
              </div>
            </div>
          </div>

          {/* Another Project Prototype */}
          <div className="group rounded-2xl bg-white/90 dark:bg-[#111111]/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/40 dark:to-emerald-800/40 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
              <Activity className="w-24 h-24 text-emerald-600 drop-shadow-[0_0_15px_rgba(5,150,105,0.4)] dark:text-emerald-400 dark:drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-pulse group-hover:scale-110 transition-transform animation-delay-500" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard BI para Logística</h3>
                <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                Implementación de paneles de control inteligentes para seguimiento de flotas y costos logísticos integrando bases de datos SQL complejas en vistas analíticas sencillas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">Power BI</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">SQL Server</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">Python</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
