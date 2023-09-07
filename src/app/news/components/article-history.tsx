import { IconButton, Tooltip } from '@mui/material';

import { History } from '@mui/icons-material';
import { useState } from 'react';
import { HistoryDialog } from './history-dialog';

export function ArticleHistory() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleHistoryClick = () => setIsDialogOpen((open) => !open);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <HistoryDialog isOpen={isDialogOpen} onClose={closeDialog} />
      <Tooltip title="History">
        <IconButton onClick={handleHistoryClick}>
          <History sx={{ color: '#fff' }} />
        </IconButton>
      </Tooltip>
    </>
  );
}
