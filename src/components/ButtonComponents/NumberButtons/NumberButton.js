import React from "react";

export const NumberButton = (props) => {
  return (
    <>
      <button className="numberButton">
      {props.num/* Display a button element rendering the data being passed down from the parent container on props */}
      </button>
    </>
  );
};