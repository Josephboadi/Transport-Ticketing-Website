import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroBtnsWrapper,
  HeroBtnsStoreIconWrapper,
  HeroBtnsStoreInfoWrapper,
  HeroBtnsStoreTextWrapper,
  HeroBtnsStoreText2Wrapper,
  Img,
  HeroContainer,
  HeroContent,
  ButtonRight,
  HeroH1,
  HeroP,
  VideoBg,
  Hero1H1,
} from "./HeroElements";
// import appleImg from "../../../public/APP_STORE_BTN.svg";
// import googleImg from "../../../public/PLAY_STORE_BTN.svg";
import { FaGooglePlay, FaApplePay } from "react-icons/fa";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={`https://res.cloudinary.com/dblprzex8/video/upload/v1627217553/video_lhsrqj.mp4`}
          alt={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <Hero1H1>Travel gh</Hero1H1>
        <HeroH1>Think Traveling. We Make it Easy.</HeroH1>
        <HeroP>
          Sign up for a whole new level of convenience in traveling today.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroBtnsWrapper>
          <ButtonRight>
            <Img
              src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818736/APP_STORE_BTN_qmcwvv.svg"
              alt="Apple"
            />
            {/* <HeroBtnsStoreIconWrapper>
              <FaApplePay />
            </HeroBtnsStoreIconWrapper>
            <HeroBtnsStoreInfoWrapper>
              <HeroBtnsStoreText2Wrapper>
                Download on the
              </HeroBtnsStoreText2Wrapper>
              <HeroBtnsStoreTextWrapper>App Store</HeroBtnsStoreTextWrapper>
            </HeroBtnsStoreInfoWrapper> */}
          </ButtonRight>
          <ButtonRight>
            <Img
              src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818735/PLAY_STORE_BTN_ntjlri.svg"
              alt="Google"
            />
            {/* <HeroBtnsStoreIconWrapper>
              <FaGooglePlay />
            </HeroBtnsStoreIconWrapper>
            <HeroBtnsStoreInfoWrapper>
              <HeroBtnsStoreText2Wrapper>GET IT ON</HeroBtnsStoreText2Wrapper>
              <HeroBtnsStoreTextWrapper>Google Play</HeroBtnsStoreTextWrapper>
            </HeroBtnsStoreInfoWrapper> */}
          </ButtonRight>
        </HeroBtnsWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
