import React, { useRef, useState } from "react";
import fleche from "../assets/img/fleche.png";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  const contentRef = useRef();

  return (
    <div>
      <button
        className={`col_button ${open ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {props.label}
        <img
          className="col_icon"
          src={fleche}
          alt="fleche icon"
          style={{ transform: open ? "rotate(-180deg)" : "" }}
        />
      </button>
      <div ref={contentRef} className={`col_content ${open ? "open" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
