import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/subcategoryItem.css";
import ProfilePicture from "./ProfilePicture";

const SubCategoryItem = ({ item, style }) => {
  return (
    <div className="subcategory-item" style={style} >
      <div className="subdescription-container">
        {/* <div className="subcategory-picture"></div> */}
        <ProfilePicture
          imgStyle={{
            width: "29px",
            height: "29px",
            marginRight: "15px",
            borderRadius: "6px",
          }}
        />
        <div className="subcategory-description">
          <span>{item.name}</span>
          <div>
            ${item.price}
            <div className="circle"></div> <div style={{fontSize: '10px', fontWeight: '400'}} >Hair Serivce</div>
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
