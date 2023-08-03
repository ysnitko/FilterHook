import React, { useState, useEffect } from 'react';
import Controls from '../Controls/Controls';
import List from '../List/List';
import './Filter.css';
let words = require('../../wordsList.json');

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [sortedWords, setSortedWords] = useState([]);

  useEffect(() => {
    if (isChecked) {
      const updatedSortedWords = [...words].sort();
      setSortedWords(updatedSortedWords);
    } else {
      setSortedWords(words);
    }
  }, [isChecked]);

  return (
    <div className="Filter">
      <Controls isChecked={isChecked} setIsChecked={setIsChecked} />
      <List words={isChecked ? sortedWords : words} />
    </div>
  );
};

export default Filter;
