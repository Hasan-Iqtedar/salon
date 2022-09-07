import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { pendingBookings } from "../constants/data";
import { upcomingBookings } from "../constants/data";
import "../styles/dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <TableHeader title="Pending Approvals" />
      <Table data={pendingBookings} />
      <TableHeader title="Upcoming Bookings" />
      <Table data={upcomingBookings} />
    </div>
  );
};

export default Dashboard;
