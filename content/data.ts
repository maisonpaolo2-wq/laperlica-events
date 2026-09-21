export const site = {
  name: "La Perlica Events",
  plannerName: "Ana Navarro",
  url: "https://laperlicaevents.com",
  tagline: "Wedding Planner con 6 sentidos",
  description: "Bodas solidarias y eventos en Murcia. Ana Navarro organiza tu boda completa con presupuesto real y corazón. Una realidad al alcance de todos.",
  email: "hola@laperlicaevents.com",
  phone: "+34636147712",
  whatsapp: "34636147712",
  whatsappMessage: "Hola Ana, me gustaría hablar sobre mi boda",
  instagram: "https://www.instagram.com/laperlica_events",
  location: "Murcia, España",
  address: {
    street: "Murcia",
    city: "Murcia",
    region: "Región de Murcia",
    country: "ES",
    postalCode: "30001"
  }
}

export const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Bodas reales", href: "/bodas" },
  { label: "Sobre Ana", href: "/sobre-ana" },
  { label: "Contacto", href: "/contacto" },
]

export const services = [
  {
    id: "coordinacion-completa",
    title: "Coordinación Completa",
    tag: "El servicio completo",
    lead: "Desde el primer sí hasta el último baile. Nos encargamos de absolutamente todo para que tú solo tengas que disfrutar.",
    detail: "Planificamos contigo desde el presupuesto inicial hasta la selección de cada proveedor, la agenda del día y la coordinación en tiempo real durante la celebración.",
    includes: ["Planificación de presupuesto", "Selección de proveedores", "Agenda detallada del día", "Coordinación el día de la boda", "Visita a la finca"],
    image: "/photos/tables.jpg",
    imageAlt: "Boda al aire libre con mesa decorada bajo los árboles"
  },
  {
    id: "coordinacion-dia",
    title: "Coordinación de Día",
    tag: "Para quien ya lleva el trabajo hecho",
    lead: "Tu mejor inversión. Alguien que conoce cada detalle de tu plan y se encarga de que nada salga mal cuando llegue el gran día.",
    detail: "Nos incorporamos unas semanas antes para aprender todo lo que has organizado y coordinar el día D desde la primera flor hasta el último coche.",
    includes: ["Reunión de traspaso completo", "Comunicación con proveedores", "Agenda y timing del día", "Presencia completa el día de la boda"],
    image: "/photos/hero.jpg",
    imageAlt: "Celebración al aire libre con decoración floral"
  },
  {
    id: "asesoria-express",
    title: "Asesoría Exprés",
    tag: "Orientación sin compromiso",
    lead: "¿Llevas meses organizando y no sabes si vas bien? Revisamos tu lista de proveedores, tu presupuesto y te decimos exactamente qué falta y qué sobra.",
    detail: "Dos sesiones de trabajo intensas en las que analizamos todo lo que tienes organizado y te damos un plan de acción claro y realista.",
    includes: ["Dos sesiones de trabajo", "Revisión de presupuesto", "Análisis de proveedores", "Plan de acción personalizado"],
    image: "/photos/food.jpg",
    imageAlt: "Mesa de aperitivos con productos artesanales"
  },
  {
    id: "boda-solidaria",
    title: "Boda Solidaria",
    tag: "Bodas con propósito",
    lead: "Organizamos tu boda y parte de nuestros honorarios va a la causa solidaria que tú elijas. Celebrar también puede cambiar el mundo.",
    detail: "Mismo servicio, mismo amor por los detalles, con la diferencia de que una parte de lo que pagas tiene un impacto real en la comunidad. Tú eliges la causa.",
    includes: ["Coordinación completa incluida", "Elección de causa solidaria", "Certificado de donación", "Mención especial en la celebración"],
    image: "/photos/ana.jpg",
    imageAlt: "Ana Navarro preparando decoración floral para una boda"
  }
]

