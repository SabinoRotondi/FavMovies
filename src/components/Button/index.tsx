import React from "react";
// Styles
import { Wrapper } from "./Button.styles";
// Types
type Props = {
  children: any;
  callback: () => void;
}
const Button: React.FC<Props> = ({ children, callback }) => {
  return (
    <>
      <Wrapper type="button" onClick={callback}>
        {children}
      </Wrapper>
    </>
  );
};
export default Button;
