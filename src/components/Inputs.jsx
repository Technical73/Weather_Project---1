import React from "react";

const Inputs = ({ handleClick, setCity, city }) => {
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <>
      <div className="section section_inputs">
        <input
          placeholder="Enter your City..."
          type="text"
          onKeyDown={enterKeyPressed}
        ></input>
        <button onClick={(e) => handleClick(e)}>F</button>
      </div>
    </>
  );
};

export default Inputs;
