import { HiDotsHorizontal } from "react-icons/hi";
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import "../styles/table.css";

const Table = (props) => {
  const navigate = useNavigate();
  return (
    <div className="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Service</th>
          <th>Time</th>
          <th>Stylist</th>
          <th>Approval</th>
        </tr>

        {props.data.map((item) => {
          return (
            <tr>
              <td>
                <div className="name">
                  <ProfilePicture
                    imgStyle={{ width: "40px", height: "40px" }}
                  />
                  {item.name}
                </div>
              </td>
              <td>{item.service}</td>
              <td>{item.time}</td>
              <td>{item.stylist}</td>
              <td>
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
                <div className="dropdown details">
                  <HiDotsHorizontal />
                  <div className="dropdown-content">
                    <div
                      onClick={() => {
                        console.log("going");
                        navigate("/booking-details", {
                          replace: true,
                          state: { id: item.id },
                        });
                      }}
                    >
                      <IoPencil className="icon" />
                      Details
                    </div>
                    <div>
                      <FaTrash className="icon" /> Delete
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
