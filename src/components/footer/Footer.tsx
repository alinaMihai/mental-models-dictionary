import React from 'react';
import styled from 'styled-components';
import { typeScale } from 'helpers';

const CopyrightWrapper = styled.p`
  font-size: ${typeScale.paragraph};
`;

const Copyright = ({ text }) => {
  return (
    <CopyrightWrapper>
      {text} {new Date().getFullYear()}
    </CopyrightWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.accentLight};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  width: 100%;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright text={'Mental Models Dictionary'} />
    </FooterWrapper>
  );
};
