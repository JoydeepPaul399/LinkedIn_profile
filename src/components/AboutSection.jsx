import React, { useRef, useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const AboutSection = ({ text }) => {
  const textRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Measure after render
    const timeout = setTimeout(() => {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }, 0);

    return () => clearTimeout(timeout);
  }, [text]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section className="w-full mx-4 max-w-full box-border pr-6">
      {/* Header */}
      <div className="flex justify-between items-center py-2">
        <h1 className="font-semibold text-lg text-[#191919] dark:text-white">
          About
        </h1>
        <button
          type="button"
          aria-label="Edit about section"
          className="text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer focus:outline-none"
        >
          <MdOutlineModeEdit size={28} />
        </button>
      </div>

      {/* Text Content */}
      <div
        ref={textRef}
        className={`overflow-hidden pr-2 whitespace-pre-wrap transition-all duration-100 text-gray-800 dark:text-gray-300 ${
          isExpanded ? "max-h-full" : "max-h-[100px]"
        }`}
      >
        {text}
      </div>

      {/* Toggle Button */}
      {isOverflowing && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline focus:outline-none"
          type="button"
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </section>
  );
};

export default AboutSection;
