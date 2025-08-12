import {
  backend,
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
  pnc,
  threejs,
  test,
  agile,
  backgroundpitt,
  koz_logo,
  te_logo,
  vintagevoice
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "QE | Test Automation",
      icon: test
    },
    {
      title: "Agile",
      icon: agile
    }
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
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "PNC, Financial Services",
      icon: pnc,
      iconBg: "#383E56",
      date: "Jan 2020 - Current",
      points: [
        "Developing and maintaining test scripts utilizing selenium, cucumber and karate",
        "Collaborating with cross-functional teams including designers, product managers, developers and other testers to create high-quality products.",
      ],
    }
  ];
  
  
  
  const projects = [
    {
      name: "The Vintage Voice",
      description:
        "Website built for voice over and sound engineer, utilizing Svelte front-end framework. Deployed through Vercel hosting.",
      tags: [
        {
          name: "sveltekit",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      link: "https://vintage-voice.com",
      image: vintagevoice,
      source_code_link: "https://github.com/jwalls505/vintage-voice",
    },
    {
      name: "Koz",
      description:
        "Website built for my band, utilizing the Svelte front-end framework. Contact form linked through google form functionality. Deployed through Vercel hosting.",
      tags: [
        {
          name: "sveltekit",
          color: "blue-text-gradient",
        },
        {
          name: "Brevo email service",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      link: "https://www.musicofkoz.com",
      image: koz_logo,
      source_code_link: "https://github.com/jwalls505/koz-music",
    },
    {
      name: "TEnmo",
      description:
        "Developed command line person to person money transfer program in Java, utilizing RESTful methods and MVC patterns.",
      tags: [
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "command-line",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "pink-text-gradient",
        },
      ],
      image: te_logo,
      source_code_link: "https://github.com/jwalls505/capstoneproject2-TEnmo",
    },
  ];
  
  export { services, technologies, experiences, projects };