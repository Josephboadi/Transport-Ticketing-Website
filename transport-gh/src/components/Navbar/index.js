import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { FaBars, FaArrowDown, FaTicketAlt, FaBook } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";

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
  DropDownImageIcon,
  DropTicketImageIcon,
  DropDownIcon,
} from "./NavbarElements";

import { logoutAction } from "../../redux/actions/authActions";
import Dropdown from "../Dropdown";

const Navbar = ({ toggle, Droptoggle }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDrop, setIsDrop] = useState(false);
  const [isAutomated, setIsAutomated] = useState(false);

  // const Droptoggle = () => {
  //   setIsDrop(!isDrop);
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
      {/* {authenticated && role === "ROLE_USER" ? ( */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Travel-gh
            </NavLogo>
            {authenticated && (
              <>
                {role === "ROLE_USER" && (
                  //   <>
                  //   // <DropDownIcon
                  //   //   onClick={Droptoggle}
                  //   //   src={imageUrl[0].img}
                  //   //   alt="Image"
                  //   // />
                  //   // <Redirect to="/signin" />
                  //   // </>
                  // ) : (
                  <>
                    {/* <DropTicketImageIcon to="/bookticket">
                      <MdEventSeat />
                    </DropTicketImageIcon> */}
                    <DropTicketImageIcon to="/bookticket">
                      <MdEventSeat />
                    </DropTicketImageIcon>
                    <DropDownIcon
                      onClick={Droptoggle}
                      // onMouseOver={Droptoggle}
                      src={pic}
                      alt="Image"
                    />
                  </>
                )}

                <DropDownImageIcon>
                  <FaArrowDown />
                </DropDownImageIcon>
              </>
            )}
            <MobileIcon
              onClick={toggle}
              // onMouseOver={toggle}
            >
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  activeClass="active"
                  // value={isAutomated}

                  offset={-80}>
                  Get Started
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="register"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Register
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Buy Ticket
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  FAQ
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavMenu>
              {authenticated && role === "ROLE_USER" ? (
                <Dropdown isDrop={isDrop} Droptoggle={Droptoggle} />
              ) : (
                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {/* // ) : ( // )} */}
    </>
  );
};

export default Navbar;
