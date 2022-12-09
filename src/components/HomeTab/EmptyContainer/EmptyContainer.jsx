import styled from "styled-components";
import baseVars from "stylesheet/vars";

export const EmptyContainer = () => { 
    return (
        <Container>
            <Text>No transactions</Text>
        </Container>
    )
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
background-color: transparent;
border: 1px solid #DCDCDF;
@media screen and (min-width: ${baseVars.sizeScreen.mobile}) {
    width:280px;
    height:282px;}
@media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
   width:704px;
  height:312px;
  }
@media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
  width: 715px;
  }
`;
const Text = styled.p`
   font-family: ${ baseVars.fonts.main};
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 18px;
color: #DCDCDF; 
`;
