import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

export function CenterLoader() {
  return (
    <CenterContainer>
      <CircularProgress />
    </CenterContainer>
  );
}

const CenterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
