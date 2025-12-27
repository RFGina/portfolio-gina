import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export function ProyectosPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [proyectos] = useState([
    {
      id: 1,
      title: "Sistema de Gestión CEP 62",
      description: "Aplicación web completa para el Instituto Superior CEP 62. Automatiza calificaciones, asistencias y mesas de exámenes.",
      technologies: ["Django", "Python", "PostgreSQL", "JavaScript", "Tailwind"],
      features: [
        "Gestión completa de calificaciones y asistencias",
        "Control automatizado de mesas de exámenes",
        "Dashboard administrativo intuitivo",
        "Generación de reportes estadísticos"
      ],
      github: "#", // Propiedad intelectual
      demo: "https://res.cloudinary.com/drr75muur/video/upload/v1758406992/projects/na9iyuegfmroxczdlrnt.mp4",
      type: "video"
    },
    {
      id: 2,
      title: "FlashCard app Arandú",
      description: "Aplicación full-stack para gestión de estudios con flashcards. Backend en Django REST Framework y frontend en React.",
      technologies: ["Django REST", "React", "Python", "SQLite", "Chakra UI"],
      features: [
        "Creación y organización de flashcards",
        "Sistema de repetición espaciada",
        "Categorías y etiquetas personalizadas",
        "API REST completa",
        "Interfaz responsive"
      ],
      github: " https://github.com/RFGina/Arandu_GestorDeEstudios",
      demo: "https://res.cloudinary.com/drr75muur/video/upload/v1759065954/projects/yube0kdysylq90yezm2e.mp4",
      type: "video"
    },
    {
      id: 3,
      title: "Veturn Backend",
      description: "Backend RESTful para gestión de veterinarias, tutores, mascotas, profesionales y turnos. Desarrollado con FastAPI y SQLAlchemy.",
      technologies: ["FastAPI", "Python", "SQLAlchemy", "SQLite", "Bcrypt"],
      features: [
        "CRUD completo para veterinarias, tutores y mascotas",
        "Gestión de turnos y servicios",
        "Passwords hash con Bcrypt",
        "Relaciones complejas entre entidades",
        "Documentación automática con Swagger UI"
      ],
      github: "https://github.com/RFGina/veturn_backend",
      type: "card"
    },
    {
      id: 4,
      title: "Backend de Análisis y Scoring de Estudiantes",
      description: "API backend desarrollada en Python con FastAPI que permite analizar datos de estudiantes, calcular métricas de rendimiento y generar un scoring predictivo.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Pydantic", "Docker", "pytest", "GitHub Actions (CI/CD)"],
      features: [
        "Endpoints REST para consultar resultados y métricas.",

        "Validación de datos y manejo de errores con Pydantic.",

        "Persistencia de datos con PostgreSQL y SQLAlchemy.",

        "Contenedorización con Docker y configuración de variables de entorno.",

        "Tests unitarios y de integración, con pipelines de CI/CD.",

        "Algoritmos de scoring y predicción integrados en la API."


      ],
      github: "#", // aún no disponible
      type: "card"
    }
  ]);

  return (
    <div id="projects" className={`min-h-screen px-4 md:px-8 py-12 md:py-20 transition-colors duration-300 ${isDark ? 'bg-[#121212]' : 'bg-[#f5f1eb]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className={`font-mono text-3xl md:text-4xl mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>
            &gt; proyectos
          </h1>
          <div className={`h-px w-24 mb-6 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-[#d4c9b8]'}`}></div>
          <p className={`font-light max-w-3xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#a0907a]'}`}>
            Mis proyectos, algunos con video de demostración y otros en desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className={`border transition-all duration-300 hover:border-opacity-100 rounded-lg overflow-hidden ${isDark ? 'border-gray-800 bg-[#1a1a1a]' : 'border-[#d4c9b8] bg-white'}`}>

              <div className={`p-6 border-b ${isDark ? 'border-gray-800' : 'border-[#d4c9b8]'}`}>
                <h3 className={`font-mono text-xl ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>{proyecto.title}</h3>
                <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-[#5d4c3a]'}`}>{proyecto.description}</p>
              </div>

              <div className={`p-6 border-b ${isDark ? 'border-gray-800' : 'border-[#d4c9b8]'}`}>
                <div className="flex flex-wrap gap-2">
                  {proyecto.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 text-xs font-mono rounded ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-[#f5f1eb] text-[#8b7355]'}`}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={`p-6 border-b ${isDark ? 'border-gray-800' : 'border-[#d4c9b8]'}`}>
                <h4 className={`text-sm font-mono mb-3 ${isDark ? 'text-gray-500' : 'text-[#a0907a]'}`}>Características:</h4>
                <ul className="space-y-2">
                  {proyecto.features.map((feature, index) => (
                    <li key={index} className={`text-sm flex items-start ${isDark ? 'text-gray-400' : 'text-[#5d4c3a]'}`}>
                      <span className={`mr-2 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>-</span>{feature}
                    </li>
                  ))}
                </ul>
              </div>

              {proyecto.type === 'video' && (
                <div className="p-6">
                  <video controls loop muted className="w-full rounded-lg shadow-lg">
                    <source src={proyecto.demo} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              )}

              <div className="p-6 flex gap-4">
                {proyecto.github !== "#" && (
                  <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 border font-mono text-sm ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'}`}>
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
