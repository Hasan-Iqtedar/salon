import DropdownMenu from "../components/DropdownMenu";
import TableHeader from "../components/TableHeader";
import "../styles/slots.css";

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
      <TableHeader title="Slots Allocation" />
      <div className="menus-container">
        <DropdownMenu title="Select Timings">
          {options.map((item) => {
            return <div key={item.value}>{item.value}</div>;
          })}
        </DropdownMenu>
        <DropdownMenu title="Select Stylist">
          {stylists.map((item) => {
            return <div key={item.name}>{item.name}</div>;
          })}
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Slots;
