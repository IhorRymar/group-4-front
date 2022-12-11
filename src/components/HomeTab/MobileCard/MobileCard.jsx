import styled from "styled-components";
import PropTypes from 'prop-types';
import baseVars from "stylesheet/vars";
import { EmptyContainer } from "../EmptyContainer/EmptyContainer";
import moment from 'moment';
import { Categories } from "../categories";
import EllipsisText from "react-ellipsis-text";

const MobileCard = ({ items}) => {

  const date = items?.length ? items?.map(item => item) : null;
  const data = date?.sort((a, b) =>
    b.date
      .split('.')
      .reverse()
      .join()
      .localeCompare(a.date.split('.').reverse().join())
  );

  return (
  <>
      {
        items?.length !== 0 ?
          <TransactionContainer>
            {data?.map(({ date, transactionType, category, comment, amount, balance, _id }) => (
              <TransactionList key={_id} color={transactionType}>
                <ListItems><TitleItems>Date</TitleItems><TextItems>{moment.utc(date).format('DD.MM.YY')}</TextItems></ListItems>
                <ListItems><TitleItems>Type</TitleItems>{transactionType === "income" ? <TextItems>+</TextItems> : <TextItems>-</TextItems>} </ListItems>
                <ListItems><TitleItems>Category</TitleItems><TextItems>{Categories(category)}</TextItems></ListItems>
                <ListItems><TitleItems>Comment</TitleItems><TextItems><EllipsisText text={`${comment  || "---"}`} length={17} tooltip="true" /></TextItems></ListItems>
                <ListItems><TitleItems>Sum</TitleItems>
                  {transactionType === "income" ?
                    <SumText style={{ color: "#24CCA7" }}>{amount.toFixed(2)}</SumText> :
                    <SumText style={{ color: "#FF6596" }}>{amount.toFixed(2)}</SumText>}</ListItems>
                <ListItems><TitleItems>Balance</TitleItems><TextItems>{balance.toFixed(2)}</TextItems></ListItems>
              </TransactionList>
            ))}

          </TransactionContainer> : <EmptyContainer />}

  </> )
}
MobileCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        _id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        transactionType: PropTypes.string.isRequired,
        category: PropTypes.number,
        comment: PropTypes.string,
        amount: PropTypes.number.isRequired,
        balance: PropTypes.number.isRequired,
    }),
  ),
};
export default MobileCard;

const borderColor = type => {
  switch (type) {
    case 'expense':
      return `${ baseVars.colors.expensesText}`;
    case 'income':
      return `${ baseVars.colors.incomeText}`;
    default:
      return `${ baseVars.colors.secondText}`;
  }
};

const TransactionContainer = styled.div`
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }  
`;

const TransactionList = styled.ul`
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    box-sizing: border-box;
    width:280px;
    list-style: none;
    padding: 0px;
    border-radius:5px ;
    margin: 0px 20px 8px 20px;
    background-color: ${ baseVars.colors.secondText};
    border-left: 5px solid ;
    border-color: ${({ color }) => borderColor(color) }; 
}        
`;
const ListItems = styled.li`
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 8px 20px;

    :not(:last-child) {
        border-bottom: 1px solid #DCDCDF;
    }
    :not(:first-child) {
        padding-top:12px;
        padding-bottom:8px;
    }
} 
`;

const TitleItems = styled.span`
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    font-family: ${ baseVars.fonts.main};
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: ${ baseVars.colors.mainText};
}
`
const TextItems = styled(TitleItems)`
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
}
`;

const SumText = styled(TextItems)`
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    font-weight: 700;
}
`;
