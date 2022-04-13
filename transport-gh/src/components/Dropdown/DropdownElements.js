import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 200px;
  height: 150px;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  margin-top: 80px;
  // margin-right: 300px;
  right: 5%;
  // top: 160;
  // left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isDrop }) => (isDrop ? "100%" : "0")};
  top: ${({ isDrop }) => (isDrop ? "0" : "-100%")};
`;

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const DropdownLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
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
  height: 50px;
`;

export const DropdownRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 64px;
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
