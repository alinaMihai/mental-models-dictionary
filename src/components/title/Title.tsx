import styled from 'styled-components';
import { typeScale } from 'helpers';
export const Title = styled.h1`
  font-size: ${typeScale.header3};
  font-weight: bold;
  padding: 20px;
  margin: 0;
  word-break: break-word;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 60px;
  ${({ theme }) => theme.laptop`
    font-size: ${typeScale.header1};
    margin-top: 0px;
    padding: 0;
  `}
`;
