import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/subcategoryItem.css";
import ProfilePicture from "./ProfilePicture";

const SubCategoryItem = ({ item }) => {
  return (
    <div className="subcategory-item">
      <div className="subdescription-container">
        {/* <div className="subcategory-picture"></div> */}
        <ProfilePicture imgStyle={{ width: "40px", height: "40px", marginRight: '15px' }} />
        <div className="subcategory-description">
          <span>{item.name}</span>
          <div>
            ${item.price}
            <div className="circle"></div> Hair Serivce
          </div>
        </div>
      </div>
      <div className="subcategory-buttons-container">
        <FaTrash className="icon" />
        <IoPencil className="icon" />
      </div>
    </div>
  );
};

export default SubCategoryItem;
