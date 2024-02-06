import React from "react";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/homeScreen/loginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

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
        >
          {/* <HomeScreen /> */}
        </Route>

        <Route path="/auth" element={<LoginScreen />}></Route>

        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Results</h1>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
