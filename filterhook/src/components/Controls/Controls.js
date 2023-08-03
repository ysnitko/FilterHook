import React from "react";
import "./Controls.css";

const Controls = () => {
  return (
    <div className="Actions">
      <input type="checkbox" />
      <input type="text" />
      <input type="button" value={"reset"} />
    </div>
  );
};

export default Controls;
