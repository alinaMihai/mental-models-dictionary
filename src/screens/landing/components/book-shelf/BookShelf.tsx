import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: ${(props) => `30px solid ${props.theme.accentLight}`};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  position: relative;
  z-index: -10;
  margin-top: -13px;
  margin-bottom: 30px;
  ::after {
    content: '';
    background: ${(props) => props.theme.accentDark};
    height: 20px;
    width: calc(100% + 39px);
    position: absolute;
    left: -19px;
    bottom: -50px;
    z-index: 1;
  }
`;

export const BookShelf = () => {
  return <Wrapper></Wrapper>;
};
