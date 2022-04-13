import {
  SET_CLIENTS,
  LOADING_DATA,
  SET_CLIENT,
  SET_AVAILABLE_TRIPS,
  SET_AVAILABLE_TRIP,
  LOADING_UI,
  SET_ERROR_TRIP,
  SERVER_ERROR,
  CLEAR_ERRORS,
  ADD_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
  ADD_CART_SUCCESS,
  ADD_BOOKING_SUCCESS,
  UPDATE_TICKETSCOUNT_SUCCESS,
  ADD_CART_FAIL,
  SET_CART,
  DELETE_TRIP_CART,
  SET_ERRORS,
  SET_BOOKINGS,
  SET_BOOKING,
  EDIT_STATUS,
  COMPANY_CREATE_REVIEW,
  SET_PAYMENTACCOUNT,
  SET_PAYMENTACCOUNTS,
  SET_REVIEW,
  SET_AVAILABLE_FUTURE_TRIPS,
  UPDATE_SEAT_SUCCESS,
  COMPANY_CREATE_COMPLAINT,
} from "../types";
import axios from "../../util/axios";
import axiosNewInstance from "axios";
import { getUserData } from "./authActions";

export const fetchClients = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/clients")
    .then((res) => {
      dispatch({
        type: SET_CLIENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_CLIENTS,
        payload: [],
      });
    });
};

export const fetchReview = (compId) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
    .get(`/review/${compId}`)
    .then((res) => {
      dispatch({
        type: SET_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_REVIEW,
        payload: [],
      });
    });
};

export const fetchPaymentAccounts = (compaId) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
    .get(`/client/paymentAccount/${compaId}`)
    .then(async (res) => {
      dispatch({
        type: SET_PAYMENTACCOUNTS,
        payload: res.data,
      });
      // await localStorage.setItem("paymentaccounts", JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_PAYMENTACCOUNTS,
        payload: [],
      });
    });
};

export const fetchClientsByAddress = (lat, lng) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/clients-location/${lat}/${lng}`)
    .then((res) => {
      dispatch({
        type: SET_CLIENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: SET_CLIENTS,
        payload: [],
      });
    });
};

// export const fetchPaymentAccount = (paymentAccountId) => async (dispatch) => {
//   dispatch({ type: LOADING_DATA });
//   await axios
//     .get(`/paymentaccount/get-paymentAccount/${paymentAccountId}`)
//     .then((res) => {
//       dispatch({
//         type: SET_PAYMENTACCOUNT,
//         payload: res.data,
//       });
//       // localStorage.setItem("tripInfo", JSON.stringify(res.data));
//       // history.push(`/trip/${tripId}`);
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({
//         type: SET_PAYMENTACCOUNT,
//         payload: {},
//       });
//     });
// };

export const fetchClient = (compId) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
    .get(`/client/${compId}`)
    .then((res) => {
      dispatch({
        type: SET_CLIENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_CLIENT,
        payload: {},
      });
    });
};

export const fetchAvailableFutureTrips = (compId) => async (dispatch) => {
  // dispatch({type: LOADING_DATA});
  await axios
    .get(`/client/availableFutureTrip/${compId}`)
    .then((res) => {
      dispatch({
        type: SET_AVAILABLE_FUTURE_TRIPS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_FUTURE_TRIPS,
        payload: {},
      });
    });
};

export const fetchAvailableTrips = (compId, tripData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post(`/client/availableTrip/${compId}`, tripData)
    .then((res) => {
      dispatch({
        type: SET_AVAILABLE_TRIPS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_TRIPS,
        payload: {},
      });
    });
};

export const fetchAvailableTrip = (history, tripId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/trip/${tripId}`)
    .then((res) => {
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: res.data,
      });
      localStorage.setItem("tripInfo", JSON.stringify(res.data));
      history.push(`/trips/${tripId}`);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: {},
      });
    });
};

