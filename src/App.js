import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <div className="app-container border border-info">
        <Sidebar />
      </div>
      <Container fluid className="app__main border border-warning">
        <HomeScreen />
      </Container>
    </>
  );
}

export default App;
