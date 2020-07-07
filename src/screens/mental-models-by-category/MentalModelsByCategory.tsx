import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchModelsByCategoryAction,
  fetchCategoriesAction,
} from 'store/actions';
import {
  getModelsByCategorySelector,
  getCategoryByIdSelector,
  isLoadingModelsSelector,
} from 'store/selectors';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { PageContainer } from 'components';
import Spinner from 'components/spinner/Spinner';
import { useKeyPress } from 'helpers';
import { ModelsList, MentalModel } from './components/models-list/ModelsList';
import { ModelViewDesktop } from './components/model-view/ModelViewDesktop';
import { ModelViewMobile } from './components/model-view/ModelViewMobile';
import { BookItem } from '../landing/components/book/Book';

const WrapperDesktop = styled.div`
  display: none;
  ${({ theme }) => theme.laptop`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: row;
    height: 100%;
  `}
`;

const WrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  ${({ theme }) => theme.laptop`
    display: none;
  `}
`;

interface ParamTypes {
  id: string;
}

const MentalModelsByCategory: React.FC = () => {
  const params = useParams<ParamTypes>();
  const [selectedModel, setSelectedModel] = useState({} as MentalModel);
  const [isMouseOverList, setIsMouseOverList] = useState(false);
  const [downPress, setDownPressed] = useKeyPress('ArrowDown');
  const [upPress, setUpPressed] = useKeyPress('ArrowUp');
  const [cursor, setCursor] = useState(-1);
  const dispatch = useDispatch();
  const models = useSelector(getModelsByCategorySelector);
  const category: BookItem =
    useSelector(getCategoryByIdSelector(Number(params.id))) || ({} as BookItem);
  const isLoading = useSelector(isLoadingModelsSelector);
  useEffect(() => {
    if (!category.name) {
      dispatch(fetchCategoriesAction());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchModelsByCategoryAction(params.id));
  }, []);

  useEffect(() => {
    if (models.length && downPress && isMouseOverList) {
      setCursor((prevState) =>
        prevState < models.length - 1 ? prevState + 1 : prevState,
      );
      (setDownPressed as any)(false);
    }
  }, [downPress, isMouseOverList]);

  useEffect(() => {
    if (models.length && upPress && isMouseOverList) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      (setUpPressed as any)(false);
    }
  }, [upPress, isMouseOverList]);

  useEffect(() => {
    if (models.length && cursor >= 0 && isMouseOverList) {
      setSelectedModel(models[cursor]);
    }
  }, [cursor, models]);

  const handleItemClick = (item, index) => {
    setSelectedModel(item);
    setCursor(index);
  };

  return (
    <PageContainer title={category.name}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <WrapperDesktop>
            <ModelsList
              items={models}
              cursor={cursor}
              onClick={handleItemClick}
              handleMouseOver={setIsMouseOverList}
            />
            <ModelViewDesktop item={selectedModel} />
          </WrapperDesktop>

          <WrapperMobile>
            {models.map((item, i) => (
              <div key={i}>
                <ModelViewMobile item={item} />
              </div>
            ))}
          </WrapperMobile>
        </>
      )}
    </PageContainer>
  );
};

export default MentalModelsByCategory;
