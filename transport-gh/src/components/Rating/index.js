import React from "react";
import {
  RatingContainer,
  RatingI,
  RatingStar,
  RatingStar_1,
} from "./RatingElements";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <RatingContainer>
      <RatingStar>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
      </RatingStar>
      <RatingStar_1>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
        <RatingI>
          <FaStar />
        </RatingI>
      </RatingStar_1>
    </RatingContainer>
  );
};

export default Rating;
