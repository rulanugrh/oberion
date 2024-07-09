export const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  
export const projects = [
{
    id: 1,
    title: "Ganymede",
    des: "In this project I am a Back End Developer. In this project I created an API using the Golang programming language, and I also deployed the application using Docker, managed DNS with Cloudflare, and used Nginx as a gateway to fire to Docker",
    img: "/p1.svg",
    iconLists: ["/go.svg", "/cloudflare.svg", "/docker.svg"],
    link: "https://github.com/rulanugrh/ganymede",
},
{
    id: 2,
    title: "Cressida",
    des: "Cressida about a project, where this project create API service transporter. In this project has implementation opentelemetry for tracing endpoint / function and collect some metric ( gauge, summary, histogram ) per endpoint.",
    img: "/p2.svg",
    iconLists: ["/go.svg", "/grafana.svg", "/jaeger.svg", "/prometheus.svg", "/opentelemetry.svg", "/docker.svg"],
    link: "https://github.com/rulanugrh/cressida",
},
{
    id: 3,
    title: "Chenfetch",
    des: "This is a screenfetch that I made myself, yes I made it with Golang, because I only know Golang :u. And i will make some theme :u.",
    img: "/p3.jpg",
    iconLists: ["/go.svg"],
    link: "https://github.com/rulanugrh/chenfetch",
},
{
    id: 4,
    title: "Arche",
    des: "Tools for calculate IPv4 in CLI build from Golang.",
    img: "/p4.jpg",
    iconLists: ["/go.svg"],
    link: "https://github.com/rulanugrh/arche",
},
];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/rulanugrh"
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://twitter.com/rulanugrh"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/rulanugrh/"
    },
];