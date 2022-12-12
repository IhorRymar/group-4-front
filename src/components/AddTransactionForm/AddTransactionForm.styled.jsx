import styled from 'styled-components';

import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  label > input {
    margin-bottom: 40px;
  }
`;

export const CheckboxContainter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 44px;
  transform: translate(-50%, -50%);
  margin-top: 40px;
  left: 50%;
`;

export const CheckboxField = styled.input`
  appearance: none;
  width: 80px;
  height: 40px;
  background-color: white;
  position: relative;
  border-radius: 30px;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  outline: none;

  :before {
    content: '+';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.buttons.primary.bg};
    width: 44px;
    height: 44px;
    border-radius: 50%;
    outline: none;
    border: none;
    color: ${props => props.theme.buttons.primary.color};
    font-size: 20px;
    left: -4px;
    top: -2px;
    transition: 0.6s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  :checked {
    background-color: #ececec;

    :before {
      content: '-';
      background: #ff6596;
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      left: 40px;
    }
  }
`;

export const TextField = styled(Field)`
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${p => p.theme.color.muted};
  width: 100%;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 8px;
  outline: none;

  ::placeholder {
    color: ${p => p.theme.color.muted};
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    @media screen and (min-width: 768px) {
      text-align: center;
    }
  }
`;

export const MoneyText = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-right: 24px;
  margin-left: 20px;
`;

export const Dropdown = styled(Field)`
  width: 100%;
  border: none;
`;

export const TabletWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;
