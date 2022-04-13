import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 340px;
  height: 450px;
  background: #0d0d0d;
  padding: 10
  display: flex;
  align-items: flex start;
  margin-top: 80px;
  // margin-right: 300px;
  right: 5%;
  bottom: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  z-index: 50;
  opacity: ${({ isDrop }) => (isDrop ? "100%" : "0")};
  bottom: ${({ isDrop }) => (isDrop ? "0" : "-100%")};
`;

export const Label = styled.label``;

export const TextArea = styled.textarea``;

export const CloseIcon = styled(FaArrowUp)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const DropdownWrapper = styled.div`
  color: #fff;
`;

export const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(6, 80px);
  // text-align: center;

  // @media screen and (max-width: 480px) {
  //   grid-template-rows: repeat(6, 80px);
  // }
`;

export const DropdownLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }
`;

export const DropBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  // bottom: 20px;
  margin-top: 20px;
`;

export const DropdownRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 54px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
