import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.initialKeyword);
  let [searchResult, setSearchResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let searchWord = keyword;
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(urlApi).then(handleResponse);
    let pexelsApiKey = `563492ad6f91700001000001ecfdf91227964c65855c59628b5f476e`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function wordSearch(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setSearchResult(response.data[0]);
  }
  function handleKeywordchange(response) {
    setKeyword(response.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="form">
          <form onSubmit={wordSearch}>
            <input
              type="search"
              placeholder="type your word..."
              autoFocus={true}
              onChange={handleKeywordchange}
              className="inside-form"
            ></input>
          </form>
        </section>
        <Results data={searchResult} />
        <div className="row">
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
