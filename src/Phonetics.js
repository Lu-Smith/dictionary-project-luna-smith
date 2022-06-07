import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio !== "") {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer noopener"
          alt="word sound"
          className="word-sound"
        >
          🔉
        </a>
        <span className="word-pronunciations">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
