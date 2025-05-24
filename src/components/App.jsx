import React from "react";
import MenuPane from "./MenuPane/MenuPane";
import MainPane from "./MainPane/MainPane";
import SearchPane from "./SearchPane/SearchPane";
import NewPostDialog from "./NewPostDialog/NewPostDialog";

function App() {
  const [isDialogVisible, setDialogVisible] = React.useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <MenuPane
              isDialogVisible={isDialogVisible}
              setDialogVisible={setDialogVisible}
            />
          </div>
          <div className="col-6">
            <MainPane />
          </div>
          <div className="col-3">
            <SearchPane />
          </div>
        </div>
      </div>
      {isDialogVisible && <NewPostDialog />}
    </>
  );
}

export default App;
