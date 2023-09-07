import { Chip } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { Results } from 'src/app/shared/components/results/results';
import styled from 'styled-components';
import {
  getSourcesThunk,
  selectSources,
  selectSourcesError,
  selectSourcesLoaded,
  selectSourcesLoading,
} from '../../state/sources.state';
import { SourcesLoader } from '../sources-loader';

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
  const loading = useSelector(selectSourcesLoading);
  const loaded = useSelector(selectSourcesLoaded);
  const error = useSelector(selectSourcesError);

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
        <SourcesList data-testid="sources-list">
          <Chip
            label="All"
            onClick={createChipSourceClick('')}
            color={selectedSource === '' ? 'primary' : 'default'}
            className={selectedSource === '' ? 'active' : ''}
          />

          {sources.map((source) => (
            <Chip
              style={{ marginLeft: '10px' }}
              key={source.id}
              label={source.name}
              onClick={createChipSourceClick(source.id)}
              color={selectedSource === source.id ? 'primary' : 'default'}
              className={selectedSource === source.id ? 'active' : ''}
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
