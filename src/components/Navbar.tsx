import { Link } from "react-router-dom";
import {
  Hamburger,
  Logo,
  Messages,
  Bookmark,
  Notification,
} from "../../public";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface ToolTipProps {
  anchorSelect: string;
  text: string;
}

interface Props {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setIsSidebarOpen }: Props) {
  const tooltipArr = [
    {
      anchorSelect: ".message_tooltip",
      text: "Messages",
    },
    {
      anchorSelect: ".bookmark_tooltip",
      text: "Bookmarks",
    },
    {
      anchorSelect: ".notification_tooltip",
      text: "Notifications",
    },
    {
      anchorSelect: ".user_tooltip",
      text: "Account",
    },
  ];

  function ToolTip({ anchorSelect, text }: ToolTipProps) {
    return (
      <Tooltip
        anchorSelect={anchorSelect}
        place="bottom"
        style={{
          zIndex: "999999999999",
          backgroundColor: "#000",
          opacity: "1",
          fontFamily: "Graphik",
          maxWidth: "220px",
          textAlign: "center",
          fontWeight: "400",
          lineHeight: "1.4",
          borderRadius: "6px",
          padding: "5px 10px 5.5px 10px",
          verticalAlign: "center",
        }}
      >
        {text}
      </Tooltip>
    );
  }

  return (
    <>
      <nav className="nav__bg flex justify-between items-center py-2 px-5">
        <div className="flex items-center space-x-11">
          <img
            src={Hamburger}
            alt="Hamburger Icon"
            className="select-none"
            onClick={() => setIsSidebarOpen(true)}
          />
          <Link to={"/"} className="select-none cursor-pointer">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-5 pr-6">
          <div className="cursor-pointer w-8 h-8 bg-transparent hover:bg-white transition duration-200 ease-in flex items-center justify-center rounded-2xl message_tooltip">
            <img src={Messages} alt="Messages Icon" />
          </div>
          <div className="cursor-pointer w-8 h-8 bg-transparent hover:bg-white transition duration-200 ease-in flex items-center justify-center rounded-2xl bookmark_tooltip">
            <img src={Bookmark} alt="Bookmark Icon" />
          </div>
          <div className="cursor-pointer w-8 h-8 bg-transparent hover:bg-white transition duration-200 ease-in flex items-center justify-center rounded-2xl notification_tooltip">
            <img src={Notification} alt="Notification Icon" />
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
            alt="User Icon"
            className="h-8 w-8 rounded-2xl cursor-pointer user_tooltip"
          />
        </div>
        {tooltipArr.map(ToolTip)}
      </nav>
    </>
  );
}
