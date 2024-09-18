import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  aws,
  nextjs,
 
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS",
    icon: "src/assets/tech/aws.png", // URL de la imagen de AWS
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws, // Aquí se usa el logo de AWS
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next.js", // Cambiamos Three JS por Next.js
    icon: nextjs, // Aquí se usa el logo de Next.js
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

 

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "CodeCrafters",
    icon: web, // Asigna el ícono que prefieras para esta empresa
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Supporting the development of web applications using JavaScript, HTML, CSS, and React.",
      "Collaborating with senior developers to resolve issues and improve existing features.",
      "Assisting in implementing responsive designs for better mobile compatibility.",
      "Learning best practices in code reviews and applying feedback from senior team members.",
    ],
  },
  {
    title: "Junior Backend Developer",
    company_name: "Tech Innovators",
    icon: backend, // Puedes reemplazar este ícono por uno relevante
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Developed and maintained APIs using Node.js and Express.",
      "Worked closely with the frontend team to integrate backend services.",
      "Learned database management and performed CRUD operations with MongoDB.",
      "Participated in team meetings and contributed to project planning.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Freelance",
    icon: web, // Asigna otro ícono o reutiliza
    iconBg: "#383E56",
    date: "August 2022 - December 2022",
    points: [
      "Built personal projects to improve my skills in web development.",
      "Gained experience with version control using Git and GitHub.",
      "Implemented responsive web designs using Tailwind CSS.",
      "Created simple React applications to solidify my understanding of the framework.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
    "Después de que Rodrigo colaboró con nosotros, logramos mejorar la velocidad de carga de nuestro sitio en un 30%. ¡Fue un gran aporte para nuestro equipo!",
    name: "Sara Caseres",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Rodrigo demostró ser un desarrollador web comprometido y siempre dispuesto a aprender. Nos ayudó a optimizar varias funciones de nuestro sitio web.",
    name: "Cristian Lopez",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Es raro encontrar a alguien tan apasionado por mejorar sus habilidades como Rodrigo. Su actitud proactiva marcó una gran diferencia en nuestro equipo.",
    name: "Lisa Blanca",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Satanasrt",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Satanasrt",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Satanasrt",
  },
];

export { services, technologies, experiences, testimonials, projects };
