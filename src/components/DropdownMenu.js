import { AiFillCaretDown } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

import "../styles/dropdownMenu.css";

const DropdownMenu = (props) => {

  return (
    <div className="dropdown-menu">
      <div className="title">
        {props.title}
        <AiFillCaretDown className="icon" />
      </div>
      <div className="dropdown-menu-content">
        {/* <div>
          <IoPencil className="icon" /> Details
        </div>
        <div>
          <FaTrash className="icon" /> Delete
        </div> */}
        {props.children}
      </div>
    </div>
  );
};

export default DropdownMenu;
