import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";
// Types
type Props = {
  children?: React.ReactNode;
};
const Grid: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

export default Grid;
