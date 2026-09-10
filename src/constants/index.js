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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    python,
    freelance,
    bluecross,
    travelAdvisor,
    candyCrush,
    brainwave,
    threejs,
    threejsWhite,
    supabase,
    fastapi,
    anthropic,
    aws,
    azure,
    openai,
    railway,
    northwesternMutual,
    chase,
    flstudio,
    lp,
    iPhone15,
    artistHome,
    stealthAI,
    noCallWebsites,
    equlizr
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
      category: "Backend",
    },
    {
      name: "Python",
      icon: python,
      category: "Backend / AI",
    },
    {
      name: "HTML 5",
      icon: html,
      category: "Frontend",
    },
    {
      name: "CSS 3",
      icon: css,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "Frontend / Backend",
    },
    {
      name: "TypeScript",
      icon: typescript,
      category: "Frontend / Backend",
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "Frontend",
    },
    {
      name: "Node JS",
      icon: nodejs,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      category: "Database",
    },
    {
      name: "Three JS",
      icon: threejsWhite,
      flatIcon: true,
      category: "3D UI",
    },
    {
      name: "Supabase",
      icon: supabase,
      flatIcon: true,
      category: "Backend platform",
      tone: "green",
    },
    {
      name: "AWS",
      icon: aws,
      flatIcon: true,
      category: "Cloud",
      tone: "orange",
    },
    {
      name: "Azure",
      icon: azure,
      flatIcon: true,
      category: "Cloud",
      tone: "blue",
    },
    {
      name: "Railway",
      icon: railway,
      flatIcon: true,
      category: "Deployment",
      tone: "violet",
    },
    {
      name: "FastAPI",
      icon: fastapi,
      flatIcon: true,
      category: "Python services",
      tone: "green",
    },
    {
      name: "OpenAI",
      icon: openai,
      flatIcon: true,
      category: "AI workflows",
      tone: "cyan",
    },
    {
      name: "Claude",
      icon: anthropic,
      flatIcon: true,
      category: "AI workflows",
      tone: "violet",
    },
    {
      name: "Git",
      icon: git,
      category: "Version control",
    },
    {
      name: "Figma",
      icon: figma,
      category: "Design",
    },
    {
      name: "Docker",
      icon: docker,
      category: "DevOps",
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
      title: "Produce & Audio Engineer",
      company_name: "BlackStar Entertainment",
      icon: flstudio,
      iconBg: "#383E56",
      date: "February 2023 - Present",
      points: [
        "Mix and master high quality music using FL Studio, Logic, and Ozone",
        "Produce beats and instrumentals using DAW, live instruments, samples, and Omnisphere",
        "Extensive experience editing vocal quality/fluxuation with Newtone and Autotune",
        "Produced songs for many clients and musicians"
      ],
    },
    {
      title: "Full Stack Software Engineer & Consultant ",
      company_name: "Zephania Consulting (Freelance)",
      icon: freelance,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [

        "Delivered custom web and backend applications for clients in mental health, pharma, music, and AI",
        "Built a full-stack artist CMS platform with Spotify integration, release scheduling, Stripe shop, and analytics dashboard",
        "Built and deployed containerized applications using Docker, with Kubernetes manifests for staging and production environments, ensuring consistent deployments across Linux-based cloud infrastructure",
        "Led project scoping, delivery timelines, and communication with non-technical stakeholders",
        "Resolved complex client-side and backend issues, improving product stability across domains"
      ],
    },
    {
      title: "Lead Full Stack Engineer",
      company_name: "LP (LOVEP Marketplace)",
      icon: lp,
      iconBg: "#E6DEDD",
      date: "October 2024 - Present",
      points: [
        "Built a two-sided photography and videography marketplace for clients and creative professionals",
        "Implemented role-based authentication, smart booking flows, photographer availability management, and onboarding workflows",
        "Integrated Supabase for auth, PostgreSQL data, and storage, with Stripe payment flows for bookings and dynamic pricing",
        "Developed portfolio management, reviews, ratings, personalization quiz flows, and production QA improvements",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "No Call Websites",
      description:
        "An AI-powered business automation platform that removes the slowest parts of small-business website delivery: discovery calls, content collection, scope confusion, checkout, and launch coordination.",
      role: "Founder / Full Stack AI Engineer",
      highlights: [
        "Built an automated intake system that turns business answers into structured project requirements, page strategy, and launch-ready content direction.",
        "Connected AI-assisted scoping, Stripe checkout, and operational handoff so customers can move from need to paid website package without a sales call.",
        "Designed workflow automation around real business pain points: missed follow-ups, unclear requirements, content bottlenecks, and slow agency onboarding.",
      ],
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "ai-automation",
          color: "pink-text-gradient",
        },
        {
          name: "workflow-systems",
          color: "orange-text-gradient",
        },
      ],
      image: noCallWebsites,
      tech: ["Next.js", "TypeScript", "Stripe", "OpenAI", "Automation", "Railway"],
      source_code_link: "https://github.com/zlema/no-call-websites",
      website_link: "https://www.nocallwebsites.com/",
    },
    {
      name: "Equlizr",
      description:
        "An AI resume optimization platform for tailoring career material to job descriptions while preserving the candidate's real experience.",
      role: "Full Stack Engineer / AI Product Builder",
      highlights: [
        "Designed prompt flows for ATS alignment, bullet rewriting, and job-match feedback.",
        "Built a focused web app experience around upload, analysis, revision, and export.",
        "Balanced AI assistance with guardrails against generic or inflated resume content.",
      ],
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "ai",
          color: "green-text-gradient",
        },
        {
          name: "ats-optimization",
          color: "pink-text-gradient",
        },
      ],
      image: equlizr,
      tech: ["Next.js", "TypeScript", "OpenAI", "Claude", "AI"],
      source_code_link: "https://github.com/zlema/equlizr",
      website_link: "https://www.equlizr.com/",
    },
    {
      name: "Artist CMS Platform",
      description:
        "A full-stack artist operating system for releases, fan engagement, analytics, and monetization.",
      role: "Full Stack Engineer",
      highlights: [
        "Integrated Spotify and Stripe APIs for artist distribution and commerce workflows.",
        "Built release scheduling, analytics views, and CMS-style content management.",
        "Shaped the UX around independent artists managing label-like operations.",
      ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "analytics",
          color: "pink-text-gradient",
        },
      ],
      image: artistHome,
      tech: ["React JS", "Supabase", "Stripe", "Node JS", "Analytics"],
      source_code_link: "https://github.com/zlema/Artist-CMS-Platform",
      website_link: "https://enterthecave.netlify.app/",
    },
    {
      name: "Stealth AI Project",
      description:
        "An AI audio studio that turns a brief conversation into a personalized high-quality session with transparent reasoning.",
      role: "AI Engineer / Audio Systems Designer",
      highlights: [
        "Built an STT to SSML to TTS pipeline for generated audio sessions.",
        "Used intent detection and structured prompts to personalize the output.",
        "Added quality checks for pacing, pauses, and user-fit explanations.",
      ],
      tags: [
        {
          name: "Intent-Aware Personalization",
          color: "blue-text-gradient",
        },
        {
          name: "LLM Orchestration & Guardrails",
          color: "green-text-gradient",
        },
        {
          name: "STT→SSML→TTS Pipeline",
          color: "pink-text-gradient",
        },
      ],
      image: stealthAI,
      tech: ["Python", "FastAPI", "OpenAI", "Claude", "AI", "Audio"],
      source_code_link: "https://github.com/zlema/AI-Stealth-Project/blob/main/README.md",
      website_link: "https://github.com/zlema/AI-Stealth-Project/blob/main/README.md",
    },
    {
      name: "Brainwave",
      description:
        "A polished AI chatbot interface exploring modern bento layouts, responsive composition, and product storytelling.",
      role: "Frontend Engineer",
      highlights: [
        "Implemented a responsive React and Tailwind interface with reusable sections.",
        "Focused on visual hierarchy, spacing, and product-led AI messaging.",
      ],
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
      tech: ["React JS", "Tailwind", "JavaScript", "AI"],
      source_code_link: "https://github.com/zlema/Brainwave",
      website_link: "https://brainwave-ai-zl.netlify.app/",
    },
    {
      name: "Apple iPhone 15 Pro",
      description:
        "A high-fidelity Apple-style product page exploring scroll animation, 3D model presentation, and analytics instrumentation.",
      role: "Frontend / 3D Engineer",
      highlights: [
        "Used React, GSAP, and Three.js for product-stage animation.",
        "Connected Sentry for tracing, click-through insight, and runtime visibility.",
      ],
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
      tech: ["React JS", "Three JS", "JavaScript", "GSAP"],
      source_code_link: "https://github.com/zlema/apple_website",
      website_link: "https://zlema-iphone-website.netlify.app/",
    },
    {
      name: "Travel Advisor",
      description:
        "A travel discovery app for searching nearby restaurants, hotels, and attractions with maps, ratings, and location-aware filtering.",
      role: "Frontend Engineer",
      highlights: [
        "Integrated Google Maps and travel data APIs into a searchable interface.",
        "Built filtering and location-based discovery flows with React and Material UI.",
      ],
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
      tech: ["React JS", "JavaScript", "Google Maps", "Material UI"],
      source_code_link: "https://github.com/zlema/Travel_Advisor",
      website_link: "https://travel-advisor-zlema.netlify.app/",
    },
    {
      name: "Candy Crush",
      description:
        "A browser-based match game implementation focused on interactive game logic and DOM-driven state updates.",
      role: "JavaScript Engineer",
      highlights: [
        "Implemented board state, matching behavior, scoring, and interactive tile movement.",
        "Used JavaScript, jQuery, and CSS to recreate core gameplay mechanics.",
      ],
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
      tech: ["JavaScript", "CSS 3", "HTML 5", "jQuery"],
      source_code_link: "https://github.com/zlema/Candy-Crush",
      website_link: "https://github.com/zlema/Candy-Crush",
    },
  ];
  
  export { services, technologies, experiences, projects };
