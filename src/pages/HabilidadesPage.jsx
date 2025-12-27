import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export function HabilidadesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [skills] = useState([
    { id: 1, title: "Python", category: "Backend" },
    { id: 2, title: "Django", category: "Backend" },
    { id: 3, title: "Django REST", category: "Backend" },
    { id: 6, title: "FastAPI", category: "Backend" },
    { id: 7, title: "Docker", category: "DevOps" },
    { id: 8, title: "PostgreSQL", category: "Database" },
    { id: 9, title: "Git", category: "Herramientas" },
    { id: 10, title: "Linux", category: "Sistemas" },
    { id: 12, title: "APIs REST", category: "Backend" },
  ]);

  return (
    <div id="skills" className={`min-h-screen px-4 md:px-8 py-12 md:py-20 transition-colors duration-300 ${isDark ? 'bg-[#121212]' : 'bg-[#f5f1eb]'
      }`}>
      <div className="max-w-6xl mx-auto">

        {/* Título minimalista */}
        <div className="mb-12 md:mb-16">
          <h1 className={`font-mono text-2xl md:text-3xl mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
            }`}>
            &gt; habilidades
          </h1>
          <div className={`h-px w-24 mb-6 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-[#d4c9b8]'
            }`}></div>
          <p className={`font-light max-w-3xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#a0907a]'
            }`}>
            Tecnologías y herramientas que utilizo para desarrollar sistemas backend.
          </p>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`p-4 border transition-all duration-300 group ${isDark
                ? 'border-gray-800 bg-[#1a1a1a] hover:border-gray-600'
                : 'border-[#d4c9b8] bg-white hover:border-[#8b7355]'
                }`}
            >
              <h3 className={`font-mono text-lg mb-2 transition-colors duration-300 ${isDark
                ? 'text-gray-300 group-hover:text-white'
                : 'text-[#8b7355] group-hover:text-[#5d4c3a]'
                }`}>
                {skill.title}
              </h3>
              <span className={`text-xs font-light transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-[#a0907a]'
                }`}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Enlace a GitHub */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/RFGina"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 border font-mono text-sm 
                     hover:bg-opacity-90 transition-all duration-300 ${isDark
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white'
                : 'border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'
              }`}
          >
            <span>ver_repositorios()</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}