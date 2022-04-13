import React, { useState } from "react";
import Footer from "../components/ClientFooter";
import ClientDrop from "../components/Clientdrop";
import Navbar from "../components/CustomerNavbar";
import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";
import PaymentScreen from "../components/BookingCheckout/PaymentScreen";
import BookTicketScreen from "../components/BookingCheckout/BookTicketScreen";

const BookTicket = (props) => {
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
      <BookTicketScreen />
      <Footer />
    </>
  );
};

export default BookTicket;
