import React from 'react';

const Validation = (props) => {

  let text;
  if (props.length > 5) {
    text = 'Text long enough';
  } else {
    text = 'Text too short';
  }

  return <p>{text}</p>;
};

export default Validation;
