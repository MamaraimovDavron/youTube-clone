import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  .categoriesBar {
    padding: 0.5rem 0;
    font-size: 0.8rem;

    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }

    scrollbar-width: none;
    span {
      margin-right: 1rem;
      padding: 0.5rem;

      white-space: nowrap;
      border: 1.5px solid #b1bdb4;
      border-radius: 999px;

      &:hover {
        background-color: #374a59;
      }

      &.active {
        color: #fff;
        background-color: #606060;
        border-color: #4c4c4c;
      }
    }
  }
`;

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <Box>
      <div className="categoriesBar">
        {keywords.map((value, index) => (
          <span
            onClick={() => handleClick(value)}
            key={index}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        ))}
      </div>
    </Box>
  );
};

export default CategoriesBar;
