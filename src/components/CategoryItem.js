import { IoAddCircleOutline, IoPencil } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
// import dummy_image from "../assets/dummy_image.jpeg";
import SubCategoryItem from "./SubcategoryItem";
import ProfilePicture from "../components/ProfilePicture";
import "../styles/categoryItem.css";

const CategoryItem = ({ item, showModal }) => {
  return (
    <div className="category-item">
      <div className="category">
        <div className="description-container">
          {/* <div className="category-picture"></div> */}
          <ProfilePicture />
          <div className="description">
            <span>{item.name}</span>
            <div>
              <div className="circle"></div> {item.type}
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <div className="add-btn">
            Add subcategory
            <IoAddCircleOutline
              className="icon"
              onClick={() => showModal(item.id)}
            />
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
