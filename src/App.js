import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import PendingBookings from "./pages/PendingBookings";
import UpcomingBookings from "./pages/UpcomingBookings";
import NavigationPanel from "./components/NavigationPanel";
import Container from "./components/Container";
import Header from "./components/Header";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <NavigationPanel />
      <Container>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pending-bookings" element={<PendingBookings />} />
          <Route path="/upcoming-bookings" element={<UpcomingBookings />} />
          <Route />
        </Routes>
      </Container>
      {/* container 
              -Header
              -Table
                  --Table Header
                  --Table Content
              -Footer
        */}
    </div>
  );
}

export default App;
