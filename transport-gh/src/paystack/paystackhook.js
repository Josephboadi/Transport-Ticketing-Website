import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../redux/actions/authActions";
import { addToCart, fetchPaymentAccounts } from "../redux/actions/dataActions";
import axios from "../util/axios";
import "./style.css";

const PayStackHook = ({
  privateId,
  publicId,
  id,
  qty,
  counts,
  amount,
  onSuccess,
}) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, cart, price } = useSelector((state) => state.data);
  // const [privateId, setPrivateId] = useState("");
  // const [publicId, setPublicId] = useState("");
  // const pay = useSelector((state) => state.data.paymentAccounts);
  // useEffect(() => {
  //   dispatch(fetchPaymentAccounts(id));
  //   if (paymentAccountsData) {
  //     console.log(paymentAccountsData);
  //   }
  // }, []);

  // console.log(privateId);
  // console.log(publicId);

  const config = {
    reference: new Date().getTime(),
    email: "travelgh@gmail.com",
    amount: amount * 100,
    currency: "GHS",
    publicKey: publicId,
  };
  // you can call this function anything
  const handlePaystackSuccessAction = async (reference) => {
    // const ticketsCount = counts - qty;
    // const tripdata = {
    //   tripId: id,
    //   quantity: qty,
    //   ticketsCount: ticketsCount,
    // };
    // dispatch(addToCart(tripdata));

    // if (cart.length > 0) {
    let output;
    await axios.get(`/payment/verify/${reference}/${privateId}`);

    // history.push("/bookticket");
    // .then((res) => {
    //   console.log(res.data);
    // });
    // console.log(data);
    // return;
    // Implementation for whatever you want to do with reference and after success call.

    if (reference.status == "success") {
      onSuccess();
    }
    // }

    // console.log(reference);

    // await axios
    //   .get(`https://api.paystack.co/transaction/verify/${reference}`, {
    //     headers: {
    //       authorization: `Bearer ${privateId}`,
    //       //replace TEST SECRET KEY with your actual test secret
    //       //key from paystack
    //       "content-type": "application/json",
    //       "cache-control": "no-cache",
    //     },
    //   })
    //   .then((success) => {
    //     output = success;
    //     // res.status(200).json({ data: success });
    //     console.log(success);
    //   })
    //   .catch((error) => {
    //     output = error;
    //   });
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    // let countDownDate1 = new Date().getTime();
    // let countDownDateSeconds1 =
    //   Math.floor((countDownDate1 % (1000 * 60)) / 1000) + 3;

    // // update every second
    // let x1 = setInterval(function () {
    //   // Get todays date and time
    //   let now1 = new Date().getTime();

    //   let nowSeconds1 = Math.floor((now1 % (1000 * 60)) / 1000);

    //   // find the distance between now and count down date
    //   let distance1 = countDownDateSeconds1 - nowSeconds1;

    //   if (distance1 < 0) {
    //     clearInterval(x1);

    //     history.push("/bookticket");
    //   }
    // }, 1000);
  };
  let componentProps;
  const token = localStorage.jwt;

  if (token) {
    const decodedToken = jwtDecode(token);
    // console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(logoutAction());
      window.location.href = "/signin";
    } else {
      componentProps = {
        ...config,
        text: "Pay Now",

        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
      };
    }
  } else {
    window.location.href = "/signin";
  }

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <PaystackButton className="button" {...componentProps} />
    </div>
  );
};

export default PayStackHook;
