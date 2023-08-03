import React from "react";
import Controls from "../Controls/Controls";
import List from "../List/List";
import "./Filter.css";
let words = require("../../wordsList.json");

const Filter = () => {
  return (
    <div className="Filter">
      <Controls />
      <List words={words} />
    </div>
  );
};

export default Filter;
