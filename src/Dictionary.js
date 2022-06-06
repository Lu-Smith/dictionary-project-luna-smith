import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}😃`);
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
