export const profile = {
  name: "Santiago Torres ",
  role: "Desarrollador Frontend | Estudiante de Ingenieria de Sistemas | Junior Developer | Html | Css | JavaScript | TypeScript | React | Python | c# | Git | GitHub | Node.Js | Sql | MongoDB | Power BI |",
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
    { name: "React", level: "Intermedio" },
    { name: "JavaScript", level: "Avanzado" },
    { name: "HTML & CSS", level: "Avanzado" },
    { name: "Tailwind CSS", level: "Intermedio" },
    { name: "Git", level: "Intermedio" },
    { name: "GitHub", level: "Avanzado" },
    { name: "Node.js", level: "Intermedio" },
    { name: "Responsive Design", level: "Intermedio" },
    { name: "UI/UX", level: "Intermedio" },
    { name: "Python", level: "Avanzado" },
    { name: "C#", level: "Intermedio" },
    { name: "SQL", level: "Avanzado" },
    { name: "MongoDB", level: "Intermedio" },
    { name: "Power BI", level: "Intermedio" },
    { name: "Docker", level: "Intermedio" },
    { name: "Linux", level: "Intermedio" },
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

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  // { href: '#experiencia', label: 'Experiencia' },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];
