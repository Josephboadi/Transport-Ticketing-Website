import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  AccordionSection,
  Container,
  Dropdown,
  HeadingH1,
  Wrap,
} from "./AccordianElements";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
      <AccordionSection id="about">
        <Container>
          <HeadingH1>FAQ</HeadingH1>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 style={{ color: "#FFFFFF" }}>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p style={{ color: "#D0D0D0" }}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
