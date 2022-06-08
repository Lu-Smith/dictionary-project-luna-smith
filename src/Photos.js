import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row photo">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4 column">
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
                <p>
                  photographer:{" "}
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="photographer"
                  >
                    {photo.photographer}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
