import { IoIosNotifications } from "react-icons/io";
import ProfilePicture from "./ProfilePicture";
import Headline from "./Headline";
import "../styles/header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Headline
        text="Admin!"
        line={new Date().toDateString().slice(4)}
        style={{ marginTop: "20px" }}
        lineStyle={{ color: "white", textAlign: "left" }}
      />
      <div className="header-options">
        <IoIosNotifications className="icon" />
        <ProfilePicture />
      </div>
    </div>
  );
};

export default Header;
