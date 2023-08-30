import React from "react";
import { Link } from "react-router-dom";
import { Icon, Text } from "../../atoms";
import "./index.scss";
import { PageTemplate } from "../../templates/PageTemplate";
import { AvatarText, IconText, IconText2 } from "../../molecules";
import { Table } from "../../organisms/Table";
import {
  PrimaryButton,
  StyledButton,
} from "../../styledComponents/Button/Button.styled";
import { Para, Title } from "../../styledComponents/Text/Text.styled";
import { MainSection } from "../../styledComponents/MainSection/index.styled";
import { LeftSection } from "../../styledComponents/LeftSection/index.styled";
import { LeftBase } from "../../styledComponents/LeftBase/index.styled";
import { RightSection } from "../../styledComponents/RightSection/index.styled";
import { RightBase } from "../../styledComponents/RightBase/index.styled";
import { BodySection } from "../../styledComponents/BodySection/index.styled";
import { FlexCenter, FlexCenterSpaceBetween } from "../../styledComponents/Flex/flex.styled";

export const Billing = () => {
  return (
    <PageTemplate>
      <BodySection className="billing-main">
        <FlexCenter className="btm-header">
          <div className="arrow-left">
            <Link to={"/"}>
              <Icon name="arrow-left" />
            </Link>
          </div>
          <Para margin="0 0 0 15px">Back to invoices</Para>
        </FlexCenter>
        <MainSection>
          <LeftSection>
            <LeftBase>
              <div className="flex space-between top-section ">
                <Title className="section1-header">
                  Invoice <span className="blue-num">#42D42-0001 </span>
                  <span className="small-font">for</span> $2250.65
                </Title>
                <FlexCenter className="copy-icon">
                  <Icon name="copy-icon" className="link-icon" />
                  <p>Copy link</p>
                </FlexCenter>
              </div>
              <div className="section1-para">
                <span className="span-open-para">Open</span>
                <span className="span-due-para"> Due next month</span>
              </div>
              <div className="section1-para2 flex">
                <a href="#">
                  <StyledButton
                    className="send-invoice-btn btn"
                    bgColor="dark"
                    color="white"
                  >
                    Send invoice
                  </StyledButton>
                </a>
                <a href="#">
                  <StyledButton
                    className="edit-invoice-btn btn"
                    border="2px solid #82878c6e"
                  >
                    Edit invoice
                  </StyledButton>
                </a>
                <a href="#">
                  <StyledButton
                    className="add-note-btn btn"
                    border="2px solid #82878c6e"
                  >
                    Add note
                  </StyledButton>
                </a>
              </div>
            </LeftBase>
            <LeftBase>
              <Title>History</Title>
              <div>
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice was sent to cloudnew@gmail.com"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice was finalized"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice #42D42-0001 was Created"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
              </div>
            </LeftBase>
            <LeftBase className="section3">
              <FlexCenterSpaceBetween>
                <Title>Items</Title>
                <div className="customize">
                  <IconText
                    name="slider"
                    className="slider slider-icon-para txt-primary-color"
                    text={"Customize columns"}
                  />
                </div>
              </FlexCenterSpaceBetween>
              <Table />
            </LeftBase>
          </LeftSection>
          <RightSection className="right-section">
            <RightBase className="right-section1">
              <div>
                <Title className="right-section1-header">Details</Title>
                <div className="right-section-texticon">
                  <AvatarText
                    src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                    text="Cloud Newton"
                  />
                  <IconText name="mail" text="claudnew@gmail.com" className="icon-text" />
                  <IconText name="calendar" text="Aug 5, 3:16 AM" className="icon-text" />
                  <IconText name="hashtag" text="#42D42-0001" className="icon-text" />
                </div>
                <div className="btn-div">
                  <a href="#">
                    <PrimaryButton className="invoice-btn">
                      Invoice PDF
                    </PrimaryButton>
                  </a>
                </div>
              </div>
            </RightBase>
            <RightBase className="right-section2">
              <div>
                <div className="number">24</div>
                <div className="div-after-number"></div>
                <Title className="right-section2-header mt-20">Ask us</Title>
                <Para className="mt-15">
                  If you have a question or encounter a problem, we can help you
                  anytime.
                </Para>
                <div>
                  <a href="#">
                    <PrimaryButton className="invoice-btn invoice-btn-right">
                      Ask a question
                    </PrimaryButton>
                  </a>
                </div>
              </div>
            </RightBase>
          </RightSection>
        </MainSection>
      </BodySection>
    </PageTemplate>
  );
};
