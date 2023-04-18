import React from "react";

interface Props {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PostModal({ setShowDropDown }: Props) {
  const dropDownArr: string[] = [
    "Show anonymous",
    "Follow post",
    "Bookmark",
    "Send post",
    "Share post",
    "Report",
  ];
  return (
    <div className="absolute py-2 bg-white shadow-black/20 shadow-lg overflow-hidden rounded-xl w-full select-none z-50 max-w-[166px] -right-36 top-8">
      {dropDownArr.map((currElem, index) => {
        return (
          <button
            className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-4 py-2 z-20 select-none text-left text-base"
            onClick={() => setShowDropDown(false)}
            key={index}
          >
            <span className="select-none">{currElem}</span>
          </button>
        );
      })}
    </div>
  );
}
