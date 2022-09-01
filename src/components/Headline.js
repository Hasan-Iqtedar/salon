import { COLORS } from "../constants/theme";

const Headline = (props) => {
  return (
    <div style={style.headline}>
      Welcome {props.text}
      <p style={style.paraLine}>{props.line}</p>
    </div>
  );
};

export default Headline;

const style = {
  headline: {
    textAlign: "center",
    marginTop: "80px",
    fontSize: "25px",
    color: COLORS.primarycolor,
  },
  paraLine: {
    color: "gray",
    fontSize: "15px",
    marginTop: "5px",
  },
};
