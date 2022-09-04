import { IoAddCircleOutline, IoPencil } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import "../styles/categoryItem.css";
import SubCategoryItem from "./SubcategoryItem";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <div className="category">
        <div className="description-container">
          <div className="category-picture"></div>
          <div className="description">
            <span>{item.name}</span>
            <div>
              <div className="circle"></div> {item.type}
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <div className="add-btn">
            Add subcategory <IoAddCircleOutline className="icon" />
          </div>
          <FaTrash className="icon" />
          <IoPencil className="icon" />
          <AiFillCaretDown className="icon" />
        </div>
      </div>

      {item.subcategories.map((cat) => {
        return <SubCategoryItem item={cat} />;
      })}

    </div>
  );
};

export default CategoryItem;
