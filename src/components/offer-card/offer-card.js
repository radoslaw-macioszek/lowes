import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa";

import addCart from "../../assets/addcart.png";
import buyNow from "../../assets/buynow.png";

const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  box-shadow: 10px 10px 5px grey !important;
  border: solid 1px grey !important;
  margin: 0 !important;
`;

const StyledCardDescription = styled(Card.Description)`
  font-weight: 500;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: forestgreen;
  align-self: center;
  text-align: center;
`;

const PriceIcon = styled(FaDollarSign)`
  position: relative;
  top: 3px;
`;

export default class OfferCard extends Component {
  render() {
    const {
      imageSrc,
      header,
      description,
      price,
      paypalId,
      addToCart,
      ...props
    } = this.props;
    return (
      <StyledCard {...props}>
        <Image src={imageSrc} />
        <Card.Content>
          <Card.Header textAlign="center">{header}</Card.Header>
          <StyledCardDescription>
            {description && <div>{description}</div>}
            <Price>
              Price: <PriceIcon />
              {price}
            </Price>
          </StyledCardDescription>
        </Card.Content>
        <Card.Content extra>
          <ExtraContainer>
            <form
              action="https://panel.keysender.co.uk/paypal/button"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="id" value={paypalId} />
              <input
                type="image"
                src={buyNow}
                border="0"
                name="submit"
                alt="Make payments with PayPal - it's fast, free and secure!"
              />
            </form>
            <form
              action="https://panel.keysender.co.uk/paypal/addcart"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="id" value={paypalId} />
              <input
                type="image"
                src={addCart}
                border="0"
                name="submit"
                alt="Make payments with PayPal - it's fast, free and secure!"
              />
            </form>
          </ExtraContainer>
        </Card.Content>
      </StyledCard>
    );
  }
}
