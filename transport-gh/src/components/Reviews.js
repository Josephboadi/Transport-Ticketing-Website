import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import "./style.css";
import Rating from "./Rating";
import Loader from "./Loader";
import Message from "./Message";
import {
  createCompanyReview,
  fetchClient,
  fetchReview,
} from "../redux/actions/dataActions";
import moment from "moment";
import jwtDecode from "jwt-decode";
import { logoutAction } from "../redux/actions/authActions";
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = ({ authenticated, compId }) => {
  // const history = useHistory();
  const [loadingR, setLoadingR] = useState(true);
  // const { compId } = useParams();
  // const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [clientD, setClientD] = useState([]);
  const { addReview } = useSelector((state) => state.data);
  const datta = useSelector((state) => state.data.review);

  const dispatch = useDispatch();

  // console.log(compId);
  // const compId = match.params.id;
  // console.log(loading);
  // if (data) {
  //   console.log(data);
  // }

  //   console.log(match);
  useEffect(() => {
    dispatch(fetchReview(compId));
  }, []);

  useEffect(() => {
    // if (addReview === true) {

    // }
    setClientD(datta);
    // return;
  }, [datta]);

  useEffect(() => {
    Aos.init();
  }, []);

  // console.log(clientD);

  const submitHandler = (e) => {
    e.preventDefault();

    const token = localStorage.jwt;

    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutAction());
        window.location.href = "/signin";
      } else {
        if (comment !== "") {
          const review = {
            comment: comment,
            compId: compId,
          };
          dispatch(createCompanyReview(review));
          // setRating(0);
          setComment("");
          let countDownDate = new Date().getTime();
          let countDownDateSeconds =
            Math.floor((countDownDate % (1000 * 60)) / 1000) + 4;

          // update every second
          let x = setInterval(function () {
            // Get todays date and time
            let now = new Date().getTime();

            let nowSeconds = Math.floor((now % (1000 * 60)) / 1000);

            // find the distance between now and count down date
            let distance = countDownDateSeconds - nowSeconds;

            if (distance < 0) {
              clearInterval(x);
              // setClient(data);
              // console.log(client);
              dispatch(fetchReview(compId));
            }
          }, 1000);
          setLoadingR(false);
          // console.log(compId);
          // console.log(client._id);
        }
      }
    } else {
      window.location.href = "/signin";
    }
  };

  return (
    <Row>
      <Col md={12}>
        {/* <h2>Reviews</h2> */}
        <div>
          {authenticated ? (
            <Form
              data-aos="zoom-out-up"
              // data-aos-offset="200"
              data-aos-delay="1200"
              // data-aos-easing="ease-in-sine"
              data-aos-duration="1900"
              onSubmit={submitHandler}
              // className="form__Control"
              // style={{ marginBottom: "10px" }}
            >
              {/* <Form.Group controlId="rating">
                <div>
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      color: "#6c63ff",
                    }}>
                    Rating
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    as="select"
                    value={rating}
                    //   style={{ marginBottom: "-20px" }}
                    onChange={(e) => setRating(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </div>
              </Form.Group> */}
              <Form.Group controlId="comment">
                <Form.Label
                  style={{
                    marginTop: "25px",
                    fontWeight: "bold",
                    color: "#6c63ff",
                    marginLeft: "20px",
                  }}>
                  Send a Comment
                </Form.Label>
                <Form.Control
                  className="form-control"
                  style={{ marginLeft: "0px", marginRight: "100px" }}
                  as="textarea"
                  row="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}></Form.Control>
              </Form.Group>
              <Button
                style={{ marginLeft: "10px", marginBottom: "5px" }}
                type="submit"
                variant="primary">
                Submit
              </Button>
            </Form>
          ) : (
            <Message
              data-aos="slide-down"
              // data-aos-offset="200"
              data-aos-delay="1000"
              // data-aos-easing="ease-in-sine"
              data-aos-duration="1900"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}>
              Please <Link to="/signin">sign in</Link> to write a Comment{" "}
            </Message>
          )}
        </div>
        {/* <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "25px",
          }}>
          <h2
            style={{
              // color: "black",
              // marginBottom: "-10px",
              fontSize: "25px",
              // marginTop: "15px",
              // marginBottom: "15px",
              color: "#6c63ff",
            }}>
            Comments
          </h2>
        </div> */}
        <ListGroup
          data-aos="slide-up"
          // data-aos-offset="200"
          data-aos-delay="1300"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="1900"
          variant="flush">
          <div style={{ maxHeight: "450px", overflowY: "scroll" }}>
            {/* <ListGroup.Item> */}

            {/* {addReview && (
              <Message variant="success">Review submitted successfully</Message>
            )}
            {!loading && <Loader />} */}

            {/* {errorProductReview && (
              <Message variant="danger">{errorProductReview}</Message>
            )} */}

            {/* </ListGroup.Item> */}
            {loadingR && clientD === "" ? (
              <Loader />
            ) : !loadingR && clientD?.length == 0 ? (
              <Message>No Comments</Message>
            ) : (
              clientD?.map((review) => (
                <ListGroup.Item key={review._id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                          alignItems: "center",
                          marginTop: "-15px",
                          marginRight: "10px",
                        }}
                        src={review.user.pic}
                        alt="Profile"
                      />
                      <strong
                        style={{
                          color: "black",
                          fontSize: "15px",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "-15px",
                        }}>
                        {review.name}
                      </strong>
                    </div>

                    {/* <strong
                        style={{
                          color: "black",
                          fontSize: "15px",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "-15px",
                        }}>
                        Joseph
                      </strong> */}
                    {/* <Rating value={review.rating} /> */}
                    {/* <Rating
                        value={4}
                        style={{
                          color: "black",
                          fontSize: "12px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      /> */}
                    <p
                      style={{
                        color: "black",
                        fontSize: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {moment(review.createdAt).fromNow()}

                      {/* {review.createdAt.substring(0, 10)} */}
                    </p>
                    {/* <p
                        style={{
                          color: "black",
                          fontSize: "15px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        24/12/2021
                      </p> */}
                  </div>

                  <p
                    style={{
                      color: "black",
                      fontSize: "16px",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}>
                    {review.comment}
                  </p>
                  {/* <p style={{ color: "black", fontSize: "16px" }}>Trial Message</p> */}

                  {/* <ListGroup.Item style={{ height: "470px", overflowY: "scroll" }}> */}
                </ListGroup.Item>
              ))
            )}
          </div>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Reviews;
