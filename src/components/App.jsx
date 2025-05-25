import React from "react";
import MenuPane from "./MenuPane/MenuPane";
import MainPane from "./MainPane/MainPane";
import SearchPane from "./SearchPane/SearchPane";
import NewPostDialog from "./NewPostDialog/NewPostDialog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MainPane/Home/Home";
import Profile from "./MainPane/Profile/Profile";

function App() {
  const [isDialogVisible, setDialogVisible] = React.useState(false);
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <MenuPane
              isDialogVisible={isDialogVisible}
              setDialogVisible={setDialogVisible}
            />
          </div>
          <div className="col-6">
            <Routes>
              <Route path="/" element={<MainPane />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </div>
          <div className="col-3">
            <SearchPane />
          </div>
        </div>
      </div>
      {isDialogVisible && (
        <NewPostDialog
          isDialogVisible={isDialogVisible}
          setDialogVisible={setDialogVisible}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
