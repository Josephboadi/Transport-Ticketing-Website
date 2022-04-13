import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "tranparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #303030;
    color: #6c63ff;
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const DropDownIcon = styled.img`
  display: block;
  position: absolute;
  height: 35px;
  width: 35px;
  overflow: hidden;
  -o-object-fit: contain;
  object-fit: contain;
  border-radius: 50%;
  top: 0;
  right: 5%;
  margin-right: 40px;

  transform: translate(-100%, 60%);
  // font-size: 1.8rem;
  cursor: pointer;
  // color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    // right: 0;
    transform: translate(-100%, 60%);
    // font-size: 1.8rem;
    cursor: pointer;
    // color: #fff;
  }
`;

export const DropDownImageIcon = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 5%;
  margin-right: 64px;
  margin-top: 35px;
  transform: translate(-100%, 60%);
  font-size: 0.5rem;
  // cursor: pointer;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    // right: 0;
    transform: translate(-100%, 60%);
    // font-size: 1.8rem;
    // cursor: pointer;
    // color: #fff;
  }
`;

export const DropTicketImageIcon = styled(LinkR)`
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 11%;
  margin-right: 48px;
  // margin-top: 10px;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 1100px) {
    right: 13%;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 19%;
    transform: translate(-100%, 60%);
    // font-size: 1.8rem;
    cursor: pointer;
    // color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  // al: center;
  // margin-right: -22px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 10px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #6c63ff;
    background: #303030;
    border-radius: 50%;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #303030;
    color: #6c63ff;
    text-decoration: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #6c63ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #6c63ff;
    text-decoration: none;
  }
`;

export const LogoutButton = styled.button`
  background: #6c63ff;
  border-radius: 50px;
  padding: 10px 22px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #6c63ff;
    text-decoration: none;
  }
`;

export const NavText = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  max-width: 100px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NavHeaderDropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
  }
`;

export const NavHeaderDropdownContainerDropdown = styled.div`
  right: 50%;
  position: absolute;
  width: 240px;
  background: #fff;
  transform: translateX(50%);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 11;
  margin-top: 12px;
  display: none;

  &:hover {
    display: block;
  }
`;

export const NavHeaderDropdownContainerArrowUp = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavHeaderDropdownContainerFirstMenu = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

export const NavHeaderDropdownContainerMenu = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavHeaderDropdownContainerMenuLi = styled.li`
  list-style: none;
`;

export const NavHeaderDropdownContainerMenuLiLink = styled(LinkR)`
  display: block;
  padding: 10px 22px;
  box-sizing: border-box;
  color: #6c63ff;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;
