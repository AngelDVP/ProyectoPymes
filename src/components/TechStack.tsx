import React from "react";
import { LineChart, Workflow, FileSpreadsheet, Cloud, LayoutGrid } from "lucide-react";

export function TechStack() {
  const technologies = [
    { name: "Power BI", icon: LineChart, color: "text-yellow-400" },
    { name: "Power Automate", icon: Workflow, color: "text-blue-400" },
    { name: "Power Apps", icon: LayoutGrid, color: "text-purple-400" },
    { name: "Excel", icon: FileSpreadsheet, color: "text-green-500" },
    { name: "Microsoft Lists / SharePoint", icon: Cloud, color: "text-cyan-400" },
  ];

  return (
    <section className="py-24 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Herramientas que usamos
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg">
          Trabajamos 100% dentro del ecosistema Microsoft — sin fricciones, sin curva de aprendizaje para tu equipo.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-[#111111]/40 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500 transition-all cursor-default"
              >
                <Icon className={`w-6 h-6 ${tech.color}`} />
                <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
