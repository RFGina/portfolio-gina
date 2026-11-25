import { useTheme } from "../hooks/useTheme";

const SKILL_GROUPS = [
  {
    id: "backend",
    category: "Backend",
    description: "Desarrollo de lógica de negocio, APIs y arquitectura del lado del servidor.",
    items: [
      "Python",
      "Django",
      "Django REST",
      "FastAPI",
      "C#",
      "ASP.NET MVC",
      "ASP.NET Web API",
      "APIs REST",
    ],
  },
  {
    id: "analisis",
    category: "Análisis Funcional & Sistemas",
    description: "Diseño, documentación y modelado previo a la implementación.",
    items: [
      "Relevamiento de información",
      "Análisis de requerimientos",
      "Modelado de datos (DER)",
      "Diagramas UML",
      "Flujos de datos y procesos",
      "Historias de usuario",
    ],
  },
  {
    id: "database",
    category: "Bases de Datos",
    description: "Diseño relacional, consultas complejas y administración de datos.",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "SQL Avanzado",
      "Entity Framework Core",
    ],
  },
  {
    id: "devops-tools",
    category: "DevOps & Herramientas",
    description: "Entornos, despliegue, control de versiones y sistemas operativos.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Postman",
    ],
  },
];

export function HabilidadesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      id="skills"
      className={`min-h-screen px-4 md:px-8 py-12 md:py-20 transition-colors duration-300 ${
        isDark ? "bg-[#121212]" : "bg-[#f5f1eb]"
      }`}
    >
      <div className="w-full">
        {/* Título minimalista */}
        <div className="mb-12 md:mb-16">
          <h1
            className={`font-mono text-2xl md:text-3xl mb-4 transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-[#8b7355]"
            }`}
          >
            &gt; habilidades
          </h1>
          <div
            className={`h-px w-24 mb-6 transition-colors duration-300 ${
              isDark ? "bg-gray-700" : "bg-[#d4c9b8]"
            }`}
          ></div>
          <p
            className={`font-light transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-[#a0907a]"
            }`}
          >
            Stack tecnológico, herramientas y metodologías de análisis que aplico en el desarrollo de software.
          </p>
        </div>

        {/* Grid de tarjetas agrupadas por categoría */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className={`p-6 border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "border-gray-800 bg-[#1a1a1a] hover:border-gray-600"
                  : "border-[#d4c9b8] bg-white hover:border-[#8b7355]"
              }`}
            >
              <div>
                {/* Encabezado de la tarjeta */}
                <div className="flex items-center justify-between mb-2">
                  <h2
                    className={`font-mono text-lg md:text-xl transition-colors duration-300 ${
                      isDark ? "text-gray-200" : "text-[#8b7355]"
                    }`}
                  >
                    {group.category}
                  </h2>
                  <span
                    className={`font-mono text-xs ${
                      isDark ? "text-gray-600" : "text-[#c4b5a0]"
                    }`}
                  >
                    [{group.items.length}]
                  </span>
                </div>

                {/* Descripción breve */}
                <p
                  className={`text-sm font-light mb-5 transition-colors duration-300 ${
                    isDark ? "text-gray-400" : "text-[#a0907a]"
                  }`}
                >
                  {group.description}
                </p>
              </div>

              {/* Lista de habilidades en formato etiquetas (badges) */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-xs font-mono border transition-colors duration-200 ${
                      isDark
                        ? "border-gray-700 bg-[#121212] text-gray-300 hover:border-gray-500 hover:text-white"
                        : "border-[#e6dfd3] bg-[#faf8f5] text-[#6e5a41] hover:border-[#8b7355] hover:text-[#4a3c2b]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
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
                     hover:bg-opacity-90 transition-all duration-300 ${
                       isDark
                         ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                         : "border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white"
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