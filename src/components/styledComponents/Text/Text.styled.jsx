import React from "react";
import styled from "styled-components";

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;

  @media screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Para = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};

  @media screen and (min-width: 280px) and (max-width: 400px){
    font-size: 14px;
  }
`;
