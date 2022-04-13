import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SignupElements";

import useForm from "../../hooks/forms";

import { signupUser } from "../../redux/actions/authActions";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, serverError, errors } = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  const history = useHistory();

  const signupHandle = (props) => {
    const newUserData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emergencyContactName: emergencyContactName,
      emergencyContactNumber: emergencyContactNumber,
      role: "ROLE_USER",
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(signupUser(newUserData, history));
  };

  // const { inputs, handleInputChange, handleSubmit } = useForm(
  //   {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   signupHandle
  // );

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    signupHandle();
  };

  // console.log(errors);
  let emailError = null;
  let passwordError = null;
  let confirmPasswordError = null;
  let firstNameEmptyError = null;
  let phoneNumberEmptyError = null;
  let emergencyContactNameEmptyError = null;
  let emergencyContactNumberEmptyError = null;
  let lastNameEmptyError = null;

  if (errors) {
    if (typeof errors !== "string") {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].msg.includes("First Name"))
          firstNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes("Last Name"))
          lastNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes("valid email")) emailError = errors[i].msg;
        if (errors[i].msg.includes("Email address already exist"))
          emailError = errors[i].msg;
        if (errors[i].msg.includes("least 10 characters long"))
          phoneNumberEmptyError = errors[i].msg;
        if (errors[i].msg.includes("Emergency Contact Name"))
          emergencyContactNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes("least 10 characters long"))
          emergencyContactNumberEmptyError = errors[i].msg;
        if (errors[i].msg.includes("least 6 characters long"))
          passwordError = errors[i].msg;
        if (errors[i].msg.includes("Passwords have to"))
          confirmPasswordError = errors[i].msg;
      }
    }
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Travel Gh</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Create a new account</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter First Name"
                required
                helperText={firstNameEmptyError}
                error={firstNameEmptyError ? true : false}
              />
              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter Last Name"
                required
                helperText={lastNameEmptyError}
                error={lastNameEmptyError ? true : false}
              />
              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <FormInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                placeholder="Enter Phone Number (MoMo)"
                required
                helperText={phoneNumberEmptyError}
                error={phoneNumberEmptyError ? true : false}
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                helperText={emailError}
                error={emailError ? true : false}
                required
              />
              <FormLabel htmlFor="for">Emergency Contact Name</FormLabel>
              <FormInput
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
                type="text"
                placeholder="Enter Emergency Contact Name"
                required
                helperText={emergencyContactNameEmptyError}
                error={emergencyContactNameEmptyError ? true : false}
              />
              <FormLabel htmlFor="for">Emergency Contact Number</FormLabel>
              <FormInput
                value={emergencyContactNumber}
                onChange={(e) => setEmergencyContactNumber(e.target.value)}
                type="number"
                placeholder="Enter Emergency Contact Number"
                required
                helperText={emergencyContactNumberEmptyError}
                error={emergencyContactNumberEmptyError ? true : false}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                helperText={passwordError}
                error={passwordError ? true : false}
                required
              />
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
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

              {serverError && (
                <FormLabel>{"server error, please try again"}</FormLabel>
              )}

              <FormButton disabled={loading} type="submit">
                {loading ? "Loading..." : "Sign Up"}
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
