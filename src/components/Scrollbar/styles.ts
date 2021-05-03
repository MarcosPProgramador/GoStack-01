import styled from 'styled-components';

interface Props {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const Container = styled.div<Props>`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;

  scrollbar-color: ${props =>
    `${props.colors.primary} ${props.colors.secondary}`};

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${props => `${props.colors.primary}`};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50rem;
    background-color: ${props => `${props.colors.secondary}`};
  }
`;
