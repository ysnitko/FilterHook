import React, { useState, useCallback } from 'react';
import Controls from '../Controls/Controls';
import List from '../List/List';
import './Filter.css';
import words from '../../wordsList.json';

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [sortedWords, setSortedWords] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  console.log('Parent component render');

  const changeInputValues = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const filterWords = useCallback(() => {
    const filteredList = words.filter((word) => word.includes(searchValue));
    if (isChecked) {
      return filteredList.sort();
    }
    return filteredList;
  }, [isChecked, searchValue]);

  const resetFilter = useCallback(() => {
    setSortedWords(words);
    setIsChecked(false);
    setSearchValue('');
  }, []);

  return (
    <div className="Filter">
      <Controls
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        searchValue={searchValue}
        changeInputValues={changeInputValues}
        resetFilter={resetFilter}
      />
      <List words={isChecked ? sortedWords : words} filterWords={filterWords} />
    </div>
  );
};

export default Filter;
