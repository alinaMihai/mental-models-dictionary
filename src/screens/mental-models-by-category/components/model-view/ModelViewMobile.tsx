import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Linkify from 'react-linkify';
import { MentalModel } from '../models-list/ModelsList';
import arrowUp from 'assets/icons/arrow-up.svg';
import arrowDown from 'assets/icons/arrow-down.svg';
import { useWindowSize, sizes } from 'helpers';

const Wrapper = styled.div`
  flex: 3;
  overflow-y: auto;
  padding: 0 15px;
  p {
    flex: 3;
    padding-right: 10px;
    white-space: pre-wrap;
    line-height: 1.6;
  }
  .source {
    font-style: italic;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    border-bottom: 1px solid #eaecf0;
    margin-bottom: 0.5em;
    padding: 5px 0;
    margin: 0;
    text-align: left;
  }
  h2 {
    display: flex;
  }
  h2 span {
    flex: 1;
    line-height: 1.4;
  }
  ${({ theme }) => theme.laptop`
     margin-left:40px;
     max-height: calc(100vh / 2 - -35px);
  `}
`;

type Props = {
  item: MentalModel;
};

export const ModelViewMobile = ({ item }: Props) => {
  const screenSize = useWindowSize();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (screenSize.width < sizes.tablet) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  }, []);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return !item.Model ? (
    <Wrapper id={'modelView'}>
      <p>
        Click on one of the mental models to see details. Use up and down arrow
        keys to navigate through the list
      </p>
    </Wrapper>
  ) : (
    <Wrapper id={'modelView'}>
      <button onClick={toggleContent} className="modelTitle">
        <h2>
          <img
            src={showContent ? arrowUp : arrowDown}
            alt={`toggle ${showContent ? 'down' : 'up'}`}
          />
          <span>{item.Model}</span>
        </h2>
      </button>
      {showContent && (
        <div className="content">
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
      )}
    </Wrapper>
  );
};
