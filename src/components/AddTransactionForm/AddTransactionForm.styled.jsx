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
  background-color: ${p => p.theme.color.switcherBgUncheked};
  position: relative;
  border-radius: ${p => p.theme.radii.switcherBg};
  transition: 0.3s;
  cursor: pointer;
  border: ${p => p.theme.borderStyles.underline};
  outline: none;

  :before {
    content: '+';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.buttons.primary.bg};
    width: 44px;
    height: 44px;
    border-radius: ${p => p.theme.radii.broderSwitcher};
    outline: none;
    border: ${p => p.theme.borders.borderNone};
    color: ${p => p.theme.buttons.primary.color};
    font-size: ${p => p.theme.fontSizes[0]};
    left: -4px;
    top: -2px;
    transition: 0.6s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  :checked {
    background-color: ${p => p.theme.color.muted};

    :before {
      content: '-';
      background-color: ${p => p.theme.color.expense};
      box-shadow: ${p => p.theme.shadows.switcherShadow};
      left: 40px;
    }
  }
`;

export const TextField = styled(Field)`
  border: ${p => p.theme.borders.borderNone};
  border-bottom: ${p => p.theme.borderStyles.underline};
  width: 100%;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 8px;
  outline: none;
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.textField};

  ::placeholder {
    color: ${p => p.theme.color.muted};
    font-family: ${p => p.theme.fonts.placeholder};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[1]};
    line-height: ${p => p.theme.lineHeights.formField};
    @media screen and (min-width: 768px) {
      text-align: center;
    }
  }
`;

export const MoneyText = styled.span`
  font-family: ${p => p.theme.fonts.formField};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.formField};
  margin-right: 24px;
  margin-left: 20px;
`;

export const Dropdown = styled(Field)`
  width: 100%;
  border: ${p => p.theme.borders.borderNone};
`;

export const TabletWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;
