import React from "react";

export const SpecialButton = props => {
  return (
    <>
    <button className="specialButton">
      {props.characters/* Display a button element rendering the data being passed down from the parent container on props */}
      </button>
    </>
  );
};
