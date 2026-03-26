import { ServiceItem, PortfolioItem, TeamMember, SolutionItem, FAQItem, ProcessStep, FeaturedProjectItem } from './types';

export const WHATSAPP = {
  number: '56948909095',
  url: 'https://wa.me/56948909095',
  displayNumber: '+56 9 4890 9095',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/berp.sg',
  linkedin: 'https://www.linkedin.com/company/agenciaberp/',
  linkedinCEO: 'https://www.linkedin.com/in/rommypoza/',
  facebook: 'https://www.facebook.com/berp.sg',
  tiktok: 'https://www.tiktok.com/@berp.sg',
  threads: 'https://www.threads.net/@berp.sg', // Updated to threads.net (Meta) for correctness
  linktree: 'https://linktr.ee/berp.sg',
  berfriends: 'https://www.instagram.com/direct/t/24055257860798352/'
};

export const ASSETS = {
  logoHero: '/assets/logo-hero.png',
  logoNav: '/assets/logo-nav.png',
  logoFooter: '/assets/logo.png',
};

export const NAV_LINKS = [
  { name: 'Qué hacemos', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Soluciones', href: '#solutions' },
  { name: 'Casos de éxito', href: '#portfolio' },
  { name: 'Equipo', href: '#team' },
  { name: 'Dudas', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  // Redes Sociales (4 Cards)
  {
    id: 'profile-opt',
    title: 'Optimización de Perfil',
    description: 'Mejoramos tu bio, imagen y estructura visual para transmitir profesionalismo y atraer más seguidores.',
    iconName: 'UserCheck',
    prices: [{ qty: 'x1 Optimización', price: '$39.900', note: '+ IVA' }],
    deliveryTime: '7 días hábiles',
    requirements: 'Accesos e información clave de tu cuenta.'
  },
  {
    id: 'post-design',
    title: 'Diseño de Post',
    description: 'Diseños estáticos pensados para tu feed y objetivos de comunicación.',
    iconName: 'Image',
    prices: [
      { qty: 'x1 Post', price: '$21.900' },
      { qty: 'x3 Post', price: '$59.700' },
      { qty: 'x6 Post', price: '$113.400' },

    ],
    disclaimer: '+7 Posts $16.900 c/u (+ IVA)',
    requirements: 'Logotipo e información para la creación.'
  },
  {
    id: 'reels-basic',
    title: 'Edición de Reels',
    description: 'Reels editados de máximo 15 segundos, dinámicos y alineados a tu identidad de marca.',
    iconName: 'Video',
    prices: [
      { qty: 'x1 Edición', price: '$24.900' },
      { qty: 'x3 Ediciones', price: '$68.700' },
      { qty: 'x6 Ediciones', price: '$125.400' },
    ],
    disclaimer: '+7 Ediciones $18.900 c/u (+ IVA)',
    requirements: 'Logotipo e información para la creación.'
  },
  {
    id: 'stories-basic',
    title: 'Diseño de Stories',
    description: 'Historias personalizadas, visualmente atractivas y con tu identidad.',
    iconName: 'Smartphone',
    prices: [
      { qty: 'x1 Story', price: '$21.900' },
      { qty: 'x3 Stories', price: '$59.700' },
      { qty: 'x6 Stories', price: '$113.400' },
    ],
    disclaimer: '+7 Stories $16.900 c/u (+ IVA)',
    requirements: 'Logotipo e información para la creación.'
  },

  // Planes (2 Cards)
  {
    id: 'plan-essential',
    title: 'ESSENTIAL',
    subtitle: '12 Publicaciones mensuales',
    description: 'Contenido profesional para destacar tu marca y ordenar tu comunicación mes a mes.',
    iconName: 'Zap',
    isPopular: true,
    deliverables: [
      '✅ 3 Posts Estáticos 3láminas (1350x1080px)',
      '✅ 4 Carruseles 3 láminas c/u (1920x1080px)',
      '✅ 5 Reels Editados, máx. 15 seg. c/u'
    ],
    features: [
      'Análisis de la cuenta',
      'Asesoramiento en Marketing Digital',
      'Estrategia de contenido',
      'Diseños altamente creativos',
      'Revisión de métricas'
    ]
  },
  {
    id: 'plan-advanced',
    title: 'ADVANCED',
    subtitle: '12 Publicaciones mensuales',
    description: 'Estrategia completa con diseno, redacción y analisis: contenido que conecta y convierte.',
    iconName: 'ShieldCheck',
    deliverables: [
      '✅ 2 Posts Estáticos 2láminas (1350x1080px)',
      '✅ 4 Carruseles 4 láminas c/u (1920x1080px)',
      '✅ 6 Reels Editados, máx. 15 seg. c/u',
      '✅ 12 Captions listos para publicar'
    ],
    features: [
      'Análisis de la cuenta',
      'Asesoramiento en Marketing Digital',
      'Estrategia de contenido',
      'Diseños altamente creativos',
      'Imágenes en alta resolución',
      'Revisión de métricas',
      'Redacción de textos (copywriting)',
      'Sugerencias de hashtags'
    ]
  },

  // Complementos (4 Cards)
  {
    id: 'icons',
    title: 'Diseño de Íconos',
    description: 'Íconos únicos para tu marca y úsalos donde quieras (Highlights, Web, etc).',
    iconName: 'Hexagon',
    prices: [
      { qty: 'x1 Ícono', price: '$7.500' },
      { qty: 'x5 Íconos', price: '$25.000' },
      { qty: 'x10 Íconos', price: '$45.000' },
    ],
    disclaimer: '+7 Íconos $6.000 c/u (+ IVA)',
    requirements: 'Idea clara de lo que necesitas.'
  },
  {
    id: 'captions-service',
    title: 'Redacción de Caption',
    description: 'Textos listos para publicar, ajustados a tu estilo y objetivos.',
    iconName: 'FileText',
    prices: [{ qty: 'x12 Captions', price: '$138.000' },
    { qty: 'x20 Captions', price: '$210.000' },
    { qty: 'x30 Captions', price: '$285.000' },
    ],
    requirements: 'imagen o idea base, objetivo del post, tono de voz y descripción breve de tu público.'
  },
  {
    id: 'qa-auto',
    title: 'QA Automáticas',
    description: 'Activa preguntas frecuentes en tus DM para responder al instante.',
    iconName: 'MessageCircle',
    prices: [{ qty: '4 Q&A', price: '$32.000' }],
    requirements: 'accesos, 4 preguntas frecuentes con sus respuestas e información clave a destacar.'
  },
  {
    id: 'planner',
    title: 'Plantilla de Stories + Planner',
    description: 'Plantillas alineadas a tu marca + planner con ideas listas para tus historias.',
    iconName: 'Calendar',
    prices: [{ qty: 'x4 Plantillas + Planner', price: '$55.600' },
    { qty: 'x6 Plantillas + Planner', price: '77.400' },
    { qty: 'x8 Plantillas + Planner', price: '195.200' },
    ],
    requirements: 'Logotipo e información para la creación.'
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    title: 'Asesorías RRSS',
    description: 'Asesorías diseñadas para ayudarte a entender tus redes, tomar mejores decisiones y trabajar con una estrategia clara y aplicable.',
    items: ['Diagnóstico de tus redes', 'Optimización de perfiles', 'Definición de estrategia', 'Recomendaciones prácticas'],
    image: '/assets/solutions/advisory.png',
    link: 'https://drive.google.com/file/d/1efXlegek1N89Yg3rLiAssRGbmInCgyLc/view?usp=sharing'
  },
  {
    title: 'Branding y Diseño',
    description: 'Diseñamos piezas gráficas que refuerzan la identidad de tu marca y comunican con coherencia en todos sus puntos de contacto.',
    items: ['Diseño corporativo', 'Packaging', 'Editorial'],
    image: '/assets/solutions/branding.png',
    link: 'https://drive.google.com/file/d/1xRsKqeERwNMQYxM4F0dIkeSESq4lPrOv/view?usp=drive_link'
  },
  {
    title: 'Full Impresión',
    description: 'Llevamos tu marca al formato físico con piezas impresas de alta calidad, cuidando cada detalle del diseño y la terminación.',
    items: ['Tarjetas de visita', 'Flyers', 'Stickers', 'Pendones', 'Hang Tags'],
    image: '/assets/solutions/printing.png',
    link: 'https://drive.google.com/file/d/1w-fR0BQtcRgBBo5VXj7CqsMWSA8EJq_A/view?usp=drive_link'
  },
  {
    title: 'Mantenimientos web',
    description: 'Tu sitio web protegido, actualizado y funcionando sin interrupciones.',
    items: ['Actualizaciones', 'Seguridad', 'Respaldos', 'Soporte'],
    image: '/assets/solutions/maintenance.png',
    link: 'https://drive.google.com/file/d/1xii_2oWWk4SYOsVhIcrSsmIDU_Ak1eju/view?usp=sharing'
  },
  {
    title: 'Sitios Web',
    description: 'Creamos sitios web pensados para comunicar con claridad, ofrecer una buena experiencia y apoyar los objetivos de tu negocio.',
    items: ['Web multienlace (Linktree)', 'Landing Page', 'Web con catálogo detallado'],
    image: '/assets/solutions/web.png',
    link: 'https://drive.google.com/file/d/1X6rB1fU4MtlCNV_VDiDp8q0sT77SnGZP/view?usp=drive_link'
  }
];

export const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    id: 1,
    category: "Gestión Estratégica de Instagram",
    title: "GESTIÓN ESTRATÉGICA",
    titleHighlight: "GESTIÓN ESTRATÉGICA",
    subtitle: "DE INSTAGRAM",
    description: "Profesionalizamos la presencia digital de TerraTimes a través de una gestión integral de Instagram. Redefinimos la estructura del perfil, desarrollamos una estrategia de contenido coherente y potenciamos su comunicación audiovisual para proyectar una marca sólida, ordenada y estratégicamente posicionada.\nCada decisión respondió a un objetivo claro: transformar su cuenta en un canal alineado a su identidad y preparado para crecer con dirección.",
    date: "2025",
    services: "Optimización · Contenido · Reels · Colaboraciones",
    client: "Eduardo Lucero — Fundador de TerraTimes",
    link: "https://www.instagram.com/terratimes.cl/",
    tags: "TERRATIMES CL",
    images: {
      topSmall: "/assets/projects/terratimes-top.png",
      bottomSmall: "/assets/projects/terratimes-bottom.png",
      mainTall: "/assets/projects/terratimes-main.png"
    }
  },
  {
    id: 2,
    category: "Colaboración Dirección y Soporte Digital",
    title: "COLABORACIÓN",
    titleHighlight: "COLABORACIÓN",
    subtitle: "DIRECCIÓN Y SOPORTE DIGITAL",
    description: "Acompañamos a PlaceTribe en la gestión de redes sociales de su cliente Dmoov, brindando asesoría estratégica y operativa para fortalecer la dirección del proyecto.\nEl trabajo conjunto permitió asegurar coherencia de marca, claridad en la implementación y un servicio alineado a los estándares de ambas agencias.",
    date: "2025",
    services: "Asesoría estratégica · Dirección operativa · Gestión de redes",
    client: "PlaceTribe",
    link: "https://www.instagram.com/dmoovescuelamilitar/",
    tags: "DMOOV ESCUELA MILITAR",
    images: {
      topSmall: "/assets/projects/dmoov-top.png",
      bottomSmall: "/assets/projects/dmoov-bottom.png",
      mainTall: "/assets/projects/dmoov-main.png"
    }
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'insutem',
    client: 'Insutem',
    year: '2023 – 2024',
    category: 'Nicole López',
    description: 'Desarrollamos una estrategia digital integral basada en análisis, planificación alineada a marca y creación de contenido estratégico con gráficas personalizadas y optimización de hashtags. Implementamos seguimiento de métricas y ajustes continuos basados en datos.',
    testimonial: {
      text: "En solo un mes con el plan de redes sociales, nuestras publicaciones duplicaron el alcance y los carruseles lograron más guardados de lo esperado. Gracias a la estrategia de contenido y la selección de hashtags, hemos atraído más clientes potenciales. ¡Totalmente satisfechos!",
      author: "Nicole López",
      role: "Fundadora"
    },
    result: 'Logramos una identidad digital coherente y una estructura de contenido que duplicó el alcance orgánico en los primeros 3 meses. 📈',
    services: ['PLAN ESTRATÉGICO', 'DIAGNÓSTICO', 'ASESORÍA CONTINUA', 'CONTENIDO', 'GRÁFICAS', 'MÉTRICAS'],
    beforeImage: '/assets/portfolio/insutem-before.png',
    afterImage: '/assets/portfolio/insutem-after.png',
    color: 'bg-blue-50'
  },
  {
    id: 'federal',
    client: 'Federal Chile',
    contactName: 'Matías Arredondo',
    year: '2022 – 2024',
    category: 'Matías Arredondo',
    description: 'Colaboración estratégica junto a Placetribe. Participamos como apoyo creativo y estratégico en la gestión y planificación de contenido para Federal Access, Federal Seguridad y Federal Alarma, asegurando coherencia comunicacional y estructura en la ejecución digital.',
    result: 'Fortalecimiento de la presencia digital, mayor claridad en la comunicación de marca y optimización del trabajo interno entre agencias. 🚀',
    services: ['ESTRATEGIA', 'GESTIÓN DE RRSS', 'ASESORÍA EQUIPO', 'PLANIFICACIÓN'],
    beforeImage: '/assets/portfolio/federal-before.png',
    afterImage: '/assets/portfolio/federal-after.png',
    color: 'bg-orange-50'
  },
  {
    id: 'antos',
    client: 'ANTOS',
    year: '2021 – 2026',
    category: 'Gustavo Gaete',
    description: 'Construimos su marca desde cero: desarrollamos identidad visual completa (logotipo y sistema gráfico), piezas impresas y digitales, recursos gráficos para su sitio web y un plan de contenido mensual alineado a la marca para impulsar su posicionamiento y crecimiento digital.',
    testimonial: {
      text: "Desde que contratamos el plan de redes sociales, hemos visto un aumento del 33% en la interacción y un crecimiento constante de seguidores. Las publicaciones reflejan mejor nuestra identidad y los reels generan mucho más alcance. ¡Un servicio realmente efectivo!",
      author: "Gustavo Gaete",
      role: "Fundador y dueño"
    },
    result: 'Consolidación de una marca profesional con presencia omnicanal y un sistema visual que facilita la creación de contenido recurrente. 🎨',
    services: ['LOGOTIPO', 'IDENTIDAD VISUAL', 'ETIQUETAS', 'PENDONES', 'CONTENIDO VISUAL', 'RECURSOS WEB', 'PLAN DE CONTENIDO'],
    beforeImage: '/assets/portfolio/antos-before.png',
    afterImage: '/assets/portfolio/antos-after.png',
    color: 'bg-teal-50'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Rommy Poza',
    role: 'Directora de Arte · Estratega Digital',
    image: '/assets/team/leader.png',
    bio: 'Berp® es una agencia liderada por Rommy Poza, Directora de Arte y especialista en marketing digital, quien supervisa y dirige cada proyecto para asegurar coherencia, calidad y enfoque en resultados. Trabajamos junto a un equipo multidisciplinario de diseñadores, desarrolladores, fotógrafos y especialistas en contenido que se integran estratégicamente según las necesidades de cada marca. Cada proyecto se aborda con análisis previo, planificación clara y ejecución profesional. Nada se deja al azar. Más que prestar servicios, acompañamos procesos y construimos marcas con dirección.',
    linkedin: SOCIAL_LINKS.linkedinCEO
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "¿Cómo solicitar una cotización en Berp®?", answer: "Puedes solicitar tu cotización escribiéndonos a contacto@berp.cl o por WhatsApp al +56 9 4890 9095. En un plazo de 24 a 48 horas hábiles recibirás una propuesta con valores, tiempos de entrega y el proceso de trabajo detallado." },
  { question: "¿Qué servicios ofrece Berp®?", answer: "Berp® ofrece diseño gráfico profesional, branding, gestión de redes sociales, impresión personalizada, desarrollo web, mantenimiento web y asesorías estratégicas para marcas y emprendedores." },
  { question: "¿Cómo es el proceso de trabajo una vez contratado un servicio?", answer: "Una vez confirmada la propuesta y realizado el pago, te indicamos qué información necesitamos para comenzar. Trabajamos con un proceso claro, ordenado y acompañado." },
  { question: "¿Puedo delegar completamente la gestión de mis redes sociales?", answer: "Sí. Gestionamos tus redes sociales de forma integral: planificación, diseño, edición de reels, redacción de contenidos, programación y análisis de métricas." },
  { question: "¿Qué incluye un diseño de marca o branding completo?", answer: "Desarrollamos tu identidad visual completa: logo principal y versiones, paleta de colores, tipografías y recursos gráficos. Entregamos un Brandboard o Brand Book." },
  { question: "¿Cuáles son los plazos de entrega de los servicios?", answer: "Diseño gráfico: 3-15 días. Impresión: 4-15 días. Redes sociales: 4-12 días. Desarrollo web: 5-20 días." },
  { question: "¿Berp® realiza envíos a regiones de Chile?", answer: "Sí. En Región Metropolitana trabajamos con Paket y en regiones con Chilexpress, Starken o Correos Chile." },
  { question: "¿Puedo retirar mis productos presencialmente?", answer: "Sí, con coordinación previa. Disponemos de puntos de retiro en: 📍 Oficina Berp® – Santiago Centro, 🖨️ Taller de impresión – Pudahuel Sur, 📦 Puntos de retiro – Santiago Centro, Lo Barnechea y Pudahuel Sur." },
  { question: "¿Qué pasa si necesito un servicio que no está en los catálogos?", answer: "Escríbenos igual. Desarrollamos proyectos personalizados según las necesidades de cada cliente." }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '1',
    title: 'Solicita tu cotización',
    description: 'Escríbenos a contacto@berp.cl o al WhatsApp +56 9 4890 9095. Cuéntanos qué necesitas, y en 24 a 48 hrs recibirás una propuesta con valores, tiempos de entrega y proceso de trabajo.'
  },
  {
    number: '2',
    title: 'Confirma y paga',
    description: 'Si te gustó la propuesta, confírmala por correo, acepta los términos y condiciones y realiza el pago completo. Aceptamos transferencia bancaria, efectivo y PayPal para pagos internacionales.'
  },
  {
    number: '3',
    title: '¡Manos a la obra!',
    description: 'Iniciamos el servicio según el flujo definido para redes sociales, branding y diseño gráfico, servicios web o impresión.\n\nRealizamos envíos a todo Chile. En RM, V y VI Región despachamos con Paket Envíos, y para otras regiones utilizamos Chilexpress, Starken o Correos Chile.'
  }
];

// Note: Using public URLs for demo purposes. In a real environment, you would use local assets or your own CDN.
export const CLIENT_LOGOS = [
  { name: 'Osesa', logo: '/assets/brands/Osesa.png' },
  { name: 'Nutrisa', logo: '/assets/brands/Nutrisa.png' },
  { name: 'Hidro Centro', logo: '/assets/brands/Hidrocentro.png' },
  { name: 'Gyplac', logo: '/assets/brands/Gyplac.png' },
  { name: 'Farmacias Galenica', logo: '/assets/brands/Galenica.png' },
  { name: 'Federal', logo: '/assets/brands/Federal.png' },
  { name: 'EnzyTech', logo: '/assets/brands/Enzytech.png' },
  { name: 'Dmoov', logo: '/assets/brands/Dmoov.png' },
  { name: 'De Heeckeren', logo: '/assets/brands/De-Heeckeren.png' },
  { name: 'Bid\'s', logo: '/assets/brands/Bids.png' },
];