import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useAuth } from "../contexts/auth";
import Logo from "./Logo";
import "../styles/navigationPanel.css";

const NavigationPanel = (props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="navigation-panel">
      <Logo />
      <div className="options-container">
        <ul>
          <li>Dashboard</li>
          <li>Pending Bookings</li>
          <li>Upcomming Bookings</li>
          <li>Locations</li>
          <li>Categories</li>
          <li>Stylists</li>
          <li>Slots</li>
          <li>History</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="sign-out-container">
        <RiLogoutBoxRFill className="icon" />
        <button className="sign-out" onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
