import React from 'react';
import { Container } from './styles';

interface Props {
  colors: {
    primary: string;
    secondary: string;
  };
}
const Scrollbar: React.FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Scrollbar;
