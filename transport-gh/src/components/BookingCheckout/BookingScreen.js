import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
// import { PayPalButton } from "react-paypal-button-v2";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { ButtonR } from "../ButtonElement";
import img from "../../images/driver.jpg";
import { useDispatch, useSelector } from "react-redux";
// import openSocket from "socket.io-client";
import {
  getBooking,
  // socketStatusUpdate,
} from "../../redux/actions/dataActions";
import { Link } from "react-router-dom";
import "./style.css";
// import {
//   getOrderDetails,
//   payOrder,
//   deliverOrder,
// } from "../actions/orderActions";
import Loader from "../Loader";
import Message from "../Message";
import { FaTrash } from "react-icons/fa";
import PrintPopup from "../PrintPopup";
import { Example } from "../printForm";
// import {
//   ORDER_PAY_RESET,
//   ORDER_DELIVER_RESET,
// } from "../constants/orderConstants";

const BookingScreen = ({ bookingId }) => {
  // const orderId = match.params.id;
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.data);
  const [record, setRecord] = useState({});
  // const [seat, setSeat] = useState("");
  // const [tripD, setTripD] = useState({});
  const [openPrintPopup, setOpenPrintPopup] = useState(false);
  // const getSingleBooking = useSelector((state) => state.data.booking);

  // setSeat(seatNo);
  // setTripD(tripData);
  // setRecord(bookingData);
  // setOpenPrintPopup(true);

  const getSingleBooking = localStorage.getItem("bookingDetail")
    ? JSON.parse(localStorage.getItem("bookingDetail"))
    : {};

  useEffect(() => {
    dispatch(getBooking(bookingId));
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!loading) {
    // console.log(getSingleBooking);
  }

  const handlePrintTicket = () => {
    setOpenPrintPopup(true);
  };

  const printTick = async () => {
    // resetForm();
    // setRecordForEdit(null);
    setOpenPrintPopup(false);

    // setNotify({
    //   isOpen: true,
    //   message: "Submitted Successfully",
    //   type: "success",
    // });
  };

  return (
    <>
      {/* {loading ? (
       
      ) : ( */}
      {getSingleBooking === null ? (
        <Loader />
      ) : (
        <div className="booking1Container">
          <h4 style={{ marginLeft: "10px" }}>
            Ticket id: {getSingleBooking.ticketId}{" "}
          </h4>{" "}
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Company</h2>
                  <p>
                    <strong>Name: </strong> {getSingleBooking.company.name}
                  </p>
                  <p>
                    <strong>Contact: </strong> {getSingleBooking.company.phone}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <a href={`mailto:boadijoseph151@gmail.com`}>
                      {" "}
                      boadijoseph151@gmail.com
                    </a>
                  </p>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <h2>Payment Detail</h2>
                  <p>
                    <strong>Method: </strong>
                    PayPal
                  </p>
                  <p>
                    <strong>Id: </strong>
                    {getSingleBooking.paymentResult.id}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {getSingleBooking.paymentResult.email_address}
                  </p>
                  <Message variant="info">
                    Paid on{" "}
                    {getSingleBooking.paymentResult.update_time.substring(
                      0,
                      10
                    )}
                  </Message>
                </ListGroup.Item> */}
                <ListGroup.Item>
                  <h2>Trip</h2>
                  <ListGroup variant="flush">
                    {getSingleBooking.trips.map((trip) => (
                      <ListGroup.Item>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={getSingleBooking.company.imageUrl}
                              alt={"imge"}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            {trip.trip.from.name} - {trip.trip.to.name}
                          </Col>
                          <Col>
                            {moment(trip.trip.date).format("DD MMM, YYYY")} -{" "}
                            {moment(trip.trip.time).format("hh:mm A")}
                          </Col>
                          <Col md={4}>
                            {trip.quantity} ticket
                            {trip.quantity > 1 ? "s" : ""} - Seat
                            {trip.quantity > 1 ? "s" : ""}:{` `}
                            {getSingleBooking.seatNumber}
                            {/* <FaTrash /> */}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <p style={{ color: "blue", fontWeight: "bold" }}>
                    Download the mobile app from Play Store or App Store for
                    more functionalities like Cancelling booking or Reshceduling
                    booking
                  </p>
                  <p style={{ color: "Red", fontWeight: "bold" }}>
                    Ensure you go to the station with your ticket printed or in
                    digital form as you will need it for CHECKIN.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Cost Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Ticket(s) Cost</Col>
                      <Col>
                        Ghc
                        {getSingleBooking.totalPrice -
                          getSingleBooking.taxPrice}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>Ghc{getSingleBooking.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>Ghc{getSingleBooking.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <ButtonR
                        primary
                        // to={`/trip/${avt._id}`}
                        onClick={() => handlePrintTicket()}>
                        Print Ticket
                      </ButtonR>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      <PrintPopup
        title="Ticket Summary"
        // subTitle="Seat No. is automatically generated. Only enter Seat No. to override the automatically generated one."
        openPopup={openPrintPopup}
        setOpenPopup={setOpenPrintPopup}>
        {/* <BookingForm
                recordForEdit={recordForEdit}
                addOrEdit={addOrEdit}
              /> */}
        <Example
          record={getSingleBooking}
          // seatNo={seat}
          // tripData={tripD}
          // name={name}
          // recordForEdit={recordForEdit}
          printTick={printTick}
        />
      </PrintPopup>

      {/* )} */}
    </>
  );
  // );
};

export default BookingScreen;
