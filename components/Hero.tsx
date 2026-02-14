import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center bg-white isolate">
      {/* Animated Background Blobs - Vistoso & Dinámico */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] bg-brand-pink/20 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply opacity-70" />
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-purple-100/60 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply opacity-70" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-pink-50/60 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000 mix-blend-multiply opacity-70" />

      <div className="container mx-auto px-6 z-10 max-w-4xl relative">
        
        {/* Status Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-100 shadow-[0_4px_20px_rgba(255,0,128,0.1)] backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Disponible para trabajar
            </span>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-gray-500 text-lg md:text-xl font-medium tracking-widest uppercase">
            Hola, soy
          </p>
          
          <div className="relative inline-block">
            {/* Title - Professional Solid Color */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 pt-1 pb-3">
              Milagros Vairo
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mt-2 mb-8 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-brand-pink/50 rounded-full hidden sm:block"></span>
            Tecnóloga en Informática
            <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-brand-pink/50 rounded-full hidden sm:block"></span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
             Busco aportar soluciones innovadoras y código de calidad en mi primera experiencia profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-2">
            <a href="#projects" className="group px-10 py-4 min-w-[200px] rounded-full border-[2px] border-gray-200 text-gray-600 font-bold hover:border-brand-pink hover:text-brand-pink transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-100 active:scale-95 flex items-center justify-center gap-2">
              Ver Portfolio
            </a>
            <a href="/Milagros%20Vairo%20CV.pdf" download className="px-10 py-4 min-w-[200px] rounded-full bg-gray-900 text-white font-bold hover:bg-brand-pink transition-all duration-300 shadow-lg hover:shadow-pink-500/25 active:scale-95 border border-transparent flex items-center justify-center">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;