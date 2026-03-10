import React from "react";
import { BarChart3, Workflow, Store } from "lucide-react";

const services = [
  {
    title: "Reportes e Inteligencia de Negocios",
    description: "Dashboards interactivos y reportes rápidos que convierten tu información en decisiones claras. Organizamos tu información y la presentamos de forma visual y sencilla.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Automatización de Procesos",
    description: "Con Power Automate y Power Apps eliminamos tareas manuales y repetitivas. Tus flujos de trabajo se vuelven automáticos, rápidos y sin errores.",
    icon: Workflow,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Soluciones 3B para PyMEs",
    description: "Sistemas de inventario, ventas y gestión almacenados en una base de datos segura en la nube de Microsoft. Bueno, Bonito y Barato — listas inteligentes a tu medida.",
    icon: Store,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Servicios Profesionales
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Soluciones tecnológicas diseñadas para optimizar tus recursos y escalar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/90 dark:bg-[#111111]/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>
                
                <div className={`inline-flex p-3 rounded-lg ${service.bg} ${service.color} mb-6 relative z-10`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
