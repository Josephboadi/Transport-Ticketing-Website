import React from "react";
import Rating from "../../Rating";
import { ButtonR } from "../../ButtonElement";
import ReviewCardInterior from "../ReviewCardInterior";
import {
  ReviewListContent,
  ReviewListH3,
  ReviewListNavComment,
  ReviewListNavCommentP,
  ReviewListP,
  ReviewListRow,
  ReviewListSpan,
  ReviewListReplyComment,
  ReviewFormContent,
  ReviewFormLabel,
  ReviewFormInput,
  ReviewFormMessage,
  ReviewBtnWrapper,
} from "./ReviewCardElements";

const ReviewCard = () => {
  return (
    <ReviewListContent>
      <ReviewListRow>
        <ReviewListH3>Name</ReviewListH3>
        <Rating />
      </ReviewListRow>
      <ReviewListSpan>Current Date</ReviewListSpan>
      <ReviewListSpan>Created Date</ReviewListSpan>
      <ReviewListP>Comment</ReviewListP>
      <ReviewListNavComment>
        <ReviewListNavCommentP>Reply</ReviewListNavCommentP>
        <ReviewListNavCommentP>Hide Reply</ReviewListNavCommentP>
      </ReviewListNavComment>
      <ReviewListReplyComment>
        <ReviewCardInterior />
        <ReviewFormContent>
          {/* <ReviewFormLabel>Name</ReviewFormLabel>
          <ReviewFormInput type="text" /> */}
          <ReviewFormLabel>Message</ReviewFormLabel>
          <ReviewFormMessage contentEditable="true" />
          <ReviewBtnWrapper>
            <ButtonR primary>Reply Comment</ButtonR>
          </ReviewBtnWrapper>
        </ReviewFormContent>
      </ReviewListReplyComment>
    </ReviewListContent>
  );
};

export default ReviewCard;
