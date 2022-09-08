import { IoLockClosedOutline, IoPencil } from "react-icons/io5";
import profileIcon from "../assets/profilePictureIcon.png";
import "../styles/settings.css";

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
          <div className="field">
            <input placeholder="Change Email/Username" />
            <img
              src={profileIcon}
              alt=""
              style={{ width: "24px", height: "27px" }}
            ></img>
          </div>
        </div>
      </div>
      <div>
        <h3>General</h3>
        <div className="settings-fields-container">
          <div className="field">
            <p>Notifications</p>
            <div className="switch">
              <div></div>
            </div>
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
