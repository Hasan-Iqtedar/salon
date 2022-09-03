import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import Footer from "../components/Footer";
import { upcomingBookings } from "../constants/data";
import "../styles/upcomingBookings.css";

const UpcomingBookings = (props) => {
  return (
    <div className="pending-bookings">
      <TableHeader title="Upcoming Bookings" />
      <Table data={upcomingBookings} />
      <Footer />
    </div>
  );
};

export default UpcomingBookings;