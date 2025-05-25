import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchPane() {
  return (
    <div className="search-pane p-4 sticky-top">
      <div className="search-bar">
        <div className="input-group flex-nowrap">
          <span
            className="input-group-text"
            id="addon-wrapping"
            style={{ background: "#161e27" }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="sideIcons" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            style={{ background: "#161e27", color: "#eee" }}
          />
        </div>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Discover
        </a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Following
        </a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          More Feeds
        </a>
        <div className="hr"></div>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Feedback
        </a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Datenschutz
        </a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Bedingungen
        </a>
        <br />
        <a href="#" className="link-underline link-underline-opacity-0">
          Hilfe
        </a>
      </div>
    </div>
  );
}

export default SearchPane;
