import React from "react";

function Track (props) {
    const title = props.trackTitle;
    const author = props.trackAuthor;
    const image = props.trackImage;
    const index = props.trackIndex;

  return (
    <div className="track" id={"track-" + index}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Track;
