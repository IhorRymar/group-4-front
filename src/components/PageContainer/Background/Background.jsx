import { BackgroundImage } from "./Background.styled";

const Background = ({ children }) => {
  return (
    <BackgroundImage>{children}</BackgroundImage>
  )
};

export default Background;