import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "../../bootstrap.min.css";
import { Table } from "react-bootstrap";
import {
  DatePickerComponent,
  DatePicker,
} from "@syncfusion/ej2-react-calendars";
import {
  BookingContainer,
  BookingH1,
  BookingTC,
  BookingWrapper,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  TableContainer,
  FormInputDate,
} from "./BookingElements";
import { ButtonR } from "../ButtonElement";
import {
  fetchAvailableTrips,
  fetchAvailableTrip,
  fetchClient,
} from "../../redux/actions/dataActions";
import Loader from "../Loader";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { logoutAction } from "../../redux/actions/authActions";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomIcon from "@material-ui/icons/Room";
import Aos from "aos";
import "aos/dist/aos.css";

const BookingSection = ({ lightBg, id, compId }) => {
  const [rating, setRating] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [rating2, setRating2] = useState(0);
  const [date, setDate] = useState(new Date());
  const minDate = new Date();
  const [date1, setDate1] = useState(new Date());
  const [loadingData, setLoadingData] = useState(false);
  // const [datt,setDatt] = useState([])

  // const loadingData = useSelector((state) => state.data);
  const availableTrip = useSelector((state) => state.data.availableTrip);

  const { loading } = useSelector((state) => state.data);
  const client = useSelector((state) => state.data.client);

  const history = useHistory();
  // const data = useSelector((state) => state.data.availableTripDetail);
  const { addCartSuccess } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  // setLoadingData(true);
  const tripHandle = () => {
    const tripData = {
      from: from,
      to: to,
      date: date,
    };
    if (client) {
      const compId = client._id;
      // console.log(compId);
      // if (!loading) {
      dispatch(fetchAvailableTrips(compId, tripData));

      // console.log(availableTrip);
      // }
    }
    setLoadingData(false);
    // console.log(from);
    // console.log(to);
    // console.log(date);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchClient(compId));
  // }, []);

  // console.log(date);

  // useEffect(() => {

  //   dispatch(fetchClient(compId));

  // }, []);

  const handleSubmit = (event) => {
    // if (event)
    event.preventDefault();
    // if (!loading) {
    const token = localStorage.jwt;

    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutAction());
        window.location.href = "/signin";
      } else {
        tripHandle();
      }
    } else {
      window.location.href = "/signin";
    }

    // console.log(availableTrip);
    // }
    // setLoadingData(false);
  };

  const handleTrip = (id) => {
    // console.log(id);
    const token = localStorage.jwt;

    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutAction());
        window.location.href = "/signin";
      } else {
        dispatch(fetchAvailableTrip(history, id));
      }
    } else {
      window.location.href = "/signin";
    }
  };
  // console.log(loadingData);

  return (
    <>
      <BookingContainer lightBg={lightBg} id={id}>
        <BookingWrapper
          data-aos="zoom-in-left"
          // data-aos-offset="200"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="1500">
          {/* {loadingData ? (
            <Loader marginTop="100px" marginBottom="100px" />
          ) : ( */}
          <>
            <FormContent
              data-aos="flip-up"
              // data-aos-offset="200"
              data-aos-delay="1000"
              // data-aos-easing="ease-in-sine"
              data-aos-duration="1900">
              <Form onSubmit={handleSubmit}>
                <FormH1>Search Trip</FormH1>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {/* <FormLabel>From</FormLabel> */}
                    <RoomIcon fontSize={"large"} color={"primary"} />
                    <select
                      style={{ marginRight: 10 }}
                      className="form-control"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}>
                      <option value="">Departure</option>
                      {client?.locations &&
                        client?.locations.map((location, index) => (
                          <option key={location._id} value={location._id}>
                            {location.name}
                          </option>
                        ))}
                    </select>

                    {/* <FormLabel>To</FormLabel> */}
                    <RoomIcon fontSize={"large"} color={"primary"} />
                    <select
                      className="form-control"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}>
                      <option value="">Destination</option>
                      {client?.locations &&
                        client?.locations.map((location, index) => (
                          <option key={location._id} value={location._id}>
                            {location.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 20,
                    }}>
                    <FormLabel>Date</FormLabel>
                    {/* <DateRangeIcon fontSize={"medium"} color={"primary"} /> */}
                    {/* <FormInputDate
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  type="date"
                  // placeholder="dd/MM/YYYY"
                  required
                /> */}
                    <div style={{ marginLeft: 20, marginRight: 30 }}>
                      <DatePickerComponent
                        required
                        style={{
                          // padding: "16px 16px",
                          background: "transparent",
                          fontSize: "15px",
                          marginBottom: "15px",
                          // marginRight: "15px",
                          outline: "none",
                          border: "none",
                          borderBottom: "2px solid #2874f0",
                          borderRadius: "4px",
                          color: "gray",
                        }}
                        value={date}
                        min={minDate}
                        onChange={(e) =>
                          setDate(e.target.value)
                        }></DatePickerComponent>
                    </div>

                    <FormButton type="submit">Search</FormButton>
                  </div>
                </div>

                {/* <DatePicker /> */}
              </Form>
            </FormContent>

            <BookingH1
              data-aos="flip-left"
              // data-aos-offset="200"
              data-aos-delay="1200"
              // data-aos-easing="ease-in-sine"
              data-aos-duration="1900">
              Search Result
            </BookingH1>
            {/* <BookingTC>VIP Company Limited</BookingTC> */}
            <TableContainer
              data-aos="slide-up"
              // data-aos-offset="200"
              data-aos-delay="1200"
              // data-aos-easing="ease-in-sine"
              data-aos-duration="1900">
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Trip</th>
                    <th> Dep Date</th>
                    <th>Dep Time</th>
                    <th>Price</th>
                    {/* <th>Vehicle Type</th> */}
                    <th>Tickets Available</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingData ? (
                    <Loader />
                  ) : availableTrip.length > 0 ? (
                    availableTrip.map((avt, index) => (
                      <tr key={index}>
                        <td>
                          <ButtonR
                            primary
                            // to={`/trip/${avt._id}`}
                            onClick={() => handleTrip(avt._id)}>
                            Book Now
                          </ButtonR>
                        </td>
                        <td>
                          {avt.from.name} - {avt.to.name}
                        </td>
                        <td>{moment(avt.date).format("DD MMM, YYYY")}</td>
                        <td>{moment(avt.time).format("hh:mm A")}</td>
                        <td>{avt.fare}</td>

                        {/* <td>Bus</td> */}
                        <td>{avt.ticketsCount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colspan="6">No trip available</td>
                      {/* <td></td>
                    <td></td>
                    <td></td> */}
                      {/* <td></td> */}
                      {/* <td>Bus</td> */}
                      {/* <td></td> */}
                    </tr>
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </>
          {/* )} */}
        </BookingWrapper>
      </BookingContainer>
    </>
  );
};

export default BookingSection;
