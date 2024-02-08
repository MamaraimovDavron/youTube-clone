import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  .app__container {
    display: flex;
  }

  .app__main {
    /* border: 2px solid red; */
    .link {
      text-decoration: none;
      color: white;
    }
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
          <Link className="link" to="/mini">
            {children}
          </Link>
        </Container>
      </div>
    </Box>
  );
};

export default Layout;
