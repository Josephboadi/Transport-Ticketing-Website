import {
  SET_COMPANIES,
  LOADING_DATA,
  SET_COMPANY,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  SET_CART,
  DELETE_TRIP_CART,
  SET_BOOKINGS,
  EDIT_STATUS,
} from "../types";

const initialState = {
  companies: [],
  company: {},
  cart: [],
  price: "",
  loading: false,
  addCartSuccess: null,
  deleteSuccessTrip: null,
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPANIES:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };
    case SET_COMPANY:
      return {
        ...state,
        loading: false,
        company: action.payload.result,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartSuccess: true,
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        addCartSuccess: false,
      };
    case DELETE_TRIP_CART:
      return {
        ...state,
        deleteSuccessItem: true,
      };
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
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
