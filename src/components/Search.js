import React from "react";

function Search({searched, setSearched}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searched} onChange={e => {
          setSearched(e.target.value)
        }}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
