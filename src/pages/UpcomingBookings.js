import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { upcomingBookings } from "../constants/data";
import "../styles/upcomingBookings.css";

const PendingBookings = (props) => {
  return (
    <div className="pending-bookings">
      <TableHeader title="Pending Bookings" />
      <Table data={upcomingBookings} />
    </div>
  );
};

export default PendingBookings;