export const fetchAvailable1Trip = (history, tripId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/trip/${tripId}`)
    .then((res) => {
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: {},
      });
    });
};

export const addTrip = (tripData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/company/create-trip`, tripData)
    .then((res) => {
      dispatch({
        type: ADD_TRIP,
        payload: res.data.trip,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_TRIP,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteTrip = (tripId) => (dispatch) => {
  axios
    .delete(`/company/delete-trip/${tripId}`)
    .then((res) => {
      dispatch({
        type: DELETE_TRIP,
        payload: tripId,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const editTrip = (tripData, tripId) => (dispatch) => {
  axios
    .put(`/company/edit-trip/${tripId}`, tripData)
    .then((res) => {
      dispatch({
        type: EDIT_TRIP,
        payload: res.data.trip,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_TRIP,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addToCart = (history, tripData, tripId) => (dispatch) => {
  // const tripData = {
  //   tripId,
  //   quantity
  // }
  axios
    .post("/cart", tripData)
    .then((res) => {
      dispatch({
        type: ADD_CART_SUCCESS,
        payload: tripData,
      });
      history.push("/bookticket");
      dispatch(getCart());
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: ADD_CART_FAIL,
      });
    });
};

export const getCart = () => (dispatch) => {
  axios
    .get("/cart")
    .then((res) => {
      dispatch({
        type: SET_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: SET_CART,
        payload: [],
      });
    });
};

export const deleteCartTrip = (tripData) => (dispatch) => {
  axios
    .post("/delete-cart-trip", tripData)
    .then((res) => {
      dispatch({
        type: DELETE_TRIP_CART,
      });
      dispatch(getCart());
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const removeCartTrip = (tripID) => (dispatch) => {
  axios
    .post(`/remove-cart-trip/${tripID}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(getCart());
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const fetchAddress = (userData, history) => (dispatch) => {
  const location = `+${userData.aptName},+${userData.locality},+${userData.street},+${userData.zip}`;
  axiosNewInstance
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: location,
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    })
    .then((result) => {
      const formattedAddress = result.data.results[0].formatted_address;
      // console.log(formattedAddress);
      const lat = result.data.results[0].geometry.location.lat;
      const lng = result.data.results[0].geometry.location.lng;
      userData.lat = lat;
      userData.lng = lng;
      userData.formattedAddress = formattedAddress;
      dispatch(addAddress(userData, history));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAddress = (userData, history) => (dispatch) => {
  // console.log(userData.formattedAddress);
  axios
    .post("/user/address", userData)
    .then((res) => {
      // console.log(res.data);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      dispatch(placeBooking(history));
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response) {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const placeBooking =
  (history, bookingData, tripId, body) => async (dispatch) => {
    await axios
      .post("/booking", bookingData)
      .then((res) => {
        dispatch({
          type: ADD_BOOKING_SUCCESS,
          payload: bookingData,
        });
        // history.push("/bookings");
        dispatch(changeSeatStatus(tripId, body));
        dispatch(getCart());
        dispatch(getBookings());
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

export const getBookings = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/bookings")
    .then((res) => {
      dispatch({
        type: SET_BOOKINGS,
        payload: res.data.bookings,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getBooking = (history, bookingId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/booking/${bookingId}`)
    .then((res) => {
      dispatch({
        type: SET_BOOKING,
        payload: res.data.booking,
      });
      localStorage.setItem("bookingDetail", JSON.stringify(res.data.booking));
      history.push(`/book/${bookingId}`);
    })

    .catch((err) => {
      console.log(err.response);
    });
};

export const changeTicketsCount = (tripId, body) => (dispatch) => {
  axios
    .put(`/edit-ticketsCount/${tripId}`, body)
    .then((res) => {
      dispatch({
        type: UPDATE_TICKETSCOUNT_SUCCESS,
        payload: body,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const changeSeatStatus = (tripId, body) => (dispatch) => {
  axios
    .put(`/edit-seatStatus/${tripId}`, body)
    .then((res) => {
      dispatch({
        type: UPDATE_SEAT_SUCCESS,
        // payload: body,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const changeBookingStatus = (bookingId, body) => (dispatch) => {
  axios
    .post(`/booking-status/${bookingId}`, body)
    .then((res) => {
      dispatch({
        type: EDIT_STATUS,
        payload: res.data.updatedbooking,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const socketStatusUpdate = (booking) => (dispatch) => {
  dispatch({
    type: EDIT_STATUS,
    payload: booking,
  });
};

export const createCompanyReview = (review) => async (dispatch) => {
  await axios
    .post(`/add-reviews`, review)
    .then((res) => {
      dispatch({
        type: COMPANY_CREATE_REVIEW,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const createCompanyComplaint = (complt) => async (dispatch) => {
  await axios
    .post(`/add-complaints`, complt)
    .then((res) => {
      dispatch({
        type: COMPANY_CREATE_COMPLAINT,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
