import { Done } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import styled from 'styled-components';
import { Source } from '../data/interfaces/source.interface';
import { getSourcesThunk, selectSources } from '../state/sources.state';

export interface SourceFilterProps {
  selectedSource: string;
  onSourceChange: (source: Source | null) => void;
}

export function SourceFilter({
  selectedSource,
  onSourceChange,
}: SourceFilterProps) {
  const dispatch = useDispatch();
  const sources = useSelector(selectSources);

  useEffect(() => {
    dispatch(getSourcesThunk());
  }, [dispatch]);

  const handleAllClick = () => {
    if (selectedSource === '') {
      return;
    }

    onSourceChange(null);
  };

  const createChipSourceClick = (source: Source) => () => {
    if (selectedSource === source.id) {
      return;
    }

    onSourceChange(source);
  };

  return (
    <SourcesList>
      <Chip
        label="All"
        onClick={handleAllClick}
        icon={selectedSource === '' ? <Done /> : undefined}
      />

      {sources.map((source) => (
        <Chip
          style={{ marginLeft: '10px' }}
          key={source.id}
          label={source.name}
          onClick={createChipSourceClick(source)}
          icon={selectedSource === source.id ? <Done /> : undefined}
        />
      ))}
    </SourcesList>
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
