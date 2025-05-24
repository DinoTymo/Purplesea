import React from "react";

function SearchPane() {
  return (
    <div className="search-pane">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <br />
        <a href="#">Discover</a>
        <br />
        <a href="#">Following</a>
        <br />
        <a href="#">More Feeds</a>
        <br />
        <span className="border-bottom">testetsetsetetstestetstestestetset</span>
        <br />
        <p>Trending</p>
        <br />
        <span className="border-bottom">testetsetsetetstestetstestestetset</span>
        <br />
        <a href="#">Feedback</a> <br />
        <a href="#">Datenschutz</a>
        <br />
        <a href="#">Bedingungen</a> <br />
        <a href="#">Hilfe</a>
      </div>
    </div>
  );
}

export default SearchPane;
