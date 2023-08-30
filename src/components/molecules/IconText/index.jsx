import React from "react";
import { Icon } from "../../atoms";
import "./index.scss";
import { Para } from "../../styledComponents/Text/Text.styled";

export const IconText = ({ name, text, className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Icon name={name} className={className} />
      <Para
        className={className}
        style={{ fontWeight: 400, marginLeft: "10px" }}
      >
        {text}
      </Para>
    </div>
  );
};
