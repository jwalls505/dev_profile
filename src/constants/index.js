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
  te_logo
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
      name: "Yinzer Tours",
      description:
        "Developed a web application that allows visitors to view beautiful Pittsburgh landmarks and build an itinerary with mapped routes to each one. Built with Vue.js, Java and PostgresSQL within an agile development cycle.",
      tags: [
        {
          name: "vue.js",
          color: "green-text-gradient",
        },
        {
          name: "postgresSQL",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "orange-text-gradient",
        },
      ],
      image: backgroundpitt,
      source_code_link:
        "https://github.com/jwalls505/city-tours-final-capstone",
    },
    {
      name: "Koz",
      description:
        "Website built for my band, utilizing the Svelte front-end framework. Contact form linked through google form functionality. Deployed through Vercel hosting.",
      tags: [
        {
          name: "svelte",
          color: "blue-text-gradient",
        },
        {
          name: "google forms",
          color: "green-text-gradient",
        },
        {
          name: "css",
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