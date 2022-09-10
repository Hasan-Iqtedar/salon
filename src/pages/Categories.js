import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/globalState";
import { AiFillCaretDown } from "react-icons/ai";
import Modal from "../components/Modal";
import CategoryItem from "../components/CategoryItem";
import TableHeader from "../components/TableHeader";
import ProfilePicture from "../components/ProfilePicture";
import InputField from "../components/InputField";
import "../styles/categories.css";

const Categories = (props) => {
  const { categories } = useContext(GlobalContext);
  const [showSubModal, setShowSubModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);
  const [name, setName] = useState("");

  const updateShowSubModal = (id) => {
    setShowSubModal(true);
  };

  const updateShowCatModal = (id) => {
    setShowCatModal(true);
  };

  const hideSubModal = () => setShowSubModal(false);
  const hideCatModal = () => setShowCatModal(false);

  const updateName = (e) => setName(e.target.value);

  return (
    <div className="categories">
      <Modal
        title="Sub Category Details"
        show={showSubModal}
        hideModal={hideSubModal}
        // contentStyle={{ height: "350px" }}
      >
        <div className="picture-container">
          <ProfilePicture imgStyle={{ width: "45px", height: "45px" }} />
          <span>Update picture</span>
        </div>
        <div className="input-fields-container">
          <InputField
            fieldStyle={{ height: "30px" }}
            placeholder="Sub Category name"
            value={name}
            changeHandler={updateName}
          />
          <InputField
            fieldStyle={{ height: "30px", width: '70%' }}
            placeholder="Braided"
            icon2={AiFillCaretDown}
            icon2style={{fontSize: '8px'}}
          />
          <InputField
            fieldStyle={{ height: "30px" }}
            placeholder="Enter Price"
          />
        </div>
        <button className="update-stylist-detail">Update</button>
      </Modal>

      <Modal
        title="Category Details"
        show={showCatModal}
        hideModal={hideCatModal}
      >
        <div className="picture-container">
          <ProfilePicture imgStyle={{ width: "45px", height: "45px" }} />
          <span>Update picture</span>
        </div>
        <div className="input-fields-container">
          <InputField
            fieldStyle={{ height: "30px" }}
            placeholder="Sub Category name"
          />
          <InputField
            fieldStyle={{ height: "30px" }}
            placeholder="Enter Price"
          />
        </div>
        <button className="update-stylist-detail">Update</button>
      </Modal>

      <TableHeader title="Categories" style={{width: '850px'}} />
      {categories.map((item) => {
        return <CategoryItem item={item} showModal={updateShowSubModal} />;
      })}

      <div className="add-category-btn" onClick={updateShowCatModal}>
        <span>Add Category</span>
      </div>
    </div>
  );
};

export default Categories;
