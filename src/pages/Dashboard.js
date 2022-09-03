import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { pendingBookings } from "../constants/data";
import "../styles/dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <TableHeader title="Pending Bookings" />
      <Table data={pendingBookings} />
    </div>
  );
};

export default Dashboard;
