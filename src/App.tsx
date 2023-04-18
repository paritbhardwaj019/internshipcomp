import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal";
import React from "react";

interface PostSchema {
  community: string;
  title: string;
  description: string;
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [allPosts, setAllPosts] = useState<PostSchema[]>([]);
  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        allPosts={allPosts}
        setAllPosts={setAllPosts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              showModal={showModal}
              setShowModal={setShowModal}
              allPosts={allPosts}
              setAllPosts={setAllPosts}
            />
          }
        />
      </Routes>
    </>
  );
}
