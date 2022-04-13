import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/ClientFooter";
import ClientDrop from "../components/Clientdrop";
import Navbar from "../components/CustomerNavbar";
import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";
import TripDetailScreen from "../components/BookingCheckout/TripDetailScreen";
import { fetchAvailableTrip } from "../redux/actions/dataActions";

const TripDetail = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isClientDrop, setIsClientDrop] = useState(false);
  const ClientDroptoggle = () => {
    setIsClientDrop(!isClientDrop);
  };

  const { tripId } = props.match.params;

  //   console.log(trip);

  return (
    <>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <ClientDrop
        isClientDrop={isClientDrop}
        ClientDroptoggle={ClientDroptoggle}
      />
      <Navbar toggle={toggle} ClientDroptoggle={ClientDroptoggle} />
      <TripDetailScreen tripId={tripId} />
      <Footer />
    </>
  );
};

export default TripDetail;
