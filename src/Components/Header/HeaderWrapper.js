import styled from "styled-components";

const HeaderWrapper = styled.div`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 10px;
  }

  li a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-family: Roboto;
  }

  .logo {
    margin: 10px;
  }

  .headerbetwen {
    justify-content: space-between;
    margin-top: 20px;
  }

  .book {
    margin: 10px;
    background: #dc780b;
    border-radius: 5px;
    color: white;
    border: #dc780b solid 2px;
    font-family: Roboto;
  }
`;

export default HeaderWrapper;
