import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #aac4f7b7;
`;
export const H1 = styled.h1`
  width: 60rem;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem;
  font-family: "Square Peg";
  font-size: 4em;
  letter-spacing: 5px;
  text-shadow: #cf6e6e52 3px 4px 2px;
`;

export const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rem;
  padding: 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 10rem;
    height: 8rem;
  }

  input {
    width: 20rem;
    height: 3rem;
    margin-right: 2rem;
    border: 2px solid #63343484;
    border-radius: 10px;
    font-size: 1.2em;
    padding: 0.8em;
  }

  button {
    width: 7rem;
    background-color: #56a5c9;
    border: none;
    padding: 0.8em;
    border-radius: 15px;
    margin-bottom: 10px;
    font-size: 0.8em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    letter-spacing: 2px;
    box-shadow: 2px 2px 2px #5e5b5b;
    transition: 0.8s all;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #5e5b5b;
    font-size: 0.9em;
    color: #e0adad;
  }
`;

export const Contain = styled.section`
  background-color: #d3bebe58;
  width: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }

  div input {
    display: none;
  }

  div input + label:before {
    content: "";
    width: 1em;
    height: 1em;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #32bea6;
    vertical-align: middle;
    display: inline-block;
    margin-right: 0.8em;
    margin-bottom: 0.2rem;
    cursor: pointer;
  }

  div input:checked + label:before {
    background-image: url(https://cdn-icons-png.flaticon.com/512/463/463574.png);
    background-size: 1em;
    cursor: pointer;
  }

  label {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1em;
    font-weight: 500;
  }

  button {
    width: 1.2em;
    height: 1.1rem;
    border-radius: 5px;
    border: none;
    background-image: url(https://i.imgur.com/ptTmljA.png);
    background-color: #ac5959;
    background-size: 1.3rem;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 1rem;
    margin-top: 0.09rem;
    cursor: pointer;
  }
`;
