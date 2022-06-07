import React from "react";
import "./Definition.css";

export default function Definition(props) {
  console.log(props.meaning);
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 1) {
          return (
            <p className="word-definition">
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
