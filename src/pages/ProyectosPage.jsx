import { useState } from "react";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export function ProyectosPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Estados para manejar el envío
  const [status, setStatus] = useState(""); // "" | "SENDING" | "SUCCESS" | "ERROR"

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
      github: "#",
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
      github: "https://github.com/RFGina/Arandu_GestorDeEstudios",
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
      title: "ILoveSQL Blog",
      description: "Blog personal donde documento mi aprendizaje en bases de datos y desarrollo web. Incluye una API en Django para gestionar artículos y un frontend en React.",
      technologies: ["Python", "Django", "Django REST Framework", "SQLite", "React"],
      features: [
        "API REST",
        "CRUD de artículos",
        "Autenticación de usuarios",
        "Frontend desacoplado"
      ],
      link: "https://ilovesql.netlify.app/",
      type: "card"
    }
  ]);

  // FUNCIÓN AJAX PARA EL ENVÍO
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgnkkge", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        // Opcional: limpiar el mensaje después de 5 segundos
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div id="projects" className={`min-h-screen px-4 md:px-8 py-12 md:py-20 transition-colors duration-300 ${isDark ? 'bg-[#121212]' : 'bg-[#f5f1eb]'}`}>
      <div className="max-w-6xl mx-auto">

        {/* SECCIÓN PROYECTOS */}
        <div className="mb-12 md:mb-16">
          <h1 className={`font-mono text-3xl md:text-4xl mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>
            &gt; proyectos
          </h1>
          <div className={`h-px w-24 mb-6 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-[#d4c9b8]'}`}></div>
          <p className={`font-light max-w-3xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#a0907a]'}`}>
            Mis proyectos, algunos con video de demostración y otros en desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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
                  </video>
                </div>
              )}

              <div className="p-6 flex gap-4">
                {proyecto.link && (
                  <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 border font-mono text-sm ${isDark ? 'border-green-600 text-green-400 hover:bg-green-800 hover:text-white' : 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'}`}>
                    Ver demo
                  </a>
                )}
                {proyecto.github && proyecto.github !== "#" && (
                  <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 border font-mono text-sm ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'}`}>
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN ESCRIBIME */}
        <div className="mb-12">
          <h2 className={`font-mono text-3xl md:text-4xl mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>
            &gt; escribime
          </h2>
          <div className={`h-px w-24 mb-6 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-[#d4c9b8]'}`}></div>
        </div>

        <section className="grid md:grid-cols-2 gap-8 pb-20">
          <div className={`p-8 border rounded-lg flex flex-col justify-center ${isDark ? 'border-gray-800 bg-[#1a1a1a]' : 'border-[#d4c9b8] bg-white'}`}>
            <h3 className={`font-mono text-2xl mb-4 ${isDark ? 'text-gray-300' : 'text-[#8b7355]'}`}>
              ¿Tienes un proyecto en mente?
            </h3>
            <p className={`font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#5d4c3a]'}`}>
              Estoy disponible para nuevas oportunidades y colaboraciones. Si quieres contactarme de forma directa, puedes enviarme un mensaje a través del formulario.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`p-8 border rounded-lg flex flex-col gap-4 ${isDark ? 'border-gray-800 bg-[#1a1a1a]' : 'border-[#d4c9b8] bg-white'}`}
          >
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="nombre"
                required
                placeholder="Nombre"
                className={`w-full font-mono text-sm border p-4 rounded outline-none transition-all ${isDark ? 'bg-[#121212] border-gray-700 text-gray-300 focus:border-gray-500' : 'bg-[#f5f1eb] border-[#d4c9b8] text-[#5d4c3a] focus:border-[#8b7355]'}`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={`w-full font-mono text-sm border p-4 rounded outline-none transition-all ${isDark ? 'bg-[#121212] border-gray-700 text-gray-300 focus:border-gray-500' : 'bg-[#f5f1eb] border-[#d4c9b8] text-[#5d4c3a] focus:border-[#8b7355]'}`}
              />
            </div>
            <textarea
              name="mensaje"
              required
              placeholder="Mensaje..."
              rows="4"
              className={`w-full font-mono text-sm border p-4 rounded outline-none transition-all resize-none ${isDark ? 'bg-[#121212] border-gray-700 text-gray-300 focus:border-gray-500' : 'bg-[#f5f1eb] border-[#d4c9b8] text-[#5d4c3a] focus:border-[#8b7355]'}`}
            ></textarea>

            <button
              type="submit"
              disabled={status === "SENDING"}
              className={`flex items-center justify-center gap-2 px-4 py-4 border font-mono text-sm transition-all uppercase tracking-widest disabled:opacity-50 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'}`}
            >
              <FaPaperPlane className="text-xs" />
              {status === "SENDING" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* MENSAJES DE ESTADO */}
            {status === "SUCCESS" && (
              <p className="mt-2 text-green-500 font-mono text-xs animate-pulse text-center italic">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </p>
            )}
            {status === "ERROR" && (
              <p className="mt-2 text-red-500 font-mono text-xs text-center italic">
                Hubo un error. Por favor, intenta de nuevo.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}