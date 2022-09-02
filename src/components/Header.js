import { IoIosNotifications } from "react-icons/io";
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
        <div className="profile-picture"></div>
      </div>
    </div>
  );
};

export default Header;
