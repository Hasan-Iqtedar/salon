import { IoLockClosedOutline, IoPencil } from "react-icons/io5";
import profileIcon from "../assets/profilePictureIcon.png";
import "../styles/settings.css";
import switchImage from "../assets/switchImage.png";

const Settings = (props) => {
  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      <div>
        <h3>Security</h3>
        <div className="settings-fields-container">
          <div className="field">
            <input placeholder="Change Password" />
            <IoLockClosedOutline className="icon" />
          </div>
          <div className="field" style={{borderBottom: 'none'}} >
            <input placeholder="Change Email/Username" />
            <img
              src={profileIcon}
              alt=""
              style={{ width: "18px", height: "20px" }}
            ></img>
          </div>
        </div>
      </div>
      <div>
        <h3>General</h3>
        <div className="settings-fields-container">
          <div className="field">
            <p>Notifications</p>
            <img src={switchImage} style={{width: "33px", height: "21px" }} alt=''></img>
          </div>
          <div className="field">
            <p>Change Profile picture</p>
            <IoPencil className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
