// // src/context/ThemeContext.jsx
// import React, { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // เริ่มต้นเป็น null เพื่อป้องกันการกระพริบขณะโหลด
//   const [darkMode, setDarkMode] = useState(null);

//   // ตรวจสอบ dark mode จาก localStorage เมื่อเริ่มโหลดหน้า
//   useEffect(() => {
//     // ตรวจสอบการตั้งค่าจาก localStorage
//     const savedMode = localStorage.getItem("darkMode");
    
//     // ตรวจสอบการตั้งค่าของระบบ
//     const systemPrefersDark = window.matchMedia && 
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     // ใช้ค่าจาก localStorage ถ้ามี หรือใช้ค่าจากระบบถ้าไม่มี
//     if (savedMode !== null) {
//       setDarkMode(savedMode === "true");
//     } else {
//       setDarkMode(systemPrefersDark);
//     }
//   }, []);

//   // Toggle dark mode และบันทึกค่าใน localStorage
//   useEffect(() => {
//     // ป้องกันการทำงานเมื่อ darkMode เป็น null (ตอนเริ่มต้น)
//     if (darkMode === null) return;

//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("darkMode", "true");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("darkMode", "false");
//     }
    
//     // เพิ่ม console.log เพื่อดีบัก
//     console.log("Dark mode:", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

//   // ส่งค่า isInitialized เพื่อตรวจสอบว่าโหลดการตั้งค่าเสร็จสิ้นหรือยัง
//   return (
//     <ThemeContext.Provider value={{ 
//       darkMode, 
//       toggleDarkMode,
//       isInitialized: darkMode !== null 
//     }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };