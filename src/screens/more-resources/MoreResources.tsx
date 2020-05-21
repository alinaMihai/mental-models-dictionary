import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchExtraResourcesAction } from 'store/actions';
import { getResourcesSelector } from 'store/selectors';

import { PageContainer } from 'components';

const Wrapper = styled.ul`
  max-height: calc(100vh - 323px);
  overflow-y: auto;
  ${({ theme }) => theme.mobileM`
      max-height: 100%;
    `}

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    display: inline-block;
    width: 100%;
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }
`;

export const MoreResources = () => {
  const dispatch = useDispatch();
  const extraResources = useSelector(getResourcesSelector);

  useEffect(() => {
    dispatch(fetchExtraResourcesAction());
  }, []);

  return (
    <PageContainer title="More Resources">
      <Wrapper>
        {extraResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.URL}>
              <p>
                <span>{resource.Resource}</span>
                {': '}
                {resource.Title}
              </p>
            </a>
          </li>
        ))}
      </Wrapper>
    </PageContainer>
  );
};
