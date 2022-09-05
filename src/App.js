import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavigationPanel from "./components/NavigationPanel";
import PendingBookings from "./pages/PendingBookings";
import UpcomingBookings from "./pages/UpcomingBookings";
import Locations from "./pages/Locations";
import Stylists from "./pages/Stylists";
import Categories from "./pages/Categories.js";
import Container from "./components/Container";
import Header from "./components/Header";
import Settings from "./pages/Settings";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <NavigationPanel />
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pending-bookings" element={<PendingBookings />} />
          <Route path="/upcoming-bookings" element={<UpcomingBookings />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/stylists" element={<Stylists />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
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
