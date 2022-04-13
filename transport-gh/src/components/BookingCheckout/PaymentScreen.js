import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps";
import FormContainer from "../FormContainer";
import { ButtonR } from "../ButtonElement";

const PaymentScreen = ({ history }) => {
  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;

  // if (!shippingAddress) {
  //   history.push("/shipping");
  // }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(savePaymentMethod({ paymentMethod }));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check
            style={{ marginBottom: "10px" }}
            type="radio"
            label="PayPal or Credit Card"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
          <Form.Check
            type="radio"
            label="Cash"
            id="Cash"
            name="paymentMethod"
            value="Cash"
            onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
        </Col>

        {/* <Button
          type="submit"
          variant="primary"
          style={{ marginTop: "25px", marginBottom: "25px" }}>
          Continue
        </Button> */}
        <div
          style={{ marginTop: "25px", marginBottom: "25px", width: "150px" }}>
          <ButtonR primary to="bookticket">
            Continue
          </ButtonR>
        </div>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
