import React from 'react';

import { PageContainer, SideMenu } from 'components';

export const Landing = () => {
  return (
    <PageContainer
      title="Mental Models Dictionary"
      subtitle="This dictionary is to be used as a reference to find more about various mental models."
    >
      <SideMenu />
    </PageContainer>
  );
};
