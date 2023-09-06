import {
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

import { Close, History } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { WarningMessage } from 'src/app/shared/components/warning-message';
import styled from 'styled-components';
import { selectOrderedHistory } from '../state/history.state';

export function ArticleHistory() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const history = useSelector(selectOrderedHistory);

  const handleHistoryClick = () => setIsDialogOpen((open) => !open);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        fullWidth={true}
        maxWidth="sm"
      >
        <HeaderContainer>
          <Typography variant="h5">History</Typography>

          <IconButton onClick={closeDialog}>
            <Close />
          </IconButton>
        </HeaderContainer>
        <DialogContent>
          {history.length ? (
            history.map(({ title }) => <ListItem key={title}>{title}</ListItem>)
          ) : (
            <WarningMessage message="You haven't visit any article yet" />
          )}
        </DialogContent>
      </Dialog>

      <Tooltip title="History">
        <IconButton onClick={handleHistoryClick}>
          <History sx={{ color: '#fff' }} />
        </IconButton>
      </Tooltip>
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 24px;
`;

const ListItem = styled.p`
  margin: 0;
  border-top: 1px solid #eee;
  padding: 20px 0;

  &:last-child {
    border-bottom: 1px solid #eee;
  }
`;