import React, { useState } from "react";
import axios from "axios";
import { Form, Message } from "semantic-ui-react";

import PaneHeader from "../pane-header";

const contactUrl =
  "https://la5lsg4r9i.execute-api.us-east-1.amazonaws.com/dev/email/send";

const Contact = ({ onMenuIconPress }) => {
  const [email, setEmail] = useState();
  const [content, setContent] = useState();
  const [hasContactError, setContactError] = useState(false);
  const [isSent, setSent] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSendPress = async () => {
    try {
      setLoading(true);
      await axios.post(contactUrl, {
        email,
        content
      });
      setSent(true);
    } catch (e) {
      setContactError(true);
    }

    setLoading(false);
    setEmail("");
    setContent("");
  };

  const handleStartTyping = () => {
    setSent(false);
    setContactError(false);
  };

  const handleSetEmail = e => {
    handleStartTyping();
    setEmail(e.target.value);
  };

  const handleSetContent = e => {
    handleStartTyping();
    setContent(e.target.value);
  };

  return (
    <>
      <PaneHeader onMenuIconPress={onMenuIconPress} text="Contact" />
      <Form loading={isLoading} success={isSent} error={hasContactError}>
        <Message
          success
          content="Thank you for contacting with us, we will contact you shortly."
          header="Your message have been sent"
        />
        <Form.Field required>
          <label>
            Email associated with your <b>Paypal</b> account
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={handleSetEmail}
          />
        </Form.Field>
        <Form.Field required>
          <label>Description</label>
          <textarea value={content} onChange={handleSetContent} required />
        </Form.Field>
        <Form.Button onClick={handleSendPress}>Submit</Form.Button>
      </Form>
    </>
  );
};

export default Contact;
