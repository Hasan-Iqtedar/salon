import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import StylistCard from "../components/StylistCard";
import TableHeader from "../components/TableHeader";
import "../styles/stylists.css";

const Stylists = (props) => {
  const { stylists } = useContext(GlobalContext);

  return (
    <div className="stylists">
      <TableHeader title="Stylists" />
      <div className="cards-container">
        {stylists.map((item) => {
          return <StylistCard item={item} />;
        })}
        <StylistCard className='add-card' item={{name: 'Add Stylist'}} />
      </div>
    </div>
  );
};

export default Stylists;
