import { useNavigate, NavLink } from "react-router-dom";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useAuth } from "../contexts/auth";
import Logo from "./Logo";
import { navigationOptions } from "../constants/navigationOptions";
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
          {navigationOptions.map((option) => {
            return (
              <li>
                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  {option.name}
                </NavLink>
              </li>
            );
          })}
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
