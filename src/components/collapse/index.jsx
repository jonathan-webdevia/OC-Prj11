import { useState } from "react";
function Collapse(props) {
  const [open, upOpenState] = useState(false);
  const title = props.title;
  const content = props.content;
  const type = props.type;
  const display = () => {
    upOpenState(!open);
  };
  return (
    <div className="collapse">
      <h1 className={`title ${open && "deploy"}`} onClick={display}>
        <div>{title}</div>
        <button>
          {open ? (
            <i className="bi bi-chevron-down"></i>
          ) : (
            <i className="bi bi-chevron-up"></i>
          )}
        </button>
      </h1>
      {open && (
        <div className="description">
          {type === "string" && content}
          {type === "list" && (
            <ul>
              {content.map((equipment, index) => (
                <div key={`${equipment}-${index}`}>{equipment}</div>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
