import { Skeleton } from '@mui/material';
import styled from 'styled-components';

export interface SourceSkeletonProps {
  count: number;
}

export function SourcesLoader({ count }: SourceSkeletonProps) {
  return (
    <SourcesLoaderContainer>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <ChipSkeleton
            key={i}
            animation="wave"
            variant="rectangular"
            width={100}
            height={32}
          />
        ))}
    </SourcesLoaderContainer>
  );
}

const SourcesLoaderContainer = styled.div`
  display: flex;
`;

const ChipSkeleton = styled(Skeleton)`
  margin-right: 10px;
  border-radius: 16px;
`;
