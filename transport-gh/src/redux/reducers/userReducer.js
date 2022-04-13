import {
  SET_USER,
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  ADD_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  account: {},
  name: "",
  address: {},
  imageUrl: [],
  payment: [],
  trips: [],
  vehicles: [],
  locations: [],
  motto: "",

  cart: {},
  _id: "",
  firstName: "",
  lastName: "",
  pic: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
        loading: false,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case ADD_TRIP:
      return {
        ...state,
        loading: false,
        items: [...state.trips, action.payload],
      };
    case DELETE_TRIP:
      return {
        ...state,
        trips: state.trips.filter((trip) => trip._id !== action.payload),
      };

    case EDIT_TRIP:
      return {
        ...state,
        trips: state.trips.map((trip) =>
          trip._id === action.payload._id ? { ...action.payload } : trip
        ),
      };

    default:
      return state;
  }
}
