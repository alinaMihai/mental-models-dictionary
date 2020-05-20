import React from 'react';
import styled from 'styled-components';
import { MentalModel } from '../models-list/ModelsList';

const Wrapper = styled.div`
  flex: 3;
  overflow-y: auto;
  max-height: calc(100vh / 2 - 142px);
  p {
    padding-right: 10px;
    white-space: pre-wrap;
  }
  ${({ theme }) => theme.laptop`
     margin-left:40px;
     max-height:  calc(100vh / 2 - -119px);
  `}
`;

type Props = {
  item: MentalModel;
};

export const ModelView = ({ item }: Props) => {
  return !item.Model ? (
    <p>Click on one of the mental models to see details</p>
  ) : (
    <Wrapper id={'modelView'}>
      <h2>{item.Model}</h2>
      <div>
        <p>{item.Description}</p>
        <p>{item.Source}</p>
      </div>
    </Wrapper>
  );
};
