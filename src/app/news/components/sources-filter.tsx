import { Chip } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { Results } from 'src/app/shared/components/results';
import styled from 'styled-components';
import {
  selectNewsError,
  selectNewsLoaded,
  selectNewsLoading,
} from '../state/news.state';
import { getSourcesThunk, selectSources } from '../state/sources.state';
import { SourcesLoader } from './sources-loader';

export interface SourceFilterProps {
  selectedSource: string;
  onSourceChange: (sourceId: string) => void;
}

export function SourceFilter({
  selectedSource,
  onSourceChange,
}: SourceFilterProps) {
  const dispatch = useDispatch();
  const sources = useSelector(selectSources);
  const loading = useSelector(selectNewsLoading);
  const loaded = useSelector(selectNewsLoaded);
  const error = useSelector(selectNewsError);

  useEffect(() => {
    dispatch(getSourcesThunk());
  }, [dispatch]);

  const createChipSourceClick = (sourceId: string) => () => {
    if (selectedSource === sourceId) {
      return;
    }

    onSourceChange(sourceId);
  };

  return (
    <Results
      loading={!loaded || loading}
      data={sources}
      error={error}
      loaderComponent={<SourcesLoader count={6} />}
    >
      {loaded && (
        <SourcesList>
          <Chip
            label="All"
            onClick={createChipSourceClick('')}
            color={selectedSource === '' ? 'primary' : 'default'}
          />

          {sources.map((source) => (
            <Chip
              style={{ marginLeft: '10px' }}
              key={source.id}
              label={source.name}
              onClick={createChipSourceClick(source.id)}
              color={selectedSource === source.id ? 'primary' : 'default'}
            />
          ))}
        </SourcesList>
      )}
    </Results>
  );
}

const SourcesList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100%;

  // Remove scrollbar
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
