import React from "react";

function Track (props) {
    const tittle = props.trackTittle;
    const author = props.trackAuthor;
    const image = props.trackImage;
    const index = props.key;

  return (
    <div className="track" id={"track-" + index}>
      <img src={image} alt={tittle} />
      <h3>{tittle}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Track;
