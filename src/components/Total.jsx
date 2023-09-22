import React from 'react';

const Total = ({parts}) => {

    return (
    <div>
      <p>Total de ejercicios: {parts.reduce((accumulator, part) => accumulator + part.exercises,0)}</p>
    </div>
  );
};
export default Total;