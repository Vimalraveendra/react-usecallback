import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default Person;
