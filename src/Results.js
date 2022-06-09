import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section className="definition-background">
          <h2 className="search-word">{props.data.word}</h2>
          <div className="search-phonetics">
            {props.data.phonetics.map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            })}
          </div>
          <div>
            {props.data.meanings.map(function (meaning, index) {
              return (
                <section className="definition" key={index}>
                  <Definition meaning={meaning} />
                </section>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
