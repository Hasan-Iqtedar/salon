import { useContext, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useGlobalState } from "../contexts/globalState";
import { HiLocationMarker } from "react-icons/hi";
import StylistCard from "../components/StylistCard";
import TableHeader from "../components/TableHeader";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import ProfilePicture from "../components/ProfilePicture";
import "../styles/stylists.css";

const Stylists = (props) => {
  const { stylists, updateStylist, deleteStylist } = useGlobalState();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [stylistId, setStylistId] = useState(null);

  const showModal = (id) => {
    setStylistId(id);
    setShow(true);
  };
  const hideModal = () => setShow(false);
  const updateName = (e) => setName(e.target.value);

  const updateStylistData = async () => {
    const ref = doc(db, "stylist", stylistId);
    try {
      await updateDoc(ref, {
        name: name,
        location: location,
      });
      hideModal(false);
      updateStylist(stylistId, name);
    } catch (err) {
      console.log(err);
    }

    hideModal();
  };

  const deleteStylistData = async (id) => {
    const ref = doc(db, "stylist", id);
    try {
      await deleteDoc(ref);
      deleteStylist(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="stylists">
      <Modal
        title="Details"
        show={show}
        hideModal={hideModal}
        contentStyle={{ height: "350px" }}
      >
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
            value={location}
            changeHandler={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="update-stylist-detail" onClick={updateStylistData}>
          Update
        </button>
      </Modal>

      <TableHeader
        title="Stylists"
        style={{ width: "800px", marginBottom: "20px" }}
      />
      <div className="cards-container">
        {stylists.map((item) => {
          return (
            <StylistCard
              key={item.id}
              item={item.data}
              id={item.id}
              showModal={showModal.bind(this, item.id)}
              hideModal={hideModal}
              deleteStylist={deleteStylistData.bind(this, item.id)}
            />
          );
        })}
        <StylistCard className="add-card" item={{ name: "Add Stylist" }} />
      </div>
    </div>
  );
};

export default Stylists;
