import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {}

const options = [
  "이모티콘, 애교 가득 낭만 고양이",
  "장난꾸러기",
  "인자하고 따뜻한 산타할아버지",
];

const Select: React.FC<SelectProps> = () => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen(!open);
  };

  const setOptionHandler = (val: string) => {
    setOption(val);
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
        <span>
          {option === "" ? "카드를 만들어줄 도우미를 선택하세요 🙂" : option}
        </span>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChevronDown} rotation={open ? 180 : 0} />
        </div>
      </button>

      {open && (
        <ul className="z-2 absolute mt-1 w-full md:w-[30rem] rounded bg-gray-50 ring-1 ring-gray-300">
          {options.map((item) => {
            return (
              <li
                className="cursor-pointer select-none p-2 hover:bg-gray-200"
                onClick={() => setOptionHandler(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
