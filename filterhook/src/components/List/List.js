import React from 'react';
import './List.css';

const List = ({ filterWords }) => {
  const filter = filterWords();
  const wordsList = filter.map((word, index) => {
    console.log(`list render ${word.length}`);
    return <li key={index}>{word}</li>;
  });

  return <ul className="List">{wordsList}</ul>;
};

export default List;
