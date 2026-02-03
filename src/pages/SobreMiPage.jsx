import React from "react";
import { useTheme } from "../hooks/useTheme";
import fondoLight from "../assets/img/fondoClaro2.png";
import fondoDark from "../assets/img/fondodark2.png";


export function SobreMiPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="about" className={`min-h-screen px-4 md:px-8 py-12 md:py-20 transition-colors duration-300 ${isDark ? 'bg-[#121212]' : 'bg-[#f5f1eb]'
      }`}>
      <div className="max-w-4xl mx-auto">

        {/* Encabezado */}
        <div className="mb-12">
          <h1 className={`font-mono text-2xl md:text-3xl mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
            }`}>
            &gt; sobre_mi
          </h1>
          <div className={`h-px w-24 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-[#d4c9b8]'
            }`}></div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Imagen */}
          <div className={`w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded border-4 transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-[#d4c9b8]'
            }`}>
            <img
              src={isDark ? fondoDark : fondoLight}
              alt="Georgina Rotela"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex-1">
            <h2 className={`text-xl md:text-2xl font-mono mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
              }`}>
              Georgina Rotela
            </h2>

            <div className={`space-y-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#5d4c3a]'
              }`}>
              <p className="leading-relaxed">
                ¡Hola! Soy Gina.
                Desde que comencé mis estudios en Análisis de Sistemas, no he dejado de explorar el desarrollo de sistemas y web.
              </p>

              <p className="leading-relaxed">
                Ayudo a proyectos pequeños y medianos a digitalizar sus procesos y organizar su información, desde el análisis de requerimientos hasta el diseño de bases de datos y la construcción de sistemas funcionales.
              </p>

              <p className="leading-relaxed">
                Hoy me enfoco en crear soluciones claras y mantenibles que faciliten la vida de clientes y equipos, mientras sigo perfeccionando mis habilidades en desarrollo y gestión de datos.
              </p>
            </div>

            {/* Información técnica */}
            <div className={`mt-8 pt-6 border-t transition-colors duration-300 ${isDark ? 'border-gray-800' : 'border-[#d4c9b8]'
              }`}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-[#a0907a]'
                    }`}>Especialidad</span>
                  <p className={`font-mono transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
                    }`}>Análasis Funcional y Desarrollo web</p>
                </div>
                <div>
                  <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-[#a0907a]'
                    }`}>Ubicación</span>
                  <p className={`font-mono transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'
                    }`}>Capioví, Misiones, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}