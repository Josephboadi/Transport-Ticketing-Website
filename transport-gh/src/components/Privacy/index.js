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
  HeadingH1,
  Heading2,
  // para,
  Para,
  Heading1H1,
  Heading3,
  ConditionWrapper,
  Heading13,
  FormLabel,
  TableContainer,
  FormInputDate,
} from "./PrivacyElements";
import { ButtonR } from "../ButtonElement";
// import {
//   fetchAvailableTrips,
//   fetchAvailableTrip,
//   fetchClient,
//   fetchAvailableFutureTrips,
// } from "../../redux/actions/dataActions";

const PrivacySection = ({ lightBg, id }) => {
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

            <HeadingH1>Privacy Policy</HeadingH1>

            <Heading2>Our Privacy Promise:</Heading2>
            <Para>
              Sesafrica Ltd is committed to respecting your privacy and
              protecting your personal information. We will be transparent about
              the information we are collecting and what we will do with it.
            </Para>
            <Para>
              We will use the information you give us for the purposes described
              in our Privacy Policy, which include providing you with services
              you have requested and enhancing your experience with Intercity
              STC.
            </Para>
            <Para>
              We will also use the information to help us understand you better
              and so that we can give you relevant offers.
            </Para>
            <Para>
              If you tell us, that you don’t want to receive marketing messages
              we will stop sending them. We will, of course, continue to send
              important information relating to a product or service you have
              purchased to keep you informed about your booking and travel
              itinerary.
            </Para>
            <Para>
              We will put in place measures to protect your information and keep
              it secure.
            </Para>
            <Para>
              We will respect your data protection rights and aim to give you
              control over your own information.
            </Para>
            <Para>
              You can access our full Privacy Policy below to help you to
              understand better how we use your personal information. In it, we
              explain in more detail the types of personal information we
              collect, how we collect it, what we may use it for and who we may
              share it with.
            </Para>
            <Para>
              Within the Privacy Policy, you will find some specific examples of
              why and how we use your personal information. If you have further
              questions please get in touch with us by writing to
              biz@sesafricaltd.net.
            </Para>
            <Para>
              Without prejudice to your rights under applicable laws, the above
              and the Privacy Policy are not contractual and do not form part of
              your contract with us.
            </Para>

            <Heading2>Full Privacy:</Heading2>
            <Heading3>Policy Controller of Personal </Heading3>
            <Para>
              Information Any personal information processed by Sesafrica Ltd in
              connection with this Privacy Policy is controlled by Sesafrica Ltd
              , which is considered the “data controller” of your personal
              information under the Data Protection Authority in Ghana.
            </Para>

            <Heading3>What do we mean by personal information?</Heading3>
            <Para>
              Personal information means details which identify you or could be
              used to identify you, such as your name and contact details, your
              travel arrangements and purchase history. It may also include
              information about how you use our websites and mobile
              applications.
            </Para>
            <Heading3>When does this policy apply?</Heading3>
            <Para>
              This Privacy Policy applies to personal information about you that
              we collect, use and otherwise process regarding your relationship
              with us as a customer or potential customer, including when you
              travel with us or use our other services, use our websites or
              mobile applications, contact our service agents or call Centre’s
              and book to use our services through third parties (such as travel
              agents). Where we reference that others are data controllers in
              the sections ’Controller of Personal Information’ and ’Who do we
              share your personal information with?’ you should consult their
              privacy policies for further information.
            </Para>

            <Heading3>
              How can you keep your personal information secure?
            </Heading3>
            <Para>
              We take great care to protect the personal information you provide
              to us. You can read more about how we do this on our website
              security policy. Here are some things you can do to keep your
              information secure.
            </Para>
            <Heading3>Keep your booking ticket Id confidential</Heading3>
            <Para>
              When you make a booking, you will be given a booking ticket Id
              (also known as a SERVICE ID or TICKET CODE). This will appear on
              the email confirmation or ticket of each person in your booking.
              You should keep your booking ticket Id confidential always.
            </Para>
            <Para>
              Giving your booking ticket Id to others may allow them to access
              your booking details through our system.
            </Para>
            <Para>
              If you are travelling with others and would not like your
              individual booking details to be accessible by them, you may
              prefer each person to make separate bookings.
            </Para>
            <Para>
              Keep your booking ticket Id number/Sesafrica Ltd registered
              customer log-in details confidential.
            </Para>
            <Para>
              To make sure your access to our websites, other online services,
              and mobile applications is secure, you should not share your log
              in details with anyone else. When you finish using the website,
              online services or mobile app you should log out if others may be
              able to access your computer or device. This is especially
              important if you are using a publicly accessible computer.
            </Para>

            <Heading3>
              Be aware of and protect yourself against Internet fraud and
              ‘phishing’
            </Heading3>
            <Para>
              information by deception. Unsolicited emails are sent to
              individuals from lists illegally gathered by a third party, and
              recipients are asked to enter or reconfirm bank or password
              details into a 'cloned' or illegal copy website.
            </Para>

            <Heading3>
              When do we collect personal information about you?
            </Heading3>
            <Para>
              We collect personal information about you whenever you use our
              services (whether these services are provided by us or by other
              companies or agents acting on our behalf), including when you
              travel with us, when you use our website or mobile applications,
              or interact with us via email or use our contact centers. For
              additional details see ’What types of personal information do we
              collect and retain?’ below. In addition, we may receive personal
              information about you from third parties. With your concern.
            </Para>
            <Heading3>
              Companies contracted by us to provide services to you.
            </Heading3>
            <Para>
              Companies involved in your travel plans, including relevant bus
              operators, customs and immigration authorities.
            </Para>
            <Para>
              Companies that participate in our loyalty schemes and other
              customer programmes (e.g. car hire providers).
            </Para>
            <Para>
              Companies who provide details to us under privacy policies
              providing information to be shared with Sesafrica Ltd
            </Para>

            <Heading3>
              What types of personal information do we collect and retain?
            </Heading3>
            <Para>
              When you use our services, you will need to provide us with your
              personal details or the details of those individual(s) who will be
              travelling.
            </Para>
            <Heading3>
              We collect the following categories of personal information:
            </Heading3>
            <Para>
              The information you provide for Sesafrica Ltd to complete and
              manage a booking you have made with us or a service you have
              requested from us. E.g. name, email, phone number, passport or
              national ID number etc.
            </Para>
            <Para>
              Information collected during your travel with us. E.g. name,
              email, phone number, passport or national ID number etc.
            </Para>
            <Para>
              Information about your travel arrangements. E.g. origin,
              destination, destination phone number etc.
            </Para>
            <Para>
              Information about the services we have provided for you in the
              past. E.g. Past bookings, phone number, the name of the passenger,
              email etc.
            </Para>
            <Para>
              Information about online registration and other interactions. E.g.
              Facebook name, Facebook associated email address, phone number
              etc.
            </Para>
            <Para>
              Information about your use of our websites, contact centres and
              mobile applications. For more details of the methods please see
              E.g. name, email, and phone number.
            </Para>
            <Para>
              How we use cookies and other methods for the collection of website
              usage data', below. Information about your location from your
              device if you have been browsing on Sesafrica Ltd or using our
              mobile application. (This is your IP address. An IP address (i.e.
              Internet Protocol address) is a numeric code that can act as a
              unique identifier for your computer or another device.
            </Para>
            <Heading3>
              When and why do we collect ‘sensitive personal data?
            </Heading3>
            <Para>
              Certain categories of personal information, such as that about
              race, ethnicity, religion, health, sexuality or biometric
              information are special categories of data requiring additional
              protection under European Union data protection law and is
              referred to here as “sensitive personal data”. Generally, we try
              to limit the circumstances where we collect and process sensitive
              personal data. Examples of where we may collect and process
              ’sensitive personal data’ includes the following:
            </Para>
            <Para>
              You have requested specific medical assistance from us and/or
              operation officer, such as the provision of wheelchair assistance
              etc.
            </Para>
            <Para>
              You have sought clearance from us to travel with a medical
              condition or because you are more than 28 weeks pregnant.
            </Para>
            <Para>
              You have otherwise chosen to provide such information to us or it
              has been passed onto us by a third party such as the travel agent
              through which you made your booking.
            </Para>
            <Para>
              Biometric information (for example, facial recognition) may be
              collected during the security clearance process prior to, and
              after, riding with us.
            </Para>
            <Para>
              In addition, you may have requested services (such as a meal)
              which is not ’sensitive data’ but may imply or suggest your
              religion, health or other information.
            </Para>

            <Heading3>ENTERING AND ALIGHTING FROM THE VEHICLE</Heading3>
            <Para>
              No passenger shall make any attempt to enter or alight from the
              vehicle while it is in motion. Any person who contravenes this
              does so at his/her own risk.
            </Para>

            <Heading3>What do we use your personal information for?</Heading3>
            <Para>
              The main purposes for which we use your personal information are:
              To fulfil your travel arrangements and deliver the services you
              have asked for. E.g. name, email, phone number, passport or
              national ID number etc.
            </Para>
            <Para>
              To manage the boarding process and to facilitate smooth crossing
              at the international borders. E.g. name, email, phone number,
              passport or national ID number etc.
            </Para>
            <Para>
              To send status updates and service communications to you. E.g.
              name, email, phone number etc. To keep track of you in advance of
              your travel and at the terminals. E.g. name, email, phone number,
              passport or national ID number etc.
            </Para>
            <Para>
              To help keep you safe when you ride with us and to meet certain
              legal and regulatory requirements which apply to Sesafrica Ltd as
              a transport provider. E.g. name, email, phone number, passport or
              national ID number etc.
            </Para>
            <Para>
              To provide services tailored to your requirements and to treat you
              in a more personal way. E.g. name, email, phone number, passport
              or national ID number etc.
            </Para>
            <Para>
              To carry out analysis and market research. E.g. name, email, phone
              number.
            </Para>
            <Para>
              To carry out marketing and keep you informed of Sesafrica Ltd’s
              products and services. E.g. name, email.
            </Para>
            <Para>
              To send you status updates and service communications. E.g. name,
              email, phone number.
            </Para>
            <Para>
              To improve our websites, products and services. E.g. name, email.
            </Para>
            <Para>
              For management and administrative purposes. E.g. name, email,
              phone number.
            </Para>

            <Heading3>When will we send you marketing?</Heading3>
            <Para>
              When we collect information directly from you we may ask you if
              you do not want to receive our marketing communications. Please be
              aware that we do sometimes send marketing communications that
              promote a third party’s products and services (for example, those
              of our business partners) as well as our own.
            </Para>
            <Para>
              We may ask if you consent to receive marketing communications from
              other members of our group or from third parties.
            </Para>
            <Para>
              We will respect your choice as to what communications you wish to
              receive and the methods by which you are sent them.
            </Para>
            <Para>
              How can you change what marketing communications you receive and
              how you receive them?
            </Para>
            <Para>
              If you decide you would no longer like to be sent marketing
              communications, you can change your mind at any time. The ways to
              stop being sent marketing communications are described below:
            </Para>
            <Para>
              If you are a registered user of Sesafrica Ltd, you can change your
              marketing preferences at any time by amending your profile online.
            </Para>
            <Para>
              Please note that if you tell us that you do not wish to be sent
              further marketing communications, you will still receive service
              communications (as described above) which are necessary, for
              example, to confirm your booking or to provide you with an update
              on its status.
            </Para>
            <Para>
              If you ask us to stop sending marketing communications, please
              note we will retain your personal information for the purposes of
              indicating that you do not want to receive marketing
              communications.
            </Para>
            <Heading3>
              What is our legal basis for using your personal information?
            </Heading3>
            <Para>
              Sesafrica Ltd will only process your personal information where we
              have a legal basis to do so. The legal basis will depend on the
              reason or reasons Sesafrica Ltd collected and needs to use your
              information. Under Ghana data protection laws in almost all cases
              the legal basis will be:
            </Para>
            <Para>
              Because we need to use your information so that we can process
              your booking, fulfil your travel arrangements and otherwise
              perform the contract we have with you.
            </Para>
            <Para>
              Because it is in Sesafrica Ltd’s legitimate interests as a bus
              transports provider to use your personal information to operate
              and improve our business as a bus company and travel provider.
            </Para>
            <Para>
              Because Sesafrica Ltd needs to use your personal information to
              comply with a legal obligation. To protect the vital interests of
              you or another person.
            </Para>
            <Para>
              Because you have consented to Sesafrica Ltd using your information
              for a particular purpose. More information on each legal basis is
              provided below.
            </Para>
            <Para>
              If processing of your data is subject to any other laws then the
              basis of processing your data may be different to that set out
              above and may in those circumstances be based on your consent in
              all cases.
            </Para>

            <Heading3>How long do we keep personal information?</Heading3>
            <Para>
              We will keep your information for as long as we need it for the
              purpose it is being processed for. For example, where you book a
              trip with us we will keep the information related to your booking,
              so we can fulfil the specific travel arrangements you have made
              and after that, we will keep the information for a period which
              enables us to handle or respond to any complaints, queries or
              concerns relating to the booking. The information may also be
              retained so that we can continue to improve your experience with
              us and to ensure that you receive any loyalty rewards which are
              due to you. We will actively review the information we hold and
              delete it securely, or in some cases anonymize it when there is no
              longer a legal, business or customer need for it to be retained.
            </Para>

            <Heading3>Performance of a contract with you</Heading3>
            <Para>
              It will be necessary for Sesafrica Ltd to use your personal
              information to complete a booking you have made with us. For
              example, we will need to use information such as your contact
              details and payment information to provide you with the booking
              you requested for.
            </Para>
            <Heading3>Legitimate Interests</Heading3>
            <Para>
              As a commercial transport and travel provider Sesafrica Ltd has a
              legitimate business interest to use the personal information we
              collect to offer an effective service and carry out our business.
            </Para>

            <Heading3>Compliance with legal obligations</Heading3>
            <Para>
              There are situations where Sesafrica Ltd is subject to a legal
              obligation and needs to use your personal information to comply
              with those obligations. us.
            </Para>

            <Heading3>
              To protect the vital interest of you or another person
            </Heading3>
            <Para>
              There are situations where we may need to use your personal
              information to protect the vital interests of you or another
              person.
            </Para>
            <Heading3>Consent</Heading3>
            <Para>
              Alternatively, we may collect and use your personal information
              where you have given your specific consent to us doing so.
            </Para>
            <Para>
              If the basis of our processing your data is consent, you can
              withdraw your consent to such processing at any time, including by
              amending your profile online or telephoning.
            </Para>

            <Para>
              However, if you withdraw this consent, in some circumstances, it
              may mean we will not be able to provide all or parts of the
              services you have requested from us and you will not be able to
              cancel your booking or obtain a refund of any charges you have
              paid.
            </Para>

            <Heading3>Requesting a copy of your personal information</Heading3>
            <Para>
              You may request a copy of any personal data about you held by
              Sesafrica Ltd There is no fee for this request.
            </Para>
            <Para>
              The request must be in writing and must contain the following:
            </Para>
            <Para>Your name and postal address.</Para>
            <Para>Details of your request.</Para>
            <Para>
              Any details which may help us locate the information which is the
              subject of your request, for example:
            </Para>
            <Para>booking ticket Id or service/ ticket numbers and dates.</Para>
            <Para>
              Telephone recording details (identifier number, the number you
              call from, the number and option you dialed, the date and time of
              your call(s)).
            </Para>

            <Heading3>You must also provide:</Heading3>
            <Para>
              A photocopy of your passport or driving license, so that we can
              verify your identity.
            </Para>
            <Para>Your signature and the date of the request.</Para>
            <Para>
              If you are applying on behalf of another person then signed
              authority from the individual is required.
            </Para>
          </>
          {/* )} */}
        </BookingWrapper>
      </BookingContainer>
    </>
  );
};

export default PrivacySection;
