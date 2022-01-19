import styled from "styled-components";

export const Background = styled.div`
  background-color: #282a37;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Formbox = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #fefefe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fefefe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    position: relative;
    text-align: center;
    bottom: 100px;
    margin: 0;
    padding-left: 15px;
  }

  .Boxdot {
    display: inline-block;
    width: 32px;
    height: 32px;
    position: relative;
    top: 7px;
    right: 7px;
  }

  .dot {
    width: 33px;
    color: #208cef;
    height: 26px;
  }
  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: left;

    input {
      background-color: #323645;
      border: none;
      border-radius: 7px;
      width: 170px;
      height: 40px;
      align-self: center;
      padding-left: 10px;
      color: #fdfcfe;
    }

    input:focus {
      outline: 1px solid #1f8ff2;
    }

    label {
      padding-left: 15px;
      color: #fefefe;
    }

    p {
      height: 16px;
      padding-left: 15px;
      color: #ea2727;
      margin: 6px 0px;
      font-size: 12px;
    }

    button {
      height: 36px;
      width: 182px;
      align-self: center;
      border: none;
      border-radius: 10px;
      background-color: #1d90f4;
      color: #fefefe;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background-color: #2172b9;
    }
  }
`;
