import React from "react";
import MenuPane from "./MenuPane/MenuPane";
import MainPane from "./MainPane/MainPane";
import SearchPane from "./SearchPane/SearchPane";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <MenuPane />
        </div>
        <div className="col-6">
          <MainPane />
        </div>
        <div className="col-3">
          <SearchPane />
        </div>
      </div>
    </div>
  );
}

export default App;
