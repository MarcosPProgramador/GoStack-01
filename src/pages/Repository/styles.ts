import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    @media screen and (max-width: 600px) {
      width: 130px;
    }
  }
  a {
    justify-content: space-between;
    color: #505050;
    display: flex;
    line-height: 0;
    align-items: center;
    transition: ease 0.2s;
    svg {
      flex-shrink: 0;
    }
    &:hover {
      color: #c3c3c3;
    }
  }
`;
export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      > img {
        width: 180px !important;
        height: 180px !important;
      }
      > div {
        margin-top: 25px;
        text-align: center;
        margin-left: unset !important;
      }
    }
    > img {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    > div {
      margin-left: 30px;
      strong {
        display: inline-block;
        font-size: min(35px, 7vw);
        margin-bottom: 10px;
      }
      p {
        color: #707070;
      }
    }
  }
  section {
    margin-top: 30px;
    @media screen and (max-width: 600px) {
      text-align: center;
      margin-top: 60px;
    }
    > ul {
      display: inline-flex;
      align-items: center;
      > li {
        & + li {
          margin-left: 60px;
        }

        > * {
          display: block;
        }
        > strong {
          color: #282828;
          font-size: 35px;
          @media screen and (max-width: 600px) {
            font-size: min(35px, max(5vw, 19px));
          }
        }
        > span {
          color: #707071;
          font-size: 12px;
        }
      }
    }
  }
`;
export const Issues = styled.div`
  margin-top: 80px;
  height: 112px;
`;
export const Issue = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;

  & + a {
    margin-top: 13px;
  }
  height: 100%;
  border-radius: 8px;
  background-color: #ffff;
  transition: transform 200ms ease-in-out;

  cursor: pointer;
  &:hover {
    transform: translate3d(10px, 0, 0);
  }
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;

  > strong {
    color: #303030;
    display: block;
    font-size: 15px;
  }
  > span {
    margin-top: 2px;
    display: block;
    font-size: 14px;
    color: #a8a8b3;
  }
`;
