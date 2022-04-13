import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { SET_AUTHENTICATED } from "./redux/types";
import { logoutAction, getUserData } from "./redux/actions/authActions";

//axios
import axios from "./util/axios";

//jwt-decode
import jwtDecode from "jwt-decode";

//restrict routes
import { AuthRoute, CheckRoute, CompanyRoute, UserRoute } from "./util/route";

// import ClientAdmin from "./adminpages/ClientAdmin";

import Home from "./pages";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import SignupCompany from "./pages/signupcompany";
import ClientPage from "./pages/client";
import CheckoutBooking from "./pages/checkoutbooking";
import BookTicket from "./pages/bookticket";
import Bookings from "./pages/bookings";
import Booking from "./pages/booking";
import TripDetail from "./pages/tripdetail";
import ResetPasswordPage from "./pages/resetpassword";
import ChangePasswordPage from "./pages/changepassword";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";

const token = localStorage.jwt;

if (token) {
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutAction());
    window.location.href = "/signin";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/terms" component={TermsPage} exact />
          <Route path="/privacy" component={PrivacyPage} exact />
          <Route path="/faq" component={FAQ} exact />
          <Route
            path="/reset-password/:token"
            component={ChangePasswordPage}
            exact
          />
          <Route path="/reset-password" component={ResetPasswordPage} exact />
          {/* <Route
            path="reset-password/:token"
            component={ChangePasswordPage}
            exact
          /> */}
          <AuthRoute path="/signin" component={SigninPage} exact />
          <CheckRoute path="/payment" component={CheckoutBooking} exact />
          <CheckRoute path="/books" component={Bookings} exact />
          <CheckRoute path="/book/:bookingId" component={Booking} exact />
          <CheckRoute path="/bookticket" component={BookTicket} exact />
          <CheckRoute path="/trips/:tripId" component={TripDetail} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/signupcompany" component={SignupCompany} exact />
          <Route path="/clients/:compId" component={ClientPage} exact />
          {/* <Route path="/admin/client" component={ClientAdmin} exact /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
