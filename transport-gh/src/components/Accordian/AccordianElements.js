import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 800px;
  // background: #e3e8e1;
  background: linear-gradient(
    115deg,
    rgb(16, 21, 34) 30%,
    rgb(147, 181, 198) 70%
  );
`;

export const Container = styled.div`
  max-width: 800px;
  position: absolute;
  top: 20%;
  //   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
  }
`;

export const HeadingH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Wrap = styled.div`
  background: #303030;
  color: #fffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   width: 100%;
  max-width: 800px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  h1 {
    padding: 2rem;
    font-size: 1rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  background: #303030;
  color: #fff;
  //   width: 100%;
  max-width: 800px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -9px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    max-width: 550px;
    line-height: 1.6rem;
    padding: 20px
    font-size: 1rem;
    
  }

  @media screen and (max-width: 768px) {
    p {
        max-width: 400px;
      }
  }
  @media screen and (max-width: 480px) {
    p {
        max-width: 320px;
        
      }
      height: 120px;
  }
`;
