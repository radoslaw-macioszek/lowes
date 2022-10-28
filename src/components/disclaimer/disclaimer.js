import React from "react";

import PaneHeader from "../pane-header";
import styled from "@emotion/styled";

const MiddleParagraph = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Disclaimer = ({ onMenuIconPress }) => (
  <>
    <PaneHeader onMenuIconPress={onMenuIconPress} text="Disclaimer" />
    <div>
      <h3>All coupons are free of charge on lowescoupons24.com</h3>
    </div>
    <MiddleParagraph>
      You are paying for our service, not coupons. The service fees cover our
      cost of maintaining, clipping, grouping, managing & mailing the coupons.
      Therefore, you are paying for our time and effort to send these coupons &
      our Prompt Service, not the actual coupons themselves.
    </MiddleParagraph>
    <div>
      We are an independent website and in no way affiliated with ©Lowe’s or
      ©lowes.com and any other retailer’s companies.
    </div>
  </>
);

export default Disclaimer;
