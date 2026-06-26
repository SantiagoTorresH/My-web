export const profile = {
  name: "Santiago Torres H",
  role: "Desarrollador Full Stack | Estudiante de Ingenieria de Sistemas | Html | Css | JavaScript | TypeScript | React | Python | c# | Git | GitHub | Node.Js | Sql | MongoDB | Power BI |",
  tagline:
    "Construyo interfaces web modernas, accesibles y con buen rendimiento. Me apasiona React, el diseño limpio y resolver problemas con código.",
  location: "Colombia",
  email: "santiagotorresherrera475@gmail.com",
  available: true,
  cvUrl: "#",

  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santiago-torres-herrera-00a7683a2/",
      icon: "in",
    },
    { label: "GitHub", href: "https://github.com/SantiagoTorresH", icon: "gh" },
    { label: "Email", href: "santiagotorresherrera475@gmail.com", icon: "@" },
  ],

  about: [
    "I am completing my degree in systems engineering. I am a developer with a mindset Full Stack, passionate about building complete, functional, and scalable web applications. I have a solid foundation in developing modern and functional interfaces, complemented by experience in server logic and data management.",
    "My primary focus is the JavaScript/TypeScript ecosystem, using React and Tailwind for the frontend, and working with server-side technologies to connect the user experience with efficient databases. I am motivated to continue learning and honing my technical skills to deliver comprehensive solutions.",
    "In my free time, I enjoy working on personal projects and contributing to open-source projects. I also enjoy learning new technologies and staying up-to-date with industry trends.",

    "Let s connect to build innovative solutions!",

    // 'Soy desarrollador frontend con enfoque en crear experiencias digitales que combinan buen diseño con código mantenible.',
    // 'Disfruto aprender tecnologías nuevas, trabajar en equipo y llevar ideas de un boceto a un producto funcional. Busco unirme a un equipo donde pueda aportar desde el día uno y seguir creciendo.',
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: "Intermedio", proficiency: 70 },
        { name: "JavaScript", level: "Avanzado", proficiency: 85 },
        { name: "HTML & CSS", level: "Avanzado", proficiency: 95 },
        { name: "Tailwind CSS", level: "Intermedio", proficiency: 90 },
        { name: "Responsive Design", level: "Intermedio", proficiency: 80 },
        { name: "UI/UX", level: "Intermedio", proficiency: 75 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Intermedio", proficiency: 75 },
        { name: "Python", level: "Avanzado", proficiency: 85 },
        { name: "C#", level: "Intermedio", proficiency: 70 },
        
        { name: "Express", level: "Intermedio", proficiency: 70 },
        
        { name: "REST API", level: "Intermedio", proficiency: 70 },

      ],
    },
    {
      category: "Bases de datos",
      items: [
        { name: "SQL", level: "Avanzado", proficiency: 90 },
        { name: "MongoDB", level: "Intermedio", proficiency: 75 },
        { name: "MySQL", level: "Intermedio", proficiency: 70 },
        { name: "SQLite", level: "Intermedio", proficiency: 70 },
        { name: "Firebase", level: "Intermedio", proficiency: 70 },
        { name: "PostgreSQL", level: "Intermedio", proficiency: 70 },
        { name: "Power BI", level: "Intermedio", proficiency: 70 },
      ],
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git", level: "Intermedio", proficiency: 75 },
        { name: "GitHub", level: "Avanzado", proficiency: 85 },
        { name: "Docker", level: "Intermedio", proficiency: 70 },
        { name: "Linux", level: "Intermedio", proficiency: 70 },
        { name: "vscode", level: "Avanzado", proficiency: 90 },
        { name: "Postman", level: "Intermedio", proficiency: 70 },

      ],
    },
  ],

  // experience: [
  //   {
  //     role: 'Desarrollador Frontend Junior',
  //     company: 'Empresa / Proyecto personal',
  //     period: '2024 — Presente',
  //     description:
  //       'Desarrollo de interfaces con React y Tailwind. Migración de sitios estáticos a arquitecturas componentizadas.',
  //   },
  //   {
  //     role: 'Estudiante / Autodidacta',
  //     company: 'Formación continua',
  //     period: '2022 — Presente',
  //     description:
  //       'Práctica constante con JavaScript, DOM, animaciones con Canvas y proyectos personales para consolidar fundamentos.',
  //   },
  // ],

  projects: [
    // {
    //   title: "Portfolio personal",
    //   description:
    //     "Landing page interactiva con React, Tailwind y animaciones Canvas. ",
    //   tech: ["React", "Tailwind", "Vite"],
    //   href: "#",
    //   gradient: "from-brand-dark to-brand-deep",
    // },
    //colocamos img de movil-dev en vez del gradient
    {
      title: "Móvil-Dev E-commerce",
      description:
        "Ecosistema transaccional full-stack de alta complejidad con arquitectura desacoplada. Cuenta con sistema de carrito dual, checkout real con PayPal/ePayco, generación automatizada de facturas en PDF y un microservicio independiente para notificaciones de pedidos por WhatsApp.",
      tech: [
        "FastAPI",
        "React 19",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
      ],
      img: "/img/image3.png",
      href: "https://movil-dev.vercel.app/",
      gradient: "from-brand-lime/30 to-brand-accent/20",
    },
    {
      title: "APP-NOTES",
      description:
        "Aplicación Full-Stack para la gestión y organización de notas. Implementa una API REST con arquitectura segura (JWT/bcrypt), persistencia en MongoDB y un frontend reactivo y responsivo con filtrado dinámico en tiempo real.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
      img: "/img/image4.png",
      href: "https://solution-reto-8.vercel.app/login",
      gradient: "from-blue-500 to-indigo-600", // Un gradiente corporativo y limpio para desarrollo MERN
    },

    {
      title: "easyBooking — Sistema de Citas Full-Stack",
      description:
        "[PROYECTO EN DESARROLLO] Plataforma integral para la reserva y automatización de turnos en tiempo real. Cuenta con un backend desarrollado en Node.js/Express, persistencia de datos relacionales lógicos mediante esquemas de Mongoose con MongoDB, y una interfaz de usuario fluida y reactiva en React y Vite.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
      img: "/img/image5.png",
      href: "https://easybookingfront.vercel.app", // Link de tu cliente web
      gradient: "from-indigo-600 via-purple-600 to-pink-500",
    },

    {
      title: "SisSalud Rural — Gestión Médica e Inteligencia Epidemiológica",
      description:
        "[PROYECTO EN DESARROLLO] Sistema de información médica de impacto social diseñado para la gestión de historias clínicas en centros de salud rurales. Cuenta con arquitectura Full-Stack en TypeScript, un motor de alertas epidemiológicas automatizado asistido por IA (Gemini API) y cumplimiento normativo estricto para el tratamiento de datos personales (Ley 1581).",
      tech: ["TypeScript", "Node.js", "MongoDB", "React", "Gemini API"],
      img: "/img/image7.png",
      href: "https://sis-salud-rural1.vercel.app/", // Reemplázalo por tu repositorio o link de Vercel cuando lo tengas
      gradient: "from-cyan-600 via-teal-500 to-emerald-500", // Gradiente en tonos médicos/salud (cián y esmeralda) que resalta mucho visualmente
    },

    {
      title: "Universidad Digital",
      description:
        " [PROYECTO EN DESARROLLO-Migrando db, de gcp a mongodb]Plataforma integral de gestión académica. Implementa control de accesos basado en roles (Admin, Docente, Estudiante), API modular por dominios en FastAPI, interfaz responsiva en React y un pipeline de integración continua con GitHub Actions.",
      tech: ["FastAPI", "React", "PostgreSQL", "Docker", "GitHub Actions"],
      img: "/img/image6.png",
      href: "https://universidad-digital-end-11.vercel.app/login", // Coloca el enlace aquí
      gradient: "from-emerald-600 to-teal-500", // Un gradiente verde/esmeralda ideal para plataformas educativas
    },

    //     dmin:

    // Usuario: admin@ud.edu
    // Clave: AdminPass1234

    // Docentes:

    // Email: docente@ud.edu
    // Password: DocentePass1234

    // profe1@ud.edu
    // profe12345678

    // profe2@ud.edu
    // profe22345678

    // Estudiantes:

    // Email: estudiante@ud.edu
    // Password: EstudiantePass1234

    // estudiante2@edu.co
    // estudiante12345678

    // santiago@gmail.com
    // santi123

    // pedrito@gmail.com
    // pedrito12345678

    {
      title: "Próximo proyecto, trabajando en ello...",
      description:
        "Espacio reservado para un sistema de gestion de inventario de productos. Implementa una API REST con arquitectura segura (JWT/bcrypt), persistencia en MongoDB y un frontend reactivo y responsivo con filtrado dinámico en tiempo real, con lector de codigos de barras, todo como en una tienda..",
      tech: ["React", "Node.js", "API"],
      href: "#",
      gradient: "from-brand-lime/30 to-brand-accent/20",
    },
  ],
};

