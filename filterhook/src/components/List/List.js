import React from "react";
import "./List.css";

const List = (props) => {
  const { words } = props;
  const wordsList = words.map((word, index) => {
    return <li key={index}>{word}</li>;
  });

  return <ul className="List">{wordsList}</ul>;
};

export default List;
