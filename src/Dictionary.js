import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.initialKeyword);
  let [searchResult, setSearchResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let searchWord = keyword;
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(urlApi).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
