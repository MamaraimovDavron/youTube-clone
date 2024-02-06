import React from "react";
import styled from "styled-components";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

const Box = styled.div`
  .sidebar {
    background: #121417;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 90vh;
    padding-top: 2rem;
    transition: transform 0.2s ease-in;

    li {
      display: flex;
      align-items: center;
      padding: 0.6rem 1.5rem;
      margin: 0.2rem 0;
      cursor: pointer;

      span {
        margin-left: 1rem;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;
      }

      &:hover {
        background-color: #4c4c4c;
      }
    }

    hr {
      background-color: #4c4c4c;
    }

    &.open {
      transform: translateX(0);
    }
  }

  @media (max-width: 1224px) {
    .sidebar {
      width: 90px;
      li {
        justify-content: center;
      }
      span {
        display: none;
      }
    }
  }

  @media (max-width: 520px) {
    .sidebar {
      transform: translateX(-100%);
      position: fixed;
      z-index: 999;
    }
  }
`;

const Sidebar = ({ sidebar, handlerToggleSidebar }) => {
  return (
    <Box>
      <nav
        className={sidebar ? "sidebar open" : "sidebar"}
        onClick={() => handlerToggleSidebar(false)}
      >
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
        <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </li>
        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>

        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don`t know</span>
        </li>

        <hr />

        <li>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>
        <hr />
      </nav>
    </Box>
  );
};

export default Sidebar;
