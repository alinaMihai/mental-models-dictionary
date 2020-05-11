import React from 'react';
import styled from 'styled-components';
import { typeScale } from 'helpers';

const CopyrightWrapper = styled.p`
  font-size: ${typeScale.copyrightText};
`;

const Copyright = ({ text }) => {
  return (
    <CopyrightWrapper>
      {text} {new Date().getFullYear()}
    </CopyrightWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  padding: 10px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright text={'Mental Models Dictionary'} />
    </FooterWrapper>
  );
};
