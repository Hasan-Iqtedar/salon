import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import Footer from "../components/Footer";
import { upcomingBookings } from "../constants/data";
import "../styles/upcomingBookings.css";

const PendingBookings = (props) => {
  return (
    <div className="pending-bookings">
      <TableHeader title="Pending Bookings" />
      <Table data={upcomingBookings} />
      <Footer />
    </div>
  );
};

export default PendingBookings;
