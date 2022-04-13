import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="signup" onClick={toggle}>
            Get Started
          </SidebarLink>
          <SidebarLink to="register" onClick={toggle}>
            Register
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Buy Ticket
          </SidebarLink>
          {/* <SidebarLink to="contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            FAQ
          </SidebarLink> */}
        </SidebarMenu>
        {!authenticated && (
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
