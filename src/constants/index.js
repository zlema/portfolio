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
    java,
    python,
    meta,
    starbucks,
    tesla,
    bluecross,
    shopify,
    carrent,
    jobit,
    travelAdvisor,
    candyCrush,
    brainwave,
    tripguide,
    threejs,
    northwesternMutual,
    expedia, 
    chase,
    flstudio,
    fl
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Audio Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
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
    }
  ];

  const experiences = [
    {
      title: "Big Data Engineer Intern",
      company_name: "Blue Cross Blue Sheild",
      icon: bluecross,
      iconBg: "#383E56",
      date: "June 2020 - August 2020",
      points: [
        "Created API to mask and track transfers of sensitive data through HBase databases using MuleSoft",
        "Developed software to extract, manipulate, store, and send large amounts of unsorted data using PySpark in Hadoop",
        "Used AI and Machine Learning techniques to optimize performance of data masking software resulting in a F-score: 0.82",
        "Improved potential research operations by automating the data masking process which increased the efficiency by over 50%",
        "Presented final product to CIO and other high-level executives, which resulted in funding for the full-scale project",
      ],
    },
    {
      title: "Front End Engineer Intern",
      company_name: "Northwestern Mutual",
      icon: northwesternMutual,
      iconBg: "#E6DEDD",
      date: "March 2021 - July 2021",
      points: [
        "Developed software solutions using Typescript, Node.js, and React",
        "Aided in developing main components of the UI for new applications",
        "Implemented responsive design and ensuring cross-browser compatibility",
        "Wrote automated tests via TDD to foster effective, reusable, and flexible code",
      ],
    },
     {
      title: "Full Stack Software Engineer",
      company_name: "Expedia",
      icon: expedia,
      iconBg: "#E6DEDD",
      date: "July 2021 - Feb 2022",
      points: [
        "Developed frontend/backend software for the Home Page team using Java, Javascript, Node.js, and React",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Directed initiative to repurpose legacy code written in Handlebars JS to React JS",
        "Tested multiple website content variations to determine optimum user experience and increase customer engagement using Adobe Omniture"
      ],
    },
    {
      title: "Full stack Software Engineer",
      company_name: "JP Morgan Chase & Co.",
      icon: chase,
      iconBg: "#383E56",
      date: "August 2022 - January 2023",
      points: [
        "Created a web application using Java & Javascript/React to manage and track all pools and apps within our domain, including the capability to troubleshoot, start, and restage any application",
        "Developed solutions on frontend/backend across different teams/domains using Java, Node.js, Oracle SQL, Javascript, & React",
        "Extensive experience with unit testing/integration testing for legacy code & greenfield projects",
        "Participated in code reviews and provided constructive feedback to other developers"
      ],
    },
    {
      title: "Audio Engineer",
      company_name: "BlackStar Entertainment",
      icon: flstudio,
      iconBg: "#383E56",
      date: "February 2023 - Present",
      points: [
        "Mix and master high quality music unsing FL Studio, Logic, and Ozone",
        "Produce beats and instrumentals using DAW, live instruments, samples, and Omnisphere",
        "Extensive experience editing vocal quality/fluxuation with Newtone and Autotune",
        "Produced songs for many clients and musicians"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Travel Advisor",
      description:
        "A comprehensive web applicaiton that allows users to search, book, and see ratings/reviews for restaurants, hotels, and attractions anywhere in the world, providing a convenient and effecient solution for travel needs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
        {
          name: "google-maps-api",
          color: "pink-text-gradient",
        },
      ],
      image: travelAdvisor,
      source_code_link: "https://github.com/zlema/Travel_Advisor",
    },
    {
      name: "Candy Crush",
      description:
        "Usable and effective web application for the popular game Candy Crush",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: candyCrush,
      source_code_link: "https://github.com/zlema/Candy-Crush",
    },
    {
      name: "Brainwave",
      description:
        "Modern Bento Box UI design for AI chatbot application",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ai",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: brainwave,
      source_code_link: "https://github.com/zlema/Brainwave",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };