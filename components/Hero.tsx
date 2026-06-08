import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center bg-white isolate">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] bg-brand-pink/20 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply opacity-70" />
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-purple-100/60 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply opacity-70" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-pink-50/60 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000 mix-blend-multiply opacity-70" />

      <div className="container mx-auto px-6 z-10 max-w-4xl relative">

        {/* Contenedor sin space-y para controlar los márgenes manualmente */}
        <div className="animate-fade-in-up flex flex-col items-center" style={{ animationDelay: '0.1s' }}>

          {/* Saludo recuperado */}
          <p className="text-gray-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-1">
            Hola, soy
          </p>

          <div className="relative inline-block mb-1">
            {/* Title - Tamaño intermedio y equilibrado */}
            <h1 className="text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 pb-2">
              Milagros Vairo
            </h1>
          </div>
          {/* Título Académico */}
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 md:w-8 bg-gradient-to-r from-transparent to-brand-pink/40 rounded-full hidden sm:block"></span>
            Tecnóloga en Informática
            <span className="h-[2px] w-6 md:w-8 bg-gradient-to-l from-transparent to-brand-pink/40 rounded-full hidden sm:block"></span>
          </h2>

          {/* Subtítulo de Roles */}
          <div className="text-sm md:text-base font-medium text-gray-700 mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="font-semibold">Data & BI Analyst</span>
            <span className="text-gray-300">|</span>
            <span className="font-semibold">Full Stack Developer</span>
            <span className="text-gray-300">|</span>
            <span className="font-semibold">UX Designer</span>
          </div>


          {/* Descripción */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Transformo datos e ideas en productos digitales de impacto. Integro desarrollo software, diseño UX y Business Intelligence para crear soluciones que funcionan y facilitan la toma de decisiones estratégicas.
          </p>
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="group px-8 py-3.5 min-w-[180px] rounded-full border-[2px] border-gray-200 text-gray-700 font-bold hover:border-brand-pink hover:text-brand-pink transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-pink-100 active:scale-95 flex items-center justify-center gap-2 bg-white text-sm md:text-base">
              Ver Portfolio
            </a>
            <a href="/Milagros%20Vairo%20CV.pdf" download className="px-8 py-3.5 min-w-[180px] rounded-full bg-gray-900 text-white font-bold hover:bg-brand-pink transition-all duration-300 shadow-md hover:shadow-pink-500/25 active:scale-95 border border-transparent flex items-center justify-center text-sm md:text-base">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;