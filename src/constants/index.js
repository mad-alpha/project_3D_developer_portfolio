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
  threejs,
  github,
  spotify,
  leetworld,
  aquaponics,
  iitg,
  igdtuw,
  cisco,
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
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Mobile App Developer - Intern",
    company_name: "Kisaan Bazar, IIT Guwahati",
    icon: iitg,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "Spearheaded the development of an Android application for a Direct-to-Consumer (D2C) platform.",
      "Utilized Java to craft a robust backend for seamless functionality.",
      "Designed the user interface with XML, ensuring an intuitive layout and enhanced user experience.",
      "Established a direct connection between vegetable and fruit sellers, facilitating a streamlined supply chain from farm to consumer.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "IGDTUW",
    icon: igdtuw,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Developed an Admission Prediction Model using the K-Nearest Neighbours (KNN) algorithm for evaluating student admission probabilities to a university.",
      "Demonstrated practical application of machine learning fundamentals throughout the model development.",
      "Applied the KNN algorithm to effectively analyze and predict admission chances, showcasing proficiency in machine learning techniques.",
      "Gained insights into the basics of machine learning while creating and refining the predictive model.",
    ],
  },
  {
    title: "Hactoberfest Contributor",
    company_name: "Hacktoberfest",
    icon: github,
    iconBg: "#383E56",
    date: "October 2022",
    points: [
      "Merged 4 Pull Requests during the Hacktoberfest 2022 event.",
      "Recognized and rewarded with the Holopin batch for contributions.",
    ],
  },
  {
    title: "GSSOC Contributor",
    company_name: "GSSOC",
    icon: github,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Actively participated in a 3-month open-source coding program.",
      "Dedicated efforts towards contributing to and enhancing various open-source projects.",
    ],
  },
  {
    title: "CWICS India BOOST 3.0 Training Program",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Successfully secured a spot as a participant in the prestigious CWiCS India BOOST program.",
      "Engaged in a rigorous 45-day cybersecurity training program designed to deepen understanding across diverse security-related subjects.",
      "Actively participated in hands-on exercises, gaining practical insights into real-world cybersecurity challenges.",
      "Demonstrated commitment and dedication to expanding knowledge in the dynamic field of cybersecurity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:   
      "AI captivates me with its endless possibilities. From exploring machine learning algorithms to experimenting with my own AI projects, I'm driven by a curiosity to contribute to this evolving landscape. Whether it's developing innovative solutions or staying updated on breakthroughs, my passion for AI fuels a continuous journey of learning.",
  },
  {
    testimonial:
      "Web development is both my canvas and playground. Crafting visually appealing digital experiences, I merge creativity with functionality. From front-end frameworks like React to the intricacies of back-end development, I stay devoted to reflecting the latest standards and providing users with intuitive online interactions.",
  },
  {
    testimonial:
      "In content creation, I discover the art of storytelling. Whether through writing, design, or multimedia production, I'm drawn to the power of creating compelling narratives. From informative blog posts to visually appealing graphics, I leverage creativity to captivate audiences and foster engagement. Content creation allows me to express ideas and connect with diverse audiences effectively.",
  },
];

const projects = [
  {
    name: "LeetWorld",
    description:
      "A full stack web application like LeetCode, featuring interactive coding challenges, real-time code evaluation, and user authentication, using NextJS, TypeScript, and TailwindCSS for a modern and responsive UI, and integrating Firebase for seamless progress tracking and challenge interaction.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: leetworld,
    source_code_link: "https://github.com/mad-alpha/LeetWorld",
  },
  {
    name: "Spotify Clone",
    description:
      "Designed and implemented the front-end of a music player application, like Spotify, featuring an inbuilt player with play/pause, repeat, and volume control functionalities, crafted with HTML, CSS, and Vanilla JavaScript. Implemented responsive design for seamless user experience across devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/mad-alpha/Spotify-Clone",
  },
  {
    name: "Aquaponics",
    description:
      "Developed an Android application for a D2C platform, utilizing Java for the backend and XML for layout, facilitating a direct connection between farmers and consumers, enabling seamless transactions and ensuring the delivery of fresh vegetables and fruits from the farm to the consumer's doorstep.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: aquaponics,
    source_code_link: "https://github.com/mad-alpha/Aquaponics",
  },
];

export { services, technologies, experiences, testimonials, projects };
