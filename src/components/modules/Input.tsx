import React from "react";

export default function Input({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <div className="px-10 pt-5">
      <input
        id="to"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="To. 받는 사람 이름 또는 별명"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
