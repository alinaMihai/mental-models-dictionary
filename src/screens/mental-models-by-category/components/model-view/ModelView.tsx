import React from 'react';
import styled from 'styled-components';
import { MentalModel } from '../models-list/ModelsList';

const Wrapper = styled.div``;

type Props = {
  item: MentalModel;
};

export const ModelView = ({ item }: Props) => {
  return (
    <Wrapper>
      Model View
      {item.Model}
    </Wrapper>
  );
};
