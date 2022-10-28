import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

import PaneHeader from "../pane-header";

const Faq = ({ onMenuIconPress }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <PaneHeader onMenuIconPress={onMenuIconPress} text="faq" />
      <Accordion fluid styled>
        <Accordion.Title
          onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
        >
          <Icon name="dropdown" />
          When will I receive my coupon?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            I takes about 3 minutes to proccess and deliver the order to your
            Paypal email address.
            <div>
              Please check your spam folder if you have not received the coupon
              within 3 minutes.
            </div>
          </p>
        </Accordion.Content>
        <Accordion.Title
          onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
        >
          <Icon name="dropdown" />
          My coupon is not working, what should I do?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Please contact us in one of the possible ways:
            <ol>
              <li>Send an email to lowescoupons24@gmail.com</li>
              <li>Go to the contact tab and fill the form</li>
              <li>Send inbox message on ebay</li>
            </ol>
            Please provide your paypal email address when contacting.
            <div>
              We will get back to you with help / code replacement as soon as
              possible.
            </div>
          </p>
        </Accordion.Content>
        <Accordion.Title
          onClick={() => setActiveIndex(activeIndex === 2 ? -1 : 2)}
        >
          <Icon name="dropdown" />
          Is my coupon printable? Does it include barcode?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Yes, every coupon is a printable pdf file and includes barcode that
            can be scanned by a cashier in lowes store.
          </p>
        </Accordion.Content>
        <Accordion.Title
          onClick={() => setActiveIndex(activeIndex === 3 ? -1 : 3)}
        >
          <Icon name="dropdown" />
          Can I use the coupons at any location?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>​Coupons can only be used at any location in the United States.</p>
        </Accordion.Content>
        <Accordion.Title
          onClick={() => setActiveIndex(activeIndex === 4 ? -1 : 4)}
        >
          <Icon name="dropdown" />
          Can I use coupons for any in store item?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            ​These coupon exclude following items:
            <ul>
              <li>Gift cards</li>
              <li>Previous purchases</li>
              <li>Installation services</li>
              <li>Extended protection plans</li>
              <li>Weber products</li>
              <li>Dacor</li>
              <li>ICON</li>
              <li>Fisher & Paykel</li>
              <li>Monogram</li>
              <li>Smeg</li>
              <li>Liebherr brand appliances</li>
              <li>Clearance appliances</li>
            </ul>
          </p>
        </Accordion.Content>
      </Accordion>
    </>
  );
};

export default Faq;
