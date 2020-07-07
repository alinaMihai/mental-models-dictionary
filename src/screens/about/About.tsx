import React from 'react';
import { PageContainer } from 'components';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 10px;
`;

const About = () => {
  return (
    <PageContainer title="About">
      <AboutWrapper>
        <p>
          {' '}
          I created this web app as a result of being inspired by the
          mini-course on mental models offered by Michael Simons. And the credit
          for the content of this app goes to
          <a
            href="http://michaeldsimmons.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            {' '}
            Michael Simmons
          </a>
          .
        </p>
        <p>
          A mental model is an explanation of someone&apos;s thought process
          about how something works in the real world. It is a representation of
          the surrounding world, the relationships between its various parts and
          a person&apos;s intuitive perception about his or her own acts and
          their consequences. (Source: Wikipedia)
        </p>
        <p>
          Read about how mental models can impact your thinking and therefore
          change your life{' '}
          <a
            href="http://michaeldsimmons.com/this-is-exactly-how-you-should-train-yourself-to-be-smarter-infographic/"
            rel="noreferrer noopener"
          >
            http://michaeldsimmons.com/this-is-exactly-how-you-should-train-yourself-to-be-smarter-infographic
          </a>
        </p>
        <p>
          If you can see how mental models can work for you, go and master one
          mental model per month starting with the most useful and universals
          models at{' '}
          <a href="http://www.mentalmodelclub.com" rel="noreferrer noopener">
            http://www.mentalmodelclub.com
          </a>
        </p>
        <p>
          For any issues, feel free to contact the developer on{' '}
          <a href="https://github.com/alinaMihai">Github</a> or create an issue
          at{' '}
          <a href="https://github.com/alinaMihai/mental-models-dictionary">
            https://github.com/alinaMihai/mental-models-dictionary
          </a>
        </p>
      </AboutWrapper>
    </PageContainer>
  );
};

export default About;
