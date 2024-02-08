import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import MiniVideo from "../../../components/video/MiniVideo";
import Video from "../../../components/video/Video";
import Comment from "../../../components/comments/Comment";

const Box = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: row;
  overflow-x: hidden;

  .left {
    width: 80%;
    height: 100vh;
    border: 1px solid;

    .box {
      width: 100%;
      height: 80vh;
      /* border: 20px solid red; */
      display: flex;
      flex-direction: column;
    }
  }

  .right {
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* position: sticky; */
    gap: 80px;
    .video-box {
      padding: 10px;
      height: 20vh;
    }
  }
`;

// const Box = styled.div`
//   .login {
//     height: 100vh;
//     display: grid;
//     place-items: center;

//     &__container {
//       background-color: #121417;
//       padding: 2rem;
//       margin: 0 1rem;
//       border-radius: 10px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;

//       button {
//         padding: 0.5rem;
//         border: none;
//         border-radius: 5px;
//         margin-bottom: 1rem;
//         &:focus {
//           outline: none;
//         }
//       }
//     }
//     img {
//       width: 130px;
//       height: 130px;
//       object-fit: contain;
//     }
//   }
// `;

const FullScreen = () => {
  // return (
  //   <Box>
  //     <div className="login">
  //       <div className="login__container">
  //         <img
  //           src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
  //           alt=""
  //         />
  //         <button>Login With Google</button>
  //         <p>This Project is made using YOUTUBE DATA API</p>
  //       </div>
  //     </div>
  //   </Box>
  // );
  // return (
  //   <Box>
  //     <div className="left">
  //       <div className="box">
  //         <Video />
  //       </div>
  //     </div>
  //     <div className="right">
  //       <div className="video-box">
  //         <MiniVideo />
  //       </div>
  //       <div className="video-box">
  //         <MiniVideo />
  //       </div>
  //       <div className="video-box">
  //         <MiniVideo />
  //       </div>
  //       <div className="video-box">
  //         <MiniVideo />
  //       </div>
  //       <div className="video-box">
  //         <MiniVideo />
  //       </div>
  //     </div>
  //   </Box>
  // );
  return (
    <Box>
      <Container fluid>
        <Row>
          <Col xs={9} className="eight">
            <Video />
          </Col>

          <Col xs={3} className="four">
            <Row className="row">
              {[...new Array(12)].map(() => (
                <Col>
                  <Video />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default FullScreen;
