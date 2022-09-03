import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div>
        Page 1 of 2 <IoIosArrowBack className="icon" /> 1
        <IoIosArrowForward className="icon" />
      </div>
    </div>
  );
};

export default Footer;
