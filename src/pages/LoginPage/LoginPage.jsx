import React from 'react'
import Media from 'react-media'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Title, WrapperImg, FormLogin, Img, Container } from './LoginPage.styled'
import { mediaQueries } from '../../utils'
import signinImg from '../../images/photo/signin-img.png'
import Background from 'components/PageContainer/Background/Background';

const LoginPage = () => {
  return (
    <Background>
      <Container>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt="a man with a shopping cart"
                  ></Img>  
                  <Title>Finance App</Title>
                </WrapperImg>
              )}
              {matches.desktop && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt="A man with a cart of groceries"
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
    </Background>
  )
}

export default LoginPage