import React from "react";
import styled from "styled-components";

const Box = styled.div`
  .login {
    height: 100vh;
    display: grid;
    place-items: center;

    &__container {
      background-color: #121417;
      padding: 2rem;
      margin: 0 1rem;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        margin-bottom: 1rem;
        &:focus {
          outline: none;
        }
      }
    }
    img {
      width: 130px;
      height: 130px;
      object-fit: contain;
    }
  }
`;

const LoginScreen = () => {
  return (
    <Box>
      <div className="login">
        <div className="login__container">
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
          <button>Login With Google</button>
          <p>This Project is made using YOUTUBE DATA API</p>
        </div>
      </div>
    </Box>
  );
};

export default LoginScreen;
