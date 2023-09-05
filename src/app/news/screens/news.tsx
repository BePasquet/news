import {
  AppBar,
  Box,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'src/app/core/redux/redux-hooks';

import { Search } from '@mui/icons-material';
import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import { Screen } from 'src/app/shared/components/screen';
import styled from 'styled-components';
import { ArticlesList } from '../components/articles-list';
import { SourceFilter } from '../components/sources-filter';
import { Source } from '../data/interfaces/source.interface';
import { HeadlinesFilter } from '../services/news.service';
import { getNewsThunk } from '../state/news.state';

export function News() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<HeadlinesFilter>({
    query: '',
    sources: '',
  });

  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);

  const updateNews = (newFilter: HeadlinesFilter) => {
    setFilter(newFilter);
    dispatch(getNewsThunk(newFilter));
  };

  const handleSourceChange = (source: Source | null) => {
    const nextFilter = { ...filter, sources: source?.id ?? '' };
    updateNews(nextFilter);
  };

  const handleQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const nextFilter = { ...filter, query: ev.target.value };
    updateNews(nextFilter);
  };

  return (
    <Screen>
      <AppBar position="relative">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5">News</Typography>
          <TextField
            value={filter.query}
            onChange={handleQueryChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Toolbar>
      </AppBar>

      <ContentContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SourceFilter
            selectedSource={filter.sources ?? ''}
            onSourceChange={handleSourceChange}
          />
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
