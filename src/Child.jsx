import React from "react";

const Child = React.memo(({ name, addCart }) => {
  console.log(`${name} component is re-render`);
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={addCart}>Add Cart</button>
    </div>
  );
});

export default Child;
