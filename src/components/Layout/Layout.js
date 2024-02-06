import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Box = styled.div`
  .app__container {
    display: flex;
    height: 90vh;
  }
`;

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handlerToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <Box>
      <Header handlerToggleSidebar={handlerToggleSidebar} />
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          handlerToggleSidebar={handlerToggleSidebar}
        />

        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </Box>
  );
};

export default Layout;
