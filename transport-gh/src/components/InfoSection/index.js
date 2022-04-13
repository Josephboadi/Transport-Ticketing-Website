import React, { useEffect } from "react";
import { Button, ButtonR } from "../ButtonElement";
import { motion } from "framer-motion";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  path,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1
              data-aos="fade-up"
              data-aos-offset="200"
              // data-aos-delay="600"
              // delay= 100,
              data-aos-easing="ease-in-sine"
              data-aos-duration="900">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonR
                    to={path}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}>
                    {buttonLabel}
                  </ButtonR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2
              data-aos="zoom-out-down"
              // data-aos-offset="200"
              // data-aos-easing="ease-in-sine"
              data-aos-delay="800"
              data-aos-duration="1400">
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
