import React from 'react';
import { PageContainer } from 'components';
import diagram from 'assets/diagram.jpg';
import styled from 'styled-components';

const Container = styled.div`
  img {
    width: 100%;
  }
`;

const TopModels = () => {
  return (
    <PageContainer title="">
      <Container>
        <img src={diagram} alt="top mental models diagram" />
      </Container>
    </PageContainer>
  );
};
export default TopModels;
