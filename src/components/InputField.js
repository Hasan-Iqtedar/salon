import "../styles/inputField.css";

const InputField = (props) => {
  return (
    <div className="input">
      {props.icon ? <props.icon className="icon" /> : ""}
      <input
        name={props.name}
        type={props.type}
        required={true}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changeHandler}
        style={props.fieldStyle}
      ></input>
      {props.iconSeePassword ? <props.iconSeePassword className="icon" /> : ""}
    </div>
  );
};

export default InputField;
