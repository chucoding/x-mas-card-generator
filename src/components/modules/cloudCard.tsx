"use client";
export default function CloudCard({ text, style, runAnimate = false }: any) {
  return (
    <div
      className={`bg-[url('/img/cloud.png')] bg-cover h-[280px] w-[350px] relative right-[40px] bottom-[25px] ${
        runAnimate ? "animate-fadein" : ""
      }`}
      key={text}
    >
      <div className="text-center absolute w-[250px] top-[25px] left-[70px]">
        <div className="flex justify-center items-center h-[250px] font-medium text-[30px] leading-[30px]">
          <p style={style}>
            {text?.split("\n").map((line: any, key: any) => {
              return (
                <span key={key}>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
