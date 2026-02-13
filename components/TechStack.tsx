import React from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const TechStack: React.FC = () => {
  // Extract categories to display them in order
  const categories = Object.values(SkillCategory);

  const getSkillsByCategory = (category: SkillCategory) => {
    return SKILLS.filter(skill => skill.category === category);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden" id="skills">
      {/* Decorative background subtle elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-pink/5 rounded-full blur-[80px] -z-0 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-pink font-medium tracking-wider text-sm uppercase mb-2 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Un ecosistema de herramientas seleccionadas para crear soluciones digitales robustas y escalables.
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="relative group/category">
              
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-light text-gray-800">
                  {category}
                </h3>
                <div className="h-[1px] flex-grow ml-6 bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>

              {/* Skills Cloud */}
              <div className="flex flex-wrap gap-4">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="
                      group relative overflow-hidden
                      flex items-center gap-3 px-5 py-2.5 
                      bg-white border border-gray-100 rounded-full 
                      shadow-sm hover:shadow-lg hover:shadow-pink-500/10 hover:border-brand-pink/20 
                      transition-all duration-300 ease-out hover:-translate-y-1
                      cursor-default
                    "
                  >
                    {/* Hover subtle background fill */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="relative z-10 p-1.5 rounded-full bg-gray-50 text-gray-500 group-hover:text-brand-pink group-hover:bg-white transition-colors duration-300">
                      <skill.icon size={18} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <span className="relative z-10 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;