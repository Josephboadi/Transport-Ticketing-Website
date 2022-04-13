import styled from "styled-components";

export const ReviewListContentI = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  width: 550px;
  max-height: 300px;
  overflow-y: scroll;
  //   height: 400px;

  @media screen and (max-width: 768px) {
    width: 410px;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
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
