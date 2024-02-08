import React from "react";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import FullScreen from "./screens/homeScreen/fullScreen/FullScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MiniVideo from "./components/video/MiniVideo";
import Video from "./components/video/Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        ></Route>

        <Route path="/full" element={<FullScreen />}></Route>

        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Results1111</h1>
              <Video />
            </Layout>
          }
        ></Route>

        <Route path="/mini" element={<MiniVideo></MiniVideo>}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