export const translations = {
  es: {
    navLinks: [
      { href: "#inicio", label: "Inicio" },
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#contacto", label: "Contacto" },
    ],
    header: {
      languageLabel: "Seleccionar idioma",
    },
    hero: {
      available: "Disponible para oportunidades",
      contact: "Contactar",
      downloadCv: "Descargar CV",
      viewGithub: "Ver GitHub",
    },
    profile: {
      role: "Desarrollador Full Stack | Estudiante de Ingeniería de Sistemas | Python | React | JavaScript | TypeScript | Node.js | c# | Sql | MongoDB | Power BI |",
      tagline:
        "Construyo interfaces web modernas, accesibles y con buen rendimiento. Me apasiona React, el diseño limpio y resolver problemas con código.",
      about: [
        "Estoy finalizando mi carrera en ingeniería de sistemas. Soy desarrollador con mentalidad Full Stack, apasionado por construir aplicaciones web completas, funcionales y escalables.",
        "Tengo una base sólida en el desarrollo de interfaces modernas, complementada con experiencia en lógica de servidor y gestión de datos. Mi enfoque principal es el ecosistema JavaScript/TypeScript.",
        "En mi tiempo libre disfruto trabajar en proyectos personales, aprender nuevas tecnologías y mantenerme al día con las tendencias del sector.",
        "¡Conectemos para construir soluciones innovadoras!",
      ],
    },
    about: {
      title: "Sobre mí",
      remote: "remoto",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas que domino para dar vida a proyectos robustos.",
      techCount: "tecnologías y herramientas",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        "Bases de datos": "Bases de datos",
        Herramientas: "Herramientas",
      },
      levels: {
        Intermedio: "Intermedio",
        Avanzado: "Avanzado",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos proyectos recientes y personales.",
      items: [
        {
          title: "Móvil-Dev E-commerce",
          description:
            "Ecosistema transaccional full-stack de alta complejidad con arquitectura desacoplada. Cuenta con sistema de carrito dual, checkout real con PayPal/ePayco, generación automatizada de facturas en PDF y un microservicio independiente para notificaciones de pedidos por WhatsApp.",
        },
        {
          title: "APP-NOTES",
          description:
            "Aplicación Full-Stack para la gestión y organización de notas. Implementa una API REST con arquitectura segura (JWT/bcrypt), persistencia en MongoDB y un frontend reactivo y responsivo con filtrado dinámico en tiempo real.",
        },
        {
          title: "easyBooking — Sistema de Citas Full-Stack",
          description:
            "[PROYECTO EN DESARROLLO] Plataforma integral para la reserva y automatización de turnos en tiempo real. Backend en Node.js/Express, persistencia con MongoDB y frontend reactivo en React y Vite.",
        },
        {
          title: "SisSalud Rural — Gestión Médica e Inteligencia Epidemiológica",
          description:
            "[PROYECTO EN DESARROLLO] Sistema de información médica de impacto social para gestión de historias clínicas en centros de salud rurales. Arquitectura Full-Stack en TypeScript, alertas epidemiológicas con IA (Gemini API) y cumplimiento normativo (Ley 1581).",
        },
        {
          title: "Universidad Digital",
          description:
            "[PROYECTO EN DESARROLLO] Plataforma integral de gestión académica con control de accesos por roles (Admin, Docente, Estudiante), API modular en FastAPI, frontend en React y CI/CD con GitHub Actions.",
        },
        {
          title: "Próximo proyecto, trabajando en ello...",
          description:
            "Espacio reservado para un sistema de gestión de inventario con API REST segura (JWT/bcrypt), MongoDB, frontend reactivo y lector de códigos de barras, como en una tienda real.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitleBefore: "¿Interesado en trabajar juntos? Escríbeme a",
      subtitleOr: "o conecta en",
      namePlaceholder: "Escribe tu nombre",
      emailPlaceholder: "Escribe tu correo electrónico",
      messagePlaceholder: "Escribe tu mensaje...",
      submit: "Enviar mensaje",
      sentTitle: "¡Tu cliente de correo debería abrirse ahora!",
      sentBody: "Si no es así, puedes copiar mi dirección y escribirme directamente a:",
      mailSubject: "Contacto desde portfolio",
    },
    footer: {
      portfolio: "Portfolio",
      thanks: "Gracias por visitar mi sitio",
      description:
        "Desarrollador frontend enfocado en crear experiencias web claras, accesibles y con buen rendimiento. Abierto a colaborar en proyectos interesantes.",
      quickNav: "Navegación rápida",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con React y Tailwind CSS",
    },
  },
  en: {
    navLinks: [
      { href: "#inicio", label: "Home" },
      { href: "#sobre-mi", label: "About" },
      { href: "#habilidades", label: "Skills" },
      { href: "#proyectos", label: "Projects" },
      { href: "#contacto", label: "Contact" },
    ],
    header: {
      languageLabel: "Select language",
    },
    hero: {
      available: "Open to opportunities",
      contact: "Get in touch",
      downloadCv: "Download CV",
      viewGithub: "View GitHub",
    },
    profile: {
      role: "Developer Full Stack | Systems Engineering Student |Python | React | JavaScript | TypeScript | Node.js | c# | Sql | MongoDB | Power BI |",
      tagline:
        "I build modern, accessible, high-performance web interfaces. I'm passionate about React, clean design, and solving problems with code.",
      about: [
        "I am completing my degree in systems engineering. I am a developer with a Full Stack mindset, passionate about building complete, functional, and scalable web applications.",
        "I have a solid foundation in developing modern interfaces, complemented by experience in server logic and data management. My primary focus is the JavaScript/TypeScript ecosystem.",
        "In my free time, I enjoy working on personal projects, learning new technologies, and staying up to date with industry trends.",
        "Let's connect to build innovative solutions!",
      ],
    },
    about: {
      title: "About me",
      remote: "remote",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I use to build robust projects.",
      techCount: "technologies and tools",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        "Bases de datos": "Databases",
        Herramientas: "Tools",
      },
      levels: {
        Intermedio: "Intermediate",
        Avanzado: "Advanced",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some recent and personal projects.",
      items: [
        {
          title: "Móvil-Dev E-commerce",
          description:
            "High-complexity full-stack transactional ecosystem with a decoupled architecture. Features a dual cart system, real checkout with PayPal/ePayco, automated PDF invoice generation, and a standalone microservice for WhatsApp order notifications.",
        },
        {
          title: "APP-NOTES",
          description:
            "Full-Stack application for managing and organizing notes. Implements a secure REST API (JWT/bcrypt), MongoDB persistence, and a reactive, responsive frontend with real-time dynamic filtering.",
        },
        {
          title: "easyBooking — Full-Stack Appointment System",
          description:
            "[IN DEVELOPMENT] Comprehensive platform for real-time appointment booking and automation. Node.js/Express backend, MongoDB persistence, and a reactive React + Vite frontend.",
        },
        {
          title: "SisSalud Rural — Medical Management & Epidemiological Intelligence",
          description:
            "[IN DEVELOPMENT] Social-impact medical information system for managing clinical records in rural health centers. Full-Stack TypeScript architecture, AI-assisted epidemiological alerts (Gemini API), and regulatory compliance (Law 1581).",
        },
        {
          title: "Universidad Digital",
          description:
            "[IN DEVELOPMENT] Comprehensive academic management platform with role-based access (Admin, Teacher, Student), modular FastAPI backend, React frontend, and CI/CD with GitHub Actions.",
        },
        {
          title: "Next project — work in progress...",
          description:
            "Reserved space for an inventory management system with a secure REST API (JWT/bcrypt), MongoDB, a reactive frontend, and barcode scanning — like a real store.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitleBefore: "Interested in working together? Email me at",
      subtitleOr: "or connect on",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email address",
      messagePlaceholder: "Your message...",
      submit: "Send message",
      sentTitle: "Your email client should open now!",
      sentBody: "If it doesn't, you can copy my address and write to me directly at:",
      mailSubject: "Contact from portfolio",
    },
    footer: {
      portfolio: "Portfolio",
      thanks: "Thanks for visiting my site",
      description:
        "Frontend developer focused on building clear, accessible, high-performance web experiences. Open to collaborating on interesting projects.",
      quickNav: "Quick navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      builtWith: "Built with React and Tailwind CSS",
    },
  },
};
