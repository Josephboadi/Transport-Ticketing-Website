import React, { useEffect, useState } from "react";
import axios from "../../util/axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Button, Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import img from "../../images/driver.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormContainer from "../FormContainer";
// import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "./CheckoutSteps";
import Message from "../Message";
import Loader from "../Loader";
import "./style.css";
import { ButtonR } from "../ButtonElement";
import {
  placeBooking,
  getCart,
  fetchAvailableTrip,
  changeTicketsCount,
  fetchPaymentAccounts,
  changeSeatStatus,
} from "../../redux/actions/dataActions";
import PayStackHook from "../../paystack/paystackhook";
import AirlineSeatReclineNormalOutlinedIcon from "@material-ui/icons/AirlineSeatReclineNormalOutlined";
import { Directions } from "@material-ui/icons";

const BookTicketScreen = (props) => {
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);
  const [payt, setPayt] = useState(null);

  // const cart = useSelector((state) => state.cart);
  // const { orders } = useSelector((state) => state.data);
  const { loading, cart, price } = useSelector((state) => state.data);
  const pay = useSelector((state) => state.data.paymentAccounts);
  const history = useHistory();

  const availableTripDetail = localStorage.getItem("tripInfo")
    ? JSON.parse(localStorage.getItem("tripInfo"))
    : null;

  // let cartPresent = Array.isArray(cart) && cart.length > 0;
  // let cartItems = cartPresent ? cart.length : 0;

  // if (!loading) {
  //   console.log(cart);
  // }

  // successPaymentHandler = (paymentResult) => {
  //   // console.log(paymentResult);
  //   dispatch(payOrder(orderId, paymentResult));
  // };
  // console.log(availableTripDetail.result.creator);
  useEffect(() => {
    // console.log("in useEffect cart");
    if (availableTripDetail !== null) {
      dispatch(fetchPaymentAccounts(availableTripDetail.result.creator));
    }
    dispatch(getCart());
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);

      // console.log(clientId);
    };

    // if (!order || successPay || successDeliver) {
    //   dispatch({ type: ORDER_PAY_RESET });
    //   dispatch({ type: ORDER_DELIVER_RESET });

    //   dispatch(getOrderDetails(orderId));
    // } else

    // if (!window.paypal) {
    addPayPalScript();
    //   } else {
    //     setSdkReady(true);
    //   }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(pay);
  useEffect(() => {
    if (availableTripDetail !== null) {
      setPayt(pay);
    } else {
      setPayt(null);
    }
  }, [pay]);
  //   calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  let tripPrice;
  let taxPrice;
  let tripCost;
  let quantity;
  let seatNumber;

  if (!loading) {
    tripPrice = addDecimals(
      cart?.reduce((acc, trip) => acc + trip.tripId.fare * 1, 0)
    );

    // quantity = Number(cart.reduce((acc, trip) => acc + trip.quantity, 0));
    quantity = 1;

    taxPrice = addDecimals(Number((0.15 * tripPrice).toFixed(2)));
    tripCost = (Number(tripPrice) - Number(taxPrice)).toFixed(2);
  }

  // const successPaymentHandler = (paymentResult) => {
  //   // console.log(paymentResult);
  //   if (paymentResult !== null) {
  //     if (paymentResult !== null) {
  //       const bookingData = {
  //         taxPrice: taxPrice,
  //         totalPrice: tripPrice,

  //         id: paymentResult.id,
  //         status: paymentResult.status,
  //         update_time: paymentResult.update_time,
  //         email_address: paymentResult.payer.email_address,
  //       };

  //       if (availableTripDetail) {
  //         const tripId = availableTripDetail.result._id;
  //         const ticketsCount =
  //           availableTripDetail.result.ticketsCount - quantity;
  //         const body = {
  //           ticketsCount: ticketsCount,
  //         };
  //         if (ticketsCount) {
  //           // console.log(body);
  //           dispatch(changeTicketsCount(tripId, body));
  //           localStorage.removeItem("tripInfo");
  //           dispatch(placeBooking(history, bookingData));
  //         }
  //       }
  //     }
  //   }
  // };

  const handleSubmitBooking = (data) => {
    // console.log(data);
    // console.log(data.id);
    // console.log(data.seatNumber);
    // const tripId = availableTripDetail.result?._id;
    // console.log(tripId);
    const body1 = {
      seatId: data?.id,
    };
    const body = {
      seatId: data?.id,
    };
    const bookingData = {
      taxPrice: taxPrice,
      totalPrice: tripPrice,
      ticketId: `${cart[0].tripId._id.substring(0, 8)}-${data?.seatNumber}`,
      seatNumber: data.seatNumber,
      seatId: data?.id,

      // id: paymentResult.id,
      // status: paymentResult.status,
      // update_time: paymentResult.update_time,
      // email_address: paymentResult.payer.email_address,
    };
    // dispatch(changeTicketsCount(body1));
    // // localStorage.removeItem("tripInfo");
    // dispatch(changeSeatStatus(tripId, body));
    // dispatch(placeBooking(history, bookingData));

    if (!loading && cart[0].quantity > 1) {
      // console.log(body);
      // dispatch(changeTicketsCount(body1));
      // localStorage.removeItem("tripInfo");
      const tripId = cart[0].tripId._id;
      dispatch(placeBooking(history, bookingData, tripId, body));
      // dispatch(changeSeatStatus(tripId, body));
    } else {
      // console.log(body);
      // dispatch(changeTicketsCount(tripId, body));
      // dispatch(changeTicketsCount(body1));
      const tripId = cart[0].tripId._id;
      dispatch(placeBooking(history, bookingData, tripId, body));
      localStorage.removeItem("tripInfo");
      // dispatch(changeSeatStatus(tripId, body));
      history.push("/books");
    }
  };

  const successPayPaymentHandler = () => {
    // console.log(paymentResult);
    // if (paymentResult !== null) {
    //   if (paymentResult !== null) {

    if (availableTripDetail) {
      const tripId = availableTripDetail.result._id;
      const ticketsCount = availableTripDetail.result.ticketsCount - quantity;
      if (quantity > 1) {
        seatNumber = `${
          availableTripDetail.result.vehicle.capacity -
          availableTripDetail.result.ticketsCount -
          1
        } - ${availableTripDetail.result.vehicle.capacity - ticketsCount - 1}`;
      } else {
        seatNumber = availableTripDetail.result.vehicle.capacity - ticketsCount;
      }

      const body = {
        ticketsCount: ticketsCount,
      };
      const bookingData = {
        taxPrice: taxPrice,
        totalPrice: tripPrice,
        seatNumber: seatNumber,

        // id: paymentResult.id,
        // status: paymentResult.status,
        // update_time: paymentResult.update_time,
        // email_address: paymentResult.payer.email_address,
      };
      if (ticketsCount) {
        // console.log(body);
        dispatch(changeTicketsCount(tripId, body));
        localStorage.removeItem("tripInfo");
        dispatch(placeBooking(history, bookingData));
      }
    }
    // }
    // }
  };

  // const handleSubmitBooking = () => {
  //   if (cart) {
  //     const bookingData = {
  //       taxPrice: taxPrice,
  //       totalPrice: tripPrice,

  //       id: "sdfgghhjkkllllhh",
  //       status: "COMPLETED",
  //       update_time: "06/03/2021",
  //       email_address: "boadijoseph151@gmail.com",
  //     };
  //     // console.log(bookingData);
  //     // if (taxPrice !== "" && tripPrice !== "" && paymentResult !== null) {
  //     if (availableTripDetail) {
  //       const tripId = availableTripDetail.result._id;
  //       const ticketsCount = availableTripDetail.result.ticketsCount - quantity;
  //       const body = {
  //         ticketsCount: ticketsCount,
  //       };
  //       if (ticketsCount) {
  //         // console.log(body);
  //         dispatch(changeTicketsCount(tripId, body));
  //         localStorage.removeItem("tripInfo");
  //         dispatch(placeBooking(history, bookingData));
  //       }
  //     }
  //   }

  // }
  // };

  // const orderCreate = useSelector((state) => state.orderCreate);
  // const { order, success, error } = orderCreate;

  // useEffect(() => {
  //   if (success) {
  //     history.push(`/order/${order._id}`);
  //   }
  //   // eslint-disable-next-line
  // }, [history, success]);

  const handleTrip = (id) => {
    dispatch(fetchAvailableTrip(id));
  };

  // const bookTicketHandle = () => {
  // dispatch(
  //   createOrder({
  //     orderItems: cart.cartItems,
  //     shippingAddress: cart.shippingAddress,
  //     paymentMethod: cart.paymentMethod.paymentMethod,
  //     itemsPrice: cart.itemsPrice,
  //     shippingPrice: cart.shippingPrice,
  //     taxPrice: cart.taxPrice,
  //     totalPrice: cart.totalPrice,
  //   })
  // );
  // };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      {/* <FormContainer> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="bookingContainer">
          <Row>
            <Col md={12}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {/* <h2>Payment Method</h2>
                  <strong>Method: </strong> */}
                  {/* {cart.paymentMethod.paymentMethod} */}
                  {/* PayPal */}
                  <h2>Select Any Available Seat(s) of Your Choice</h2>
                </ListGroup.Item>
                {cart.length <= 0 ? (
                  // <Loader />
                  <ListGroup.Item>
                    <ListGroup variant="flush">
                      <Row>
                        <Col md={6}>Go Back to Book a Trip</Col>
                      </Row>
                    </ListGroup>
                  </ListGroup.Item>
                ) : (
                  cart.map((trip) => (
                    <ListGroup.Item>
                      <div>
                        Choose your
                        {`${" "} ${trip.quantity} ${" "}`}Seat
                        {trip.quantity > 1 ? "s" : ""}.
                      </div>
                      <div
                        className="seats"
                        style={{
                          maxWidth: "1200px",
                          maxHeight: "500px",
                          display: "grid",
                          gridTemplateColumns:
                            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                          padding: "50px",
                          // margin: "10px",
                          gridGap: "10px",
                          overflowY: "scroll",
                          overflowX: "scroll",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                        }}>
                        {/* <AirlineSeatReclineNormalOutlinedIcon /> */}

                        {trip.tripId.seat?.map((seats) => (
                          <>
                            <div
                              onClick={() =>
                                handleSubmitBooking({
                                  id: seats._id,
                                  seatNumber: seats.seatNumber,
                                })
                              }
                              className="seat"
                              disabled={`${seats.status}` === "Booked"}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",

                                backgroundColor:
                                  `${seats.status}` == "Booked"
                                    ? "gray"
                                    : "white",
                                // color: "white",
                                borderTopLeftRadius: "25px",
                                borderBottomRightRadius: "25px",
                                padding: "6px",
                                transition: "all 0.2s ease-in-out",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",

                                // borderTopRightRadius: "30Px",
                              }}>
                              <div
                                style={{
                                  color:
                                    `${seats.status}` == "Booked"
                                      ? "white"
                                      : "#6c63ff",
                                  fontWeight: "bold",
                                  fontSize: "13px",
                                }}>
                                {seats.seatNumber}
                              </div>
                              <img
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  color: "white",
                                }}
                                src="https://res.cloudinary.com/dblprzex8/image/upload/v1628503702/seat_morhty.png"
                                alt="seat"
                              />
                              {/* <AirlineSeatReclineNormalOutlinedIcon fontSize="large" /> */}
                              <div
                                style={{
                                  color:
                                    `${seats.status}` == "Booked"
                                      ? "white"
                                      : "#6c63ff",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                }}>
                                {seats.status}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>

                      {/* <ListGroup variant="flush">
                        
                        <ListGroup.Item key={trip._id}>
                          {" "}
                          
                          <Row>
                            <Col md={2}>
                              <Image
                                src={trip.tripId.vehicle.imageUrl[0].img}
                                alt="Trip Name"
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link
                                to={`/trip/${trip.tripId._id}`}
                                onClick={() => handleTrip(trip.tripId._id)}>
                                {" "}
                               
                                {trip.tripId.from.name} - {trip.tripId.to.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              
                              {trip.quantity} ticket(s) = Ghc
                              {trip.quantity * trip.tripId.fare}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        
                      </ListGroup> */}
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Col>
            {/* <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Cost Summary</h2>
                  </ListGroup.Item>
                  {!loading && (
                    <>
                      <ListGroup.Item>
                        <Row>
                          <Col>Ticket(s) Cost</Col>
                          <Col>Ghc{tripCost}</Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Tax</Col>
                          <Col>Ghc{taxPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Total</Col>
                          <Col>Ghc{tripPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                    </>
                  )} */}

            {/* <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item> */}
            {/* <ListGroup.Item> */}
            {/* <Button
                    type="button"
                    className="btn-block"
                    // disabled={cart.cartItems === 0}
                    onClick={bookTicketHandle}>
                    Book Ticket
                  </Button> */}
            {/* <ButtonR primary onClick={handleSubmitBooking}>
                      Book Ticket
                    </ButtonR> */}
            {/* </ListGroup.Item> */}
            {/* </ListGroup>
              </Card>
              <ListGroup.Item>
                {payt !== null ? (
                  // pay.paymentAccounts.paymentaccounts[0].privateId &&
                  // pay.paymentAccounts.paymentaccounts[0].publicId ? (
                  <PayStackHook
                    // pay={pay?.pay}
                    privateId={pay.paymentAccounts.paymentaccounts[0].privateId}
                    publicId={pay.paymentAccounts.paymentaccounts[0].publicId}
                    amount={tripPrice}
                    onSuccess={successPayPaymentHandler}
                  />
                ) : // ) : null
                null}
              </ListGroup.Item> */}
            {/* <ListGroup.Item>
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={tripPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </ListGroup.Item> */}
            {/* // </Col> */}
          </Row>
        </div>
      )}

      {/* </FormContainer> */}
    </>
  );
};

export default BookTicketScreen;
