import React from "react";
import { Icon, Text } from "../../atoms";
import "./index.scss";
import { Para } from "../../styledComponents/Text/Text.styled";
import { FlexCenter } from "../../styledComponents/Flex/flex.styled";

export const IconText2 = ({ name, text, className, text2 }) => {
  return (
    <FlexCenter className={"flex align-centered mt-20"}>
      <FlexCenter className="text-icon">
        <Icon name={name} className={className} />
      </FlexCenter>
      <div className="ml-20 txt-icon-para_date">
        <Para
          className={"txt-icon-para"}
        >
          {text}
        </Para>
        <Para className={"txt-icon-date"}>
          {text2}
        </Para>
      </div>
    </FlexCenter>
  );
};
