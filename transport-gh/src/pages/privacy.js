import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import BookingSection from "../components/ClientBooking";
// import BookingTripsSection from "../components/ClientTripsBooking";
// import { homeObjOne, homeObjReviews } from "../components/ClientBooking/Data";
// import { homeObjOne1 } from "../components/ClientTripsBooking/Data";
import Loader from "../components/ClientLoader";
import ClientDrop from "../components/Clientdrop";
import Footer from "../components/ClientFooter";
// import Contact from "../components/ContactSection";
// import HeroSection from "../components/ClientHeroSection";
// import { SliderDataOne } from "../components/ClientHeroSection/data";
import Navbar from "../components/CustomerNavbar";
// import ReviewSectionn from "../components/ClientReviewSection";
// import Sidebar from "../components/ClientSidebar";
import ScrollToTop from "../components/ScrollToTop";
import TermsSection from "../components/Terms";
import PrivacySection from "../components/Privacy";

// import { fetchClient } from "../redux/actions/dataActions";

const PrivacyPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isClientDrop, setIsClientDrop] = useState(false);
  const ClientDroptoggle = () => {
    setIsClientDrop(!isClientDrop);
  };

  // const { loading } = useSelector((state) => state.data);
  // const client = useSelector((state) => state.data.client);
  // const availableTrip = useSelector((state) => state.data.availableTrip);

  // const {
  //   account: { role },
  //   authenticated,
  //   firstName,
  //   lastName,
  //   pic,
  //   address,
  //   imageUrl,
  // } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();
  // const { compId } = props.match.params;

  // useEffect(() => {
  // const { compId } = props.match.params;
  // console.log(props);
  // const tripData = {
  //   from: "Kumasi",
  //   to: "Sunyani",
  //   date: "24/02/2021",
  // };

  // const payload = {
  //   params: {
  //     compId,
  //   },
  // };
  // dispatch(fetchClient(compId));
  // dispatch(fetchAvailableTrips(compId, tripData));
  // }, []);

  // if (!loading) {
  //   console.log(client, loading);
  // }

  return (
    <>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <ClientDrop
        isClientDrop={isClientDrop}
        ClientDroptoggle={ClientDroptoggle}
      />
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <Navbar toggle={toggle} ClientDroptoggle={ClientDroptoggle} />
        <PrivacySection />

        {/* <HeroSection
          slides={SliderDataOne}
          dat={client}
          loading={loading}

          // loading={loading}
        />

        <BookingTripsSection {...homeObjOne1} compId={compId} />
        <BookingSection {...homeObjOne} compId={compId} />

        <ReviewSectionn {...homeObjReviews} authenticated={authenticated} /> */}

        <Footer />
      </>
      {/* )} */}
    </>
  );
};

export default PrivacyPage;
