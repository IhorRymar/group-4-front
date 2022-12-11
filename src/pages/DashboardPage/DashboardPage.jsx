import React from 'react';
import Media from 'react-media';
import GlobalContainer from '../../container';
import { Container } from 'container/Container.styled';
import { mediaQueries } from '../../utils';


import { DashdoardDesktop } from './DashboardPage.styled';
import HomePage from 'pages/HomePage/HomePage';



const DashboardPage = () => {
  return (

    <GlobalContainer>
      <Container>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
                {matches.mobile && (
                    <div>
                      <HomePage />
                              
                    </div>
                )}
              {matches.tablet && (
                <div>
                    <HomePage />  
                    
                    
                </div>
              )}
              {matches.desktop && (

                  <DashdoardDesktop>
                      <div>
                          <HomePage />
                              
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
