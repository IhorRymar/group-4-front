import { Button } from "./ButtonCircle.styled";

export const ButtonCircle = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
