import { useState } from "react";
import { Pencil } from "../../public";

export default function DropDown() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <>
      <div className="relative">
        <div
          className="border border-[#e0e0e0] rounded-[100px] bg-white py-1 pl-1.5 pr-3 flex flex-row font-graphik text-[#212121] font-medium items-center justify-between cursor-pointer transition duration-200 animate__btn"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
            alt="Default User Image"
            className="w-6 h-6 rounded-xl mr-2 select-none"
          />
          <span className="mb-[2px] select-none">Innovative Changemaker</span>
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
          <div className="absolute py-2 bg-white shadow-black/20 shadow-lg overflow-hidden rounded-xl left-0 w-full select-none z-50">
            <button
              className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-2 flex items-center py-2"
              onClick={() => setShowDropDown(false)}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
                alt="Default User Image"
                className="w-8 h-8 rounded-2xl mr-2"
              />
              <span className="select-none">Innovative Changemaker</span>
            </button>
            <button
              className="w-full transition duration-150 ease-out hover:bg-[#F4F4F4] px-2 flex items-center py-2 z-20 justify-between select-none"
              onClick={() => setShowDropDown(false)}
            >
              <div className="flex items-center justify-between">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/anonAvatars%2Fnova-anon-1.png?alt=media&token=c28890d0-1731-43a9-9dc9-5d582aa0b14b"
                  alt="Default User Image"
                  className="w-8 h-8 rounded-2xl mr-2"
                />
                <span className="select-none">Enthused Cricket</span>
              </div>
              <img src={Pencil} alt="Pencil SVGs" className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
