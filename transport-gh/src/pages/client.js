import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingSection from "../components/ClientBooking";
import BookingTripsSection from "../components/ClientTripsBooking";
import { homeObjOne, homeObjReviews } from "../components/ClientBooking/Data";
import { homeObjOne1 } from "../components/ClientTripsBooking/Data";
import Loader from "../components/ClientLoader";
import { FaTimes } from "react-icons/fa";
import ClientDrop from "../components/Clientdrop";
import Footer from "../components/ClientFooter";
import HeroSection from "../components/ClientHeroSection";
import { SliderDataOne } from "../components/ClientHeroSection/data";
import Navbar from "../components/ClientNavbar";
import ReviewSectionn from "../components/ClientReviewSection";
import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";

import { fetchClient } from "../redux/actions/dataActions";
import Complaintdown from "../components/Complaintdown";

const ClientPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const Droptoggle = () => {
    setIsDrop(!isDrop);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isClientDrop, setIsClientDrop] = useState(false);
  const ClientDroptoggle = () => {
    setIsClientDrop(!isClientDrop);
  };

  const { loading } = useSelector((state) => state.data);
  const client = useSelector((state) => state.data.client);
  // const availableTrip = useSelector((state) => state.data.availableTrip);

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { compId } = props.match.params;

  useEffect(() => {
    // const { compId } = props.match.params;
    // console.log(props);
    // const tripData = {
    //   from: "Kumasi",
    //   to: "Sunyani",
    //   date: "24/02/2021",
    // };

    const payload = {
      params: {
        compId,
      },
    };
    dispatch(fetchClient(compId));
    // dispatch(fetchAvailableTrips(compId, tripData));
  }, []);

  // if (!loading) {
  //   console.log(client, loading);
  // }

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ClientDrop
        isClientDrop={isClientDrop}
        ClientDroptoggle={ClientDroptoggle}
      />

      <Navbar
        toggle={toggle}
        ClientDroptoggle={ClientDroptoggle}
        // loading={loading}
      />

      <HeroSection
        // slides={SliderDataOne}
        dat={client}
        // loading={loading}

        // loading={loading}
      />

      <BookingTripsSection {...homeObjOne1} compId={compId} />

      <BookingSection {...homeObjOne} compId={compId} />

      <ReviewSectionn {...homeObjReviews} authenticated={authenticated} />
      <div>
        {isDrop && (
          <div
            onClick={Droptoggle}
            style={{
              position: "fixed",
              zIndex: 100000,
              width: 40,
              height: 40,
              background: "#0d0d0d",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 80,
              right: "5%",
              bottom: 410,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              right: 320,
              transition: "0.3s ease-in-out",
              cursor: "pointer",
              // opacity: `${({ isDrop }) => (isDrop ? "100%" : "0")}`,
              // bottom: `${({ isDrop }) => (isDrop ? "0" : "-100%")}`,
              color: "#fff",
            }}>
            <FaTimes />
          </div>
        )}

        <Complaintdown
          isDrop={isDrop}
          Droptoggle={Droptoggle}
          compId={compId}
        />
      </div>
      <div
        onClick={Droptoggle}
        style={{
          bottom: 50,
          display: "flex",
          right: 10,
          width: 120,
          height: 30,
          color: "white",
          backgroundColor: "green",
          borderRadius: 15,
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          paddingTop: 17,
          boxShadow: "1px 3px 5px #ededed",
          zIndex: 10,
          cursor: "pointer",
        }}>
        <h5
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 11,
          }}>
          Send Complaints
        </h5>
      </div>
      <Footer />
    </>
  );
};

export default ClientPage;
