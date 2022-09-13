import DropdownMenu from "../components/DropdownMenu";
import TableHeader from "../components/TableHeader";
import "../styles/slots.css";
import removeImage from "../assets/removeImage.png";
import addImage from "../assets/addImage.png";

const Slots = (props) => {
  const options = [
    { value: "09:00 AM - 10:00 AM" },
    { value: "10:00 AM - 11:00 AM" },
    { value: "11:00 AM - 12:00 PM" },
  ];

  const stylists = [
    { name: "Annie" },
    { name: "Lee" },
    { name: "Mary" },
    { name: "Aiva" },
  ];

  return (
    <div className="slots">
      <TableHeader
        title="Slots Allocation"
        default={true}
        style={{ marginBottom: "15px" }}
      />
      <div className="menus-container">
        <DropdownMenu title="Select Timings">
          {options.map((item) => {
            return (
              <div key={item.value}>
                {item.value}
                <img src={removeImage} alt="" style={{ float: "right" }}></img>
              </div>
            );
          })}
        </DropdownMenu>
        <DropdownMenu title="Select Stylist">
          {stylists.map((item) => {
            return (
              <div key={item.name}>
                {item.name}
                <img src={addImage} alt="" style={{ float: "right" }}></img>
              </div>
            );
          })}
        </DropdownMenu>
      </div>

      <div className="center-container">
        <div className="thing">
          <span>12:00 PM</span>
        </div>
        <div className="thing">
          <span>12:00 PM</span>
        </div>
        <div className="thing">
          <span>12:00 PM</span>
        </div>
      </div>
      <div className="center-container">
        <div className="thing">
          <span>12:00 PM</span>
        </div>
        <div className="thing">
          <span>12:00 PM</span>
        </div>
        <div className="thing">
          <span>12:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Slots;
