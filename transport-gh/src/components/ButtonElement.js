import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const BtnDec = styled(css)`
  text-decoration: none;
  outline: none;
`;

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#6C63FF" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  //   ${BtnDec}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#303030" : "#6C63FF")};
    color: #fff;
    text-decoration: none;
    // ${BtnDec}
  }
`;

export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#6C63FF" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  //   ${BtnDec}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#303030" : "#6C63FF")};
    color: #fff;
    text-decoration: none;
    // ${BtnDec}
  }
`;
