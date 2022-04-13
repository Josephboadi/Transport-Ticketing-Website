import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormH2,
  FormInput,
  FormSelect,
  FormLabel,
  FormImage,
  DoubleFormContainer,
  FormWrap,
  Icon,
  Text,
  FormH3,
} from "./SignupCompanyElements";

import SearchBar from "../SearchBar";

import useForm from "../../hooks/forms";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";

import { signupCompany } from "../../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  // rootHome: {
  //   padding: "2px 4px",
  //   display: "flex",
  //   alignItems: "center",
  //   width: 860,
  // },
  // rootItems: {
  //   padding: "2px 4px",
  //   display: "flex",
  //   alignItems: "center",
  //   width: 400,
  //   backgroundColor: "#edebeb",
  // },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    position: "relative",
    color: " #fff",
    // height: 40px;
    background: "transparent",
    padding: "5px 9px",
    // marginBottom: "16px",
    outline: "none",
    border: "none",
    borderBottom: "2px solid #2874f0",
    borderRadius: "4px",
  },
  results: {
    position: "absolute",
    marginRight: "10px",
    marginLeft: "10px",
    bottom: 250,
    left: "26%",
    zIndex: 999,
    // maxWidth: 760,
    width: "auto",
    left: "auto",
    right: "auto",
    // marginRight: "auto",
    // marginLeft: "auto",
    height: "15%",
  },
  iconButton: {
    padding: 10,
    color: "white",
  },
  // divider: {
  //   height: 28,
  //   margin: 4,
  // },
}));

const regionItems = [
  { id: "Upper East", title: "Upper East" },
  { id: "Upper West", title: "Upper West" },
  { id: "North East", title: "North East" },
  { id: "Savannah", title: "Savannah" },
  { id: "Northern", title: "Northern" },
  { id: "Brong Ahafo", title: "Brong Ahafo" },
  { id: "Bono East", title: "Bono East" },
  { id: "Ahafo", title: "Ahafo" },
  { id: "Ashanti", title: "Ashanti" },
  { id: "Oti", title: "Oti" },
  { id: "Volta", title: "Volta" },
  { id: "Western North", title: "Western North" },
  { id: "Western", title: "Western" },
  { id: "Central", title: "Central" },
  { id: "Eastern", title: "Eastern" },
  { id: "Greater Accra", title: "Greater Accra" },
];

