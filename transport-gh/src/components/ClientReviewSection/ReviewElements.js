import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewContainer = styled.div`
  color: #303030;
  height: 860px;
  padding: 20px 0;

  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#0C0C0C")};

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  height: 800px;
  max-height: 800px;
  width: 100%;
  overflowy: scroll;
  max-width: 1100px;
  // border-radius: 250px;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-bottom-left-radius: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 0 14px;
  //   justify-content: center;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1150px) {
    padding: 10 34px;
    width: 98%;
    border-top-right-radius: 165px;
    border-bottom-right-radius: 165px;
    border-bottom-left-radius: 165px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 14px;
    // border-radius: 50px;
    width: 98%;
  }
`;

// export const ReviewHeading = styled.h2`
//   color: #6c63ff;
//   font-size: 30px;
//   font-weight: 500;
//   text-align: center;
//   margin-top: 15px;

//   @media screen and (max-width: 768px) {
//     font-size: 28px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 25px;
//   }
// `;
export const ReviewHeading = styled.h1`
  color: #6c63ff;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const ReviewContent = styled.div`
  width: 500px;
  margin: 10px 0;
  margin-bottom: -10px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const ReviewLabel = styled.label`
  color: #999;
  margin: 5px 0;
  padding-right: 5px;
  cursor: pointer;
  float: right;
`;

export const ReviewRadio = styled.input`
  display: none;

  :not(:checked)
    ~ ${ReviewLabel}:hover,
    :not(:checked)
    ~ ${ReviewLabel}:hover
    ~ ${ReviewLabel} {
    color: gold;
  }

  :checked ~ ${ReviewLabel} {
    color: gold;
  }
`;

export const ReviewFormContent = styled.div`
  margin: 10px 0;
`;

export const ReviewFormLabel = styled.p`
  color: #6c63ff;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: -1px;
`;

export const ReviewFormInput = styled.input`
  width: 500px;
  max-width: 500px;
  //   min-width: 500
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  min-height: 40px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const ReviewFormMessage = styled.div`
  max-width: 500px;
  width: 500px;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  outline: none;
  color: #000;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const ReviewBtnWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReviewListContentInterior = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  width: 500px;
  max-height: 300px;
  overflow-y: scroll;
  //   height: 400px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const ReviewListNavComment = styled.div`
  display: flex;
  flex-direction: column;
  //   flex-wrap: wrap;
  border: 1px solid #ccc;
  height: 100px;
  z-index: 3;
`;

export const ReviewListNavCommentP = styled.p`
  color: darkblue;
  padding-right: 10px;
  text-transform: capitalize;
  cursor: pointer;
  h &:hover {
    text-decoration: underline;
  }
`;

export const ReviewListReplyComment = styled.div`
  margin-left: 10px;
`;
