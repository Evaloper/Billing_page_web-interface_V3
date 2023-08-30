import React from "react";
import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  position: relative;
  bottom: 80px;
  margin-left: 50px;
  margin-right: 20px;
  @media screen and (min-width: 700px) and (max-width: 768px) {
    margin-left: 35px;
  }

  @media screen and (min-width: 500px) and (max-width: 700px) {
    display: block;
    margin-left: 20px;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    display: block;
    margin-left: 20px;
  }
`;
