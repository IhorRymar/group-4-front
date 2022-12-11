import styled from 'styled-components';
import PropTypes from 'prop-types';
import baseVars from 'stylesheet/vars';
import { React } from 'react';
import { EmptyContainer } from '../EmptyContainer/EmptyContainer';
import moment from 'moment';
import { Categories } from '../categories';
import EllipsisText from 'react-ellipsis-text';

const TabletTab = ({ items, columns }) => {
  const date = items.length ? items?.map(item => item) : null;
  const data = date?.sort((a, b) =>
    b.date
      .split('.')
      .reverse()
      .join()
      .localeCompare(a.date.split('.').reverse().join())
  );

  return (
    <>
      {items.length !== 0 ? (
        <GeneralContainer>
          <table>
            <HeadContainer>
              <HeadList>
                {columns.map(colum => (
                  <HeadTitles key={colum.accessor}>{colum.Header} </HeadTitles>
                ))}
              </HeadList>
            </HeadContainer>
          </table>
          <BodyContainer>
            <BodyTable>
              <tbody>
                {data.map(
                  ({
                    date,
                    transactionType,
                    category,
                    comment,
                    amount,
                    balance,
                    _id,
                  }) => (
                    <BodyList key={_id}>
                      <BodyItems>
                        {moment.utc(date).format('DD.MM.YY')}
                      </BodyItems>
                      <BodyItems>
                        {transactionType === 'income' ? '+' : '-'}
                      </BodyItems>
                      <BodyItems>{Categories(category)}</BodyItems>
                      <BodyItems>
                        <EllipsisText
                          text={`${comment || '---'}`}
                          length={24}
                          tooltip="true"
                        />
                      </BodyItems>
                      <BodyItems>
                        {transactionType === 'income' ? (
                          <SpanSum
                            style={{ color: `${baseVars.colors.incomeText}` }}
                          >
                            {amount.toFixed(2)}
                          </SpanSum>
                        ) : (
                          <SpanSum
                            style={{ color: `${baseVars.colors.expensesText}` }}
                          >
                            {amount.toFixed(2)}
                          </SpanSum>
                        )}
                      </BodyItems>
                      <BodyItems>{balance.toFixed(2)}</BodyItems>
                    </BodyList>
                  )
                )}
              </tbody>
            </BodyTable>
          </BodyContainer>
        </GeneralContainer>
      ) : (
        <EmptyContainer />
      )}
    </>
  );
};

TabletTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      transactionType: PropTypes.string.isRequired,
      category: PropTypes.number,
      comment: PropTypes.string,
      amount: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ),
};

export default TabletTab;

const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    width: 704px;
    height: 312px;
    margin: 20px 32px 0px 32px;
    background-color: transparent;
  }
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 715px;
    margin: 46px 16px 0px 69px;
  }
`;
const HeadContainer = styled.thead`
  display: table-caption;
  box-sizing: border-box;
  height: 58px;
  background-color: ${baseVars.colors.secondText};
  padding: 16px 20px 15px 20px;
  border-radius: 30px;
`;
const HeadList = styled.tr`
  display: flex;
  justify-content: space-between;
`;
const HeadTitles = styled.th`
  font-family: ${baseVars.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: start;
  color: ${baseVars.colors.mainText};
  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    width: 14.5%;
  }
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 13.5%;
  }
  :first-child {
    width: 12%;
  }
  :nth-child(2) {
    width: 16.2%;
    text-align: center;
  }
  :nth-child(4) {
    width: 17%;
  }
  :nth-child(5) {
    width: 14.8%;
  }
  :nth-child(6) {
    width: 14.6%;
  }
  :nth-last-child(-n + 2) {
    text-align: end;
  }
`;
const BodyContainer = styled.div`
  height: 254px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e7eaf2;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }
`;
const BodyTable = styled.table`
  display: flex;
  border-collapse: collapse;
  justify-content: center;
`;
const BodyList = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 656px;
  font-family: ${baseVars.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${baseVars.colors.mainText};
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 675px;
  }
  :first-child {
    margin-top: 16px;
    padding-top: 0px;
  }
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;
const BodyItems = styled.td`
  max-height: 36px;
  text-align: start;
  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    width: 14.5%;
  }
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 13.5%;
  }
  :first-child {
    width: 12%;
  }
  :nth-child(2) {
    width: 16.2%;
    text-align: center;
  }
  :nth-child(4) {
    width: 17%;
  }
  :nth-child(5) {
    width: 14.8%;
  }
  :nth-child(6) {
    width: 14.6%;
  }
  :nth-last-child(-n + 2) {
    text-align: end;
  }
  :hover {
    z-index: 1;
    overflow: visible;
  }
`;
const SpanSum = styled.span`
  font-weight: 700;
`;
