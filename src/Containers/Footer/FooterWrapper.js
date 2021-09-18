import styled from "styled-components";

const FooterWrapper = styled.div`
  .container {
    margin: 0 180px;
    min-height: 300px;
    padding: 100px;
  }

  .food {
    img {
      border-radius: 50%;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      opacity: 0.7;
    }
  }

  table {
    th {
      font-family: Philosopher;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;

      color: #ffffff;
    }
    td {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;

      color: #ffffff;

      opacity: 0.7;
    }
  }
`;

export default FooterWrapper;
