import styled from "styled-components";

const ContactWrapper = styled.div`
  .backround {
    min-height: 400px;
    padding: 80px;
  }
  .text3 {
    font-size: 16px;
    color: #dc780b;
    letter-spacing: 0.2em;
    font-family: Roboto;
    text-align: center;
  }

  .text4 {
    font-size: 32px;
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-family: Philosopher;
  }
  .form {
    width: 500px;
    background-color: #fbf1e7;
    text-align: center;
    border-radius: 10px;
    min-width: 600px;
  }

  .textlabel {
    font-family: Roboto;
    font-size: 16px;
    color: #000000;
  }

  .forms {
    justify-content: center;
    margin-top: 50px;
    display: flex;
    margin-bottom: 100px;
    height: 75px;
  }

  .button {
    min-width: 150px;
  }
`;

export default ContactWrapper;
