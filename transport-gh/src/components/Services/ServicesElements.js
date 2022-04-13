import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/background.jpg";
import { rollIn, bounceIn } from "react-animations";
const rollInAnimation = keyframes`${rollIn}`;
const bounceInAnimation = keyframes`${bounceIn}`;

export const ServicesContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-bottom: 20px;
  height: 800px;
  position: relative;
  z-index: 1;
  border-top-left-radius: 400px;

  @media screen and (max-width: 1150px) {
    border-top-left-radius: 280px;
  }

  @media screen and (max-width: 840px) {
    border-top-left-radius: 180px;
  }

  @media screen and (max-width: 580px) {
    border-top-left-radius: 110px;
  }

  // :before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(
  //       0deg,
  //       rgba(0, 0, 0, 0.2) 0%,
  //       rgba(0, 0, 0, 0.2) 50%,
  //       rgba(0, 0, 0, 0.6) 100%
  //     ),
  //     linear-gradient(
  //       0deg,
  //       rgba(0, 0, 0, 0.2) 0%,
  //       rgba(0, 0, 0, 0.2) 50%,
  //       transparent 100%
  //     );
  //   z-index: 2;

  // height: 800px;
  // max-height: 800px;
  // display: flex;
  // flex-direction: column;
  // // justify-content: center;
  // align-items: center;
  // background: linear-gradient(108deg, rgb(1, 55, 57) 48%, rgb(0, 0, 0) 62%);

  // // animation: 2s ${bounceInAnimation};
  // // &:hover {
  // //   // animation: 2s ${bounceInAnimation};
  // //   transform: scale(1.02);
  // //   transition: all 0.2s ease-in-out;
  // //   // background: #fff;
  // //   // color: #6c63ff;
  // // }

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const ServicesBg = styled.div`
  position: absolute;
  background: #0c0c0c;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top-left-radius: 400px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

  @media screen and (max-width: 1150px) {
    border-top-left-radius: 280px;
  }

  @media screen and (max-width: 840px) {
    border-top-left-radius: 180px;
  }

  @media screen and (max-width: 580px) {
    border-top-left-radius: 110px;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-top-left-radius: 400px;

  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  @media screen and (max-width: 1150px) {
    border-top-left-radius: 280px;
  }

  @media screen and (max-width: 840px) {
    border-top-left-radius: 180px;
  }

  @media screen and (max-width: 580px) {
    border-top-left-radius: 110px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  max-height: 760px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  padding-bottom: 30px;
  overflow-y: scroll;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    // padding-bottom: 480px;
  }
`;

export const ServicesCard = styled(Link)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // border-radius: 20px;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  max-height: 360px;
  height: 280px;
  margin: 5px;
  text-decoration: none;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    // grid-template-columns: 1fr;
    // padding: 0 20px;
    // margin-bottom: 100px;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 100%;
  align-items: center;
  // border-radius: 10px;
  border-top-left-radius: 70px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  // max-width: 1000px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  // margin-left: auto;
  // margin-right: auto;
  // align-self: flex-start;
  // justify-content: flex-start;
  z-index: 10;

  @media screen and (max-width: 110px) {
    font-size: 2rem;
    margin-left: 20px;
  }

  @media screen and (max-width: 780px) {
    font-size: 1.8rem;
    margin-left: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-left: 20px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 6px;
  margin-right: 6px;
  text-align: center;
  color: #6c63ff;
  text-decoration: none;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  // text-align: center;
  margin-left: 6px;
  margin-right: 6px;
`;
