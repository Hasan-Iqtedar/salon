import { HiLocationMarker } from "react-icons/hi";
import "../styles/tableHeader.css";

const TableHeader = (props) => {
  return (
    <div className="table-header">
      <h2>{props.title}</h2>
      <div className="container">
        {props.default ? <button>Default</button> : ""}
        <div className="location">
          <HiLocationMarker className="icon" /> Location: All
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
