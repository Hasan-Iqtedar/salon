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
        <tr style={{ backgroundColor: "transparent" }}>
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
                    imgStyle={{
                      width: "50px",
                      height: "50px",
                      marginRight: "15px",
                    }}
                  />
                  {item.data.name}
                </div>
              </td>
              <td>{item.data.service}</td>
              <td>{item.data.time}</td>
              <td>{item.data.stylist}</td>
              <td>
                <button className="accept">Approve</button>
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
