import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { ButtonR } from "../ButtonElement";
import Loader from "../Loader";
import Rating from "../Rating";
import ReviewCard from "./ReviewCard";
import ReviewCardInterior from "./ReviewCardInterior";
import {
  ReviewContainer,
  ReviewContent,
  ReviewFormContent,
  ReviewFormInput,
  ReviewFormLabel,
  ReviewFormMessage,
  ReviewHeading,
  ReviewLabel,
  ReviewRadio,
  ReviewWrapper,
  ReviewBtnWrapper,
  ReviewListNavComment,
  ReviewListSpan,
  ReviewListP,
  ReviewListContent,
  ReviewListRow,
  ReviewListH3,
  ReviewListNavCommentP,
  ReviewListReplyComment,
} from "./ReviewElements";
import Reviews from "../Reviews";
import { fetchClient } from "../../redux/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ReviewSectionn = ({ lightBg, id, authenticated }) => {
  // const [loadingD, setLoadingD] = useState(true);
  const [client, setClient] = useState({});
  const { loading } = useSelector((state) => state.data);
  const data = useSelector((state) => state.data.client);

  const dispatch = useDispatch();

  const { compId } = useParams();

  // console.log(client);
  // console.log(loading);

  // useEffect(() => {
  //   setLoadingD(true);
  //   dispatch(fetchClient(compId));

  //   let countDownDate = new Date().getTime();
  //   let countDownDateSeconds =
  //     Math.floor((countDownDate % (1000 * 60)) / 1000) + 3;

  //   // update every second
  //   let x = setInterval(function () {
  //     // Get todays date and time
  //     let now = new Date().getTime();

  //     let nowSeconds = Math.floor((now % (1000 * 60)) / 1000);

  //     // find the distance between now and count down date
  //     let distance = countDownDateSeconds - nowSeconds;

  //     if (distance < 0) {
  //       // setClient(data);
  //       console.log(client);
  //       setLoadingD(false);
  //     }
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   // setLoadingD(true);
  //   setClient(data);
  //   // setLoadingD(false);
  // }, [client, setClient, data]);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader marginTop="100px" marginBottom="100px" />
      ) : ( */}
      {/* // null */}
      <ReviewContainer lightBg={lightBg} id={id}>
        <ReviewWrapper
          data-aos="zoom-in-down"
          // data-aos-offset="200"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="1500">
          <ReviewHeading
            data-aos="flip-down"
            // data-aos-offset="200"
            data-aos-delay="1000"
            // data-aos-easing="ease-in-sine"
            data-aos-duration="1900">
            Comments
          </ReviewHeading>
          {/* {loadingD ? (
            <Loader />
          ) : ( */}
          <Reviews
            // loading={loading}
            authenticated={authenticated}
            compId={compId}
            // loadingD={loadingD}
          />
          {/* )} */}

          {/* <ReviewContent>
              <ReviewRadio type="radio" name="rate" id="rd-5" />
              <ReviewLabel htmlFor="rd-5">
                <FaStar />
              </ReviewLabel>
              <ReviewRadio type="radio" name="rate" id="rd-4" />
              <ReviewLabel htmlFor="rd-4">
                <FaStar />
              </ReviewLabel>
              <ReviewRadio type="radio" name="rate" id="rd-3" />
              <ReviewLabel htmlFor="rd-3">
                <FaStar />
              </ReviewLabel>
              <ReviewRadio type="radio" name="rate" id="rd-2" />
              <ReviewLabel htmlFor="rd-2">
                <FaStar />
              </ReviewLabel>
              <ReviewRadio type="radio" name="rate" id="rd-1" />
              <ReviewLabel htmlFor="rd-1">
                <FaStar />
              </ReviewLabel>
            </ReviewContent>
            <ReviewFormContent>
              
              <ReviewFormLabel>Message</ReviewFormLabel>
              <ReviewFormMessage contentEditable="true" />
              <ReviewBtnWrapper>
                <ButtonR primary>Send</ButtonR>
              </ReviewBtnWrapper>
            </ReviewFormContent>
            <ReviewCard>
              
              <ReviewListReplyComment>
               
                <ReviewFormContent>
                  
                  <ReviewFormLabel>Message</ReviewFormLabel>
                  <ReviewFormMessage contentEditable="true" />
                  <ReviewBtnWrapper>
                    <ButtonR primary>Reply Comment</ButtonR>
                  </ReviewBtnWrapper>
                </ReviewFormContent>
              </ReviewListReplyComment>
            </ReviewCard> */}
        </ReviewWrapper>
      </ReviewContainer>
      {/* )} */}
    </>
  );
};

export default ReviewSectionn;
