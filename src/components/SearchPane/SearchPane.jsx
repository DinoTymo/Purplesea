import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchPane() {
  return (
    <div className="search-pane sticky-top">
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sideIcon" />
        <input type="text" placeholder="Search" />
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">Discover</a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">Following</a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">More Feeds</a>
        <br />
        <span className="border-bottom">testetsetsetetstestetstestestetset</span>
        <br />
        <p>Trending</p>
        <br />
        <span className="border-bottom">testetsetsetetstestetstestestetset</span>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">Feedback</a> <br />
        <a href="#" className="link-underline link-underline-opacity-0">Datenschutz</a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">Bedingungen</a> <br />
        <a href="#" className="link-underline link-underline-opacity-0">Hilfe</a>
      </div>
    </div>
  );
}

export default SearchPane;
