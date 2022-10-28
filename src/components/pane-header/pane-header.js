import React from "react";
import { Header } from "semantic-ui-react";
import styled from "@emotion/styled";
import { Icon } from "semantic-ui-react";

const HeaderText = styled.div`
  font-weight: 700;
  padding-top: 15px;
  padding-bottom: 10px;
  color: ${({ color }) => color};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  //@media (max-width: 480px) {
  //  margin-left: 60px !important;
  //}
`;

const StyledIcon = styled(Icon)`
  margin-left: 10px;
  margin-right: 20px !important;

  @media (min-width: 480px) {
    display: none !important;
  }
`;

const PaneHeader = ({ text, color, onMenuIconPress }) => (
  <StyledHeader dividing>
    <Wrapper>
      <StyledIcon onClick={onMenuIconPress} name="bars" size="large" />
      <HeaderText color={color}>{text.toUpperCase()}</HeaderText>
    </Wrapper>
  </StyledHeader>
);

export default PaneHeader;
