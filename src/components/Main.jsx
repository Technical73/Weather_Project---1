import React, { useState } from "react";

const Main = () => {
  const initialValue = ["Jack", null];
  const [name, setName] = useState(initialValue);
  const handleChange = () => {
    const Persons = ["jagadish", "manoj", "viswa"];
    const int = Math.floor(Math.random() * Persons.length);
    setName(Persons[int]);
  };

  return (
    <>
      <div
        style={{
          width: "70%",
          height: "70vh",
          margin: "0 auto",
          backgroundColor: "orange",
          color: "white",
          textAlign: "center",
          padding: "10px 10px 10px 10px",
          fontSize: "21px",
          fontWeight: "bold",
        }}
      >
        <h2>Hello {name}</h2>
        <button onClick={handleChange}>
          Change the name by click this name
        </button>
      </div>
    </>
  );
};

export default Main;
