import React from 'react';
import { Terminal, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Profile Image */}
          <div className="flex justify-center lg:justify-center relative">
            <div className="relative w-72 h-72 lg:w-[22rem] lg:h-[22rem] aspect-square animate-float">

              {/* Decorative blobs */}
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl -translate-x-4 -translate-y-4"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white z-10 rotate-3 hover:rotate-0 transition-all duration-500 bg-white">
                <img
                  src="images/profile/avatar.jpg"
                  alt="Milagros Vairo Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Badges */}
              <div
                className="absolute -left-6 top-10 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <Terminal size={24} className="text-orange-500" />
              </div>

              <div
                className="absolute -right-6 bottom-20 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce"
                style={{ animationDuration: '4s' }}
              >
                <Database size={24} className="text-brand-primary" />
              </div>

              <div
                className="absolute right-10 -top-6 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce"
                style={{ animationDuration: '5s' }}
              >
                <Cpu size={24} className="text-brand-accent" />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-left space-y-6">
            <span className="text-brand-pink font-medium tracking-wider text-sm uppercase block">
              Sobre mí
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Tecnología, diseño y datos para crear{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600">
                soluciones con impacto.
              </span>
            </h3>

            <div className="text-gray-500 leading-relaxed text-base lg:text-lg space-y-5 font-light">
              <p>
                Como Tecnóloga en Informática, integro desarrollo Full Stack, diseño UX y análisis de datos (BI) para abordar la tecnología de manera integral.

                Disfruto entender el negocio más allá del código: desde construir sistemas completos con Java, React y SQL, hasta diseñar interfaces en Figma y crear dashboards estratégicos en Power BI, mi objetivo es transformar información compleja en soluciones que aporten valor real.
              </p>   </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;