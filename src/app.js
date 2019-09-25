import React from "react";
import "./App.css";

import Topbar from "./components/Topbar";
import PostList from "./components/PostList";

function App() {
  var name = "Jean";
  return (
    <>
      <Topbar />
      <PostList/>
    </>
  );
}
export default App;
