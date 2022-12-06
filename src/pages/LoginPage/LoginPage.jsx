import React from 'react'
import Media from 'react-media'
import LoginForm from '../../components/LoginForm/LoginForm'
import GlobalContainer from '../../container'
import { Title, WrapperImg, FormLogin, Img } from './LoginPage.styled'
import { Container } from 'pages/RegisterPage/RegisterPage.styled'
import { mediaQueries } from '../../utils'
import signinImg from '../../images/photo/signin-img.png'


const LoginPage = () => {
  return (
    <GlobalContainer>
      <Container>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt="Человек с тележкой продуктов"
                  ></Img>  
                  
                  
                  <Title>Finance App</Title>
                </WrapperImg>
              )}
              {matches.desktop && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt="Человек с тележкой продуктов"
                    
                  ></Img>  
                  
                  <Title>Finance App</Title>
                </WrapperImg>
              )}
            </>
          )}
        </Media>

        <FormLogin >
          <LoginForm />
        </FormLogin>
      </Container>
    </GlobalContainer>
  )
}

export default LoginPage
