import React, { useReducer } from "react";

const handleReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };

    default:
      throw Error(
        "This is invalid Actions triggers which is getting from the dispatch"
      );
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(handleReducer, { count: 0 });

  return (
    <>
      <div
        style={{
          width: "70%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div>
          <h3>{state.count}</h3>
        </div>
        <div>
          <h1>This is Increment</h1>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment Action
          </button>
        </div>
        <div>
          <h1>This is Decrement</h1>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement Action
          </button>
        </div>
        <div>
          <h1>This is just reset</h1>
          <button onClick={() => dispatch({ type: "RESET" })}>
            Reset Action
          </button>
        </div>
      </div>
    </>
  );
};

export default Reducer;
