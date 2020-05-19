import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchModelsByCategoryAction,
  fetchCategoriesAction,
} from 'store/actions';
import {
  getModelsByCategorySelector,
  getCategoryByIdSelector,
} from 'store/selectors';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { PageContainer } from 'components';
import { ModelsList, MentalModel } from './components/models-list/ModelsList';
import { ModelView } from './components/model-view/ModelView';
import { BookItem } from '../landing/components/book/Book';
const Wrapper = styled.div``;

interface ParamTypes {
  id: string;
}

export const MentalModelsByCategory: React.FC = () => {
  const params = useParams<ParamTypes>();
  const [selectedModel, setSelectedModel] = useState({} as MentalModel);
  const dispatch = useDispatch();
  const models = useSelector(getModelsByCategorySelector);
  const category: BookItem =
    useSelector(getCategoryByIdSelector(Number(params.id))) || ({} as BookItem);

  useEffect(() => {
    if (!category.name) {
      console.log('fetch');
      dispatch(fetchCategoriesAction());
    }
  }, [category]);

  useEffect(() => {
    dispatch(fetchModelsByCategoryAction(params.id));
  }, []);

  return (
    <PageContainer title={category.name}>
      <Wrapper>
        Hello Mental Models by category
        <ModelsList
          items={models}
          currentSelection={selectedModel.Model}
          onClick={setSelectedModel}
        />
        <ModelView item={selectedModel} />
      </Wrapper>
    </PageContainer>
  );
};
