import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "Mahdi Yousef Nidal",
    post: "Front-end Developer",
    desc: "Computer Engineering student with a passion for creating beautiful, functional web interfaces. I specialize in React.js and modern frontend development. Currently seeking my first professional opportunity to apply my skills and grow as a developer.",
  },
]
export const about = [
  {
    desc: "I'm a dedicated Computer Engineering student with a strong foundation in frontend development. My journey in tech began with a curiosity about how websites work, which evolved into a passion for building responsive, user-friendly interfaces. I believe in writing clean, maintainable code and continuously expanding my skill set.",
    desc1: "When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or volunteering in my community. I'm excited to bring my technical skills and fresh perspective to a professional team environment.",
    cover: "./images/yousef.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Vue & NuxtJS",
    desc: "Building highly performant, progressive web applications using Vue.js and its powerful framework, NuxtJS.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "React & Next.js",
    desc: "Creating scalable, SEO-friendly React applications utilizing Next.js for server-side rendering and static site generation.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "State Management",
    desc: "Expertise in managing complex application state using modern tools like Pinia (for Vue) and Redux Toolkit (for React).",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Figma & UI/UX",
    desc: "Professional UI/UX designs created with Figma, including wireframes and responsive modern prototypes.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Clean Architecture",
    desc: "Well-structured, maintainable code following best practices, modern development standards, and modular design.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Technical Support",
    desc: "Dedicated assistance, optimization, and problem-solving for complex web application requirements.",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/humanStructure.jpg",
    name: "Human Structure interface for kids",
    category: "React",
    title: "React app",
    link:'https://human-structure.vercel.app/'
  },
  {
    id: 2,
    cover: "../images/port/Sentra.png",
    name: "Beautiful template Sentra",
    category: "Css",
    title: "Html css project",
    link:'https://beautiful-template-sentra.vercel.app/'
  },
  {
    id: 3,
    cover: "../images/port/leend.png",
    name: "Leend project",
    category: "React",
    title: "React app",
    link:'https://just-a-project-beta.vercel.app/'
  },
  {
    id: 4,
    cover: "../images/port/atomnaia.png",
    name: "Atomnaia Station",
    category: "NextJs",
    title: "Next js app",
    link:'https://kizu-7nsx.vercel.app/'
  },
  {
    id: 5,
    cover: "../images/port/logshoes.png",
    name: "Shoes website",
    category: "Css",
    title: "Html css app",
    link:'https://shoes-website-one-rosy.vercel.app/'
  },
  
]
export const testimonials = [
  {
    id: 1,
    text: "Mahdi demonstrated exceptional React skills during our college project collaboration. His clean code approach and attention to UI details resulted in a highly responsive student portal that exceeded our expectations. He's a quick learner and team player.",
    image: "./images/testimonials/team-1.png",
    name: "Dr. Alex",
    post: "Computer Science Professor",
  },
  {
    id: 2,
    text: "Working with Mahdi on the volunteer management system was a pleasure. His Figma designs were pixel-perfect and he implemented them flawlessly using React and Material UI. He consistently met deadlines and proposed innovative solutions to technical challenges.",
    image: "./images/testimonials/team-2.png",
    name: "Mohammed Al-Farsi",
    post: "NGO Project Coordinator",
  },
  {
    id: 3,
    text: "As a fellow student in our coding bootcamp, Mahdi stood out for his problem-solving skills. His ability to break down complex JavaScript concepts helped our entire study group. His portfolio projects showcase impressive attention to responsive design principles.",
    image: "./images/testimonials/team-3.png",
    name: "Elena Petrov",
    post: "Full Stack Developer",
  },
  
]
export const blog = [
  {
    id: 1,
    title: "Next.js vs NuxtJS: Which to Choose?",
    date: "Dec 10, 2025",
    author: "Yousef Nidal",
    desc: "A comprehensive comparison between the two leading SSR frameworks for React and Vue, and when to use each for your projects.",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Modern State Management: Pinia",
    date: "Jan 15, 2026",
    author: "Yousef Nidal",
    desc: "Exploring how Pinia has replaced Vuex as the standard state management tool for Vue 3, offering type safety and simplicity.",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Scaling React with Redux Toolkit",
    date: "Mar 05, 2026",
    author: "Yousef Nidal",
    desc: "How Redux Toolkit simplifies complex state logic in large-scale Next.js applications while eliminating boilerplate code.",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Navapolatsk, Vitsebsk Region, Belarus",
    
  },
  {
    icon: <PhoneIphone />,
    text1: "+375259123937",
    
  },
  {
    icon: <EmailOutlined />,
    text1: "ameryousef2007@gmail.com",
    text2: "kiritosmahdi2007@gmail.com"
    
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]