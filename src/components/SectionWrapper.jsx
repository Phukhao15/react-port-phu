// src/components/SectionWrapper.jsx
import React from "react";

/**
 * SectionWrapper: Wraps each section with consistent styling and supports dark mode backgrounds.
 * Props:
 * - id: HTML id for anchor linking
 * - children: section content
 * - bgClass: Tailwind classes for background colors (supports dark mode)
 */
const SectionWrapper = ({ id, children, bgClass = "bg-gray-100 dark:bg-gray-900" }) => {
  return (
    <section
      id={id}
      className={`${bgClass} py-20 px-4 flex justify-center items-center transition-colors duration-300`}
    >
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
