import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  // position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow-y: scroll;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgb(108, 99, 255, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: auto;
  display: flex;
  // max-width: auto;
  // width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: -50px;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    padding: 10px;
    // width: 380px;
    // margin-left: 10px;
    // margin-right: 50px;
  }
`;

export const Form = styled.form`
  background: #303030;
  max-width: 800px;
  height: auto;
  // width: 800px;
  width: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 20px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  // margin-top: -50px;

  @media screen and (max-width: 820px) {
    padding: 32px 32px;
    // width: 400px;
  }

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    // width: 390px;
  }
`;

export const DoubleFormContainer = styled.div`
  max-width: 800px;
  // margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  // padding: 0 0px;

  // @media screen and (max-width: 1000px) {
  //   grid-template-columns: 1fr 1fr;
  // }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    // padding: 0 20px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;

export const FormH2 = styled.h2`
  margin-bottom: 0px;
  margin-top: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  // text-align: center;
  width: 100%;
`;
export const FormH3 = styled.h4`
  margin-bottom: 0px;
  margin-top: 5px;
  color: #ff7979;
  font-size: 13px;
  font-weight: 400;
  // text-align: center;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  color: #fff;
  height: 40px;
  background: transparent;
  padding: 16px 16px;
  margin-bottom: 16px;
  outline: none;
  border: none;
  border-bottom: 2px solid #2874f0;
  border-radius: 4px;
`;

export const FormSelect = styled.select`
  color: #fff;
  height: 40px;
  // background: transparent;
  padding: 16px 16px;
  margin-bottom: 16px;
  outline: none;
  border: none;
  border-bottom: 2px solid #2874f0;
  border-radius: 4px;
`;

export const FormImage = styled.input`
  color: #fff;
  height: 60px;
  background: transparent;
  padding: 20px 16px;
  margin-bottom: 16px;
  outline: none;
  border: none;
  border-bottom: 2px solid #2874f0;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #6c63ff;
  height: 40px;
  padding: 8px 0;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
