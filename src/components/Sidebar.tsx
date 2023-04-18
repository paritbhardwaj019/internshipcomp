import { useState } from "react";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: Props) {
  return (
    <>
      <aside
        className={`sidebar__class overflow-auto cursor-pointer ${
          isSidebarOpen
            ? "w-[256px] h-screen z-[9999999999999999999999999999999999] shadow-none"
            : "w-[64px] h-sidebar-height "
        }`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      ></aside>
    </>
  );
}
