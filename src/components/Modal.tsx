import { Dialog } from "@headlessui/react";
import { CloseSVG } from "../../public/index";
import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Dropdown from "./DropDown";
import CommunityDropDown from "./CommunityDropDown";
import { motion } from "framer-motion";
import Editor from "./Editor";
import { MoreInfo } from "../../public/index";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Variants } from "framer-motion";

interface PostSchema {
  community: string;
  title: string;
  description: string;
}

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  allPosts: PostSchema[];
  setAllPosts: React.Dispatch<React.SetStateAction<PostSchema[]>>;
}

interface QuillContent {
  ops: any[];
}

interface EmojiSelect {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
}

const modalVariants: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Modal({
  showModal,
  setShowModal,
  allPosts,
  setAllPosts,
}: Props) {
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [community, setCommunity] = useState<string>("");

  const handleEmoji = (emoji: EmojiSelect) => {
    setInput((prev) => prev + emoji.native);
    setShowEmoji(false);
  };

  const handlePost = () => {
    const data: PostSchema = {
      community,
      description: content,
      title,
    };
    setAllPosts([...allPosts, data]);
    setShowModal(false);
    setTitle("");
    setContent("");
  };

  return (
    <Dialog
      open={showModal}
      onClose={() => setShowModal(false)}
      className="relative"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        variants={modalVariants}
        initial="initial"
        animate="animate"
      >
        <Dialog.Panel className="mx-auto max-w-[709px] rounded-xl bg-white w-full font-graphik text-[#212121] high__z">
          <div className="w-full flex justify-end items-end py-4 px-4 pb-0">
            <img
              src={CloseSVG}
              alt="Close SVG"
              className="h-3.5 w-3.5 cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <h1 className="font-semibold text-2.5xl pl-8 text-[#212121] leading-[1.1428571429]">
            Write a new post
          </h1>
          <div className="mt-3 flex pl-8 items-center">
            <Dropdown />
            <p className="ml-2 font-semibold mr-2">in</p>
            <CommunityDropDown
              setCommunity={setCommunity}
              community={community}
            />
          </div>
          <div className="w-full mt-5 px-8">
            <input
              type="text"
              className="border border-[#616161] bg-white outline-none rounded-lg w-full text-[#616161] leading-[1.5] h-[40px] py-2 px-4 placeholder:text-[]"
              placeholder="Add a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="px-8 mt-4 relative">
            <Editor content={content} setContent={setContent} />
            {showEmoji && (
              <div className="absolute top-14 right-10">
                <Picker data={data} onEmojiSelect={handleEmoji} />
              </div>
            )}
          </div>
          <div className="pb-8 mt-6 px-8 flex items-center justify-between">
            <div className="flex justify-between items-center">
              <input
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-5 w-5 rounded cursor-pointer"
                type="checkbox"
              />
              <span className="text-sm font-medium font-graphik text-[#616161] mx-3">
                Allow anonymous comments
              </span>
              <img src={MoreInfo} alt="More Info" className="mt-1 my_tooltip" />
              <Tooltip
                anchorSelect=".my_tooltip"
                place="top"
                style={{
                  zIndex: "999",
                  backgroundColor: "#201c1c",
                  opacity: "1",
                  fontFamily: "Graphik",
                  maxWidth: "220px",
                  textAlign: "center",
                  fontWeight: "400",
                  lineHeight: "1.4",
                  borderRadius: "6px",
                }}
              >
                Nova community members may comment on your post anonymously by
                default. Change this by toggling the checkbox.
              </Tooltip>
            </div>
            <div className="space-x-2 flex items-center justify-between ">
              <button className="border border-[#5866E3] px-[24px] py-[7px] rounded-[10px] animate__btn transition h-[40px] duration-200 text-[#5866e3]">
                <span className="mb-1">Cancel</span>
              </button>
              <button className="px-[24px] py-[7px] rounded-[10px] animate__btn transition h-[40px] duration-200 custom__btn text-white">
                <span className="mb-1" onClick={handlePost}>
                  Post
                </span>
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  );
}
