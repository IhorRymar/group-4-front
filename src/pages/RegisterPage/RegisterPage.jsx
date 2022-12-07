import {  Container } from "./RegisterPage.styled";
import { Title, Img, FormLogin, WrapperImg } from "pages/LoginPage/LoginPage.styled";
import Media from 'react-media'
import { mediaQueries } from '../../utils'
import  RegisterForm  from '../../components/RegisterForm/RegisterForm';
import registerimg from '../../images/photo/register-img.png'
import GlobalContainer from '../../container/Container.jsx'

const RegisterPage = () => {
  return (
    <GlobalContainer>
      <Container>
         <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <WrapperImg>
                  <Img
                    src={registerimg}
                    alt="Человек с тележкой продуктов"
                    width="274px"
                    height="250px"
                  />
                  
                  
                  <Title>Finance App</Title>
               </WrapperImg>
              )}
              {matches.desktop && (
                <WrapperImg>
                  <Img
                    src={registerimg}
                    alt="Девушка с телефоном в руках"
                    width="452px"
                    height="413px"
                  />
                  
                  <Title>Finance App</Title>
                </WrapperImg>
              )}
            </>
          )}
        </Media>
        
        
        <FormLogin>
          <RegisterForm />
        </FormLogin>
      </Container>
    </GlobalContainer>
  )
}

export default RegisterPage;