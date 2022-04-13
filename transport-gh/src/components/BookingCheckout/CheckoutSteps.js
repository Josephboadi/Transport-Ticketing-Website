import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { tripId } = useParams();
  return (
    <Nav className="justify-content-center mb-4" style={{ marginTop: "100px" }}>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/signin">
            <Nav.Link style={{ color: "#6c63ff" }}>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to={`/trip/${tripId}`}>
            <Nav.Link>Book Ticket</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Book Ticket</Nav.Link>
        )}
      </Nav.Item>
      {/* <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link style={{ color: "#6c63ff" }}>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item> */}
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/bookticket">
            <Nav.Link style={{ color: "#6c63ff" }}>Select Seat</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Select Seat</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
