import { useState } from "react";
import { Comment, ThreeDot } from "../../public";
import EmojiTag from "./EmojiTag";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import PostModal from "./PostModal";
import { useNavigate } from "react-router-dom";

interface Props {
  community: string;
  title: string;
  description: string;
}

type EmojiArr = {
  count?: number;
  emoji: string;
};

export default function Post({ community, title, description }: Props) {
  const navigate = useNavigate();

  const [isEmoji, setIsEmoji] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const emojiArr: EmojiArr[] = [
    {
      count: 1,
      emoji: "👍",
    },
    {
      count: 2,
      emoji: "😀",
    },
    {
      count: 1,
      emoji: "😍",
    },
  ];

  return (
    <>
      <div className="py-6 px-8 text-sm text-[#212121] text-left font-graphik bg-white max-w-[816px] rounded-xl cursor-pointer transition duration-100 ease-out">
        <div className="flex justify-between items-center mb-[0.7em] relative">
          <div
            className="flex items-center"
            onClick={() => navigate(`/${"1"}`)}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/profilePictures%2Fmq5V1knsedT9AYf7Ekh7rzmIvTg1-1672004335536?alt=media&token=8952f1e1-d24c-4e8a-b75a-b7d2f392d6f8"
              alt="User Image"
              className="w-8 h-8 rounded-2xl mr-4"
            />
            <div onClick={() => navigate(`/${"1"}`)}>
              <p className="font-medium mr-1 text-xs">
                Aneil Johal <span className="font-medium mr-1 text-xs">in</span>
                <span className="font-medium mr-1 text-xs">✨</span>
                <span className="font-medium mr-1 text-xs">{community}</span>
              </p>
              <p className="text-[12px]">
                Product at Visa
                <span> • </span>
                6h
              </p>
            </div>
          </div>
          <img
            src={ThreeDot}
            alt="Three Dot"
            className="rotate-90 relative"
            onClick={() => {
              setShowDropDown(true);
            }}
          />
          {showDropDown && <PostModal setShowDropDown={setShowDropDown} />}
        </div>
        <h1
          className="text-base font-semibold leading-6 mb-2"
          onClick={() => navigate(`/${"1"}`)}
        >
          {title}
        </h1>
        <div
          className="fade__effect relative text-sm max-h-[250px] overflow-hidden"
          onClick={() => navigate(`/${"1"}`)}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-3 relative">
            {emojiArr.map(({ count, emoji }: EmojiArr, index: number) => {
              return <EmojiTag count={count} emoji={emoji} key={index} />;
            })}
            <button
              className="hover:border-[1px flex w-[54px] items-center justify-center space-x-1 rounded-[.9375rem] bg-[#F4F4F4] px-[10px] py-[4px] text-center text-[.75rem] transition ease-in-out"
              onClick={() => setIsEmoji(!isEmoji)}
            >
              <img
                src="https://joinnova.co/static/media/smile-icon.dd69bbf7.svg"
                alt=""
                className="h-[16px] w-[16px]"
              />
            </button>
            {isEmoji && (
              <div className="absolute top-8 -left-3 z-10">
                <Picker
                  onEmojiSelect={() => setIsEmoji(false)}
                  data={data}
                  set="native"
                  previewPosition="none"
                  icons="solid"
                />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <img src={Comment} alt="Comment SVG" />
            <span className="text-[#616161] leading-[1.5] font-medium text-base">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
