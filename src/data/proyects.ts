import tags from "./tags";

const proyects = [
    {
        proyectName: "WineShop",
        typeProyect: "E-commerce",
        technologies: [
            tags.JAVA,
            tags.SPRING,
            tags.POSTGRESQL,
            tags.JAVASCRIPT,
            tags.VUE,
            tags.HTML,
            tags.CSS,
            tags.BOOTSTRAP,
        ],
        description:
            "En colaboración con un equipo, desarrollamos una tienda en línea de vinos que permite a los usuarios explorar, filtrar y comprar una amplia selección de productos. La plataforma ofrece una experiencia de compra intuitiva, con un diseño enfocado en la facilidad de navegación y la presentación detallada de los productos.",
        githubRepository: "https://github.com/DanielRodado/wineshop",
        linkToSite: "",
        image: "/images/proyects/wineshop.png",
        deploy: false,
    },
    {
        proyectName: "Finovate-bank",
        typeProyect: "Homebanking",
        technologies: [
            tags.JAVA,
            tags.SPRING,
            tags.POSTGRESQL,
            tags.JAVASCRIPT,
            tags.VUE,
            tags.HTML,
            tags.CSS,
            tags.BOOTSTRAP,
        ],
        description:
            "Desarrollé una aplicación de homebanking que permite a los usuarios gestionar sus cuentas, realizar prestamos y pagarlos, realizar transferencias y consultar el historial de transacciones.",
        githubRepository: "https://github.com/DanielRodado/homebanking",
        linkToSite: "",
        image: "/images/proyects/homebanking.png",
        deploy: false,
    },
    {
        proyectName: "Amazing Events",
        typeProyect: "Event Listing",
        technologies: [
            tags.JAVASCRIPT,
            tags.VUE,
            tags.HTML,
            tags.CSS,
            tags.BOOTSTRAP,
        ],
        description:
            "Desarrollé un sitio web para explorar eventos pasados y futuros, con detalles completos sobre cada uno. La interfaz ofrece una navegación intuitiva para una fácil visualización de eventos.",
        githubRepository:
            "https://github.com/DanielRodado/AmazingEvents-VueJS-DanielRodado",
        linkToSite: "",
        image: "/images/proyects/amazing-events.png",
        deploy: false,
    },
    {
        proyectName: "Rick And Morty Info",
        typeProyect: "Character Information",
        technologies: [tags.JAVASCRIPT, tags.VUE, tags.HTML, tags.CSS],
        description:
            "Desarrollé una landing page dedicada a la serie Rick and Morty, integrando la API pública de la serie para mostrar detalles sobre los personajes. La página presenta información dinámica y actualizada, ofreciendo una experiencia interactiva para los fans de la serie.",
        githubRepository:
            "https://github.com/DanielRodado/rick-and-morty-api-frontend",
        linkToSite: "https://rickandmortyinfo.vercel.app/",
        image: "/images/proyects/rick-and-morty.png",
        deploy: true,
    },
    {
        proyectName: "Social Media Dashboard",
        typeProyect: "Dashboard",
        technologies: [tags.ASTRO, tags.TAILWIND],
        description:
            "Desarrollé una dashboard de social media usando Astro y TailwindCSS. El proyecto incluye modo oscuro y se enfoca en mostrar estadísticas clave de redes sociales. La interfaz es responsive y ofrece una experiencia de usuario moderna y atractiva.",
        githubRepository:
            "https://github.com/DanielRodado/social-media-dashboard",
        linkToSite: "https://social-media-dashboard-daniel-dev.vercel.app/",
        image: "/images/proyects/dashboard.png",
        deploy: true,
    },
];

export default proyects;
