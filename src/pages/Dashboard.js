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
      <span
        style={{
          color: "white",
          textAlign: "right",
          width: "90%",
          marginTop: "-50px",
          marginBottom: "50px",
          fontSize: "14px",
          fontWeigth: "400",
          textDecoration: "underline",
        }}
      >
        View more
      </span>
      <TableHeader title="Upcoming Bookings" />
      <Table data={upcomingBookings} />
      <span
        style={{
          color: "white",
          textAlign: "right",
          width: "90%",
          marginTop: "-50px",
          marginBottom: "50px",
          fontSize: "14px",
          fontWeigth: "400",
          textDecoration: "underline",
        }}
      >
        View more
      </span>
    </div>
  );
};

export default Dashboard;
