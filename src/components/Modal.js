import { IoCloseCircleSharp } from "react-icons/io5";
import "../styles/modal.css";

const Modal = (props) => {
  const classNames = props.show ? "modal show" : "modal hide";

  return (
    <div
      className={classNames}
      onClick={(e) =>
        e.target.classList[0] === "modal" ? props.hideModal() : null
      }
    >
      <div className="modal-content">
        <div className="modal-header">
          <span>{props.title}</span>
          <IoCloseCircleSharp onClick={props.hideModal} className="icon" />
        </div>
        <div className="children-container">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
