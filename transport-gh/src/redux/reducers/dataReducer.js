import {
  SET_CLIENTS,
  LOADING_DATA,
  SET_CLIENT,
  SET_AVAILABLE_TRIPS,
  SET_AVAILABLE_TRIP,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_BOOKING_SUCCESS,
  UPDATE_TICKETSCOUNT_SUCCESS,
  SET_CART,
  DELETE_TRIP_CART,
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

const initialState = {
  clients: [],
  client: {},
  review: [],
  paymentAccounts: [],
  // paymentAccount: {},
  availableTrip: [],
  availableTripDetail: {},
  availableFutureTrip: [],
  cart: [],
  price: "",
  loading: false,
  addCartSuccess: null,
  addReview: null,
  addComplaint: null,
  deleteSuccessTrip: null,
  bookings: [],
  booking: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_CLIENTS:
      return {
        ...state,

        clients: action.payload,
        loading: false,
      };
    case SET_CLIENT:
      return {
        ...state,
        loading: true,
        client: action.payload.result,
        loading: false,
      };
    case SET_REVIEW:
      return {
        ...state,
        loading: true,
        review: action.payload.result,
        loading: false,
      };
    case SET_AVAILABLE_TRIPS:
      return {
        ...state,
        loading: false,
        availableTrip: action.payload.result,
      };
    case SET_AVAILABLE_FUTURE_TRIPS:
      return {
        ...state,
        loading: false,
        availableFutureTrip: action.payload.result,
      };
    case SET_AVAILABLE_TRIP:
      return {
        ...state,
        loading: false,
        availableTripDetail: action.payload.result,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartSuccess: true,
      };
    case ADD_BOOKING_SUCCESS:
      return {
        ...state,
        addBookingSuccess: true,
      };
    case COMPANY_CREATE_REVIEW:
      return {
        ...state,
        addReview: true,
      };
    case COMPANY_CREATE_COMPLAINT:
      return {
        ...state,
        addComplaint: true,
      };
    case SET_PAYMENTACCOUNTS:
      return {
        ...state,
        paymentAccounts: action.payload,
        loading: false,
      };
    // case SET_PAYMENTACCOUNT:
    //   return {
    //     ...state,
    //     paymentAccount: action.payload,
    //     loading: false,
    //   };
    case UPDATE_TICKETSCOUNT_SUCCESS:
      return {
        ...state,
        updateTicketsCountSuccess: true,
      };
    case UPDATE_SEAT_SUCCESS:
      return {
        ...state,
        updateSeatStatusSuccess: true,
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        addCartSuccess: false,
      };
    case DELETE_TRIP_CART:
      return {
        ...state,
        deleteSuccessTrip: true,
      };
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
      };
    case SET_BOOKING:
      return {
        ...state,
        booking: action.payload,
        loading: false,
      };
    case EDIT_STATUS:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload._id ? { ...action.payload } : booking
        ),
      };
    case SET_CART:
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
        price: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
