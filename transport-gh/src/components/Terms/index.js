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
  // BookingH1,
  // BookingTC,
  BookingWrapper,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  TableContainer,
  FormInputDate,
  HeadingH1,
  Heading2,
  // para,
  Para,
  Heading1H1,
  Heading3,
  ConditionWrapper,
  Heading13,
} from "./TermsElements";
import { ButtonR } from "../ButtonElement";
// import {
//   fetchAvailableTrips,
//   fetchAvailableTrip,
//   fetchClient,
//   fetchAvailableFutureTrips,
// } from "../../redux/actions/dataActions";
import Loader from "../Loader";
import { useHistory } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import { logoutAction } from "../../redux/actions/authActions";

const TermsSection = ({ lightBg, id, compId }) => {
  // const [rating, setRating] = useState(0);
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  // const [rating2, setRating2] = useState(0);
  // const [date, setDate] = useState(new Date());
  // const minDate = new Date();
  // const [date1, setDate1] = useState(new Date());
  // const [loadingData, setLoadingData] = useState(false);
  // const [datt,setDatt] = useState([])

  // const loadingData = useSelector((state) => state.data);
  // const availableTrip = useSelector((state) => state.data.availableFutureTrip);

  // const { loading } = useSelector((state) => state.data);
  // const client = useSelector((state) => state.data.client);

  // const history = useHistory();
  // const data = useSelector((state) => state.data.availableTripDetail);
  // const { addCartSuccess } = useSelector((state) => state.data);

  // const dispatch = useDispatch();
  // setLoadingData(true);
  // const tripHandle = () => {
  //   const tripData = {
  //     from: from,
  //     to: to,
  //     date: date,
  //   };
  //   if (client) {
  //     const compId = client._id;
  //     // console.log(compId);
  //     // if (!loading) {
  //     dispatch(fetchAvailableTrips(compId, tripData));

  //     // console.log(availableTrip);
  //     // }
  //   }
  //   setLoadingData(false);
  //   // console.log(from);
  //   // console.log(to);
  //   // console.log(date);
  // };

  // useEffect(() => {
  //   dispatch(fetchAvailableFutureTrips(compId));
  // }, []);

  // console.log(date);

  // useEffect(() => {

  //   dispatch(fetchClient(compId));

  // }, []);

  // const handleSubmit = (event) => {
  //   // if (event)
  //   event.preventDefault();
  //   // if (!loading) {
  //   tripHandle();
  //   // console.log(availableTrip);
  //   // }
  //   // setLoadingData(false);
  // };

  // const handleTrip = (id) => {
  //   // console.log(id);
  //   const token = localStorage.jwt;

  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     // console.log(decodedToken);
  //     if (decodedToken.exp * 1000 < Date.now()) {
  //       dispatch(logoutAction());
  //       window.location.href = "/signin";
  //     } else {
  //       dispatch(fetchAvailableTrip(history, id));
  //     }
  //   } else {
  //     window.location.href = "/signin";
  //   }
  // };

  // console.log(loadingData);

  return (
    <>
      <BookingContainer lightBg={lightBg} id={id}>
        <BookingWrapper>
          <HeadingH1>Terms {`&`} Conditions</HeadingH1>
          <Heading1H1>
            PROCEDURES/SYSTEMS GOVERNING TRANSPORT OPERATIONS
          </Heading1H1>
          <Heading2>CONDITIONS OF CARRIAGE FOR PASSENGERS</Heading2>
          <Para>
            The following conditions apply in relation to the carriage of any
            person as a passenger (together with any luggage accompanying that
            person) on any vehicle. Every person so carried shall be regarded as
            having accepted and agreed to the said conditions as the conditions
            of a carriage between himself/herself and the transport operator.
          </Para>
          <ConditionWrapper>
            <Heading13>LUGGAGE</Heading13>
            <Para>
              (a) No passenger shall be entitled to take with him/her free of
              charge on any journey any luggage that is supposed to go in the
              boot of the bus.
            </Para>
            <Para>
              (b) Any passenger accompanied by a luggage that goes under the
              boot of the bus shall be charged in respect of the baggage
              according to the appropriate tariff for the time being in force.
            </Para>

            <Heading3>LIABILITY FOR DAMAGE</Heading3>
            <Para>
              (a) The operator's liability for damages sustained in the event of
              death, wounding or any other bodily injury by a passenger in the
              event of an accident shall not be subject to any financial limit,
              it shall be determined by our insurers.
            </Para>
            <Para>
              (b) The operator will not be responsible for illness, injury or
              disability, including death, attributable to a passenger's
              physical condition or the aggravation of such condition.
            </Para>

            <Heading3>LUGGAGE/BAGGAGE</Heading3>
            <Para>
              (a) The operator will not be liable for damage to unchecked
              baggage unless such damage is cause by our negligence.
            </Para>
            <Para>
              (b) The liability of the operator in case of a loss or damage to
              Property shall be determined by fair and impartial assessment of
              circumstances surrounding the loss or damage.
            </Para>
            <Para>
              (c ) if the loss or damage was wholly and absolutely caused by the
              Company or its agents, the Company shall be responsible for
              same.If the loss or damage arose from the negligence of the
              passenger, the Company shall bear no responsibility thereof. In
              the event of a loss or damage arising from joint negligence of
              both parties, both parties will negotiate proportions liability
              based on facts and circumstances known at that time.
            </Para>
            <Para>
              (d) The Company is not liable for any damage caused by passenger's
              baggage. Passenger shall be responsible for any damage caused by
              own baggage to other persons or property, including Company's
              property.
            </Para>
            <Para>
              (e) No passenger shall carry money, cheque or jewellery, precious
              metals, negotiable papers, securities or other valuable business
              documents, passports and other documentation papers in a luggage
              which goes under the boot of the bus. A passenger does so at
              his/her own risk. The Company shall not accept liability.
            </Para>
            <Para>
              (f) Unchecked luggage that goes into the bus with the passenger
              who is responsible for it must not be more than the size 18" x 16"
              x 9" or 20" x 14" x 8" and must be stowed under the seat of the
              bus.
            </Para>
            <Para>
              (g) No passenger must include in his/her baggage items which are
              likely to endanger the Company's vehicle or persons or property on
              board the vehicle.
            </Para>
            <Para>
              (h) No passenger shall board the Company's vehicle with items the
              carriage of which is prohibited by the applicable laws,
              regulations, or orders of the Country of departure and
              destination.
            </Para>
            <Para>
              (i) No passenger shall board the Company's vehicle with items
              which are considered by us to be unsuitable by reason of their
              weight, size, shape or character or which are fragile or
              perishable.
            </Para>
            <Para>
              (j) All luggage shall be placed in the vehicle by a conductor or
              an official authorized by the Company and NOT by the passenger
              himself/herself. Luggage must also be REMOVED by THE CONDUCTOR,
              DRIVER OR OFFICIAL with a passenger surrendering the claim portion
              of the luggage tag to the Conductor/Driver/Official.
            </Para>
            <Para>
              (k) If despite being prohibited any items referred to in the above
              paragraphs are included in a passenger's luggage we shall not be
              responsible for any loss or damage to such items.
            </Para>

            <Heading3>FARES AND TICKETS</Heading3>
            <Para>
              (a) Every passenger shall upon being requested by the conductor or
              an official of the Company pay to the conductor or to the official
              (as the case may be) the appropriate fare for the journey, being
              the fare specified in the table of fares for the time being in
              force, and the passenger shall thereupon be supplied with a ticket
              corresponding to the fare.
            </Para>
            <Para>
              (b) The said table of fares in readable characters shall be posted
              on the Company's notice board at all stations.
            </Para>
            <Para>
              (c) All breakable luggage shall be declared to the Official/Agent
              of the Company for the appropriate tariff before it goes under the
              boot of the bus.
            </Para>
            <Para>
              (d) Every passenger shall upon being requested by the conductor or
              an official of the Company produce his/her ticket; in the case of
              a passenger traveling on Company's business, an employee of the
              Company, his/her family and the disabled, produce the specified
              free bus pass.
            </Para>
            <Para>
              (e) Any passenger who (without reasonable excuse) fails to produce
              his/her ticket or free bus pass as aforesaid, shall pay double the
              normal fare to the conductor or official (as the case may be)
              before being allowed to continue the journey.
            </Para>
            <Para>
              (f) All tickets issued by the Company shall be valid only for the
              duration of the journey for which they are issued.
            </Para>
            <Para>
              (g) Tickets shall not be transferable except otherwise specified.
            </Para>
            <Para>
              (h) A return ticket holder shall confirm his/her journey to the
              Sales Assistant either personally, by phone or at least an hour
              prior to the departure time.
            </Para>
            <Para>
              (i) In case of either loss or mutilation of a ticket or
              non-presentation of a ticket, we will on your request if the
              ticket has been issued by us or one of our agents on our behalf,
              replace such ticket by issuing a new ticket provided there is
              evidence, readily ascertainable at the time, that a ticket valued
              for the journey in question was duly issued.
            </Para>
            <Para>
              (j) You (passenger) may be refused to board the Company's vehicle
              if you present a ticket that has been acquired unlawfully, has
              been purchased from an entity other than us or our authorized
              agent, or has been reported as being lost or stolen or is a
              counterfeit.
            </Para>
            <Para>
              (k) You (passenger) may be refused to board the Company's vehicle
              if you present a ticket which has been issued or altered in
              anyway, other than by us or authorized agent, or if the ticket is
              mutilated.
            </Para>

            <Heading3>ENTERING AND ALIGHTING FROM THE VEHICLE</Heading3>
            <Para>
              No passenger shall make any attempt to enter or alight from the
              vehicle while it is in motion. Any person who contravenes this
              does so at his/her own risk.
            </Para>

            <Heading3>PASSENGERS TO USE SEATS PROVIDED</Heading3>
            <Para>
              No passenger shall travel in a vehicle except in a seat provided
              for the purpose, and all gangways and doors shall be kept free of
              passengers and luggage while the vehicle is in motion. Any person
              who contravenes this does so at his own risk.
            </Para>

            <Heading3>PROHIBITED ARTICLES</Heading3>
            <Para>
              No person shall travel in any of the operator's vehicles if that
              person has in his/her possession any of the following articles,
              that is to say:
            </Para>
            <Para>(i) a loaded fire-arm/explosives,</Para>
            <Para>(ii) any offensive weapon or instrument.</Para>
            <Para>(iii) any contraband goods including drugs.</Para>
            <Para>
              (iv) any alcohol in any container other than mechanically sealed
              ones,
            </Para>
            <Para>
              (v) any article likely to communicate an infectious or contagious
              disease,
            </Para>
            <Para>(vi) un-custom d goods,</Para>
            <Para>(vii) any livestock</Para>
            <Para>
              Any person contravening this condition shall forfeit his/her fare
              and shall be liable to be removed summarily from the vehicle by
              the conductor or an official of the Company unless such person
              abandons the offensive article.
            </Para>

            <Heading3>CONDUCT IN VEHICLE</Heading3>
            <Para>
              No person shall smoke in a vehicle, swear or use offensive
              language or quarrel or spit or commit any nuisance or do anything
              likely to interfere with the comfort of any passenger. Any person
              contravening this condition shall forfeit his/her fare and shall
              be liable to be removed summarily from the vehicle by the
              conductor or an official of the Company and may be prosecuted for
              offences committed on board the vehicle.
            </Para>

            <Heading3>INTOXICATED AND INFECTED PERSON</Heading3>
            <Para>
              (a) No person who is intoxicated or mentally derailed who knows or
              has cause to believe that he has an infectious or contagious
              disease shall enter or be in a vehicle. Any person contravening
              this condition shall forfeit his/her fare and be liable to be
              removed summarily from the vehicle by the conductor or an
              official.
            </Para>
            <Para>
              (b) Physically weak individuals considered unhealthy or unsafe to
              travel unaccompanied.
            </Para>

            <Heading3>SPECIAL ASSISTANCE</Heading3>
            <Para>
              Acceptance for carriage of unaccompanied children, incapacitated
              persons, pregnant women, and persons with illness or other people
              requiring special assistance is subject to prior arrangements with
              us.
            </Para>

            <Heading3>DAMAGE TO VEHICLE –DEFACING NOTICES</Heading3>
            <Para>
              (a) No unauthorized person shall cut, tear, soil, damage or temper
              with any part of the vehicle or remove or deface any notice posted
              by the Company inside or outside the vehicle.
            </Para>
            <Para>
              (b) Any person contravening this condition shall, be liable to
              compensate the Company for any damage caused by the contravention,
              and the conductor or official of the Company shall take any
              reasonable means to demand such compensation on the spot.
            </Para>

            <Heading3>PASSENGER'S CLOTHING</Heading3>
            <Para>
              Any person whose clothing, in the opinion of the conductor or an
              official may soil the vehicle or the clothing of other
              passenger(s) or whose appearance or behaviour appears
              objectionable or likely to cause offense may be prevented from
              entering the vehicle by the conductor or the official if he has
              already entered the vehicle and his/her fare refunded to him/her.
            </Para>

            <Heading3>OBSTRUCTION</Heading3>
            <Para>
              No person shall obstruct or interfere with the operation of the
              vehicle or with any servant or agent of the Company performing
              duties in connection with the operation of the vehicle. Any person
              who does so shall be removed from the vehicle or prevented from
              entering the vehicle if he/she is not already in the vehicle. In
              each case the fare shall be refunded.
            </Para>

            <Heading3>PROVISION OF ADDITIONAL SERVICES</Heading3>
            <Para>
              Any person who enters in to the contract of carriage by road
              transport with the Company may also agree in addition, to make
              arrangements to provide whether by it or by third parties,
              additional services. The Company shall have no liability to you
              for such arrangement (including for any act or omission, non
              provision or delay) whether in breach of contract or otherwise,
              except for liability for negligence on the Company's part in
              making such arrangements, which liability shall be subjected to
              fair assessment.
            </Para>

            <Heading3>UNSUITABLE LUGGAGE</Heading3>
            <Para>
              Where the conductor or official of the Company is of the opinion
              that any luggage proposed to be brought onto the vehicle by any
              person is of such bulk or shape as to be likely to inconvenience
              any passenger or to interfere with the proper operation of the
              vehicle the conductor or an official (as the case may) may forbid
              such person to enter the vehicle with that luggage.
            </Para>
            <Para>
              Where the conductor or official of the Company is of the opinion
              that any load proposed to be brought under the boot of the vehicle
              by any person is of such bulk, or shape or of any nature likely to
              cause financial hardship to the Company (in case of damage), the
              conductor or official (as the case may be) may forbid such person
              to board the vehicle with such a load.
            </Para>

            <Heading3>PROPERTY LEFT ON VEHICLE</Heading3>
            <Para>
              (a) The Company reserves to itself the right to dispose of any
              property left on a vehicle if that property is not claimed within
              three (3) months of the date on which it was so left; without any
              liability to the Company. And any such claim shall be made in
              writing to the Regional Manager at the originating station, giving
              proof that he/she satisfied all the conditions required for the
              carriage of the luggage.
            </Para>
            <Para>
              (b) If a person claiming checked baggage is unable to produce the
              baggage check and identify the baggage by means of a baggage
              identification tag, we will deliver the baggage to such person
              only on condition that he or she established to our satisfaction
              his or her right to the baggage.
            </Para>

            <Heading3>PREACHING AND SALES PROMOTION</Heading3>
            <Para>
              No person shall preach or engage in sales promotion in the
              Company’s vehicle. Any such person found doing so shall be
              summarily removed from the vehicle and forfeit his/her fare.
            </Para>

            <Heading3>REFUSAL OF ENTRY</Heading3>
            <Para>
              If you are denied entry into any Country, you must pay to us the
              cost of any fare or charge assessed against us by the Government
              concerned. The fare collected for carriage to the point of denied
              entry will not be refunded by us.
            </Para>
          </ConditionWrapper>

          {/* {loadingData ? (
            <Loader marginTop="100px" marginBottom="100px" />
          ) : ( */}
          <>
            {/* <FormContent>
              <Form onSubmit={handleSubmit}>
                <FormH1>Search Trip</FormH1>
                <FormLabel>From</FormLabel>
                <select
                  className="form-control"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}>
                  <option value="">Select</option>
                  {client?.locations &&
                    client?.locations.map((location, index) => (
                      <option key={location._id} value={location._id}>
                        {location.name}
                      </option>
                    ))}
                </select>

                <FormLabel>To</FormLabel>
                <select
                  className="form-control"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}>
                  <option value="">Select</option>
                  {client?.locations &&
                    client?.locations.map((location, index) => (
                      <option key={location._id} value={location._id}>
                        {location.name}
                      </option>
                    ))}
                </select>
                <FormLabel>Date</FormLabel> */}
            {/* <FormInputDate
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  type="date"
                  // placeholder="dd/MM/YYYY"
                  required
                /> */}
            {/* <DatePickerComponent
                  required
                  style={{
                    padding: "16px 16px",
                    background: "transparent",
                    fontSize: "18px",
                    marginBottom: "15px",
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
                <FormButton type="submit">Search</FormButton> */}
            {/* <DatePicker /> */}
            {/* </Form>
            </FormContent> */}
          </>
        </BookingWrapper>
      </BookingContainer>
    </>
  );
};

export default TermsSection;
