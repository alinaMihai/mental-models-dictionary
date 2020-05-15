import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAction } from 'store/actions';
import { getCategoriesSelector } from 'store/selectors';

import { PageContainer } from 'components';
import { Library } from './components/library/Library';

export const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);

  return (
    <PageContainer
      title="Mental Models Dictionary"
      subtitle="A reference to find more about mental models."
    >
      <Library items={categories} />
    </PageContainer>
  );
};
