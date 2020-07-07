import React from 'react';
import styled from 'styled-components';
import Linkify from 'react-linkify';
import { MentalModel } from '../models-list/ModelsList';

const Wrapper = styled.div`
  flex: 3;
  overflow-y: auto;
  .emptyMessage {
    margin-top: calc(50% / 2.5 + 10px);
  }
  p {
    flex: 3;
    padding-right: 10px;
    white-space: pre-wrap;
    line-height: 1.6;
  }
  .source {
    font-style: italic;
  }
  ${({ theme }) => theme.laptop`
     margin-left:40px;
     max-height: calc(100vh / 2 - -35px);
  `}
`;

type Props = {
  item: MentalModel;
};

export const ModelViewDesktop = ({ item }: Props) => {
  return !item.Model ? (
    <Wrapper id={'modelView'}>
      <p className="emptyMessage">
        Click on one of the mental models to see details. Use up and down arrow
        keys to navigate through the list
      </p>
    </Wrapper>
  ) : (
    <Wrapper id={'modelView'}>
      <h2>{item.Model}</h2>
      <div>
        <p>{item.Description}</p>
        <Linkify
          componentDecorator={(decoratedHred, decoratedText, key) => (
            <a target="blank" href={decoratedHred} key={key}>
              {decoratedText}
            </a>
          )}
        >
          <p className="source">{item.Source}</p>
        </Linkify>
      </div>
    </Wrapper>
  );
};
