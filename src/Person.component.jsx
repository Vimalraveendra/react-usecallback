import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

export default Person;
