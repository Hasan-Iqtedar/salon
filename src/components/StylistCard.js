import { IoStarSharp, IoAddCircleOutline, IoPencil, IoInformationCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/stylistCard.css";
import ProfilePicture from "./ProfilePicture";

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
          <ProfilePicture imgStyle={{ width: "45px", height: "45px" }} />
        )}

        <p>{name}</p>
        <div className="rating">{renderStars()}</div>
      </div>
      <div className="dropdown-content">
        <div onClick={() => props.showModal(id)}>
          <IoPencil className="icon" /> Edit Details
        </div>
        <div onClick={() => props.showModal(id)}>
          <IoInformationCircleOutline className="icon" /> Show Details
        </div>
        <div onClick={() => props.deleteStylist(id)}>
          <FaTrash className="icon" /> Delete
        </div>
      </div>
    </div>
  );
};

export default StylistCard;
