import { React, Fragment,useEffect, useMemo, useState } from "react";
import MobileCard from "./MobileCard/MobileCard";
import TabletTab from "./TabletTab/TabletTab";
import Media from 'react-media';
import { ButtonCircle } from 'components/ButtonCircle/ButtonCircle';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';

import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions} from 'redux/transactions/transactions-operation';
import { getTransactions } from 'redux/transactions/transactions-selector';
import { toggleModal } from 'redux/modal/modal-sclice';
import { COLUMNS } from './columns'
import { Pagination } from '@mui/material';
import styled from 'styled-components';
import baseVars from 'stylesheet/vars';


const HomeTab = () => { 
  const [page, setPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const columns = useMemo(() => COLUMNS, []);
  const { result: data, transactionsTotalQuantity } = useSelector(getTransactions);
  
  const dispatch = useDispatch();

  const isModalOpen = useSelector(
    state => state.global.isAddTransactionModalOpen
  );

  const onModal = () => {
    dispatch(toggleModal(!isModalOpen));
  };

  useEffect(() => {
    // console.log(page + "!!!")
    dispatch(fetchTransactions(page));
  }, [dispatch, page]);
  

  const handleChange = (e, page) => {
  setPage(page)
}
  const totalPages = Math.ceil(transactionsTotalQuantity / transactionsPerPage)
  const totalPagesInteger =  totalPages ? totalPages : 1
  
  return (
    <Con>
      <Media queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px) and (max-width: 1279px)",
        large: "(min-width: 1280px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && <MobileCard items={data} columns={columns} />}
            {matches.medium && <TabletTab items={data} columns={columns}   />}
            {matches.large && <TabletTab items={data} columns={columns} />}
            {(transactionsTotalQuantity > 10) ? <Paginate  count={totalPagesInteger} page={page} onChange={handleChange} /> : null }
          </Fragment>
        )}
      </Media>

      <ButtonCircle onClick={onModal}>+</ButtonCircle>
      {isModalOpen && (
        <ModalAddTransaction toggleModal={onModal} isOpen={isModalOpen} />
      )}
    </Con>
    )
}

export default HomeTab

const Con = styled.div`
position: relative;
  display:flex;
  flex-direction: column;
  padding-bottom: 70px;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    height: 100%;
    padding-bottom: 70px;
  }

  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    padding-top: 32px;
    align-items: flex-end;
  }
`
const Paginate = styled(Pagination)`
  position: absolute;
  bottom: 20px;
  display:flex;
  justify-content: center;
  margin-top: 20px;
  @media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    width:280px;}
  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    width: 704px;}
    @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    width: 715px;}
`