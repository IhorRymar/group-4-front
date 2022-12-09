import { React, Fragment,useEffect, useMemo } from "react";
import MobileCard from "./MobileCard/MobileCard";
import TabletTab from "./TabletTab/TabletTab";
import Media from 'react-media';
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions} from 'redux/transactions/transactions-operation';
import { getTransactions } from 'redux/transactions/transactions-selector';
import { COLUMNS } from './columns'


const HomeTab = () => { 
  const columns = useMemo(() => COLUMNS, []);
  const data = useSelector(getTransactions);

  const dispatch = useDispatch();
 
   useEffect(() => {
    dispatch( fetchTransactions());
  }, [dispatch]);
  
  return (
      <>
            <Media queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1279px)",
          large: "(min-width: 1280px)"
            }}>
                {matches => (
            <Fragment>
              {matches.small && <MobileCard items={data} columns={columns} />}
            {matches.medium && <TabletTab items={data} columns={columns}  />}
              {matches.large && <TabletTab  items={data} columns={columns} />}
            </Fragment>
          )}
      </Media>
    
    
    </>
    )
}

export default HomeTab
