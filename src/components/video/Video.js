import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";

// import YouTube from "react-youtube";
// import Link from "react-router-dom";
// import ReactPlayer from "react-player";

const Box = styled.div`
  .video {
    margin-bottom: 1rem;
    /* padding: 0.7rem; */
    font-weight: 500;
    font-size: 0.9rem;
    position: relative;
    cursor: pointer;

    .icon-1 {
      width: 100%;
      height: 100%;
      border-radius: 14px;
      /* border: 1px solid; */
      opacity: 0.1;
      background-color: red;
      /* z-index: -1; */
      top: 0;
      position: absolute;
    }
    .icon-2 {
      width: 100%;
      height: 100%;
      border-radius: 14px;
      /* border: 1px solid; */
      opacity: 0.1;
      background-color: red;
      z-index: -1;
      top: 0;
      position: absolute;
    }

    &__top {
      margin-top: 0.5rem;
      position: relative;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        bottom: 0.3rem;
        right: 0.3rem;

        padding: 0.2rem;
        background: #080808ec;
        border-radius: 3px;
      }
    }

    &__title {
      margin-bottom: 0.1rem;
      color: #fff;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    &__details {
      display: flex;
      align-items: center;
      margin: 0.5rem 0;

      img {
        width: 36px;
        height: 36px;

        border-radius: 50%;
        margin-right: 0.5rem;
        cursor: pointer;
      }

      p {
        margin-bottom: 0;
      }
    }

    &__channel {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

const Video = () => {
  const [state, setState] = useState(true);

  return (
    <Box>
      <div className="video">
        <div className="video__top">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sNqfQZI9WdU"
            width="100%"
            height="100%"
            controls
          />
          <div
            className={state ? "icon-1" : "icon-2"}
            onClick={() => {
              setState(!state);
            }}
          ></div>
        </div>
        <div className="video__title">
          Create app in 5 minutes #made by Davron
        </div>
        <div className="video__details">
          <span>
            <AiFillEye /> 5 m Views •
          </span>
          <span> 5 days ago</span>
        </div>
        <div className="video__channel">
          <img
            src="https://yt3.ggpht.com/ynWxDjwmLcCSk370SQ8JXqpovHDzCBIwqpz-cNuaanMO7xcmrVCly6T5T-z7M9BaTcUJ9GY2wQ=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p>Rainbow Hat Jr</p>
        </div>
      </div>
    </Box>
  );
};

export default Video;
