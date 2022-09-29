import { IoAddCircleOutline, IoPencil } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
// import dummy_image from "../assets/dummy_image.jpeg";
import SubCategoryItem from "./SubcategoryItem";
import ProfilePicture from "../components/ProfilePicture";
import "../styles/categoryItem.css";
import { useEffect } from "react";

const CategoryItem = ({ item, showModal }) => {
  // useEffect(() => {
  //   console.log(item.data.subcategories.data.length);
  // }, []);

  return (
    <div className="category-item">
      <div className="category">
        <div className="description-container">
          {/* <div className="category-picture"></div> */}
          <ProfilePicture
            imgStyle={{
              width: "42px",
              height: "42px",
              borderRadius: "6px",
              marginRight: "20px",
            }}
          />
          <div className="description">
            <span>{item.data.name}</span>
            <div>
              <div className="circle"></div> {item.data.type}
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

      {item.data.subcategories.data.map((cat, index) => {
        if (index === item.data.subcategories.data.length - 1) {
          return (
            <SubCategoryItem item={cat} style={{ borderBottom: "none" }} />
          );
        } else {
          return <SubCategoryItem item={cat} />;
        }
      })}
    </div>
  );
};

export default CategoryItem;
