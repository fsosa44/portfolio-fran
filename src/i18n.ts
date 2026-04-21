export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      tech: "Tecnologías",
      contact: "Contacto",
      resume: "Currículum",
    },
    hero: {
      role: "Desarrollador Frontend",
      bio: "Soy una persona proactiva y con iniciativa, comprometido con el aprendizaje continuo y la mejora de mis habilidades. Destaco por mis sólidas capacidades de comunicación y mi entusiasmo por colaborar en equipo.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
    },
    timeline: {
      label: "Trayectoria",
      title: "Mi recorrido",
      titleAccent: "profesional.",
      items: [
        {
          date: "Ago 2025 — Dic 2025",
          title: "Tester / QA",
          description:
            "Pruebas funcionales y de usabilidad, validación de criterios de aceptación en Jira y documentación de errores con propuestas de mejoras UX.",
        },
        {
          date: "Mar 2025 — Dic 2025",
          title: "Mercado Tiendas",
          description:
            "Desarrollo de una plataforma para crear tiendas online. Implementé un asistente virtual con IA que redujo el tiempo de configuración en un 70%, interfaces con React, Tailwind, y una API REST con Node.js, Express y MongoDB.",
        },
        {
          date: "Nov 2024 — Feb 2025",
          title: "Moovear",
          description:
            "Desarrollo frontend de una app en React Native para gestión de traslados médicos en ART. Maquetación desde Figma y optimización de estilos con NativeWind.",
        },
      ],
    },
    projects: {
      label: "Trabajos Selectos",
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      match5: {
        description:
          "App web para organizar partidos de fútbol entre amigos y jugadores cercanos. Cancha interactiva, mapa de partidos, chat en tiempo real y sistema de valoraciones.",
      },
      fastDelivery: {
        description:
          "App web mobile de delivery donde el usuario puede tomar y entregar pedidos. Proyecto grupal del Bootcamp Plataforma 5, desarrollado con metodología Scrum mediante sprints y dailys.",
      },
      lumen: {
        description:
          "Editor de código colaborativo en tiempo real con resaltado de sintaxis atmosférico y sincronización de baja latencia.",
      },
    },
    tech: {
      label: "El Arsenal",
      title: "Tecnologías y Herramientas",
    },
    cta: {
      title: "¿Tenes un proyecto en",
      titleAccent: "mente?",
      description:
        "Estoy disponible para nuevos proyectos y colaboraciones. Escribime y hablemos.",
      button: "Enviar un email",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About me",
      tech: "Technologies",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      role: "Frontend Developer",
      bio: "I'm a proactive and self-driven person, committed to continuous learning and improving my skills. I stand out for my strong communication abilities and my enthusiasm for teamwork.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    timeline: {
      label: "Career",
      title: "My professional",
      titleAccent: "journey.",
      items: [
        {
          date: "Aug 2025 — Dec 2025",
          title: "Tester / QA",
          description:
            "Functional and usability testing, validation of acceptance criteria in Jira, and bug documentation with UX improvement proposals.",
        },
        {
          date: "Mar 2025 — Dec 2025",
          title: "Mercado Tiendas",
          description:
            "Development of a platform for creating online stores. Built an AI virtual assistant that reduced setup time by 70%, interfaces with React, Tailwind, and a REST API with Node.js, Express, and MongoDB.",
        },
        {
          date: "Nov 2024 — Feb 2025",
          title: "Moovear",
          description:
            "Frontend development of a React Native app for managing medical transfers in workers' compensation insurance. UI built from Figma with NativeWind styling.",
        },
      ],
    },
    projects: {
      label: "Selected Work",
      title: "Featured Projects",
      viewProject: "View Project",
      match5: {
        description:
          "Web app to organize football matches among friends and nearby players. Interactive pitch, match map, real-time chat, and player rating system.",
      },
      fastDelivery: {
        description:
          "Mobile-first delivery web app where users can pick up and deliver orders. Team project from Plataforma 5 Bootcamp, built with Scrum methodology using sprints and dailys.",
      },
      lumen: {
        description:
          "Real-time collaborative code editor with atmospheric syntax highlighting and low-latency synchronization.",
      },
    },
    tech: {
      label: "The Arsenal",
      title: "Technologies & Tools",
    },
    cta: {
      title: "Have a project in",
      titleAccent: "mind?",
      description:
        "I'm available for new projects and collaborations. Drop me a message and let's talk.",
      button: "Send an email",
    },
  },
} as const;

export type Lang = keyof typeof translations;
