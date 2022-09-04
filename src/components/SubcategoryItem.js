import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/subcategoryItem.css";

const SubCategoryItem = ({item}) => {
  return (
    <div className="subcategory-item">
      <div className="description-container">
        <div className="subcategory-picture"></div>
        <div className="subcategory-description">
          <span>{item.name}</span>
          <div>
            ${item.price}<div className="circle"></div> Hair Serivce
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
