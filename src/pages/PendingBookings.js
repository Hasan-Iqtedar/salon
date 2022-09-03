import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { pendingBookings } from "../constants/data";
import "../styles/pendingBookings.css";

const PendingBookings = (props) => {
  return (
    <div className="pending-bookings">
      <TableHeader title="Pending Bookings" />
      <Table data={pendingBookings} />
    </div>
  );
};

export default PendingBookings;
