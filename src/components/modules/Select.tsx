import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {}

const Select: React.FC<SelectProps> = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen(!open);
  };

  const setLanguageHandler = (val: string) => {
    setLanguage(val);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full md:w-[30rem]">
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ${
          open ? "ring-blue-600" : ""
        } md:w-full`}
      >
        <span>{language === "" ? "Choose language" : language}</span>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChevronDown} rotation={open ? 180 : 0} />
        </div>
      </button>

      {open && (
        <ul className="z-2 absolute mt-1 w-full md:w-[30rem] rounded bg-gray-50 ring-1 ring-gray-300">
          <li
            className="cursor-pointer select-none p-2 hover:bg-gray-200"
            onClick={() => setLanguageHandler("Python")}
          >
            Python
          </li>
          <li
            className="cursor-pointer select-none p-2 hover:bg-gray-200"
            onClick={() => setLanguageHandler("PHP")}
          >
            PHP
          </li>
          <li
            className="cursor-pointer select-none p-2 hover:bg-gray-200"
            onClick={() => setLanguageHandler("C#")}
          >
            C#
          </li>
        </ul>
      )}
    </div>
  );
};

export default Select;
