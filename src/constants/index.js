import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  hgh,
  tripguide,
  threejs,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "Self-Employed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
      "In the first few months of my internship, I dove into setting up development environments and getting hands-on with React and Node.js. I spent time understanding the project structure and familiarizing myself with the workflow, which was essential for my role.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-Employed",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - May 2024",
    points: [
      "In two months, I built a front-end web application from scratch using React,JavaScript,HTML and Tailwind CSS. I handled everything from design to coding and API integration, creating a smooth, responsive experience all on my own.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Evangadi-Tech",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Abe Garage",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present 20224",
    points: [
      "Abe Garage Management System: I’m currently building a comprehensive garage management system using React for the front-end and Node.js with Express for the back-end. The system will manage vehicle information, service records, and appointment scheduling, with MySQL handling data storage and transactions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is an exceptional student with top-notch problem-solving skills and a strong commitment to excellence.",
    name: "Rahel Belay",
    // designation: "self-employed",
    company: "freelancer",
    image: "../../haye.jpeg",
    // image: carrent,
  },
  {
    testimonial:
      "His analytical skills are impressive, and his dedication and hard work make him a truly remarkable individual.",
    name: "Surafel",
    // designation: "COO",
    company: "Student",
    image: "../../sura.jpg",
  },
  {
    testimonial:
      "His teamwork skills are exceptional, marked by his positivity, effective communication, and ability to achieve goals collaboratively.",
    name: "Abdulimejid",
    // designation: "CTO",
    company: "freelancer",
    image: "../../abdu.jpg",
  },
];

const projects = [
  {
    name: "Amazon-clone",
    description:
      "Web-based platform that allows users to search, book, and manage different material rentals from various providers, providing a convenient and efficient solution for delivery needs.",
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
    source_code_link: "https://amazon-fro.netlify.app/",
  },
  {
    name: "Apple",
    description:
      "A web application that enables users to search for any Apple-related information based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://appell.netlify.app/",
  },
  {
    name: "Evangadi-forum",
    description:
      "For any student, a platform for questions and answers for studying purposes.",
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
    source_code_link: "https://evangadi-jo.netlify.app/",
  },
  {
    name: "Netflix",
    description:
      "For any student, a platform for questions and answers for studying purposes.",
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
    image: hgh,
    source_code_link: "https://vatflix.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
