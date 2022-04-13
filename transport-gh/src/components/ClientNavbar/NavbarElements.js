import styled, { css } from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ loading }) =>
    loading == true
      ? "#000"
      : ({ scrollNav }) => (scrollNav ? "#000" : "tranparent")};
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

const NavLink = css`
  text-decoration: none;
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

export const ClientDropDownIcon = styled.img`
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

export const ClientDropDownImageIcon = styled.div`
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

export const ClientDropTicketImageIcon = styled(LinkR)`
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
  // margin-right: -22px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  ${NavLink}
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: 8px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #6c63ff;
    background: #303030;
    border-radius: 50%;
    text-decoration: none;
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
