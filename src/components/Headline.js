import "../styles/headline.css";

const Headline = (props) => {
  return (
    <div className="headline" style={{...props.style}}>
      Welcome {props.text}
      <p className="paraLine" style={props.lineStyle}>
        {props.line}
      </p>
    </div>
  );
};

export default Headline;
