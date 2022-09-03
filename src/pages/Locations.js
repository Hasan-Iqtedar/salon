import { HiLocationMarker } from "react-icons/hi";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import "../styles/locations.css";

const Locations = (props) => {
  const { locations, addLocation } = useContext(GlobalContext);

  return (
    <div className="locations">
      <div className="location-header">
        <h2>Locations</h2>
        <button>Add Location</button>
      </div>

      {locations.map((item) => {
        return (
          <div className="location-item">
            <div className="address">
              <HiLocationMarker className="icon" />
              <p>{item.address}</p>
            </div>
            <div className="actions">
              <button>View Bookings</button>
              <button>View Stylists</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Locations;
