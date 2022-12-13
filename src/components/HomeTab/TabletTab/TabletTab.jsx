import styled from 'styled-components';
import PropTypes from 'prop-types';
import baseVars from 'stylesheet/vars';
import { React } from 'react';
import { EmptyContainer } from '../EmptyContainer/EmptyContainer';
import moment from 'moment';
import { Categories } from '../categories';
import EllipsisText from 'react-ellipsis-text';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions, removeTransaction } from 'redux/transactions/transactions-operation';
import { Delete } from "@mui/icons-material";

const TabletTab = ({ items, columns }) => {
  const dispatch = useDispatch();

  const onRemoveTransaction = (id) => {
    dispatch(removeTransaction(id));
  }

  const transactions = useSelector(state => state.transactions.items);

  useEffect(() => {
    dispatch(fetchTransactions(1));
  }, [dispatch, transactions.transactionsTotalQuantity]);

  return (
    <>
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
        {items?.length !== 0 ? (
          <BodyTable>
            <Tbody>
              {items?.map(({
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
                  <BodyItems>
                    <Button onClick={() => onRemoveTransaction(_id)}>
                      <Delete sx={{
                        color: '#fff',
                        transform: 'scale(0.8)',
                      }} />
                    </Button>
                  </BodyItems>
                </BodyList>
                )
              )}
            </Tbody>
          </BodyTable>
      ) : (
        <EmptyContainer />
        )}
      </GeneralContainer>
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
    background-color: transparent;
  }
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 715px;
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

  :first-child {
    width: 55px
  }
  :nth-child(2) {
    width: 65px;
    text-align: center;
  }
  :nth-child(3) {
    width: 135px;
  }
  :nth-child(4) {
    width: 105px;
  }
  :nth-child(5) {
    width: 85px;
    text-align: right;
  }
  :nth-child(6) {
    width: 85px;
    text-align: right;
    margin-right: 45px;
  }
`;

const BodyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tbody = styled.tbody`

`;

const BodyList = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: ${baseVars.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${baseVars.colors.mainText};
  padding-top: 14px;
  padding-bottom: 14px;

  :first-child {
    padding-top: 16px;
  }
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;
const BodyItems = styled.td`
  text-align: start;

  :first-child {
    width: 75px;
    padding-left: 20px;
  }
  :nth-child(2) {
    width: 65px;
    text-align: center;
  }
  :nth-child(3) {
    width: 135px;
  }
  :nth-child(4) {
    width: 105px;
  }
  :nth-child(5) {
    width: 85px;
    text-align: right;
  }
  :nth-child(6) {
    width: 85px;
    text-align: right;
  }
  :hover {
    z-index: 1;
    overflow: visible;
  }
`;

const SpanSum = styled.span`
  font-weight: 700;
`;

const Button = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 2px;
  background-color: ${baseVars.colors.icon} ;
  margin: 0;
  margin-right: 20px;
`;
