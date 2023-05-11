import React from "react";

const RadioButton = ({ value, isChecked, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default RadioButton;
