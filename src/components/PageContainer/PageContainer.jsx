import { Background, Backdrop, Container } from "./PageContainer.styled";

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