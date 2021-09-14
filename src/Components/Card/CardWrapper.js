import styled from "styled-components";

const CardWrapper = styled.div`
  .card {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 75px 10px 10px 10px;
    img {
      width: 100%;
      height: 300px;
      border-radius: 50px 0 50px 0;
    }
    .title h1 {
      font-family: Philosopher;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 24px;
    }

    .title span {
      font-family: Philosopher;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 24px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: start;
    }

    button {
      background: #dc780b;
      border-radius: 5px;
      border: none;
      color: white;
      align-items: center;
    }
  }
`;

export default CardWrapper;
