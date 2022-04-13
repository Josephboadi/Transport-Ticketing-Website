import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookingContainer = styled.div`
  color: #fff;
  height: auto;
  padding: 20px 0;
  padding-top: 100px;

  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#0C0C0C")};

  @media screen and (max-width: 768px) {
    padding: 20px 0;
    padding-top: 100px;
  }
`;

export const BookingWrapper = styled.div`
  // display: flex;
  // grid-auto-columns: 1fr;
  align-items: flex-start;
  // padding: 50px 0;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  border-radius: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 30px 150px;
  // margin-top: 100px;
  // justify-content: center;
  background: #f1f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1150px) {
    padding: 20px 42px;
    // padding: 10 14px;
    width: 98%;
    // border-radius: 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 14px;
    width: 98%;
  }
`;

export const ConditionWrapper = styled.div`
  // display: flex;
  // grid-auto-columns: 1fr;
  align-items: flex-start;
  // padding: 50px 0;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #5b5b5b;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 20px 10px;
  // margin-top: 100px;
  // justify-content: center;
  background: #f1f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1150px) {
    padding: 20px 12px;
    // padding: 10 14px;
    width: 98%;
    // border-radius: 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 14px;
    width: 98%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  height: 100%;

  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 10px 32px;
  padding-bottom: 10px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #6c63ff;
  font-size: 30px;
  font-weight: 500;
  text-align: left;
`;

export const FormH2 = styled.h2`
  margin-bottom: 20px;
  color: #6c63ff;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
`;

export const FormH3 = styled.h3`
  margin-bottom: 20px;
  color: #6c63ff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const FormP = styled.p`
  margin-bottom: 20px;
  color: #5b5b5b;
  font-size: 25px;
  // font-weight: 500;
  text-align: left;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #6c63ff;
`;

export const FormInputDate = styled.input`
  width: 500px;
  background: transparent;
  padding: 16px 16px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-bottom: 2px solid #2874f0;
  border-radius: 4px;
  color: #000;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const FormButton = styled.button`
  background: #6c63ff;

  padding: 5px 0;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  white-space: nowrap;
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;

export const HeadingH1 = styled.h1`
  color: #6c63ff;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Heading1H1 = styled.h1`
  color: #6c63ff;
  font-size: 30px;
  font-weight: 580;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Heading2 = styled.h2`
  color: #6c63ff;
  font-size: 20px;
  font-weight: 600;
  text-align: left;

  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Heading13 = styled.h3`
  color: #6c63ff;
  font-size: 18px;
  font-weight: bold;
  text-align: left;

  // margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Heading3 = styled.h3`
  color: #6c63ff;
  font-size: 18px;
  font-weight: bold;
  text-align: left;

  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Para = styled.p`
  color: #5b5b5b;
  font-size: 18px;
  // font-weight: bold;
  text-align: left;

  // margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
// margin-top: -90px;
export const TableContainer = styled.div`
  height: 660px;
  max-height: 660px;
  overflow-y: scroll;
  margin-bottom: 30px;
`;
