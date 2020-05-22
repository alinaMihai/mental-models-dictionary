import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAction } from 'store/actions';
import {
  getCategoriesSelector,
  isLoadingCategorySelector,
} from 'store/selectors';
import Spinner from 'components/spinner/Spinner';
import { PageContainer } from 'components';
import { Library } from './components/library/Library';

export const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const isLoading = useSelector(isLoadingCategorySelector);
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);

  return (
    <PageContainer
      title="Mental Models Dictionary"
      subtitle="A reference to find more about mental models."
    >
      {isLoading ? <Spinner /> : <Library items={categories} />}
    </PageContainer>
  );
};
