import React, { useState, useEffect } from "react";

const InfoMessage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAlertEnd, setIsAlertEnd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setIsAlertEnd(true);
    }
  };

  return isAlertEnd ? (
    <></>
  ) : (
    <div
      className={`absolute w-full items-center space-y-4 mt-14 z-10 ${
        isVisible ? "animate-fadein" : "animate-fadeout"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="mx-2 sm:mx-auto max-w-sm flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
        <div className="inline-flex items-center text-left leading-5 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          카드가 완성되었어요!
          <br /> 화면을 캡쳐해서 상대방에게 전달해보아요😊
        </div>
      </div>
    </div>
  );
};

export default InfoMessage;
