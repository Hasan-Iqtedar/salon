import { useGlobalState } from "../contexts/globalState";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import Footer from "../components/Footer";
import "../styles/pendingBookings.css";

const PendingBookings = (props) => {
  const { pendingBookings } = useGlobalState();

  return (
    <div className="pending-bookings">
      <TableHeader title="Pending Bookings" />
      <Table data={pendingBookings} />
      <Footer />
    </div>
  );
};

export default PendingBookings;
