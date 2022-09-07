import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/globalState";
import { HiLocationMarker } from "react-icons/hi";
import StylistCard from "../components/StylistCard";
import TableHeader from "../components/TableHeader";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import ProfilePicture from "../components/ProfilePicture";
import "../styles/stylists.css";


const Stylists = (props) => {
  const { stylists, updateStylist, deleteStylist } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [stylistId, setStylistId] = useState(null);

  const showModal = (id) => {
    setStylistId(id);
    setShow(true);
  };
  const hideModal = () => setShow(false);
  const updateName = (e) => setName(e.target.value);

  const updateStylistData = () => {
    console.log(stylistId, name);
    updateStylist(stylistId, name);
    hideModal();
  };

  return (
    <div className="stylists">
      <Modal title="Details" show={show} hideModal={hideModal}>
        <div className="picture-container">
          {/* <div className="add-picture"></div> */}
          <ProfilePicture imgStyle={{ width: "45px", height: "45px" }} />
          <span>Add picture</span>
        </div>
        <div className="input-fields-container">
          <InputField
            fieldStyle={{ height: "30px" }}
            placeholder="Enter stylist name"
            value={name}
            changeHandler={updateName}
          />
          <InputField
            icon={HiLocationMarker}
            fieldStyle={{ height: "30px" }}
            placeholder="Select Location"
          />
        </div>
        <button className="update-stylist-detail" onClick={updateStylistData}>
          Update
        </button>
      </Modal>

      <TableHeader title="Stylists" />
      <div className="cards-container">
        {stylists.map((item) => {
          return (
            <StylistCard
              key={item.id}
              item={item}
              showModal={showModal}
              hideModal={hideModal}
              deleteStylist={deleteStylist}
            />
          );
        })}
        <StylistCard className="add-card" item={{ name: "Add Stylist" }} />
      </div>
    </div>
  );
};

export default Stylists;
