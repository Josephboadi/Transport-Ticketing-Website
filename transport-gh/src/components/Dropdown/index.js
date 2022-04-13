import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  CloseIcon,
  Icon,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownRoute,
  DropdownWrapper,
  DropBtnWrap,
} from "./DropdownElements";

import { logoutAction } from "../../redux/actions/authActions";

const Dropdown = ({ Droptoggle, isDrop }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

  return (
    <DropdownContainer isDrop={isDrop} onClick={Droptoggle}>
      {/* <Icon onClick={Droptoggle}>
        Hello <CloseIcon />
      </Icon> */}
      <DropdownWrapper>
        <DropdownMenu>
          {role === "ROLE_COMPANY" ? (
            <>
              <DropdownLink to="client" onClick={Droptoggle}>
                Company Page
              </DropdownLink>
              <DropBtnWrap>
                <DropdownRoute to="" onClick={handleLogout}>
                  Logout
                </DropdownRoute>
              </DropBtnWrap>
            </>
          ) : (
            <>
              <DropdownLink to="books" onClick={Droptoggle}>
                My Bookings
              </DropdownLink>
              <DropBtnWrap>
                <DropdownRoute to="" onClick={handleLogout}>
                  Logout
                </DropdownRoute>
              </DropBtnWrap>
            </>
          )}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
