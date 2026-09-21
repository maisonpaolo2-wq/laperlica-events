export const site = {
  name: "La Perlica Events",
  plannerName: "Ana Navarro",
  url: "https://laperlicaevents.com",
  tagline: "Wedding Planner con 6 sentidos",
  description: "Bodas solidarias y eventos en Murcia. Ana Navarro organiza tu boda completa con presupuesto real y corazon. Una realidad al alcance de todos.",
  email: "hola@laperlicaevents.com",
  phone: "+34636147712",
  whatsapp: "34636147712",
  whatsappMessage: "Hola Ana, me gustaria hablar sobre mi boda",
  instagram: "https://www.instagram.com/laperlica_events",
  location: "Murcia, Espana",
  address: {
    street: "Murcia",
    city: "Murcia",
    region: "Region de Murcia",
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
    title: "Coordinacion Completa",
    tag: "El servicio completo",
    lead: "Desde el primer si hasta el ultimo baile. Nos encargamos de absolutamente todo para que tu solo tengas que disfrutar.",
    detail: "Planificamos contigo desde el presupuesto inicial hasta la seleccion de cada proveedor, la agenda del dia y la coordinacion en tiempo real durante la celebracion.",
    includes: ["Planificacion de presupuesto", "Seleccion de proveedores", "Agenda detallada del dia", "Coordinacion el dia de la boda", "Visita a la finca"],
    image: "/photos/tables.jpg",
    imageAlt: "Boda al aire libre con mesa decorada bajo los arboles"
  },
  {
    id: "coordinacion-dia",
    title: "Coordinacion de Dia",
    tag: "Para quien ya lleva el trabajo hecho",
    lead: "Tu mejor inversion. Alguien que conoce cada detalle de tu plan y se encarga de que nada salga mal cuando llegue el gran dia.",
    detail: "Nos incorporamos unas semanas antes para aprender todo lo que has organizado y coordinar el dia D desde la primera flor hasta el ultimo coche.",
    includes: ["Reunion de traspaso completo", "Comunicacion con proveedores", "Agenda y timing del dia", "Presencia completa el dia de la boda"],
    image: "/photos/hero.jpg",
    imageAlt: "Celebracion al aire libre con decoracion floral"
  },
  {
    id: "asesoria-express",
    title: "Asesoria Expres",
    tag: "Orientacion sin compromiso",
    lead: "Llevas meses organizando y no sabes si vas bien? Revisamos tu lista de proveedores, tu presupuesto y te decimos exactamente que falta y que sobra.",
    detail: "Dos sesiones de trabajo intensas en las que analizamos todo lo que tienes organizado y te damos un plan de accion claro y realista.",
    includes: ["Dos sesiones de trabajo", "Revision de presupuesto", "Analisis de proveedores", "Plan de accion personalizado"],
    image: "/photos/food.jpg",
    imageAlt: "Mesa de aperitivos con productos artesanales"
  },
  {
    id: "boda-solidaria",
    title: "Boda Solidaria",
    tag: "Bodas con proposito",
    lead: "Organizamos tu boda y parte de nuestros honorarios va a la causa solidaria que tu elijas. Celebrar tambien puede cambiar el mundo.",
    detail: "Mismo servicio, mismo amor por los detalles, con la diferencia de que una parte de lo que pagas tiene un impacto real en la comunidad. Tu eliges la causa.",
    includes: ["Coordinacion completa incluida", "Eleccion de causa solidaria", "Certificado de donacion", "Mencion especial en la celebracion"],
    image: "/photos/ana.jpg",
    imageAlt: "Ana Navarro preparando decoracion floral para una boda"
  }
]

