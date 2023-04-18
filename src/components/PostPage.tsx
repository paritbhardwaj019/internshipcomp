import { useNavigate } from "react-router-dom";
import PostModal from "./PostModal";
import { useState } from "react";
import {
  Comment,
  ThreeDot,
  ClosePost,
  Pencil,
  DownArrow,
  EmojiSmile,
  Send,
} from "../../public";
import CategoryTag from "./CategoryTag";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import EmojiTag from "./EmojiTag";

type EmojiArr = {
  count?: number;
  emoji: string;
};

export default function PostPage() {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [userSelectDropDown, setUserSelectDropDown] = useState<boolean>(false);
  const [isEmoji, setIsEmoji] = useState<boolean>(false);

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

  const posts = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nobis reprehenderit quibusdam a qui praesentium, veniam commodi quos ducimus dignissimos aspernatur harum, modi dolorem sed, ullam optio eius maiores! Corrupti corporis optio aut placeat molestiae. Quae dignissimos quod deserunt qui aliquid illo corporis accusamus placeat pariatur quo labore natus id, dicta est laboriosam suscipit doloribus alias nobis amet dolorum eius et esse. Delectus voluptate praesentium magnam. Tempora, fugiat quasi. Unde quae impedit architecto sapiente. Eius, officiis tempora quaerat odit nisi ut maxime dolorem, id optio quam sed quas hic adipisci laudantium, reprehenderit dolor ipsam sit inventore praesentium ea animi neque aliquid? Illo expedita incidunt quia, dicta excepturi nam eum distinctio aperiam vel libero. Suscipit nesciunt placeat eaque aliquam porro animi cumque similique fuga tenetur, mollitia quia nulla, consequatur ipsa provident debitis dolores! Rerum eligendi hic consequuntur dicta officiis fugiat ipsa velit possimus, consectetur quis modi quia animi veritatis provident esse.",
    },
  ];

  return (
    <div className="max-w-[816px] w-full">
      <div
        className="m-4 flex items-center select-none space-x-[2px] cursor-pointer"
        onClick={() => navigate("/posts")}
      >
        <img src={ClosePost} alt="Close Post" />
        <span className="text-black font-graphik leading-[1.5rem] mb-[2px]">
          Close
        </span>
      </div>
      <div className="py-6 px-8 text-sm text-[#212121] text-left font-graphik bg-white rounded-xl m-4 transition duration-100 ease-out">
        <div className="flex justify-between items-center mb-[0.7em] relative">
          <div className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/profilePictures%2Fmq5V1knsedT9AYf7Ekh7rzmIvTg1-1672004335536?alt=media&token=8952f1e1-d24c-4e8a-b75a-b7d2f392d6f8"
              alt="User Image"
              className="w-10 h-10 rounded-[20px] mr-4"
            />
            <div>
              <p className="font-medium mr-1 text-sm">
                Aneil Johal <span className="font-medium mr-1 text-sm">in</span>
                <span className="font-medium mr-1 text-sm">✨</span>
                <span className="font-medium mr-1 text-sm">Nova Community</span>
              </p>
              <p className="text-sm">
                Product at Visa
                <span> • </span>
                6h
                <span> • </span>
                108 views
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
        <CategoryTag title="general" />
        <div className="text-[16px] leading-[1.5rem]">{posts[0].content}</div>
        <div className="my-8 flex justify-between items-center">
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
              2
            </span>
          </div>
        </div>
        <div className="flex relative items-center">
          <button
            className="flex border border-[#e0e0e0] h-11 rounded-[100px] p-1.5 items-center hover:bg-gray-100 transition duration-200 ease-out mr-3 select-none animate__btn pr-4"
            onClick={() => setUserSelectDropDown(true)}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
              alt="Default User Image"
              className="w-8 h-8 rounded-2xl mr-1"
            />
            <img src={DownArrow} alt="Drop Down Image" className="" />
          </button>

          <div
            className={`flex justify-between items-center bg-[#f4f4f4] h-11 w-full rounded-[24px] py-[6px] px-2 pl-4 transition duration-75`}
          >
            <input
              type="text"
              className="outline-none text-base bg-transparent w-full text-[#212121]"
              placeholder="Write a comment..."
            />
          </div>

          {/* DropDown Items */}
          {userSelectDropDown && (
            <div className="absolute py-2 bg-white shadow-black/20 shadow-lg overflow-hidden rounded-xl left-0 w-full select-none z-50 max-w-[275px] top-12">
              <button
                className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-2 flex items-center py-2"
                onClick={() => setUserSelectDropDown(false)}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
                  alt="Default User Image"
                  className="w-8 h-8 rounded-2xl mr-2"
                />
                <span className="select-none text-base">
                  Innovative Changemaker
                </span>
              </button>
              <button
                className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-2 flex items-center py-2 z-20 justify-between select-none"
                onClick={() => setUserSelectDropDown(false)}
              >
                <div className="flex items-center justify-between">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/anonAvatars%2Fnova-anon-1.png?alt=media&token=c28890d0-1731-43a9-9dc9-5d582aa0b14b"
                    alt="Default User Image"
                    className="w-8 h-8 rounded-2xl mr-2"
                  />
                  <span className="select-none text-base">
                    Enthused Cricket
                  </span>
                </div>
                <img src={Pencil} alt="Pencil SVGs" className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
