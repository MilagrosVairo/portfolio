import React from 'react';
import { Terminal, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Column: Text Content */}
          <div className="order-1 text-left space-y-6">
            <span className="text-brand-pink font-medium tracking-wider text-sm uppercase mb-2 block">
              Sobre mí
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Creando experiencias digitales con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600">pasión y precisión.</span>
            </h3>

            <div className="text-gray-500 leading-relaxed text-lg space-y-6 font-light">
              <p>
                Soy Tecnóloga en Informática recién graduada, con formación en desarrollo Full Stack y enfoque en arquitectura backend y experiencia de usuario.
              </p>
              <p>
                He desarrollado proyectos con APIs REST, autenticación JWT y sistemas web estructurados, aplicando buenas prácticas de diseño y organización de código.
              </p>
              <p>
                Me considero analítica, disciplinada y comprometida con la mejora continua. Busco mi primera oportunidad profesional para aportar valor desde el primer día y crecer junto a un equipo dinámico.
              </p>
            </div>
          </div>

          
          {/* Right Column: Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 aspect-square animate-float">
              {/* Decorative blobs behind image */}
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl transform -translate-x-4 -translate-y-4"></div>

              {/* The Image Container */}
              <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white z-10 rotate-3 hover:rotate-0 transition-all duration-500 bg-white">
                <img
                  src="images/profile/avatar.jpg"
                  alt="Milagros Vairo Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -left-6 top-10 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <Terminal size={24} className="text-orange-500" />
              </div>
              <div className="absolute -right-6 bottom-20 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <Database size={24} className="text-brand-primary" />
              </div>
              <div className="absolute right-10 -top-6 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '5s' }}>
                <Cpu size={24} className="text-brand-accent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;