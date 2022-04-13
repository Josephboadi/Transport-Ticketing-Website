import styled, { css } from "styled-components/macro";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdArrowForward,
} from "react-icons/md";

export const HeroSection = styled.section`
  height: 800px;
  background: #0c0c0c;
  // max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  // justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroBtnsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: -30px;

  @media screen and (max-width: 480px) {
    width: 180px;
    height: 50px;
    margin-left: -50px;
  }
`;

export const ButtonRight = styled.div`
  border-radius: 10px;
  margin: 10px;
  margin-left: 0px;
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

export const HeroSlide = styled.div`
  z-index: 2;
  width: 100%;
  height: 800px;
`;

export const HeroSlider = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  // :before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(
  //       180deg,
  //       rgba(0, 0, 0, 0.2) 0%,
  //       rgba(0, 0, 0, 0.6) 100%
  //     ),
  //     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  //   z-index: 2;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 3;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: -1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    color: #fff;
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;

export const SliderButton = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #6c63ff;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(MdKeyboardArrowLeft)`
  ${arrowButtons}
`;

export const NextArrow = styled(MdKeyboardArrowRight)`
  ${arrowButtons}
`;

// export const HeroContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   height: 800px;
//   position: relative;
//   z-index: 1;

// :before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: linear-gradient(
//       180deg,
//       rgba(0, 0, 0, 0.2) 0%,
//       rgba(0, 0, 0, 0.6) 100%
//     ),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   z-index: 2;
// }
// `;

// export const HeroBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const ImageBg = styled.img`
//   width: 100%;
//   height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
//   background: #232a34;
// mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
//   z-index: -1;
// `;

// // export const HeroContent = styled.div`
// //   z-index: 3;
// //   max-width: 1200px;
// //   position: absolute;
// //   padding: 8px 2px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;

// export const HeroH1 = styled.h1`
//   color: #fff;
//   font-size: 48px;
//   text-align: center;

//   @media screen and (max-width: 768px) {
//     font-size: 40px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

// export const HeroP = styled.p`
//   margin-top: 24px;
//   color: #fff;
//   font-size: 24px;
//   text-align: center;
//   max-width: 600px;

//   @media screen and (max-width: 768px) {
//     font-size: 24px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 18px;
//   }
// `;

export const HeroBtnWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
