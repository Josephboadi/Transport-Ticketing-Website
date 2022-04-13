import styled, { keyframes } from "styled-components";
import { pulse, bounceIn } from "react-animations";
const fadeInAnimation = keyframes`${pulse}`;
const bounceInAnimation = keyframes`${bounceIn}`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 800px;
  padding-top: 40px;
  background: linear-gradient(108deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
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
  animation: 6s linear infinite ${fadeInAnimation};
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  // width: 460px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  // width: 620px;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: 100%;

  @media screen and (max-width: 110px) {
    height: 80%;
  }

  @media screen and (max-width: 780px) {
    height: 60%;
  }

  @media screen and (max-width: 480px) {
    height: 50%;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  background: transparent;

  @media screen and (max-width: 110px) {
    height: 500px;
  }

  @media screen and (max-width: 770px) {
    height: 400px;
  }

  @media screen and (max-width: 769px) {
    width: 0%;
    height: 0px;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  position: absolute;
  top: 20%;
  //   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 650px;
    padding-left: 30px;
  }

  @media screen and (max-width: 650px) {
    width: 550px;
    padding-left: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 450px;
    padding-left: 30px;
  }
`;

export const HeadingH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 60px;
  margin-bottom: -100px;
  align-items: flex-start;
  // justify-content: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  margin: 25px 85px 75px 10px;
  @media screen and (max-width: 780px) {
    margin: 5px 25px 75px 25px;
  }
  @media screen and (max-width: 480px) {
    margin: 5px 5px 125px 5px;
  }
`;
export const Label = styled.label``;
export const Input = styled.input``;
export const TextArea = styled.textarea``;
