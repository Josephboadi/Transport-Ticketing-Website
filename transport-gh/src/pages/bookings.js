import React, { useState } from "react";
import Footer from "../components/ClientFooter";
import ClientDrop from "../components/Clientdrop";
import Navbar from "../components/CustomerNavbar";
import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";
import BookingsScreen from "../components/BookingCheckout/BookingsScreen";

const Bookings = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isClientDrop, setIsClientDrop] = useState(false);
  const ClientDroptoggle = () => {
    setIsClientDrop(!isClientDrop);
  };

  return (
    <>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <ClientDrop
        isClientDrop={isClientDrop}
        ClientDroptoggle={ClientDroptoggle}
      />
      <Navbar toggle={toggle} ClientDroptoggle={ClientDroptoggle} />
      <BookingsScreen />
      <Footer />
    </>
  );
};

export default Bookings;
