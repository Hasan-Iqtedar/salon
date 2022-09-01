import { COLORS } from "../constants/theme";

const Logo = (props) => {
  return <div style={style.logo}>Logo</div>;
};

export default Logo;

const style = {
  logo: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "35px",
    color: COLORS.primarycolor,
  },
};
