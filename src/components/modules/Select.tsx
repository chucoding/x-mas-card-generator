import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const options = [
  "사랑스럽고 애교많은 강아지 🐶",
  "재미있는 장난꾸러기 친구 😛",
  "자상하고 다정한 산타할아버지 🎅🏻",
];

const Select = ({
  value,
  setValue,
}: {
  value: String;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen(!open);
  };

  const setOptionHandler = (val: string) => {
    setValue(val);
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
    <div ref={containerRef} className="relative w-full px-10 pt-10">
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ${
          open ? "ring-blue-600" : ""
        } md:w-full`}
      >
        <span>
          {value === "" ? "카드를 만들어줄 도우미를 선택하세요 🙂" : value}
        </span>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faChevronDown}
            rotation={open ? 180 : undefined}
          />
        </div>
      </button>

      {open && (
        <ul className="z-2 relative mt-1 w-full p-1 rounded bg-gray-50 ring-1 ring-gray-300">
          {options.map((item) => {
            return (
              <li
                key={item}
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
