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
    title: "Figma Design",
    desc: "Professional UI/UX designs created with Figma, including wireframes, prototypes, and design systems for web and mobile applications",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Well-structured, maintainable code following best practices and modern development standards",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Websites that look and function perfectly on all devices, from mobile to desktop",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI",
    desc: "Implementation of Material Design principles for cohesive, intuitive interfaces",
  },
  {
    id: 5,
    icon: <Code />,
    title: "React Development",
    desc: "Building dynamic single-page applications using React.js and related ecosystem",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Technical Support",
    desc: "Dedicated assistance and problem-solving for your web development needs",
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
    name: "Dr. Sarah Johnson",
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
    title: "Mastering React Hooks",
    date: "Jun 27, 2022",
    author: "Mahdi Nidal",
    desc: "Exploring how React Hooks have revolutionized state management in functional components and best practices for implementation",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "CSS Best Practices in 2022",
    date: "Jun 27, 2022",
    author: "Mahdi Nidal",
    desc: "Modern CSS techniques including Flexbox, Grid, and CSS-in-JS solutions for more efficient styling",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Building Accessible Web Apps",
    date: "Jun 27, 2022",
    author: "Mahdi Nidal",
    desc: "Essential accessibility considerations every frontend developer should implement in their projects",
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