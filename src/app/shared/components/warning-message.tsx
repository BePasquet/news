import { Info } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { CenterContainer } from './center-container';

export interface WarningMessageProps {
  message: string;
}

export function WarningMessage({ message }: WarningMessageProps) {
  return (
    <CenterContainer>
      <Info fontSize="large" sx={{ color: '#111' }} />
      <Typography variant="h6" sx={{ marginTop: '10px' }}>
        {message}
      </Typography>
    </CenterContainer>
  );
}
