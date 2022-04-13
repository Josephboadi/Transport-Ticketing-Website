import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FaBars, FaArrowDown, FaTicketAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  ClientDropDownImageIcon,
  DropTicketImageIcon,
  ClientDropDownIcon,
} from "./NavbarElements";

import { logoutAction } from "../../redux/actions/authActions";
import ClientDrop from "../Clientdrop";
// import Dropdown from "../ClientDropdown";

const Navbar = ({ toggle, ClientDroptoggle }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isClientDrop, setIsClientDrop] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const ClientDroptoggle = () => {
  //   setIsClientDrop(!isClientDrop);
  // };

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Travel-gh
            </NavLogo>
            {authenticated && (
              <>
                {role === "ROLE_COMPANY" ? (
                  <ClientDropDownIcon
                    onClick={ClientDroptoggle}
                    // onMouseOver={ClientDroptoggle}
                    // onMouseEnter={ClientDroptoggle}
                    src={imageUrl[0].img}
                    alt="Image"
                  />
                ) : (
                  <>
                    {/* <DropTicketImageIcon to="/bookticket">
                      <FaTicketAlt />
                    </DropTicketImageIcon> */}
                    <ClientDropDownIcon
                      onClick={ClientDroptoggle}
                      // onMouseOver={ClientDroptoggle}
                      // onMouseEnter={ClientDroptoggle}
                      src={pic}
                      alt="Image"
                    />
                  </>
                )}

                <ClientDropDownImageIcon>
                  <FaArrowDown />
                </ClientDropDownImageIcon>
              </>
            )}
            {/* <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon> */}
            <NavMenu>
              {/*<NavItem>
                <NavLinks
                  to="ticket"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Book Ticket
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="reviews"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Reviews
                </NavLinks>
              </NavItem> */}
              {/* <NavItem>
                <NavLinks
                  to="bookings"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  My Bookings
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavMenu>
              {authenticated ? (
                <ClientDrop
                  isClientDrop={isClientDrop}
                  ClientDroptoggle={ClientDroptoggle}
                />
              ) : (
                // <NavBtn>
                //   <NavBtnLink to="/signin">Sign In</NavBtnLink>
                // </NavBtn>
                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
