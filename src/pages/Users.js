import { IoSearchOutline } from "react-icons/io5";
import ProfilePicture from "../components/ProfilePicture";
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
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>
              <div className="name">
                <ProfilePicture style={{ width: "40px", height: "40px" }} />
                {'David'}
              </div>
            </td>
            <td>{'david@gmail.com'}</td>
            <td>{'12345678910'}</td>
            <td> ... </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Users;
