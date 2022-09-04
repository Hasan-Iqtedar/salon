import { IoStarSharp, IoAddCircleOutline, IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/stylistCard.css";

const StylistCard = (props) => {
  const { rating, picture, name, id } = props.item;

  const renderStars = () => {
    const data = [];
    for (let i = 0; i < rating; i++) {
      data.push(<IoStarSharp className="star" />);
    }
    return data;
  };

  return (
    <div className={!props.className ? "dropdown" : ""}>
      <div className={props.className ? props.className : "stylist-card"}>
        {props.className ? (
          <IoAddCircleOutline className="icon" />
        ) : (
          <div className="picture"></div>
        )}

        <p>{name}</p>
        <div className="rating">{renderStars()}</div>
      </div>
      <div className="dropdown-content">
        <div onClick={() => props.showModal(id)}>
          <IoPencil className="icon" /> Details
        </div>
        <div onClick={() => props.deleteStylist(id)}>
          <FaTrash className="icon" /> Delete
        </div>
      </div>
    </div>
  );
};

export default StylistCard;
