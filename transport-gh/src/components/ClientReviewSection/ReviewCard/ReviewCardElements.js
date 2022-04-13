import styled from "styled-components";

export const ReviewListContent = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  width: 600px;
  max-height: 400px;
  overflow-y: scroll;
  height: 400px;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 370px;
  }
`;

export const ReviewListRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px 0;
  margin-bottom: -10px;
  cursor: pointer;
`;

export const ReviewListH3 = styled.h3`
  text-transform: capitalize;
  color: #6c63ff;
  font-size: 15px;
  margin-bottom: 0px;
`;

export const ReviewListSpan = styled.span`
  margin-right: 10px;
  color: #444;
  font-size: 12px;
  margin-top: -10px;
`;

export const ReviewListP = styled.p`
  color: #444;
  line-height: 1.5;
  font-size: 16px;
  margin: 0px 0;
  //   margin-bottom: 0px;
`;

export const ReviewListNavComment = styled.div`
  display: flex;
  //   flex-direction: column;
  flex-wrap: wrap;
  //   border: 1px solid #ccc;
  //   height: 100px;
  z-index: 3;
`;

export const ReviewListNavCommentP = styled.p`
  color: darkblue;
  padding-right: 10px;
  text-transform: capitalize;
  font-size: 12px;
  cursor: pointer;
  h &:hover {
    text-decoration: underline;
  }
`;

export const ReviewListReplyComment = styled.div`
  margin-left: 10px;
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
