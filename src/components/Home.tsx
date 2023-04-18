import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

interface PostSchema {
  community: string;
  title: string;
  description: string;
}

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  allPosts: PostSchema[];
  setAllPosts: React.Dispatch<React.SetStateAction<PostSchema[]>>;
}

export default function Home({
  isSidebarOpen,
  setIsSidebarOpen,
  setShowModal,
  showModal,
  allPosts,
  setAllPosts,
}: Props) {
  return (
    <>
      <section className="flex justify-between mt-20">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Posts
          showModal={showModal}
          setShowModal={setShowModal}
          allPosts={allPosts}
          setAllPosts={setAllPosts}
        />
      </section>
    </>
  );
}
