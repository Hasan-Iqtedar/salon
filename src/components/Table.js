import {HiDotsHorizontal} from 'react-icons/hi';
import ProfilePicture from "./ProfilePicture";
import "../styles/table.css";

const Table = (props) => {
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
                  <ProfilePicture style={{ width: "40px", height: "40px" }} />{" "}
                  {item.name}
                </div>
              </td>
              <td>{item.service}</td>
              <td>{item.time}</td>
              <td>{item.stylist}</td>
              <td>
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
                <HiDotsHorizontal className='details' />
                {/* <span className="details">...</span> */}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
