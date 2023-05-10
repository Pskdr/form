import React from "react";

const CheckLilist = ({ checkList, text, handleCheck, isChecked }) => {
  return (
    <div className="checkList">
      <div className="title">{text}:</div>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckLilist;
