import styled from 'styled-components';
import baseVars from '../../stylesheet/vars';
import { colorBoxSwitcher } from './ColorBox';

export const TableContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 336px;
    padding-top: 20px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;



export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
  padding: 16px 20px;
  border-radius: 30px;
  margin-bottom: 0 auto 14px;
`;

export const TableTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #DCDCDF;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 768px) {
    padding: 16px 30px;
  }
`;

export const ColorBox = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: ${({color}) => colorBoxSwitcher(color)};
  border-radius: 2px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
`;

export const ListItemText = styled.p`

`;

export const NotificationText = styled.p`
  text-align: center;
  color: ${baseVars.colors.expensesText};
`;

export const TotalContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px 0;

  @media screen and (min-width: 768px) {
    padding: 16px 30px 0;
  }
`;

export const TotalText = styled.p`
    font-weight: 700;
`;

export const TotalNumber = styled.p`
    font-weight: 700;
    color: ${p => (p.exp ? `${baseVars.colors.expensesText}` : `${baseVars.colors.incomeText}`)};
`;