const capitalItems = [
  { id: "Bolgatanga", title: "Bolgatanga" },
  { id: "Wa", title: "Wa" },
  { id: "Nalerigu", title: "Nalerigu" },
  { id: "Damango", title: "Damango" },
  { id: "Tamale", title: "Tamale" },
  { id: "Sunyani", title: "Sunyani" },
  { id: "Techiman", title: "Techiman" },
  { id: "Ahafo Goaso", title: "Ahafo Goaso" },
  { id: "Kumasi", title: "Kumasi" },
  { id: "Dambai", title: "Dambai" },
  { id: "Ho", title: "Ho" },
  { id: "Sefwi Wiawso", title: "Sefwi Wiawso" },
  { id: "Sekondi Takoradi", title: "Sekondi Takoradi" },
  { id: "Cape Coast", title: "Cape Coast" },
  { id: "Koforidua", title: "Koforidua" },
  { id: "Accra", title: "Accra" },
];

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [images, setImages] = useState({});
  let imageError;

  const [locationStatus, setLocationStatus] = useState();

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motto, setMotto] = useState("");
  // const [subLocality, setSubLocality] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [zip, setZip] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  // const [payment, setPayment] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, serverError, errorsCompany } = useSelector(
    (state) => state.UI
  );

  const { message, errors } = errorsCompany || {};

  if (message) {
    if (message.includes("Upload an image")) imageError = message;
  }

  const handleFileSelect = (event) => {
    setImages(event.target.files);
  };

  //error variables
  let emailError = null;
  let passwordError = null;
  let confirmPasswordError = null;
  // let subLocalityError = null;
  let regionError = null;
  // let countryError = null;
  let cityError = null;
  let zipError = 233;
  let phoneNoError = 233;
  let nameError = null;
  let mottoError = null;
  // let formatError = null;

  if (errors) {
    for (let error of errors) {
      if (error.msg.includes("valid email")) emailError = error.msg;
      if (error.msg.includes("Email address already")) emailError = error.msg;
      if (error.msg.includes("least 6 characters long"))
        passwordError = error.msg;
      if (error.msg.includes("Passwords have to"))
        confirmPasswordError = error.msg;
      if (error.msg.includes("10 digit phone")) phoneNoError = error.msg;
      if (error.msg.includes("Zipcode cannot")) zipError = error.msg;
      if (error.msg.includes("city cannot")) cityError = error.msg;
      // if (error.msg.includes("Apartment name cannot")) aptError = error.msg;
      if (error.msg.includes("region cannot")) regionError = error.msg;
      if (error.msg.includes("Motto cannot")) mottoError = error.msg;
      // if (error.msg.includes("Payment cannot be")) paymentError = error.msg;
      if (error.msg.includes("Company Name")) nameError = error.msg;
    }
  }

  const signupCompanyHandle = (props) => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("motto", motto);
    // formData.append("subLocality", subLocality);
    formData.append("city", city);
    formData.append("region", region);
    // formData.append("country", country);
    formData.append("formattedAddress", formattedAddress);
    formData.append("zip", zip);
    formData.append("lat", lat);
    formData.append("lng", lng);
    formData.append("phoneNo", phoneNo);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    // formData.append("payment", payment);
    formData.append("role", "ROLE_COMPANY");
    dispatch(signupCompany(formData, history));
  };

  // const { inputs, handleInputChange, handleSubmit } = useForm(
  //   {
  //     name: "",
  //     email: "",
  //     motto: "",
  //     street: "",
  //     aptName: "",
  //     locality: "",
  //     zip: "",
  //     phoneNo: "",
  //     payment: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   signupCompanyHandle
  // );

  const handleSelect = async (value) => {
    setAddress(value);
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);

    if (results && latlng) {
      setFormattedAddress(results[0].formatted_address);
      // setSubLocality(results[0].address_components[0].long_name)
      // setLocality(results[1].address_components[0].long_name)
      setLat(latlng.lat);
      setLng(latlng.lng);
    }
    // console.log(results);
    // console.log(latlng);
  };
  // console.log(lat, lng);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    signupCompanyHandle();
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Travel Gh</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Register Your Company</FormH1>
              {/* <FormLabel htmlFor="for">First Name</FormLabel> */}
              <FormInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Company Name"
                helperText={nameError}
                error={nameError ? true : false}
                required
              />

              <FormInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                helperText={emailError}
                error={emailError ? true : false}
                required
              />

              <FormInput
                value={motto}
                onChange={(e) => setMotto(e.target.value)}
                type="text"
                placeholder="Enter Company Motto"
                helperText={mottoError}
                error={mottoError ? true : false}
                required
              />

              {/* <FormH2>Adress:</FormH2> */}

              {/* <FormInput
                value={formattedAddress}
                onChange={(e) => setFormattedAddress(e.target.value)}
                type="text"
                placeholder="Enter Company Address"
                helperText={aptError}
                error={mottoError ? true : false}
                required
              /> */}

              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <>
                    <InputBase
                      {...getInputProps({
                        placeholder: "Enter Company address",
                      })}
                      className={classes.input}
                      inputProps={{
                        "aria-label": "search google maps for delivery address",
                      }}
                    />
                    <div className={classes.results}>
                      {loading ? <div>Getting Results...</div> : null}

                      {suggestions.map((suggestion) => {
                        const style = suggestion.active
                          ? { backgroundColor: "#41b6e6", cursor: "pointer" }
                          : { backgroundColor: "#fff", cursor: "pointer" };

                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, { style })}>
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </PlacesAutocomplete>
              <SearchIcon className={classes.iconButton} />
              {/* <SearchBar page="home" action={setLocationStatus} /> */}

              <DoubleFormContainer>
                {/* <FormInput
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="Enter city / district / town"
                  required
                  helperText={cityError}
                  error={cityError ? true : false}
                /> */}
                <select
                  className="form-control"
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid #2874f0",
                    borderRadius: "4px",
                    height: "40px",
                    marginBottom: "16px",
                    color: "white",
                  }}
                  value={city}
                  // placeholder="Enter city / district / town"
                  onChange={(e) => setCity(e.target.value)}
                  required
                  helperText={cityError}
                  error={cityError ? true : false}>
                  <option style={{ color: "#6A7575" }} value="">
                    Select city / district / town
                  </option>
                  {capitalItems.map((capitals, index) => (
                    <option
                      style={{ color: "#6A7575" }}
                      key={capitals.id}
                      value={capitals.id}>
                      {capitals.title}
                    </option>
                  ))}

                  {/* {dat.locations &&
                      dat.locations.map((location, index) => (
                        <option key={location._id} value={location._id}>
                          {location.name}
                        </option>
                      ))} */}
                </select>
                {/* <FormInput
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  type="text"
                  placeholder="Enter Region"
                  required
                  helperText={regionError}
                  error={regionError ? true : false}
                /> */}

                <select
                  className="form-control"
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid #2874f0",
                    borderRadius: "4px",
                    height: "40px",
                    marginBottom: "16px",
                    color: "white",
                  }}
                  value={region}
                  // placeholder="Enter city / district / town"
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  helperText={regionError}
                  error={regionError ? true : false}>
                  <option style={{ color: "#6A7575" }} value="">
                    Select Region
                  </option>
                  {regionItems.map((regions, index) => (
                    <option
                      style={{ color: "#6A7575" }}
                      key={regions.id}
                      value={regions.id}>
                      {regions.title}
                    </option>
                  ))}

                  {/* {dat.locations &&
                      dat.locations.map((location, index) => (
                        <option key={location._id} value={location._id}>
                          {location.name}
                        </option>
                      ))} */}
                </select>
              </DoubleFormContainer>

              {/* <FormLabel htmlFor="for">Email</FormLabel> */}
              <DoubleFormContainer>
                <FormInput
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder="Enter Zip Code"
                  helperText={zipError}
                  error={zipError ? true : false}
                  required
                />
                <FormInput
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  type="number"
                  placeholder="Enter Company Telephone No."
                  helperText={phoneNoError}
                  error={phoneNoError ? true : false}
                  required
                />
              </DoubleFormContainer>

              <DoubleFormContainer>
                {/* <FormLabel htmlFor="for">Password</FormLabel> */}
                <FormInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  helperText={passwordError}
                  error={passwordError ? true : false}
                  required
                />
                {/* <FormLabel htmlFor="for">Confirm Password</FormLabel> */}
                <FormInput
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  helperText={
                    passwordError ? passwordError : confirmPasswordError
                  }
                  error={
                    passwordError ? true : confirmPasswordError ? true : false
                  }
                  required
                />
              </DoubleFormContainer>

              {/* <FormInput
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                type="text"
                placeholder="Enter Payment Method eg. 'Cash, Online'"
                helperText={paymentError}
                error={paymentError ? true : false}
                required
              /> */}

              <FormH2>Upload Company Images:</FormH2>
              <FormH3>
                (Upload Images About your Company with good quality)
              </FormH3>

              <FormImage
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                type="file"
              />

              {imageError && <FormLabel> Upload an Image as well</FormLabel>}

              {serverError && (
                <FormLabel>{"server error, please try again"}</FormLabel>
              )}

              <FormButton disabled={loading} type="submit">
                {loading ? "Loading..." : "Submit"}
              </FormButton>

              <Text to="/signin">Already have account</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
