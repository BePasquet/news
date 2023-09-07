import {
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

import { ArrowOutward, Close } from '@mui/icons-material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { Results } from 'src/app/shared/components/results/results';
import { WarningMessage } from 'src/app/shared/components/warning-message';
import styled from 'styled-components';
import {
  getHistoryThunk,
  selectHistoryError,
  selectHistoryLoaded,
  selectHistoryLoading,
  selectOrderedHistory,
} from '../state/history.state';

export interface HistoryDialogProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export function HistoryDialog({ isOpen, onClose }: HistoryDialogProps) {
  const dispatch = useDispatch();
  const history = useSelector(selectOrderedHistory);
  const loading = useSelector(selectHistoryLoading);
  const loaded = useSelector(selectHistoryLoaded);
  const error = useSelector(selectHistoryError);

  useEffect(() => {
    // Prevent loading history from storage multiple times
    if (!loaded && !loading) {
      dispatch(getHistoryThunk());
    }
  }, [dispatch, loaded, loading]);

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth={true} maxWidth="sm">
      <HeaderContainer>
        <Typography variant="h5">History</Typography>

        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </HeaderContainer>
      <DialogContent>
        <Results loading={loading || !loaded} error={error} data={history}>
          {loaded && (
            <div>
              {history.length ? (
                history.map(({ title, visitedAt, url }) => (
                  <ListItem key={visitedAt}>
                    <span>{title}</span>

                    <Tooltip title="Open">
                      <a href={url} target="_blank" rel="noreferrer">
                        <IconButton>
                          <ArrowOutward color="primary" fontSize="medium" />
                        </IconButton>
                      </a>
                    </Tooltip>
                  </ListItem>
                ))
              ) : (
                <WarningMessage message="You haven't visit any article yet" />
              )}
            </div>
          )}
        </Results>
      </DialogContent>
    </Dialog>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 24px;
`;

const ListItem = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 20px 0;

  &:last-child {
    border-bottom: 1px solid #eee;
  }
`;
