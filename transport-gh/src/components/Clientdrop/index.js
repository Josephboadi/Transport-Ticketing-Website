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

import { logoutAction } from "../../redux/actions/authActions";

const ClientDrop = ({ ClientDroptoggle, isClientDrop }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
    imageUrl,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

  return (
    <SidebarContainer isClientDrop={isClientDrop} onClick={ClientDroptoggle}>
      {/* <Icon onClick={ClientDroptoggle}>
        <CloseIcon />
      </Icon> */}
      <SidebarWrapper>
        <SidebarMenu>
          {role === "ROLE_COMPANY" ? (
            <>
              <SidebarLink to="client" onClick={ClientDroptoggle}>
                Company Page
              </SidebarLink>
              <SideBtnWrap>
                <SidebarRoute to="" onClick={handleLogout}>
                  Logout
                </SidebarRoute>
              </SideBtnWrap>
            </>
          ) : (
            <>
              <SidebarLink to="/books" onClick={ClientDroptoggle}>
                My Bookings
              </SidebarLink>
              <SideBtnWrap>
                <SidebarRoute to="" onClick={handleLogout}>
                  Logout
                </SidebarRoute>
              </SideBtnWrap>
            </>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ClientDrop;
