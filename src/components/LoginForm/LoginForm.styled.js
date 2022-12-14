import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 280px;
  max-width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  @media screen and (min-width: 768px) {
    align-items: stretch;
    max-width: none;
    width: 533px;
    height: auto;
    margin: 0 auto 40px;
    padding: 40px 58.5px 62px 65px;
    background-color: #ffffff;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;
export const FormaRegistration = styled(Form)`
  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

export const Icon = styled.svg`
  width: 120px;
  height: 30px;
`;

export const Inputicon = styled.svg`
  position: absolute;
  left: 10px;
  top: 4px;
`;

export const Label = styled.label`
  width: 280px;
  position: relative;
  display: block;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Logotype = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
`;

export const Btn = styled.button`
  width: 280px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #24cca7;
  border-radius: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fffff;
  cursor: pointer;

  :hover,
  :focus {
    border: 1px solid #24cca7;
    color: #24cca7;
    background-color: #ffffff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 50px;
  }
`;

export const Button = styled(NavLink)`
  margin: 0;
  width: 280px;
  height: 50px;
  margin: 0 auto;
  /* margin-top: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #4a56e2;
  box-sizing: border-box;
  border-radius: 20px;
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  color: #4a56e2;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #4a56e2;
    border: 1px solid #4a56e2;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 50px;
  }
`;

export const Error = styled.span`
  position: absolute;
  font-size: 12px;
  color: #ff6596;
  font-weight: 500;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
