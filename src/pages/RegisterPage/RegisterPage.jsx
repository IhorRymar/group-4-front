import { Container, Img, FormLogin, Title} from "pages/LoginPage/LoginPage.styled";
import { RegisterImg } from "./RegisterPage.styled";
import Media from 'react-media'
import { mediaQueries } from '../../utils'
import  RegisterForm  from '../../components/RegisterForm/RegisterForm';
import registerimg from '../../images/photo/register-img.png'
import PageContainer from '../../components/PageContainer/PageContainer'

const RegisterPage = () => {
  return (
    <PageContainer>
      <Container>
         <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <RegisterImg>
                  <Img
                    src={registerimg}
                    alt="a girl with a phone"
                    width="274px"
                    height="250px"
                  />
                  
                  
                  <Title>Finance App</Title>
               </RegisterImg>
              )}
              {matches.desktop && (
                <RegisterImg>
                  <Img
                    src={registerimg}
                    alt="a girl with a phone"
                    width="452px"
                    height="413px"
                  />
                  
                  <Title>Finance App</Title>
                </RegisterImg>
              )}
            </>
          )}
        </Media>
        
        
        <FormLogin>
          <RegisterForm />
        </FormLogin>
      </Container>
      </PageContainer>
  )
}

export default RegisterPage;