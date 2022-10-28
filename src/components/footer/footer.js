import React from "react";
import styled from "@emotion/styled";

import { FaRegCopyright, FaMailBulk } from "react-icons/fa";

import ebayLogo from "../../assets/ebay-logo.png";

const EBAY_URL =
  "https://www.ebay.com/sch/e-codes/m.html?_nkw=&_armrs=1&_ipg=&_from=";

const Container = styled.div`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 100px !important;
  bottom: 0;
  z-index: 1000;
  padding: 20px;

  div {
    color: #fff;
  }

  //@media (max-width: 480px) {
  //  flex-direction: column;
  //}
`;

const CopyrightIcon = styled(FaRegCopyright)`
  margin-right: 5px;

  position: relative;
  top: 4px;

  @media (max-width: 320px) {
    position: relative;
    top: 3px;
  }
`;

const MailIcon = styled(FaMailBulk)`
  position: relative;
  top: 2px;
  margin-right: 5px;

  @media (max-width: 320px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const EbayWrapper = styled.a`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CopyrightWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 20px;
  font-size: 12px;

  display: flex;
  flex-direction: row;
`;

const EbayLogoImage = styled.img`
  width: 120px;
  height: 50px;

  @media (max-width: 480px) {
    width: 60px;
    height: 25px;
  }
`;

const MailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <EbayWrapper href={EBAY_URL} target="_blank">
        <Text>Visit us on:</Text>
        <EbayLogoImage src={ebayLogo} />
      </EbayWrapper>
      <div>
        <Text>Contact:</Text>
        <MailWrapper>
          <MailIcon />
          <a href="mailto:lowescoupons24@gmail.com">
            <Text>lowescoupons24@gmail.com</Text>
          </a>
        </MailWrapper>
      </div>
    </Wrapper>
    <CopyrightWrapper>
      <CopyrightIcon />
      <Text>lowescoupons24.com</Text>
    </CopyrightWrapper>
  </Container>
);

export default Footer;
