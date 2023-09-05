import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'src/app/core/redux/redux-hooks';

import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import { Screen } from 'src/app/shared/components/screen';
import styled from 'styled-components';
import { ArticlesList } from '../components/articles-list';
import { getNewsThunk } from '../state/news.state';

export function News() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsThunk(''));
  }, [dispatch]);

  return (
    <Screen>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5">News</Typography>
        </Toolbar>
      </AppBar>

      <ContentContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained">Filter</Button>
        </Box>

        <ArticleListContainer>
          <ArticlesList />
        </ArticleListContainer>
      </ContentContainer>
    </Screen>
  );
}

const ArticleListContainer = styled(FlexColumnContainer)`
  margin-top: 20px;
`;

const ContentContainer = styled(FlexColumnContainer)`
  padding: 10px;
`;

export default News;
