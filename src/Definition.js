import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  console.log(props.meaning);
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 2) {
          return (
            <p className="word-definition">
              <strong>Definition:</strong> {definition.definition}
              <br />
              {<em className="word-example">{definition.example}</em>}
              <Synonyms synonyms={definition.synonyms} />
            </p>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
