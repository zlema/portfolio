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
    fl,
    iPhone15,
    hyperlink
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
      title: "Full stack Software Engineer",
      company_name: "JP Morgan Chase & Co.",
      icon: chase,
      iconBg: "#383E56",
      date: "August 2022 - January 2024",
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
      website_link: "https://travel-advisor-zlema.netlify.app/",
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
      website_link: "https://github.com/zlema/Candy-Crush",
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
      website_link: "https://brainwave-ai-zl.netlify.app/",
    },
    {
      name: "Apple iPhone 15 Pro",
      description:
        "A comprehensive replica of the Apple iPhone 15 Pro website, delving into modern aesthetci design, visual animation, and 3D modeling. Accompanied with Sentry, for error tracing, click through rates, and many other user metrics useful for business needs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GSAP animation",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: iPhone15,
      source_code_link: "https://github.com/zlema/apple_website",
      website_link: "https://zlema-iphone-website.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };