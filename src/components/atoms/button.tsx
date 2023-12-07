"use client";

export default function Button({ text, onClick }: any) {
  return (
    <button
      className="mt-3 min-h-[60px] text-2xl rounded-lg border w-full h-full p-2"
      onClick={onClick}
    >
      {text?.split("\n").map((line: any, key: any) => {
        return (
          <span className="" key={key}>
            {line}
            <br />
          </span>
        );
      })}
    </button>
  );
}
