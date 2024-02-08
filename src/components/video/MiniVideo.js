import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import Video from "./Video";
// import YouTube from "react-youtube";
// import Link from "react-router-dom";
// import ReactPlayer from "react-player";

// const Box = styled.div`
//   .video {
//     margin-bottom: 1rem;
//     /* padding: 0.7rem; */
//     height: 100%;
//     font-weight: 500;
//     font-size: 0.9rem;

//     cursor: pointer;

//     &__top {
//       margin-top: 0.5rem;
//       position: relative;
//       img {
//         width: 100%;
//       }
//       span {
//         position: absolute;
//         bottom: 0.3rem;
//         right: 0.3rem;

//         padding: 0.2rem;
//         background: #080808ec;
//         border-radius: 3px;
//       }
//     }

//     &__title {
//       margin-bottom: 0.1rem;
//       color: #fff;

//       overflow: hidden;
//       display: -webkit-box;
//       -webkit-line-clamp: 1;
//       -webkit-box-orient: vertical;
//     }

//     &__details {
//       display: flex;
//       align-items: center;
//       margin: 0.5rem 0;

//       img {
//         width: 36px;
//         height: 36px;

//         border-radius: 50%;
//         margin-right: 0.5rem;
//         cursor: pointer;
//       }

//       p {
//         margin-bottom: 0;
//       }
//     }

//     &__channel {
//       display: flex;
//       flex-direction: row;
//       align-items: center;
//       gap: 10px;
//       img {
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//       }

//       p {
//         margin: 0;
//         padding: 0;
//       }
//     }
//   }
// `;

const Box = styled.div`
  .eight {
    height: 100vh;
    border: 1px solid;
    padding: 20px;
  }

  .four {
    height: 100vh;
    border: 1px solid;
    padding: 20px;
    .row {
      display: flex;
      flex-direction: column;
    }
  }
`;

const MiniVideo = () => {
  //   return (
  //     <Box>
  //       <Link to="/mini">
  //         <div className="video">
  //           <div className="video__top">
  //             <ReactPlayer
  //               url="https://www.youtube.com/watch?v=sNqfQZI9WdU"
  //               width="100%"
  //               height="100%"
  //               controls
  //             />
  //           </div>
  //           <div className="video__title">
  //             Create app in 5 minutes #made by Davron
  //           </div>
  //           <div className="video__details">
  //             <span>
  //               <AiFillEye /> 5 m Views •
  //             </span>
  //             <span> 5 days ago</span>
  //           </div>
  //           <div className="video__channel">
  //             <img
  //               src="https://yt3.ggpht.com/ynWxDjwmLcCSk370SQ8JXqpovHDzCBIwqpz-cNuaanMO7xcmrVCly6T5T-z7M9BaTcUJ9GY2wQ=s68-c-k-c0x00ffffff-no-rj"
  //               alt=""
  //             />
  //             <p>Rainbow Hat Jr</p>
  //           </div>
  //         </div>
  //       </Link>
  //     </Box>
  //   );

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

export default MiniVideo;
