import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import Loader from "../Loader";
import { getBookings, getBooking } from "../../redux/actions/dataActions";
import { useHistory } from "react-router-dom";

const BookingsScreen = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.data);
  const getAllBookings = useSelector((state) => state.data.bookings);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  // console.log(getAllBookings);

  const history = useHistory();
  const handleBookingDetail = (id) => {
    dispatch(getBooking(history, id));
  };

  return (
    <div className="booking1Container">
      <h1>Bookings</h1>
      {loading ? (
        <Loader />
      ) : (
        // ) : error ? (
        //   <Message variant="danger">{error}</Message>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>TICKET ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              {/* <th>PAID</th> */}
              {/* <th>DELIVERED</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getAllBookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.ticketId}</td>
                <td>{booking.user && booking.user.name}</td>
                <td>{moment(booking.createdAt).format("DD MMM, YYYY")}</td>
                <td>${booking.totalPrice}</td>
                {/* <td>
                  {booking.isPaid ? (
                    moment(booking.paidAt).format("DD MMM, YYYY")
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td> */}
                {/* <td>
                  {booking.isDelivered ? (
                    booking.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td> */}
                <td>
                  {/* <LinkContainer> */}
                  <Button
                    variant="light"
                    className="btn-sm"
                    onClick={() => handleBookingDetail(booking._id)}>
                    Details
                  </Button>
                  {/* </LinkContainer> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default BookingsScreen;
