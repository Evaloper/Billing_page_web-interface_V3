import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: ${(props) => props.border};
  background-color: ${(props) =>
    props.bgColor === "dark" ? "#1f2125" : "#ffffff"};
  color: ${(props) => (props.color === "white" ? "#ffffff" : "#1f2125")};
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  padding: 12px 35px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 400;
  @media screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 12px;
    padding: 10px 20px;
    font-weight: 400;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
    font-size: 14px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 15px 0;
  background-color: #6681e8;
  font-size: 14px;
  border: none;
  border-radius: 12px;
  text-align: center;
  margin-top: 25px;
  color: #fff;
  width: 100%;

  @media screen and (min-width: 700px) and (max-width: 768px) {
    padding: 10px 0;
  }
`;
