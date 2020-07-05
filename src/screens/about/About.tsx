import React from 'react';
import { PageContainer } from 'components';

const About = () => {
  return (
    <PageContainer title="About">
      Credit for the content of this app goes to{' '}
      <a href="http://michaeldsimmons.com/" rel="noreferrer noopener">
        {' '}
        Michael Simmons
      </a>
      .
      <p>
        Master one mental model per month starting with the most useful and
        universals models at{' '}
        <a href="http://www.mentalmodelclub.com" rel="noreferrer noopener">
          http://www.mentalmodelclub.com
        </a>
      </p>
    </PageContainer>
  );
};

export default About;
