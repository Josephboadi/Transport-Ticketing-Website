import {
  SET_COMPANIES,
  LOADING_DATA,
  SET_COMPANY,
  LOADING_UI,
  SET_ERROR_TRIP,
  SERVER_ERROR,
  CLEAR_ERRORS,
  ADD_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  SET_CART,
  DELETE_TRIP_CART,
  SET_ERRORS,
  SET_BOOKINGS,
  EDIT_STATUS,
} from "../types";
import axios from "../../util/axios";
import axiosNewInstance from "axios";
import { getUserData } from "./authActions";

export const fetchCompanies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/companies")
    .then((res) => {
      dispatch({
        type: SET_COMPANIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_COMPANIES,
        payload: [],
      });
    });
};

export const fetchCompaniesByAddress = (lat, lng) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/companies-location/${lat}/${lng}`)
    .then((res) => {
      dispatch({
        type: SET_COMPANIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: SET_COMPANIES,
        payload: [],
      });
    });
};

export const fetchCompany = (restId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/company/${restId}`)
    .then((res) => {
      dispatch({
        type: SET_COMPANY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_COMPANY,
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

export const addToCart = (tripData) => (dispatch) => {
  axios
    .post("/cart", tripData)
    .then((res) => {
      dispatch({
        type: ADD_CART_SUCCESS,
        payload: tripData.tripId,
      });
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
      console.log(res.data);
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
      console.log(formattedAddress);
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
  console.log(userData.formattedAddress);
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

export const placeBooking = (history) => (dispatch) => {
  axios
    .post("/booking")
    .then((res) => {
      history.push("/booking");
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

export const changeBookingStatus = (bookingId, body) => (dispatch) => {
  axios
    .post(`/booking-status/${bookingId}`, body)
    .then((res) => {
      dispatch({
        type: EDIT_STATUS,
        payload: res.data.updatedBooking,
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
