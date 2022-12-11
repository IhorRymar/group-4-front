import React from 'react';
import Media from 'react-media';
import GlobalContainer from '../../container';
import { Container } from 'pages/RegisterPage/RegisterPage.styled';
import { mediaQueries } from '../../utils';
// import StatsPage from '../StatsPage/StatsPage';
// import { AddTransactionButton } from 'components/AddTransactionButton/AddTransactionButton';

import DiagramTab from 'components/DiagramTab/DiagramTab';
import HomeTab from 'components/HomeTab/HomeTab';
import { DashdoardDesktop } from './DashboardPage.styled';
import MobileCard from 'components/HomeTab/MobileCard/MobileCard';
import TabletTab from 'components/HomeTab/TabletTab/TabletTab';





export const DashboardPage = () => {
  return (
    <GlobalContainer>
      <Container>
        
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
                {matches.mobile && (
                    <div>
                      <MobileCard />
                      <DiagramTab />         
                    </div>
                )}
              {matches.tablet && (
                <div>
                    <TabletTab />  
                    <DiagramTab /> 
                    
                </div>
              )}
              {matches.desktop && (

                  <DashdoardDesktop>
                      <div>
                          <HomeTab />
                          <DiagramTab />    
                      </div>
                   </DashdoardDesktop>
                  
              )}
            </>
          )}
        </Media>
         
      </Container>
    </GlobalContainer>
  );
};

export default DashboardPage;