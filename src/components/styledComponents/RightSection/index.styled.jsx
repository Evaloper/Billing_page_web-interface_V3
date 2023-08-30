import React from "react";
import styled from "styled-components";

export const RightSection = styled.div`
  width: 35%;
  margin-right: 15px;

  @media screen and (min-width: 500px) and (max-width: 768px) {
    margin-right: 0;
  }

  @media screen and (min-width: 500px) and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 14px;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    width: 100%;
    margin-top: 25px;
  }
`;
