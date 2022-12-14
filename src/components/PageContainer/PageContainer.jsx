import { Backdrop, Container } from "./PageContainer.styled";
import Background from './Background/Background';

const PageContainer = ({ children }) => {
  return (
    <Background>
      <Backdrop>
        <Container>{children}</Container>
      </Backdrop>
    </Background>
    
  )
};

export default PageContainer;