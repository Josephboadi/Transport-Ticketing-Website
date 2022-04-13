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
          <SidebarLink to="trips" onClick={toggle}>
            Trips
          </SidebarLink>
          <SidebarLink to="ticket" onClick={toggle}>
            Search Trip
          </SidebarLink>
          <SidebarLink to="reviews" onClick={toggle}>
            Comments
          </SidebarLink>
          {/* <SidebarLink to="bookings" onClick={toggle}>
            My Bookings
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
