import { HiLocationMarker } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import filterImage from "../assets/filterImage.png";

import "../styles/tableHeader.css";

const TableHeader = (props) => {
  return (
    <div className="table-header">
      <h2>{props.title}</h2>

      <div className="container">
        <div className="center-container" style={{ width: "100%" }}>
          {props.default ? (
            <div className="location">
              Default <AiFillCaretDown className="icon small" />
            </div>
          ) : (
            ""
          )}
          <div className="location">
            <HiLocationMarker className="icon" /> Location: All
            <AiFillCaretDown className="icon small" />
          </div>
          <img src={filterImage} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
