import { useState } from "react";
import {
  IoStarSharp,
  IoAddCircleOutline,
  IoPencil,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/stylistCard.css";

const StylistCard = (props) => {
  const { rating, picture, name } = props.item;
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(true);
  const hideMenu = () => setShow(false);

  const renderStars = () => {
    const data = [];
    for (let i = 0; i < rating; i++) {
      data.push(<IoStarSharp className="star" />);
    }
    return data;
  };

  const displayOptions = () => {
    showMenu();
  };

  return (
    <div className={!props.className ? "dropdown" : ""}>
      <div
        className={props.className ? props.className : "stylist-card"}
        onClick={displayOptions}
      >
        {props.className ? (
          <IoAddCircleOutline className="icon" />
        ) : (
          <div className="picture"></div>
        )}

        <p>{name}</p>
        <div className="rating">{renderStars()}</div>
      </div>
      <div className="dropdown-content">
        <div>
          <IoPencil className="icon" /> Edit Details
        </div>
        <div>
          <IoInformationCircleOutline className="icon" /> Show Details
        </div>
        <div>
          <FaTrash className="icon" /> Delete
        </div>
      </div>
    </div>
  );
};

export default StylistCard;
