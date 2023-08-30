import React from "react";
import styled from "styled-components";

export const RightBase = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.0392156863);
  margin-top: 25px;

  @media screen and (min-width: 500px) and (max-width: 700px) {
    width: 49%;
    margin-top: 0;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    padding: 30px 20px;
  }
`;
