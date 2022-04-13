import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import img from "../../images/driver.jpg";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import SwipeableImages from "../SwipeableImages";
// import Rating from "../components/Rating";
// import {
//   listProductDetails,
//   createProductReview,
// } from "../actions/productActions";
import Loader from "../Loader";
import Message from "../Message";
import { ButtonR } from "../ButtonElement";
import {
  fetchAvailableTrip,
  addToCart,
  fetchPaymentAccounts,
} from "../../redux/actions/dataActions";
import PayStackHook from "../../paystack/paystackhook";
import CheckoutSteps from "./CheckoutSteps";
import jwtDecode from "jwt-decode";
import { logoutAction } from "../../redux/actions/authActions";
// import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
// import Meta from "../components/Meta";

const TripDetailScreen = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [payt, setPayt] = useState("");

  // const { loading, cart, price } = useSelector((state) => state.data);

  const pay = useSelector((state) => state.data.paymentAccounts);
  const history = useHistory();

  const availableTripDetail = localStorage.getItem("tripInfo")
    ? JSON.parse(localStorage.getItem("tripInfo"))
    : {};

  useEffect(() => {
    if (availableTripDetail !== null) {
      dispatch(fetchPaymentAccounts(availableTripDetail.result.creator));
    }
    // dispatch(getCart());
  }, []);

  useEffect(() => {
    if (availableTripDetail !== null) {
      setPayt(pay);
    } else {
      setPayt(null);
    }
  }, [pay]);

  // console.log(pay);
  let successPayPaymentHandler;
  const token = localStorage.jwt;

  if (token) {
    const decodedToken = jwtDecode(token);
    // console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(logoutAction());
      window.location.href = "/signin";
    } else {
      successPayPaymentHandler = () => {
        const ticketsCount = availableTripDetail.result.ticketsCount - qty;
        const tripdata = {
          tripId: availableTripDetail.result._id,
          quantity: qty,
          ticketsCount: ticketsCount,
        };
        dispatch(addToCart(history, tripdata));
      };
    }
  } else {
    window.location.href = "/signin";
  }

  // useEffect(() => {
  //   dispatch(fetchAvailableTrip(tid));
  // }, []);

  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const productReviewCreate = useSelector((state) => state.productReviewCreate);
  // const {
  //   success: successProductReview,
  //   loading: loadingProductReview,
  //   error: errorProductReview,
  // } = productReviewCreate;

  // useEffect(() => {
  // if (successProductReview) {
  //   setRating(0);
  //   setComment("");
  // }
  // if (!product._id || product._id !== match.params.id) {
  //   dispatch(listProductDetails(match.params.id));
  //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
  // }
  // }, []);

  // dispatch, match, successProductReview, product

  // const addToCartHandler = () => {
  //   history.push(`/cart/${match.params.id}?qty=${qty}`);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     createProductReview(match.params.id, {
  //       rating,
  //       comment,
  //     })
  //   );
  // };

  // console.log(data);

  return (
    <div className="booking2Container">
      <CheckoutSteps step1 step2 />
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {availableTripDetail === null ? (
        <Loader />
      ) : (
        // ) : error ? (
        //   <Message variant="danger">{error}</Message>
        <>
          {/* <Meta title={product.name} /> */}

          <Row>
            <Col md={5}>
              {/* <Image
              src={product.images.length === 0 ? "" : product.images[0].img}
              alt={product.name}
              fluid
              style={{ height: "400px" }}
            /> */}
              {availableTripDetail.result.vehicle != null && (
                // <SwipeableImages
                //   images={
                //     // availableTripDetail &&
                //     // availableTripDetail.result.vehicle.imageUrl
                //     `https://res.cloudinary.com/dblprzex8/image/upload/v1633007045/bus_zeokac.svg`
                //   }
                //   type="vehicles"
                // />
                <img
                  style={{ width: 320, height: 250 }}
                  src="https://res.cloudinary.com/dblprzex8/image/upload/v1633007045/bus_zeokac.svg"
                  alt="Bus"
                />
              )}
            </Col>

            <Col md={4}>
              <ListGroup variant="flush">
                {/* <ListGroup.Item>
                  <h4>Metro Mass Company Limited</h4>
                </ListGroup.Item> */}
                <ListGroup.Item>
                  <h5>
                    {availableTripDetail &&
                      availableTripDetail.result.from.name}{" "}
                    -{" "}
                    {availableTripDetail && availableTripDetail.result.to.name}{" "}
                    Trip
                  </h5>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item> */}
                <ListGroup.Item>
                  Fare: Ghc {` `}
                  {availableTripDetail && availableTripDetail.result.fare}
                </ListGroup.Item>
                <ListGroup.Item>
                  Vehicle Reg. No:{" "}
                  {availableTripDetail &&
                    availableTripDetail.result.vehicle.regNumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  Available Tickets:{" "}
                  {availableTripDetail &&
                    availableTripDetail.result.ticketsCount}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Amount:</Col>
                      <Col>
                        <strong>
                          Ghc{` `}
                          {availableTripDetail &&
                            availableTripDetail.result.fare * qty}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {availableTripDetail &&
                        availableTripDetail.result.ticketsCount > 0
                          ? " Tickets Available"
                          : " Ticket Sold out"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {availableTripDetail.result.ticketsCount > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Select Qty </Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}>
                            {[
                              ...Array(
                                availableTripDetail.result.ticketsCount
                              ).keys(),
                            ].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  {/* <ListGroup.Item>
                    <ButtonR
                      primary
                      to="/bookticket"
                      onClick={() =>
                        handleSubmitCart(availableTripDetail.result._id)
                      }>
                      Book Ticket
                    </ButtonR>
                  </ListGroup.Item> */}
                  <ListGroup.Item>
                    {payt !== null ? (
                      <PayStackHook
                        id={availableTripDetail.result._id}
                        counts={availableTripDetail.result.ticketsCount}
                        qty={qty}
                        privateId={
                          pay.paymentAccounts?.paymentaccounts[0].privateId
                        }
                        publicId={
                          pay.paymentAccounts?.paymentaccounts[0].publicId
                        }
                        amount={availableTripDetail.result.fare * qty}
                        onSuccess={successPayPaymentHandler}
                      />
                    ) : // ) : null
                    null}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          {/* <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}>
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) =>
                            setComment(e.target.value)
                          }></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </>
      )}
    </div>
  );
};

export default TripDetailScreen;
