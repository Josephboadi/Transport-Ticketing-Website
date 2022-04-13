import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookingContainer = styled.div`
  color: #fff;
  height: 860px;
  padding: 20px 0;

  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#0C0C0C")};

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const BookingWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  align-items: center;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  // border-radius: 250px;
  border-top-left-radius: 250px;
  border-bottom-right-radius: 250px;
  border-bottom-left-radius: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 0 150px;
  // margin-top: 100px;
  justify-content: center;
  background: #f1f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1150px) {
    padding: 0 42px;
    // padding: 10 14px;
    width: 98%;
    border-top-left-radius: 165px;
    border-bottom-right-radius: 165px;
    border-bottom-left-radius: 165px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 14px;
    width: 98%;
  }
`;

export const FormContent = styled.div`
  // height: 100%;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 98%;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  height: 100px;

  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 10px 32px;
  padding-bottom: 10px;

  @media screen and (max-width: 400px) {
    padding: 32px 0px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #6c63ff;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
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
  width: 150px;
  margin-top: 10px;
  margin-left: 40px;
  padding: 0px 5px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
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

export const BookingH1 = styled.h1`
  color: #6c63ff;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: -100px;
  // margin-top: -20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    // margin-top: -50px;
  }
`;

export const BookingTC = styled.h2`
  color: #6c63ff;
  font-size: 20px;
  font-weight: 600;
  text-align: left;

  margin-top: -80px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const TableContainer = styled.div`
  // margin-top: -90px;
  height: 470px;
  max-height: 470px;
  overflow-y: scroll;
`;
