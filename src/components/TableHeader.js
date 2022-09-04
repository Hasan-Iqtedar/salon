import "../styles/tableHeader.css";

const TableHeader = (props) => {
  return (
    <div className="table-header">
      <h2>{props.title}</h2>
      <div className="container">
        {props.default ? <button>Default</button> : ""}
        <button>Location: All</button>
      </div>
    </div>
  );
};

export default TableHeader;
