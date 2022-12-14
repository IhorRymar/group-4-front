import styled from 'styled-components';
import PropTypes from 'prop-types';
import baseVars from 'stylesheet/vars';
import { EmptyContainer } from '../EmptyContainer/EmptyContainer';
import moment from 'moment';
import { Categories } from '../categories';
import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransactions,
  removeTransaction,
  fetchTransactionById,
} from 'redux/transactions/transactions-operation';
import { Delete, Edit } from '@mui/icons-material';
import { ModalEdit } from 'components/ModalEdit/ModalEdit';

const MobileCard = ({ items }) => {
  const dispatch = useDispatch();
  const [isModalEditOpen, setІsModalEditOpen] = useState(false);
  const [updateTransaction, setUpdateTransaction] = useState({});
  const onRemoveTransaction = id => {
    dispatch(removeTransaction(id));
  };

  const transactions = useSelector(state => state.transactions.items);

  useEffect(() => {
    dispatch(fetchTransactions(1));
  }, [dispatch, transactions.transactionsTotalQuantity]);
  const toggleModal = () => {
    setІsModalEditOpen(!isModalEditOpen);
  };

  const onEditTransaction = async id => {
    try {
      const transaction = await dispatch(fetchTransactionById(id));
      setUpdateTransaction(transaction.payload);
    } catch (error) {
      toast.error(`${error.msg}`);
    }
    const transaction = await dispatch(fetchTransactionById(id));
    setUpdateTransaction(transaction.payload);
    toggleModal();
  };

  return (
    <>
      {items?.length !== 0 ? (
        <TransactionContainer>
          {items?.map(
            ({
              date,
              transactionType,
              category,
              comment,
              amount,
              balance,
              _id,
            }) => (
              <TransactionList key={_id} color={transactionType}>
                <ListItems>
                  <TitleItems>Date</TitleItems>
                  <TextItems>{moment.utc(date).format('DD.MM.YY')}</TextItems>
                </ListItems>
                <ListItems>
                  <TitleItems>Type</TitleItems>
                  {transactionType === 'income' ? (
                    <TextItems>+</TextItems>
                  ) : (
                    <TextItems>-</TextItems>
                  )}{' '}
                </ListItems>
                <ListItems>
                  <TitleItems>Category</TitleItems>
                  <TextItems>{Categories(category)}</TextItems>
                </ListItems>
                <ListItems>
                  <TitleItems>Comment</TitleItems>
                  <TextItems>
                    <EllipsisText
                      text={`${comment || '---'}`}
                      length={17}
                      tooltip="true"
                    />
                  </TextItems>
                </ListItems>
                <ListItems>
                  <TitleItems>Sum</TitleItems>
                  {transactionType === 'income' ? (
                    <SumText style={{ color: '#24CCA7' }}>
                      {amount.toFixed(2)}
                    </SumText>
                  ) : (
                    <SumText style={{ color: '#FF6596' }}>
                      {amount.toFixed(2)}
                    </SumText>
                  )}
                </ListItems>
                <ListItems>
                  <TitleItems>Balance</TitleItems>
                  <TextItems>{balance.toFixed(2)}</TextItems>
                </ListItems>
                <ListItems>
                  <Button onClick={() => onEditTransaction(_id)}>
                    <EditIcon />
                  </Button>
                  <Button onClick={() => onRemoveTransaction(_id)}>
                    <DeleteIcon />
                  </Button>
                </ListItems>
              </TransactionList>
            )
          )}
        </TransactionContainer>
      ) : (
        <EmptyContainer />
      )}
      {isModalEditOpen && (
        <ModalEdit
          toggleModal={toggleModal}
          isOpen={isModalEditOpen}
          updateTransaction={updateTransaction}
        />
      )}
    </>
  );
};
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
    })
  ),
};
export default MobileCard;

const borderColor = type => {
  switch (type) {
    case 'expense':
      return `${baseVars.colors.expensesText}`;
    case 'income':
      return `${baseVars.colors.incomeText}`;
    default:
      return `${baseVars.colors.secondText}`;
  }
};

const TransactionContainer = styled.div`
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TransactionList = styled.ul`
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    box-sizing: border-box;
    width: 280px;
    list-style: none;
    padding: 0px;
    border-radius: 5px;
    margin: 0px 20px 8px 20px;
    background-color: ${baseVars.colors.secondText};
    border-left: 5px solid;
    border-color: ${({ color }) => borderColor(color)};
  }
`;
const ListItems = styled.li`
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 8px 20px;

    :not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
    :not(:first-child) {
      padding-top: 12px;
      padding-bottom: 8px;
    }
    :last-child {
      padding-top: 8px;
      justify-content: flex-end;
    }
  }
`;

const TitleItems = styled.span`
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    font-family: ${baseVars.fonts.main};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${baseVars.colors.mainText};
  }
`;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 2px;
  background-color: ${baseVars.colors.icon};
  margin: 0;
  cursor: pointer;
  scale: 1;
  transition: scale 250ms linear;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    scale: 1.2;
    background-color: ${baseVars.colors.iconFocus};

  }
`;

const DeleteIcon = styled(Delete)`
  color: ${baseVars.colors.secondText};
  padding: 2px;
`;

const EditIcon = styled(Edit)`
  color: ${baseVars.colors.secondText};
  padding: 2px;
`;
