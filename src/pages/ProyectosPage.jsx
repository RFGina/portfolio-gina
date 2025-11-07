import { useState, useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

export function ProyectosPage() {
  const [proyectos, setProyectos] = useState([]);
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const videoRef = useRef(null);

  // Datos manuales con Cloudinary
  const proyectosManuales = [
    {
      id: 1,
      title: "Sistema de Gestión CEP 62 - Django",
      description: "Aplicación web completa desarrollada para el Instituto Superior CEP 62. Sistema gestor de datos académicos que automatiza procesos de calificaciones, asistencias y mesas de exámenes, facilitando la toma de decisiones y reduciendo errores humanos significativamente.",
      technologies: ["Django", "Python", "PostgreSQL", "JavaScript", "tailwindcss"],
      features: [
        "Gestión completa de calificaciones y asistencias",
        "Control automatizado de mesas de exámenes",
        "Generación de reportes estadísticos",
        "Dashboard administrativo intuitivo",
        "Reducción de errores humanos en procesos críticos"
      ],
      video: "https://res.cloudinary.com/drr75muur/video/upload/v1758406992/projects/na9iyuegfmroxczdlrnt.mp4",
      thumbnail: "https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567/cep62-thumbnail.jpg",
      link: "#",
      type: "video"
    },
    {
      id: 2,
      title: "FlashCard Master - Django REST + React",
      description: "Aplicación full-stack para gestión de estudios con flashcards. Backend desarrollado con Django REST Framework y frontend moderno con React, permitiendo crear, organizar y estudiar con flashcards de manera eficiente.",
      technologies: ["Django REST", "React", "Python", "JavaScript", "SQLite", "Chakra"],
      features: [
        "Creación y organización de flashcards",
        "Sistema de repetición espaciada",
        "Categorías y etiquetas personalizadas",
        "API REST completa",
        "Interfaz responsive y moderna"
      ],
      video: "https://res.cloudinary.com/drr75muur/video/upload/v1759065954/projects/yube0kdysylq90yezm2e.mp4",
      thumbnail: "https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567/flashcard-thumbnail.jpg",
      link: "#",
      type: "video"
    },
    
  ];

  // Cargar proyectos manualmente
  useEffect(() => {
    const timer = setTimeout(() => {
      setProyectos(proyectosManuales);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Reiniciar video cuando cambia el proyecto
  useEffect(() => {
    if (videoRef.current && proyectos[current]?.type === 'video') {
      videoRef.current.load();
      videoRef.current.play().catch(e => {
        console.log("Auto-play prevenido:", e);
      });
    }
  }, [current, proyectos]);

  const nextSlide = () => {
    setCurrent((prev) => prev === proyectos.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev === 0 ? proyectos.length - 1 : prev - 1);
  };

  // Componentes SVG para las flechas
  const ArrowLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );

  const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );

  const renderMedia = (proyecto) => {
    if (proyecto.type === 'video' && proyecto.video) {
      return (
        <div className="mt-6 mx-auto w-full max-w-2xl">
          <div className="relative">
            <video
              ref={videoRef}
              key={proyecto.id}
              controls
              muted
              loop
              playsInline
              className="w-full rounded-lg shadow-lg"
              poster={proyecto.thumbnail}
            >
              <source src={proyecto.video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            {/* Indicador de video */}
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
              🎥 VIDEO
            </div>
          </div>
          <p className={`text-sm mt-2 text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Demo en video - {proyecto.title}
          </p>
        </div>
      );
    } else {
      return (
        <div className="mt-6 mx-auto w-full max-w-2xl">
          <img
            src={proyecto.image}
            alt={proyecto.title}
            className="w-full rounded-lg shadow-lg object-cover h-64 transition-transform duration-300 hover:scale-105"
          />
          <p className={`text-sm mt-2 text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Preview del proyecto - {proyecto.title}
          </p>
        </div>
      );
    }
  };

  if (proyectos.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === 'dark' ? 'bg-black' : 'bg-[#F4F2EF]'
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4 border-[#97E3FE]"></div>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-[#5A3E36]'}>
            Cargando Proyectos...
          </p>
        </div>
      </div>
    );
  }

  const currentProyecto = proyectos[current];

  return (
    <div className={`min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 flex flex-col items-center transition-all duration-500 ${
      theme === "dark" ? "bg-black text-gray-200" : "bg-[#F4F2EF] text-[#5A3E36]"
    }`}>
      
      {/* Título */}
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider sm:tracking-widest mb-6 sm:mb-8 md:mb-10 transition-all duration-500 text-center ${
        theme === "dark" ? "glitch text-[#97E3FE]" : "text-[#CD4662] font-serif italic"
      }`} data-text={theme === "dark" ? "PROYECTOS" : ""}>
        PROYECTOS
      </h1>

      {/* Carrusel */}
      <div className="relative w-full max-w-4xl">
        <div className={`p-6 sm:p-8 md:p-10 rounded-xl border transition-all duration-500 mx-2 ${
          theme === "dark"
            ? "border-[#9A53D0] bg-gradient-to-br from-[#2843AD] to-[#818DE0] shadow-[0_0_15px_#F394F8]"
            : "border-[#F4DBDB] bg-white shadow-lg"
        }`}>
          
          {/* Información del proyecto */}
          <div className="text-center mb-6">
            <h2 className={`text-2xl sm:text-3xl font-bold transition-colors duration-500 mb-4 ${
              theme === "dark" ? "text-[#F394F8] drop-shadow-[0_0_4px_#F394F8]" : "text-[#CD4662]"
            }`}>
              {currentProyecto.title}
            </h2>
            
            <p className={`my-4 text-base sm:text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-[#5A3E36]"
            }`}>
              {currentProyecto.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center my-4">
              {currentProyecto.technologies?.map((tech, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  theme === 'dark' ? 'bg-[#9A53D0] text-gray-100 hover:bg-[#F394F8]' : 'bg-[#F4DBDB] text-[#5A3E36] hover:bg-[#AEC289] hover:text-white'
                }`}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="my-6 text-left max-w-2xl mx-auto">
              <h3 className={`font-semibold mb-3 text-center ${
                theme === 'dark' ? 'text-[#97E3FE]' : 'text-[#AEC289]'
              }`}>
                Características principales:
              </h3>
              <ul className={`grid grid-cols-1 gap-3 text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-[#5A3E36]'
              }`}>
                {currentProyecto.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 mt-1 ${
                      theme === 'dark' ? 'text-[#F394F8]' : 'text-[#CD4662]'
                    }`}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Media */}
          {renderMedia(currentProyecto)}
        </div>

        {/* Botones de navegación */}
        <button onClick={prevSlide} className={`absolute top-1/2 -left-3 sm:-left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full transition-all z-10 shadow-lg ${
          theme === "dark" ? "bg-[#2843AD] hover:bg-[#3843DD] text-[#F394F8] hover:text-white" : "bg-[#CD4662] hover:bg-[#AD2642] text-white"
        }`} aria-label="Proyecto anterior">
          <ArrowLeft />
        </button>
        <button onClick={nextSlide} className={`absolute top-1/2 -right-3 sm:-right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full transition-all z-10 shadow-lg ${
          theme === "dark" ? "bg-[#2843AD] hover:bg-[#3843DD] text-[#F394F8] hover:text-white" : "bg-[#CD4662] hover:bg-[#AD2642] text-white"
        }`} aria-label="Siguiente proyecto">
          <ArrowRight />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-3 mt-6 sm:mt-8 flex-wrap justify-center">
        {proyectos.map((proyecto, i) => (
          <button key={proyecto.id} onClick={() => setCurrent(i)} className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 ${
            i === current
              ? theme === "dark" ? "bg-[#F394F8] shadow-[0_0_8px_#F394F8]" : "bg-[#CD4662] shadow-[0_0_6px_#CD4662]"
              : theme === "dark" ? "bg-[#2843AD] hover:bg-[#3843DD]" : "bg-[#AEC289] hover:bg-[#8EA269]"
          }`} aria-label={`Ver proyecto: ${proyecto.title}`}></button>
        ))}
      </div>

      {/* Contador */}
      <div className={`mt-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        <div className="text-sm mb-2">{current + 1} / {proyectos.length}</div>
        <div className="text-xs italic">{currentProyecto.technologies.slice(0, 3).join(' • ')}</div>
      </div>
    </div>
  );
}