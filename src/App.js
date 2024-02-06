import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import styled from "styled-components";
import LoginScreen from "./screens/homeScreen/loginScreen/LoginScreen";

const Box = styled.div`
  .app__container {
    display: flex;
    height: 90vh;
  }
`;

function App() {
  const [sidebar, toggleSidebar] = useState(false);

  const handlerToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    // <Box>
    //   <Header handlerToggleSidebar={handlerToggleSidebar} />
    //   <div className="app__container">
    //     <Sidebar
    //       sidebar={sidebar}
    //       handlerToggleSidebar={handlerToggleSidebar}
    //     />

    //     <Container fluid className="app__main">
    //       <HomeScreen />
    //     </Container>
    //   </div>
    // </Box>
    <LoginScreen />
  );
}

export default App;
