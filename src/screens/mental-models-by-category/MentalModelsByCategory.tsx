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
import { useKeyPress } from 'helpers';
import { ModelsList, MentalModel } from './components/models-list/ModelsList';
import { ModelView } from './components/model-view/ModelView';
import { BookItem } from '../landing/components/book/Book';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 278px);
  ${({ theme }) => theme.laptop`
    flex-direction: row;
    height: 100%;
  `}
`;

interface ParamTypes {
  id: string;
}

export const MentalModelsByCategory: React.FC = () => {
  const params = useParams<ParamTypes>();
  const [selectedModel, setSelectedModel] = useState({} as MentalModel);
  const [downPress, setDownPressed] = useKeyPress('ArrowDown');
  const [upPress, setUpPressed] = useKeyPress('ArrowUp');
  const [cursor, setCursor] = useState(0);
  const dispatch = useDispatch();
  const models = useSelector(getModelsByCategorySelector);
  const category: BookItem =
    useSelector(getCategoryByIdSelector(Number(params.id))) || ({} as BookItem);

  useEffect(() => {
    if (!category.name) {
      dispatch(fetchCategoriesAction());
    }
  }, [category]);

  useEffect(() => {
    dispatch(fetchModelsByCategoryAction(params.id));
  }, []);

  useEffect(() => {
    if (models.length && downPress) {
      setCursor((prevState) =>
        prevState < models.length - 1 ? prevState + 1 : prevState,
      );
      (setDownPressed as any)(false);
    }
  }, [downPress]);

  useEffect(() => {
    if (models.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      (setUpPressed as any)(false);
    }
  }, [upPress]);

  useEffect(() => {
    if (models.length) {
      const element = document.getElementById(`${cursor}`);
      if (element) {
        const view = document.getElementById('modelView');
        if (view) {
          view.scrollTop = 0;
        }
        element.scrollIntoView();
      }
      setSelectedModel(models[cursor]);
    }
  }, [cursor, models]);

  const handleItemClick = (item, index) => {
    setSelectedModel(item);
    setCursor(index);
  };

  return (
    <PageContainer title={category.name}>
      <Wrapper>
        <ModelsList items={models} cursor={cursor} onClick={handleItemClick} />
        <ModelView item={selectedModel} />
      </Wrapper>
    </PageContainer>
  );
};
