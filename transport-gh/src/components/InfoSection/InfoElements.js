// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { bounce, zoomIn, headShake, wobble } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const zoomOutAnimation = keyframes`${zoomIn}`;
const handShakeOutAnimation = keyframes`${headShake}`;
const wobbleOutAnimation = keyframes`${wobble}`;

// const BouncyDiv = styled.div`

// `;

export const InfoContainer = styled.div`
  color: #fff;
  border-bottom-right-radius: 400px;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  &:hover {
    // animation: 2s ${bounceAnimation};

    // background: #fff;
    // color: #6c63ff;
  }

  $.active {
    animation: 2s ${bounceAnimation};
    // transition: all 0.2s ease-in-out;
    // background: #fff;
    // color: #6c63ff;
  }

  // @media screen and (max-width: 768px) {
  //   padding: 100px 0;
  // }

  @media screen and (max-width: 1150px) {
    border-bottom-right-radius: 300px;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    border-bottom-right-radius: 250px;
  }

  @media screen and (max-width: 480px) {
    border-bottom-right-radius: 150px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  animation: ${({ isAnimated }) => isAnimated && `2s ${bounceAnimation}`};
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  &:hover {
    // animation: 2s ${bounceAnimation};
    // transition: all 0.2s ease-in-out;
    // background: #fff;
    // color: #6c63ff;
  }

  &.active {
    // animation: 2s ${bounceAnimation};
    // transition: all 0.2s ease-in-out;
    // background: #fff;
    // color: #6c63ff;
  }
`;

export const Column2 = styled.div`
  // animation: 6s linear infinite ${handShakeOutAnimation};
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #6c63ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
