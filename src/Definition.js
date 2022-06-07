import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 2) {
          return (
            <div key={index} className="word">
              <span className="word-definition">Definition:</span>{" "}
              {definition.definition}
              <br />
              {<em className="word-example">{definition.example}</em>}
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
