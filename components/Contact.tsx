import React from 'react';
import { Mail, Phone, Linkedin, Github, Palette, ArrowUpRight, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Teléfono',
      label: '099 222 218',
      href: 'tel:099222218',
      icon: Phone,
      color: 'hover:text-green-600 hover:border-green-600/30',
      bg: 'hover:bg-green-600/5'
    },
    {
      name: 'Email',
      label: 'milagrosvairo.dev@gmail.com',
      href: 'mailto:milagrosvairo.dev@gmail.com',
      icon: Mail,
      color: 'hover:text-brand-pink hover:border-brand-pink/30',
      bg: 'hover:bg-brand-pink/5'
    },
    {
      name: 'LinkedIn',
      label: 'Conectemos profesionalmente',
      href: 'https://www.linkedin.com/in/milagros-vairo',
      icon: Linkedin,
      color: 'hover:text-[#0077b5] hover:border-[#0077b5]/30',
      bg: 'hover:bg-[#0077b5]/5'
    },
    {
      name: 'Behance',
      label: '@milagrosvairo_',
      href: 'https://www.behance.net/milagrosvairo_',
      icon: Palette,
      color: 'hover:text-[#1769ff] hover:border-[#1769ff]/30',
      bg: 'hover:bg-[#1769ff]/5'
    },
    {
      name: 'GitHub',
      label: '@MilagrosVairo',
      href: 'https://github.com/MilagrosVairo',
      icon: Github,
      color: 'hover:text-gray-900 hover:border-gray-900/30',
      bg: 'hover:bg-gray-900/5'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-purple-100/40 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-brand-pink font-medium tracking-wider text-sm uppercase mb-3 block">
            ¿Hablamos?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
            Vamos a crear algo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600">
              increíble juntos.
            </span>
          </h2>
          <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades laborales. Si buscas alguien que combine lógica técnica con enfoque en experiencia de usuario, no dudes en escribirme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex items-center gap-6 p-6 rounded-3xl border border-gray-100 bg-white shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${link.color} ${link.bg}
              `}
            >
              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                <link.icon size={32} strokeWidth={1.5} className="text-gray-600 transition-colors group-hover:text-current" />
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-current transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray-400 font-medium text-sm group-hover:text-gray-600 transition-colors">
                  {link.label}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-current group-hover:text-current transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* CV Download Separate Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="/cv.pdf" 
            download
            className="inline-flex items-center gap-2 px-10 py-4 min-w-[200px] bg-gray-900 text-white rounded-full font-bold hover:bg-brand-pink transition-all duration-300 shadow-lg hover:shadow-pink-500/25 active:scale-95 justify-center"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;