import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio !== "") {
    return (
      <div className="Phonetics">
        <div className="word-pronunciations">{props.phonetics.text}</div>
        <ReactAudioPlayer
          src={props.phonetics.audio}
          controlsList={"nodownload"}
          controls
          className="sound"
        />
      </div>
    );
  } else {
    return null;
  }
}
