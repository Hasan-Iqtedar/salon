import { HiDotsHorizontal } from "react-icons/hi";
import { IoSearchOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import ProfilePicture from "../components/ProfilePicture";
import Footer from '../components/Footer'
import "../styles/users.css";
import "../styles/table.css";

const Users = (props) => {
  return (
    <div className="users">
      <h2>Users</h2>
      <div className="search-bar">
        <IoSearchOutline className="icon" />
        <input placeholder="Search user by name or email..." />
      </div>

      <div className="table">
        <table style={{height: 'auto'}} >
          <tr
            style={{
              backgroundColor: "transparent",
              borderBottom: "0.5px solid rgba(124, 124, 124, 0.27)",
            }}
          >
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>
              <div className="name" style={{justifyContent: 'flex-start'}} >
                <ProfilePicture imgStyle={{ width: "40px", height: "40px", marginRight: '23px' }} />
                {"David"}
              </div>
            </td>
            <td>{"david@gmail.com"}</td>
            <td>{"12345678910"}</td>
            <td>
              {" "}
              <div className="dropdown details">
                <HiDotsHorizontal />
                <div className="dropdown-content">
                  <div>
                    <FaTrash className="icon" /> Delete
                  </div>
                  <div>
                    <IoInformationCircleOutline className="icon" />
                    Additional Options
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <Footer contentStyle={{marginRight: '20px'}} />
    </div>
  );
};

export default Users;
