import React, { useState } from "react";
import Footer from "../components/ClientFooter";
import ClientDrop from "../components/Clientdrop";
import Navbar from "../components/CustomerNavbar";
import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";
import BookingScreen from "../components/BookingCheckout/BookingScreen";

const Booking = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isClientDrop, setIsClientDrop] = useState(false);
  const ClientDroptoggle = () => {
    setIsClientDrop(!isClientDrop);
  };

  const { bookingId } = props.match.params;

  return (
    <>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <ClientDrop
        isClientDrop={isClientDrop}
        ClientDroptoggle={ClientDroptoggle}
      />
      <Navbar toggle={toggle} ClientDroptoggle={ClientDroptoggle} />
      <BookingScreen bookingId={bookingId} />
      <Footer />
    </>
  );
};

export default Booking;
