import React from 'react';

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <p>Total de ejercicios: {total}</p>
    </div>
  );
};
export default Total;