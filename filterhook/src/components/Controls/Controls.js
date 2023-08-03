import React from 'react';
import './Controls.css';

const Controls = (props) => {
  const { isChecked, setIsChecked } = props;
  return (
    <div className="Actions">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <input type="text" />
      <input type="button" value={'reset'} />
    </div>
  );
};

export default Controls;
