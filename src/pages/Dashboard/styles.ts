/* eslint-disable prettier/prettier */
import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface InputGroupProps {
  hasError: boolean;
}
export const MaximumWidth = styled.div`
  max-width: 700px;
`;
export const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  > h1 {
    user-select: none;
    font-size: min(max(5vw, 35px), 48px);
    max-width: 460px;
  }
`;
export const InputGroup = styled.div<InputGroupProps>`
  position: relative;
  height: 100%;

  @media screen and (max-width: 600px) {
    > input {
      border-radius: 8px;
      min-width: unset !important;
    }
      margin-bottom: 1px !important;
  }
  > input {
    min-width: 400px;
    height: 100%;
    width: 100%;

    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.colors.primary};
    ${({ hasError, theme }) =>
    hasError &&
    css`
        border-color: ${theme.colors.errors.primary};
      `};
    padding: 0 24px;
    flex: 1;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
export const Form = styled.form`
  display: flex;
  height: 60px;
  @media screen and (max-width: 600px) {
    height: 120px;
    flex-direction: column;
    > button {
      padding: 10px 20px;
      margin-top: 25px;
      border-radius: 8px;
    }
  }
  > button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 210px;
    color: #fff;
    background-color: #2d9;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      background-color: ${shade(0.1, '#2d9')};
    }
  }
`;
export const Error = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;
  margin-top: 10px;
  margin-left: 10px;

  font-weight: bold;
  font-size: 12px;
  color: ${props => props.theme.colors.errors.primary};
`;
export const Repositories = styled.div`
  margin-top: 80px;
`;

export const Repository = styled.div`
  overflow: auto;
  & + div {
    margin-top: 13px;
  }
  height: 112px;
  border-radius: 8px;
  background-color: #ffff;
  transition: transform 200ms ease-in-out;
  a {
    align-items: center;
    display: flex;
    padding: 10px 15px 30px;
  }

  cursor: pointer;
  &:hover {
    transform: translate3d(10px, 0, 0);
  }
  svg {
    flex-shrink: 0;
    color: #c9c9d4;
  }
`;
export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
  border-radius: 50rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Informations = styled.div`
  margin-left: 20px;
  > strong {
    color: #303030;
    display: block;
    font-size: min(18px, max(3vw, 12px));
    line-height: 30px;
  }
  > span {
    display: block;
    font-size: 16px;
    @media screen and (max-width: 600px) {
      font-size: 11px;
    }
    color: #a8a8b3;
  }
`;
