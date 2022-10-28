import React from "react";
import { Grid, List } from "semantic-ui-react";
import PaneHeader from "../pane-header";

import styled from "@emotion/styled";

import OfferCard from "../offer-card";

import thirty$OffImg from "../../assets/30$.png";

const StyledGrid = styled(Grid)`
  display: flex !important;
  height: 100% !important;
  margin-top: 0px !important;
`;

const Column = styled(Grid.Column)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

const ListItem = styled(List.Item)`
  font-size: 16px;
  font-weight: 500;
`;

const StyledColumn = styled(Column)`
  min-width: 250px !important;

  flex-direction: column;
`;

const ResponsiveStyledColumn = styled(StyledColumn)`
  @media (max-width: 480px) {
    display: none !important;
  }
`;

const ResponsiveOfferCard = styled(OfferCard)`
  position: relative;
  top: -2px;
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: ${({ isMiddle }) =>
    isMiddle ? "0px" : "1px"} !important;
  border-bottom-right-radius: ${({ isMiddle }) =>
    isMiddle ? "0px" : "1px"} !important;
  ${({ isMiddle }) => isMiddle && "border-bottom: 0px !important"};

  @media (min-width: 480px) {
    display: none !important;
  }
`;

const Pane = ({ onMenuIconPress }) => (
  <>
    <PaneHeader
      onMenuIconPress={onMenuIconPress}
      color="steelblue"
      text="$30 OFF $50 LOWES PRINTABLE COUPON"
    />
    <List bulleted>
      <ListItem>
        <b>In-store only!</b>
      </ListItem>
      <ListItem>
        <b>Not applicable for on sale items!</b>
      </ListItem>
      <ListItem>
        <b>Expiration date: 7 days from purchase</b>
      </ListItem>
      <ListItem>
        Delivered to your paypal associated email within 3 minutes
      </ListItem>
      <ListItem>
        Guaranteed replacement / full refund in case of invalid code
      </ListItem>
      <ListItem>One code is valid for one purchase</ListItem>
      <ListItem>Coupon does not stack up with other</ListItem>
    </List>

    <StyledGrid stackable columns={1}>
      <StyledColumn>
        <OfferCard
          imageSrc={thirty$OffImg}
          header="One (1x) Lowes $30 OFF $50 entire purchase!"
          price="5.99"
          paypalId="f064792a2295a9bc08ea13b4383bdfda"
        />
      </StyledColumn>
    </StyledGrid>
  </>
);

export default Pane;