export const weddings = [
  {
    slug: "fran-y-javier",
    couple: "Fran y Javier",
    location: "Finca El Olivar, Murcia",
    year: 2024,
    season: "Primavera",
    type: "Boda intima",
    description: "Una boda intima entre olivos centenarios, con mesa unica y mucha personalidad.",
    longDescription: "Fran y Javier querian una boda pequena pero que se sintiera enorme. Ochenta personas, una finca con olivares, musica en vivo y una mesa unica que ocupo todo el jardin. Coordinacion completa con presupuesto ajustado y resultado de revista.",
    photos: ["/photos/tables.jpg", "/photos/food.jpg", "/photos/hero.jpg"]
  },
  {
    slug: "maria-y-rodrigo",
    couple: "Maria y Rodrigo",
    location: "Cortijo La Paloma, Cartagena",
    year: 2023,
    season: "Otono",
    type: "Boda solidaria",
    description: "La primera boda solidaria de La Perlica. Parte de los honorarios fueron a Cruz Roja Murcia.",
    longDescription: "Maria y Rodrigo querian que su boda tuviera un impacto mas alla del dia. Eligieron Cruz Roja Murcia como causa, y convertimos esa decision en parte de la celebracion, con una mencion especial durante el brindis y un certificado de donacion personalizado.",
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
    longDescription: "Cuando Ana y Carlos dijeron que querian doscientas personas y presupuesto controlado, aceptamos el reto. Ocho meses de planificacion, treinta proveedores coordinados y una noche magica que nadie olvidara.",
    photos: ["/photos/hero.jpg", "/photos/tables.jpg", "/photos/ana.jpg"]
  }
]

export const testimonials = [
  {
    quote: "Ana transformo lo que creiamos imposible en la boda mas bonita que hayamos imaginado. Con un presupuesto ajustado y sin renunciar a nada.",
    author: "Maria y Javier",
    date: "Otono 2024",
    service: "Coordinacion Completa"
  },
  {
    quote: "La coordinacion de dia no tiene precio. Estuvimos completamente tranquilos sabiendo que Ana lo tenia todo bajo control.",
    author: "Lucia y Pablo",
    date: "Primavera 2023",
    service: "Coordinacion de Dia"
  },
  {
    quote: "Nunca pense que podiamos tener una boda solidaria y bonita a la vez. Ana lo hizo posible y donamos a Cruz Roja en nuestro nombre.",
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
    description: "Disenamos un plan de trabajo adaptado a tu fecha, presupuesto y suenos. Todo por escrito y con objetivos claros."
  },
  {
    step: "03",
    title: "Coordinacion activa",
    description: "Nos encargamos de proveedores, seguimiento y todos los detalles para que tu no tengas que pensar en nada."
  },
  {
    step: "04",
    title: "El gran dia",
    description: "Estamos alli, en la sombra, para que tu solo tengas que disfrutar, bailar y emocionarte."
  }
]

export const faqs = [
  {
    q: "Cuanto cuesta organizar una boda con vosotros?",
    a: "Dependiendo del servicio, la coordinacion de dia parte de 800 euros y la coordinacion completa de 1.500 euros. Siempre hacemos una propuesta personalizada tras una primera llamada gratuita."
  },
  {
    q: "En que zona trabajais?",
    a: "Estamos especializadas en bodas en Murcia y Cartagena, aunque tambien trabajamos en el resto de la Region de Murcia y casos especiales fuera de la comunidad."
  },
  {
    q: "Que es una boda solidaria?",
    a: "Es una boda en la que parte de nuestros honorarios van a una causa solidaria elegida por los novios. Misma calidad, mismo servicio, con un proposito extra que forma parte de la celebracion."
  },
  {
    q: "Con cuanta antelacion hay que reservar?",
    a: "Lo ideal es entre 12 y 18 meses antes para coordinacion completa. Para coordinacion de dia, podemos incorporarnos incluso con 3 meses de antelacion."
  },
  {
    q: "Trabajais con todo tipo de presupuestos?",
    a: "Si. Creemos que una boda bonita no tiene que ser sinonimo de cara. Trabajamos con presupuestos desde 8.000 euros y ayudamos a optimizar cada euro."
  },
  {
    q: "Como es el proceso para empezar?",
    a: "Muy sencillo: nos escribes por WhatsApp o correo, hacemos una llamada de 20 minutos gratuita para conocernos, y si hay feeling enviamos propuesta en 48 horas."
  }
]
