import React from "react";

const Title = () => {
  const titleStyle = {
    width: "fit-content",
    fontVariant: "small-caps",
    position: "relative",
    display: "grid",
    placeItems: "center",
  };

  return (
    <>
      <div style={titleStyle}>
        <h3>Le Nostre Vacanze</h3>
        <div className='underline'></div>
      </div>
    </>
  );
};

export default Title;