export const weddings = [
  {
    slug: "fran-y-javier",
    couple: "Fran y Javier",
    location: "Finca El Olivar, Murcia",
    year: 2024,
    season: "Primavera",
    type: "Boda íntima",
    description: "Una boda íntima entre olivos centenarios, con mesa única y mucha personalidad.",
    longDescription: "Fran y Javier querían una boda pequeña pero que se sintiera enorme. Ochenta personas, una finca con olivares, música en vivo y una mesa única que ocupó todo el jardín. Coordinación completa con presupuesto ajustado y resultado de revista.",
    photos: ["/photos/tables.jpg", "/photos/food.jpg", "/photos/hero.jpg"]
  },
  {
    slug: "maria-y-rodrigo",
    couple: "María y Rodrigo",
    location: "Cortijo La Paloma, Cartagena",
    year: 2023,
    season: "Otoño",
    type: "Boda solidaria",
    description: "La primera boda solidaria de La Perlica. Parte de los honorarios fueron a Cruz Roja Murcia.",
    longDescription: "María y Rodrigo querían que su boda tuviera un impacto más allá del día. Eligieron Cruz Roja Murcia como causa, y convertimos esa decisión en parte de la celebración, con una mención especial durante el brindis y un certificado de donación personalizado.",
    photos: ["/photos/ana.jpg", "/photos/tables.jpg", "/photos/food.jpg"]
  },
  {
    slug: "ana-y-carlos",
    couple: "Ana y Carlos",
    location: "Hacienda del Sol, Murcia",
    year: 2025,
    season: "Verano",
    type: "Boda al aire libre",
    description: "Doscientos invitados, jardines nocturnos y cena bajo las estrellas en pleno Murcia.",
    longDescription: "Cuando Ana y Carlos dijeron que querían doscientas personas y presupuesto controlado, aceptamos el reto. Ocho meses de planificación, treinta proveedores coordinados y una noche mágica que nadie olvidará.",
    photos: ["/photos/hero.jpg", "/photos/tables.jpg", "/photos/ana.jpg"]
  }
]

export const testimonials = [
  {
    quote: "Ana transformó lo que creíamos imposible en la boda más bonita que hayamos imaginado. Con un presupuesto ajustado y sin renunciar a nada.",
    author: "María y Javier",
    date: "Otoño 2024",
    service: "Coordinación Completa"
  },
  {
    quote: "La coordinación de día no tiene precio. Estuvimos completamente tranquilos sabiendo que Ana lo tenía todo bajo control.",
    author: "Lucía y Pablo",
    date: "Primavera 2023",
    service: "Coordinación de Día"
  },
  {
    quote: "Nunca pensé que podíamos tener una boda solidaria y bonita a la vez. Ana lo hizo posible y donamos a Cruz Roja en nuestro nombre.",
    author: "Carmen y Marcos",
    date: "Verano 2025",
    service: "Boda Solidaria"
  }
]

export const process = [
  {
    step: "01",
    title: "Primera llamada",
    description: "Nos conocemos, hablamos de tu idea y vemos si somos el encaje perfecto. Sin compromiso, sin formularios eternos."
  },
  {
    step: "02",
    title: "Tu plan a medida",
    description: "Diseñamos un plan de trabajo adaptado a tu fecha, presupuesto y sueños. Todo por escrito y con objetivos claros."
  },
  {
    step: "03",
    title: "Coordinación activa",
    description: "Nos encargamos de proveedores, seguimiento y todos los detalles para que tú no tengas que pensar en nada."
  },
  {
    step: "04",
    title: "El gran día",
    description: "Estamos allí, en la sombra, para que tú solo tengas que disfrutar, bailar y emocionarte."
  }
]

export const faqs = [
  {
    q: "¿Cuánto cuesta organizar una boda con vosotros?",
    a: "Dependiendo del servicio, la coordinación de día parte de 800 euros y la coordinación completa de 1.500 euros. Siempre hacemos una propuesta personalizada tras una primera llamada gratuita."
  },
  {
    q: "¿En qué zona trabajáis?",
    a: "Estamos especializadas en bodas en Murcia y Cartagena, aunque también trabajamos en el resto de la Región de Murcia y casos especiales fuera de la comunidad."
  },
  {
    q: "¿Qué es una boda solidaria?",
    a: "Es una boda en la que parte de nuestros honorarios van a una causa solidaria elegida por los novios. Misma calidad, mismo servicio, con un propósito extra que forma parte de la celebración."
  },
  {
    q: "¿Con cuánta antelación hay que reservar?",
    a: "Lo ideal es entre 12 y 18 meses antes para coordinación completa. Para coordinación de día, podemos incorporarnos incluso con 3 meses de antelación."
  },
  {
    q: "¿Trabajáis con todo tipo de presupuestos?",
    a: "Sí. Creemos que una boda bonita no tiene que ser sinónimo de cara. Trabajamos con presupuestos desde 8.000 euros y ayudamos a optimizar cada euro."
  },
  {
    q: "¿Cómo es el proceso para empezar?",
    a: "Muy sencillo: nos escribes por WhatsApp o correo, hacemos una llamada de 20 minutos gratuita para conocernos, y si hay feeling enviamos propuesta en 48 horas."
  }
]
