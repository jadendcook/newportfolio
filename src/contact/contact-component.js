import React, { Fragment } from "react";
import ContactForm from "../contact-form/contact-form";

import { PageContainer } from "./style";

const Contact = () => {
  return (
    <PageContainer id="contact">
      <h2>Contact</h2>
      <h3>Get In Touch</h3>
      <div className="image-container">
        <img src="images/main-flower.png"></img>
      </div>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;
