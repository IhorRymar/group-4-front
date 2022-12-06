import { Backdrop,Container } from "./Container.styled"

const GlobalContainer = ({ children }) => (
  <Backdrop>
    <Backdrop>
      <Container>{children}</Container>
    </Backdrop>
  </Backdrop>
)

export default GlobalContainer