import "../styles/headline.css";

const Headline = (props) => {
  return (
    <div className="headline">
      Welcome {props.text}
      <p className="paraLine">{props.line}</p>
    </div>
  );
};

export default Headline;
