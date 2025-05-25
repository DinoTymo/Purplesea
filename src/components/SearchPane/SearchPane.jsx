import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchPane() {
  return (
    <div className="search-pane">
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sideIcon" />
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
