import React from "react";
import Rating from "../../Rating";
import {
  ReviewListContentI,
  ReviewListH3,
  ReviewListNavComment,
  ReviewListNavCommentP,
  ReviewListP,
  ReviewListRow,
  ReviewListSpan,
} from "./ReviewCardElements";

const ReviewCardInterior = () => {
  return (
    <ReviewListContentI>
      <ReviewListRow>
        <ReviewListH3>Name</ReviewListH3>
        <Rating />
      </ReviewListRow>
      <ReviewListSpan>Current Date</ReviewListSpan>
      <ReviewListSpan>Created Date</ReviewListSpan>
      <ReviewListP>Comment</ReviewListP>
      <ReviewListNavComment>
        <ReviewListNavCommentP>Reply</ReviewListNavCommentP>
      </ReviewListNavComment>
    </ReviewListContentI>
  );
};

export default ReviewCardInterior;
