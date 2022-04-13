import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ImgBg,
  ServicesBg,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import Loader from "../Loader";
import Aos from "aos";
import "aos/dist/aos.css";

import { fetchClients } from "../../redux/actions/dataActions";
import appleImg from "../../images/APP_STORE_BTN.svg";

const Services = (props) => {
  const { loading } = useSelector((state) => state.data);
  const clients = useSelector((state) => state.data.clients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  // console.log(clients);

  return (
    <ServicesContainer id="services">
      <ServicesBg>
        <ImgBg src="https://res.cloudinary.com/dblprzex8/image/upload/v1633343302/bus-g12e662ef0_1920_hioit7.jpg" />
        {/* <ServicesH1>Select A Transport Company</ServicesH1> */}
      </ServicesBg>
      <ServicesH1
        data-aos="flip-right"
        // data-aos-offset="200"
        // data-aos-delay="400"
        // data-aos-easing="ease-in-sine"
        data-aos-duration="1500">
        Select A Transport Company
      </ServicesH1>
      <ServicesWrapper
        data-aos="flip-up"
        // data-aos-offset="200"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1900">
        {loading ? (
          <Loader />
        ) : (
          clients.companies &&
          clients.companies.map((client) => (
            <ServicesCard
              // data-aos="flip-up"
              // // data-aos-offset="200"
              // data-aos-delay="600"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="1900"
              key={client._id}
              to={`/clients/${client._id}`}>
              <ServicesIcon src={client.imageUrl[0].img} />
              <ServicesH2 to={`/clients/${client._id}`}>
                {client.name}
              </ServicesH2>
              <ServicesP>{client.motto}</ServicesP>
            </ServicesCard>
          ))
        )}

        {/* <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2 to="/client">STC Company Limited</ServicesH2>
          <ServicesP>Our Customer Service is Unmatched.</ServicesP>
        </ServicesCard> */}
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2 to="/client">Metro Mass Company Limited</ServicesH2>
          <ServicesP>Your safety is our priority.</ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
