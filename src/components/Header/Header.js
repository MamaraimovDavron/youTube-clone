import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import avatar from "../../avatar/1ШЕНГЕН 3.jpg";

const Box = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background-color: #16181b;
    height: 10vh;
    width: 100%;
    &__menu {
      display: none;
    }

    &__logo {
      width: 30px;
      height: 30px;
      object-fit: contain;
      display: block;
    }

    form {
      flex: 0.6;
      display: flex;
      padding: 0.1rem;
      margin: 0.1rem;
      border-radius: 3px;
      border: 1.2px solid;
      background-color: #121417;
      input {
        width: 100%;
        border: none;
        font-weight: 500;
        background: transparent;
        padding: 0.3rem;
        color: #b1bdb4;

        &:focus {
          outline: none;
        }
      }
    }

    button {
      padding: 0 1.25rem;
      color: #b1bdb4;
      background: transparent;
      border: none;
      &:focus {
        border: none;
      }
    }

    &__icons {
      flex: 0.15;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        border-radius: 50%;
        width: 40px;
        object-fit: contain;
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 520px) {
    .header {
      padding: 1rem;

      form {
        flex: 1;
      }

      &__menu {
        display: block;
      }

      &__logo {
        display: none;
      }

      &__icons .icon {
        display: none;
      }
    }
  }
`;

const Header = ({ handlerToggleSidebar }) => {
  return (
    <Box>
      <div className="border border-dark header">
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handlerToggleSidebar()}
        />

        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />

        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>

        <div className="header__icons">
          <MdNotifications size={28} className="icon" />
          <MdApps size={28} className="icon" />
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Box>
  );
};

export default Header;
