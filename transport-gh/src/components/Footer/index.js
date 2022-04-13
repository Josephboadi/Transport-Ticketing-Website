import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  HeroBtnsWrapper,
  Img,
  ButtonRight,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import appleImg from "../../images/APP_STORE_BTN.svg";
import googleImg from "../../images/PLAY_STORE_BTN.svg";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <HeroBtnsWrapper>
              <ButtonRight>
                <Img
                  src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818736/APP_STORE_BTN_qmcwvv.svg"
                  alt="Apple"
                />
                {/* <HeroBtnsStoreIconWrapper>
              <FaApplePay />
            </HeroBtnsStoreIconWrapper>
            <HeroBtnsStoreInfoWrapper>
              <HeroBtnsStoreText2Wrapper>
                Download on the
              </HeroBtnsStoreText2Wrapper>
              <HeroBtnsStoreTextWrapper>App Store</HeroBtnsStoreTextWrapper>
            </HeroBtnsStoreInfoWrapper> */}
              </ButtonRight>
              <ButtonRight>
                <Img
                  src="https://res.cloudinary.com/dblprzex8/image/upload/v1627818735/PLAY_STORE_BTN_ntjlri.svg"
                  alt="Google"
                />
                {/* <HeroBtnsStoreIconWrapper>
              <FaGooglePlay />
            </HeroBtnsStoreIconWrapper>
            <HeroBtnsStoreInfoWrapper>
              <HeroBtnsStoreText2Wrapper>GET IT ON</HeroBtnsStoreText2Wrapper>
              <HeroBtnsStoreTextWrapper>Google Play</HeroBtnsStoreTextWrapper>
            </HeroBtnsStoreInfoWrapper> */}
              </ButtonRight>
            </HeroBtnsWrapper>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Travel-gh</FooterLinkTitle>
              <FooterLink to="/">Aboaut Us</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Info</FooterLinkTitle>
              <FooterLink to="/terms">Terms {`&`} Condition</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Videos</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Travel Gh
            </SocialLogo>
            <WebsiteRights>
              Travel Gh - Powered By SESAFRICA @ {new Date().getFullYear()} All
              rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Whatsaap">
                <FaWhatsapp />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
