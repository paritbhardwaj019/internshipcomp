import React from "react";
import {
  Bold,
  Italic,
  Doc,
  Image,
  Link,
  OrList,
  UnList,
  Underline,
} from "../../public/index";

interface Props {
  showEmoji: boolean;
  setShowEmoji: React.Dispatch<React.SetStateAction<boolean>>;
}

type IconType = {
  icon: string;
};

export default function EditorIcon({ showEmoji, setShowEmoji }: Props) {
  const toolbarArr: IconType[] = [
    {
      icon: Bold,
    },
    {
      icon: Italic,
    },
    {
      icon: Underline,
    },
    {
      icon: OrList,
    },
    {
      icon: UnList,
    },
    {
      icon: Link,
    },
    {
      icon: Image,
    },
    {
      icon: Doc,
    },
  ];

  const handleEmoji = () => {};
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-1">
        {toolbarArr.map((currElem: IconType, index: number) => {
          return (
            <div
              className="w-8.5 h-8.5 rounded-lg flex items-center justify-center hover:bg-black/10 cursor-pointer transition-all ease-in"
              key={index}
            >
              <img src={currElem.icon} alt="" className="h-[13.5px] w-auto" />
            </div>
          );
        })}
      </div>
      <div
        className="w-8.5 h-8.5 rounded-lg flex items-center justify-center hover:bg-black/10 cursor-pointer transition-all ease-in"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        <img
          src="https://joinnova.co/static/media/smile-icon.dd69bbf7.svg"
          alt="Emoji Icon"
          className="w-[18px] h-[18px]"
        />
      </div>
    </div>
  );
}
