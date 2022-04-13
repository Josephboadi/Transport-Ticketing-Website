import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { bounce, zoomIn, zoomOut, headShake, wobble } from "react-animations";
const bounceAnimation = keyframes`${bounce}`;
const zoomOutAnimation = keyframes`${zoomIn}`;
const handShakeOutAnimation = keyframes`${headShake}`;
const wobbleOutAnimation = keyframes`${wobble}`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(
    //   0deg,
    //   rgba(0, 0, 0, 0.2) 0%,
    //   rgba(0, 0, 0, 0.2) 50%,
    //   rgba(0, 0, 0, 0.6) 100%
    // );
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        transparent 100%
      );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-bottom-left-radius: 400px;

  @media screen and (max-width: 1150px) {
    border-bottom-left-radius: 300px;
  }

  @media screen and (max-width: 768px) {
    border-bottom-left-radius: 250px;
  }

  @media screen and (max-width: 480px) {
    border-bottom-left-radius: 150px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero1H1 = styled.h1`
  animation: 8s linear infinite ${bounceAnimation};
  color: #6c63ff;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 1px 5px rgba(255, 255, 255, 255);

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 550px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH1 = styled.h2`
  animation: 8s linear infinite ${zoomOutAnimation};
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 550px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroBtnsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// export const HeroSingleBtnWrapper = styled.div`
//   margin-top: 32px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
export const ButtonRight = styled.div`
  border-radius: 10px;
  margin: 10px;

  white-space: nowrap;
  padding: 10px 10px;
  outline: none;
  border: none;
  // text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  // transition: all 0.2s ease-in-out;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 220px;
  height: 70px;
  padding-right: 0;
  @media screen and (max-width: 780px) {
    width: 180px;
    height: 50px;
  }
  @media screen and (max-width: 420px) {
    width: 130px;
    height: 50px;
  }
`;

export const HeroBtnsStoreIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeroBtnsStoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroBtnsStoreTextWrapper = styled.h3`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const HeroBtnsStoreText2Wrapper = styled.h6`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
