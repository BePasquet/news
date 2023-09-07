import { CircularProgress } from '@mui/material';
import { CenterContainer } from './center-container';

export function CenterLoader() {
  return (
    <CenterContainer>
      <CircularProgress />
    </CenterContainer>
  );
}
