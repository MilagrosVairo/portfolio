import React from 'react';
import { Search, PenTool, Code, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Descubrimiento',
    desc: 'Investigación profunda para entender el problema y definir objetivos claros antes de escribir una línea de código.'
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Diseño UI/UX',
    desc: 'Creación de wireframes y prototipos interactivos, enfocados en una experiencia de usuario intuitiva y estética.'
  },
  {
    icon: Code,
    step: '03',
    title: 'Desarrollo',
    desc: 'Implementación con código limpio y arquitecturas escalables, integrando frontend y backend de forma eficiente.'
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Entrega & QA',
    desc: 'Pruebas rigurosas, optimización de rendimiento y despliegue final asegurando la máxima calidad.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="relative pb-32 bg-white overflow-hidden">
      {/* Wavy Divider SVG preserved for layout continuity */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full z-20">
         <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50/40 to-transparent -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 pt-12 md:pt-24">
        <div className="text-center mb-24">
          <span className="text-brand-pink font-medium tracking-wider text-sm uppercase mb-2 block">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Mi Proceso Creativo
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Una metodología estructurada pero flexible, diseñada para transformar ideas abstractas en productos digitales tangibles y funcionales.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-200 to-transparent -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center">
                
                {/* Step Number Badge */}
                <div className="absolute -top-12 opacity-10 text-6xl font-black text-gray-300 select-none group-hover:text-brand-pink group-hover:opacity-20 transition-all duration-500">
                  {item.step}
                </div>

                {/* Icon Container with Pulse Effect */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-pink/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-24 h-24 bg-white rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                    <item.icon size={32} className="text-gray-400 group-hover:text-brand-pink transition-colors duration-300" strokeWidth={1.5} />
                    
                    {/* Tiny connector dot on the circle */}
                    <div className="hidden md:block absolute -right-4 top-1/2 w-2 h-2 bg-pink-200 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="bg-white p-6 rounded-3xl border border-transparent hover:border-pink-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 w-full min-h-[220px] flex flex-col justify-start">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-brand-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    {item.desc}
                  </p>
                </div>
                
                {/* Mobile Connector (Arrow) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden mt-8 text-pink-200">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;