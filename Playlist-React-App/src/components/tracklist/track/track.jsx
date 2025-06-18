import React from "react";

function Track (props) {
    const title = props.trackTitle;
    const author = props.trackAuthor;
    const image = props.trackImage;

  return (
    <div className="track">
      <div className="track-info" onClick={() => props.action(props.track)}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div className="track-action">
        <p className="action-signifier" onClick={() => props.action(props.track)}>{props.actionSignifier}</p>
      </div>
    </div>
  );
}

export default Track;
