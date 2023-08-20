import React, { useRef, useState } from "react";
import chevron from "../assets/img/chevron.png";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  const contentRef = useRef();

  return (
    <div>
      <button
        className={`collapse-button ${open ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {props.label}
        <img
          className="collapse-icon"
          src={chevron}
          alt="chevron icon"
          style={{ transform: open ? "rotate(-180deg)" : "" }}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${open ? "open" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
