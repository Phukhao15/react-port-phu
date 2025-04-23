import project1 from './assets/project/project1.png';
import project2 from './assets/project/project2.png';
import project3 from './assets/project/project3.png';

export const projects = [
  {
    title: "Drink-Menu",
    description: "เว็บไซต์แสดงรายละเอียดเกี่ยวกับเมนูเครื่องดื่ม",
    image: project1,
    demoLink: "https://drink-menu-app.vercel.app/",
    codeLink: "https://github.com/Phukhao15/drink-menu-app",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Maps"],
  },
  {
    title: "Todo App",
    description: "แอพจัดการงานแบบพื้นฐาน สร้างด้วย React + LocalStorage",
    image: project2,
    demoLink: "https://app-todo-list-flax.vercel.app",
    codeLink: "https://github.com/Phukhao15/app-todo-list",
    tags: ["React", "LocalStorage", "Custom Hooks"],
  },
  {
    title: "Model 3D",
    description: "เว็บไซต์สำหรับแสดงโมเดล 3 มิติและใช้งานในรูปแบบ AR",
    image: project3,
    demoLink: "https://shost.rmutp.ac.th/2568/cpecar/",
    codeLink: "https://github.com/Phukhao15/ProjectAR/",
    tags: ["HTML", "Model-Viewer", "MindAR.js", "Blender"],
  },
];
