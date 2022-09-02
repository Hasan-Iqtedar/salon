import NavigationPanel from "../components/NavigationPanel";
import Container from "../components/Container";
import "../styles/dashboard.css";
import Header from "../components/Header";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <NavigationPanel />
      <Container>
        <Header/>
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
};

export default Dashboard;
