import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export function Navegation() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`flex justify-between items-center py-3 px-4 md:py-4 md:px-6 transition-colors duration-300 ${isDark
        ? 'bg-[#121212] border-b border-gray-800'
        : 'bg-[#f5f1eb] border-b border-[#d4c9b8]'
        }`}>

        {/* Logo y Título */}
        <button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 z-20 hover:opacity-80 transition-opacity"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-[#d4c9b8]'
            }`}>
            <span className={`font-mono text-sm ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
              }`}>G</span>
          </div>
          <h1 className={`font-mono text-lg tracking-tight ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
            }`}>
            Georgina Rotela
          </h1>
        </button>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden z-20 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <FaTimes className={`text-xl ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
              }`} />
          ) : (
            <FaBars className={`text-xl ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
              }`} />
          )}
        </button>

        {/* Menú para desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className={`px-4 py-2 text-sm font-mono transition-all duration-300 ${isDark
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
              }`}
          >
            /sobre_mi
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className={`px-4 py-2 text-sm font-mono transition-all duration-300 ${isDark
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
              }`}
          >
            /tecnologias
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className={`px-4 py-2 text-sm font-mono transition-all duration-300 ${isDark
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
              }`}
          >
            /proyectos
          </button>

          <div className="flex items-center gap-3 ml-4">
            <a href="https://github.com/RFGina" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 p-2 ${isDark
              ? 'text-gray-400 hover:text-gray-200'
              : 'text-[#a0907a] hover:text-[#8b7355]'
              }`}>
              <FaGithub className="text-lg" />
            </a>
            <a href="www.linkedin.com/in/georgina-rotela-1b4442343" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 p-2 ${isDark
              ? 'text-gray-400 hover:text-gray-200'
              : 'text-[#a0907a] hover:text-[#8b7355]'
              }`}>
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:georginarotela40@gmail.com"
              className={`transition-all duration-300 p-2 ${isDark
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-[#a0907a] hover:text-[#8b7355]'
                }`}
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>

          {/* Toggle de tema */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full transition-all duration-300 ${isDark
              ? 'text-gray-300 bg-gray-800 hover:bg-gray-700'
              : 'text-[#8b7355] bg-[#e8dfd3] hover:bg-[#d4c9b8]'
              }`}
            aria-label="Cambiar tema"
          >
            {isDark ? 'Y' : 'X'}
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`fixed md:hidden top-16 inset-x-0 z-40 transform transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          } ${isDark
            ? 'bg-[#121212] border-b border-gray-800'
            : 'bg-[#f5f1eb] border-b border-[#d4c9b8]'
          }`}>
          <div className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className={`py-3 text-left font-mono transition-all duration-300 ${isDark
                ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
                }`}
            >
              /sobre_mi
            </button>

            <button
              onClick={() => scrollToSection('skills')}
              className={`py-3 text-left font-mono transition-all duration-300 ${isDark
                ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
                }`}
            >
              /tecnologias
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className={`py-3 text-left font-mono transition-all duration-300 ${isDark
                ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                : 'text-[#a0907a] hover:text-[#8b7355] hover:bg-[#e8dfd3]'
                }`}
            >
              /proyectos
            </button>

            <div className="flex justify-center gap-6 py-4">
              <a href="https://github.com/RFGina" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 p-3 ${isDark
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-[#a0907a] hover:text-[#8b7355]'
                }`}>
                <FaGithub className="text-xl" />
              </a>
              <a href="www.linkedin.com/in/georgina-rotela-1b4442343" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 p-3 ${isDark
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-[#a0907a] hover:text-[#8b7355]'
                }`}>
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:georginarotela40@gmail.com"
                className={`transition-all duration-300 p-3 ${isDark
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-[#a0907a] hover:text-[#8b7355]'
                  }`}
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

            {/* Toggle de tema móvil */}
            <button
              onClick={toggleTheme}
              className={`py-3 font-mono text-sm transition-all duration-300 ${isDark
                ? 'text-gray-300 bg-gray-800 hover:bg-gray-700'
                : 'text-[#8b7355] bg-[#e8dfd3] hover:bg-[#d4c9b8]'
                }`}
            >
              {isDark ? 'Y' : 'X'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}