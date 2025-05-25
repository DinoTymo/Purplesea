import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchLinks from "./SearchLinks";
import SupportLinks from "./SupportLinks";

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
      </div>
      <SearchLinks />
      <div className="hr"></div>
      <br />
      <SupportLinks />
    </div>
  );
}

export default SearchPane;
