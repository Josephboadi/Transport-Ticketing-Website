import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  CloseIcon,
  Icon,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownRoute,
  DropdownWrapper,
  DropBtnWrap,
  TextArea,
  Label,
} from "./ComplaintElements";

import { logoutAction } from "../../redux/actions/authActions";
import { useState } from "react";
import { createCompanyComplaint } from "../../redux/actions/dataActions";

const Complaintdown = ({ isDrop, compId }) => {
  const [complaint, setComplaint] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);

  const handleComplaint = () => {
    if (complaint !== "") {
      const complt = {
        complaint: complaint,
        compId: compId,
      };
      dispatch(createCompanyComplaint(complt));
      // setRating(0);
      setComplaint("");
    }
  };

  return (
    <DropdownContainer
      isDrop={isDrop}
      // onClick={Droptoggle}
    >
      {/* <Icon onClick={Droptoggle}>
        Hello <CloseIcon />
      </Icon> */}
      <DropdownWrapper>
        <DropdownMenu>
          {authenticated ? (
            <>
              <DropdownLink to="books">What is your complaint?</DropdownLink>
              <Label
                style={{
                  color: "#6C63FF",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}>
                Complaint
              </Label>
              <TextArea
                name="complaint"
                rows="10"
                style={{
                  color: "#000",
                  padding: 10,
                  fontWeight: "bold",
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 10,
                  // height: 200,
                }}
                // className="form-control"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
              />
              <DropBtnWrap>
                <DropdownRoute onClick={handleComplaint}>Submit</DropdownRoute>
              </DropBtnWrap>
            </>
          ) : (
            <>
              <DropdownLink
                style={{ marginLeft: 0, marginTop: 150, textAlign: "center" }}
                to="/signin">
                Signin to Write your Complaint?
              </DropdownLink>
            </>
          )}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Complaintdown;
