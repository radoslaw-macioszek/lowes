import React from "react";
import { Grid, List } from "semantic-ui-react";
import PaneHeader from "../pane-header";

import styled from "@emotion/styled";

import OfferCard from "../offer-card";

import thirtyDolOff from "../../assets/thirtyDolOff.jpg";

const StyledGrid = styled(Grid)`
  display: flex !important;
  height: 100% !important;
  margin-top: 0px !important;
`;

const Column = styled(Grid.Column)`
  display: flex !important;
  justify-content: center !important;
`;

const ListItem = styled(List.Item)`
  font-size: 16px;
  font-weight: 500;
`;

const StyledColumn = styled(Column)`
  min-width: 350px !important;
  flex-direction: column;
  align-items: center;
`;

const Pane = ({ onMenuIconPress }) => (
  <>
    <PaneHeader
      color="midnightblue"
      text="$30 OFF $60 LOWES PRINTABLE COUPON"
      onMenuIconPress={onMenuIconPress}
    />
    <List bulleted>
      <ListItem>Expiration date: September</ListItem>
      <ListItem>
        <b>In-store only!</b>
      </ListItem>
      <ListItem>
        <b>Best to use within 24h</b>
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
          imageSrc={thirtyDolOff}
          header="One (1x) Lowes $30 OFF $60 entire purchase!"
          price="4.95"
          paypalId="1f13049fc0ef180409d8572af6aa8bd6"
        />
      </StyledColumn>
    </StyledGrid>
  </>
);

export default Pane;
