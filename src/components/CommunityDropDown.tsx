import React, { useState } from "react";

interface Options {
  emoji: string;
  text: string;
}

interface Props {
  community: string;
  setCommunity: React.Dispatch<React.SetStateAction<string>>;
}

export default function CommunityDropDown({ setCommunity, community }: Props) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const optionsArr: Options[] = [
    {
      emoji: "🚀",
      text: "Startup Hub",
    },
    {
      emoji: "🌳",
      text: "Community Builders",
    },
    {
      emoji: "💱",
      text: "Crypto & Blockchain",
    },
    {
      emoji: "🤝",
      text: "HR & Recruiting",
    },
    {
      emoji: "🦋",
      text: "Creator Space",
    },
    {
      emoji: "📈",
      text: "Marketing & Sales",
    },
    {
      emoji: "🎨",
      text: "Design",
    },
    {
      emoji: "💸",
      text: "Venture Capital",
    },
    {
      emoji: "🦄",
      text: "Entrepreneurship",
    },
    {
      emoji: "💻",
      text: "Software Engineering",
    },
    {
      emoji: "📝",
      text: "General Advice",
    },
    {
      emoji: "🪜",
      text: "Ladder Community",
    },
  ];
  return (
    <>
      <div className="relative">
        <div
          className={`border  rounded-[100px]  py-1  px-5 flex flex-row font-graphik text-[#212121] font-medium items-center justify-between cursor-pointer transition duration-200 animate__btn hover:border-[#5866e3] hover:bg-[#ECEDFB] ${
            showDropDown
              ? "border-[#5866e3] bg-[#ECEDFB]"
              : "border-[#e0e0e0] bg-white"
          } `}
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <span
            className={`mb-[2px] select-none text-[#616161] hover:text-[#5866E2] ${
              showDropDown && "text-[#5866E2]"
            }`}
          >
            {community || "Select a community"}
          </span>
          <span className="inline-flex items-center justify-center align-middle ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              fill="none"
              viewBox="0 0 6 5"
              className="mt-[2px]"
            >
              <path fill="#212121" d="M6 .5L3 4.25 0 .5h6z"></path>
            </svg>
          </span>
        </div>
        {/* DropDown Items */}
        {showDropDown && (
          <div className="absolute py-2 bg-white shadow-black/20 shadow-lg overflow-hidden rounded-xl left-0 min-w-max select-none h-[240px] overflow-y-auto custom__scrolbar z-50">
            {optionsArr.map(({ emoji, text }) => {
              return (
                <button
                  className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-4 flex items-center py-2 space-x-2"
                  onClick={() => {
                    setCommunity(text);
                    setShowDropDown(false);
                  }}
                >
                  <span>{emoji}</span>
                  <span className="select-none">{text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
