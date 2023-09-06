import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'src/app/core/redux/redux-hooks';

import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import { Screen } from 'src/app/shared/components/screen';
import styled from 'styled-components';
import { ArticlesList } from '../components/articles-list';
import { SearchBar } from '../components/search-bar';
import { SourceFilter } from '../components/sources-filter';
import { HeadlinesFilter } from '../services/news.service';
import { getNewsThunk } from '../state/news.state';

type NewsFilter = Required<Omit<HeadlinesFilter, 'country'>>;

export function News() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<NewsFilter>({
    query: '',
    sources: '',
  });

  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);

  const updateNews = (newFilter: NewsFilter) => {
    setFilter(newFilter);
    dispatch(getNewsThunk(newFilter));
  };

  const handleSourceChange = (sourceId: string) => {
    updateNews({ ...filter, sources: sourceId });
  };

  const handleQueryChange = (query: string) => {
    updateNews({ ...filter, query });
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
          <SearchBar
            initialValue={filter.query}
            onChange={handleQueryChange}
            debounceTime={300}
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
