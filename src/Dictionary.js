import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function wordSearch(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let searchWord = keyword;
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(urlApi).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleKeywordchange(response) {
    setKeyword(response.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={wordSearch}>
        <input
          type="search"
          placeholder="word..."
          autoFocus={true}
          onChange={handleKeywordchange}
        ></input>
        {keyword}
      </form>
    </div>
  );
}
