import React, { useState } from "react";
import {
  ContactSection,
  Container,
  HeadingH1,
  Form,
  Label,
  Input,
  TextArea,
  InfoWrapper,
  ImgWrap,
  Img,
  InfoRow,
  Column1,
  Column2,
} from "./ContactElement";
import emailjs from "emailjs-com";
// import { InfoWrapper } from "../InfoSection/InfoElements";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const imgStart = false;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_280rt5d",
        "template_33npugk",
        e.target,
        "user_EQZMwmADK9zH3BBwqiYu3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <ContactSection id="contact">
      {/* <Container> */}

      <HeadingH1>Contact Us</HeadingH1>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <ImgWrap>
              <Img
                src={
                  "https://res.cloudinary.com/dblprzex8/image/upload/v1631396187/undraw_Mail_re_duel_klrmd5.svg"
                }
                alt="Image"
              />
            </ImgWrap>
          </Column1>
          <Column2>
            <Form className="row" onSubmit={sendEmail}>
              <Label style={{ color: "#6C63FF", fontWeight: "bold" }}>
                Name
              </Label>
              <Input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label
                style={{
                  color: "#6C63FF",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}>
                Email
              </Label>
              <Input
                type="email"
                name="user_email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label
                style={{
                  color: "#6C63FF",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}>
                Message
              </Label>
              <TextArea
                name="message"
                rows="6"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Input
                type="submit"
                value="Send"
                className="form-control btn btn-info"
                style={{
                  marginTop: "30px",
                  fontSize: "20px",
                  backgroundColor: "#6C63FF",
                }}
              />
            </Form>
          </Column2>
        </InfoRow>
      </InfoWrapper>
      {/* </Container> */}
    </ContactSection>
  );
};

export default Contact;
