import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroSection as HeroCon,
  HeroH1,
  HeroP,
  ImageBg,
  HeroWrapper,
  HeroBtnsWrapper,
  ButtonRight,
  Img,
  HeroSlide,
  HeroSlider,
  HeroImage,
  PrevArrow,
  NextArrow,
  SliderButton,
} from "./HeroElements";
import Image from "../../images/driver.jpg";
import { Button, ButtonR } from "../ButtonElement";
import appleImg from "../../images/APP_STORE_BTN.svg";
import googleImg from "../../images/PLAY_STORE_BTN.svg";
import Loader from "../Loader";
import { SliderDataOne } from "./data";
import { fetchClient } from "../../redux/actions/dataActions";

const HeroSection = (props) => {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  const { slides, dat, loading } = props;

  // const { loading } = useSelector((state) => state.data);
  // const client = useSelector((state) => state.data.client);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const { compId } = props.match.params;
  //   console.log(props);
  //   const payload = {
  //     params: {
  //       compId,
  //     },
  //   };
  //   dispatch(fetchClient(compId));
  // }, []);

  // const length = client.imageUrl.length;

  // if (dat) {
  //   console.log(dat);
  // }

  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (dat) {
      const length = dat.imageUrl.length;
      setCurrent(current === length - 1 ? 0 : current + 1);
    }

    // console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (dat) {
      const length = dat.imageUrl.length;
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    // console.log(current);
  };

  useEffect(() => {
    const nextSlide = () => {
      if (dat.imageUrl) {
        const length = dat.imageUrl.length;
        setCurrent((current) => (current === length - 1 ? 0 : current + 1));
      }
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current]);

  if (!Array.isArray(dat.imageUrl) || dat.imageUrl.length <= 0) {
    return null;
  }

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      {/* {loading ? // <Loader marginTop="100px" />
      null : ( */}
      <HeroCon>
        <HeroWrapper>
          <HeroSlide>
            {dat.imageUrl <= 0 ? (
              <Loader />
            ) : (
              dat.imageUrl.map((slide, index) => {
                return (
                  index === current && (
                    <HeroSlider key={index}>
                      <HeroImage src={slide.img} alt={slide.alt} />
                      <HeroContent>
                        <h1>{dat.name}</h1>
                        <p>{dat.motto}</p>
                        <HeroBtnWrapper>
                          <Button
                            primary
                            to="ticket"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                            Search Trip{" "}
                            {hover ? <ArrowForward /> : <ArrowRight />}
                          </Button>
                        </HeroBtnWrapper>
                        <HeroBtnsWrapper>
                          <ButtonRight>
                            <Img
                              src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818736/APP_STORE_BTN_qmcwvv.svg"
                              alt="Apple"
                            />
                          </ButtonRight>
                          <ButtonRight>
                            <Img
                              src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818735/PLAY_STORE_BTN_ntjlri.svg"
                              alt="Google"
                            />
                          </ButtonRight>
                        </HeroBtnsWrapper>
                      </HeroContent>
                    </HeroSlider>
                  )
                );
              })
            )}
          </HeroSlide>

          <SliderButton>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButton>
        </HeroWrapper>
      </HeroCon>
      {/* )} */}
    </>
    // <HeroContainer>
    //   <HeroBg>
    //     <ImageBg src={Image} alt="driver" />
    //   </HeroBg>
    //   <HeroContent>
    //     <HeroH1>VIP Company Limited</HeroH1>
    //     <HeroP>We serve Comfort and Safty at Affordable Price.</HeroP>
    // <HeroBtnWrapper>
    //   <Button
    //     to="ticket"
    //     onMouseEnter={onHover}
    //     onMouseLeave={onHover}
    //     smooth={true}
    //     duration={500}
    //     spy={true}
    //     exact="true"
    //     offset={-80}>
    //     Book ticket {hover ? <ArrowForward /> : <ArrowRight />}
    //   </Button>
    // </HeroBtnWrapper>
    //   </HeroContent>
    // </HeroContainer>
  );
};

export default HeroSection;
