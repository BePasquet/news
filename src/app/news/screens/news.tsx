import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'src/app/core/redux/redux-hooks';

import { Error } from '@mui/icons-material';
import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import styled from 'styled-components';
import { ArticleHistory } from '../components/article-history';
import { ArticlesList } from '../components/articles-list';
import { SearchBar } from '../components/search-bar';
import { SourceFilter } from '../components/sources-filter';
import { HeadlinesFilter } from '../services/news.service';
import { getNewsForceErrorThunk, getNewsThunk } from '../state/news.state';

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

  const handleSourceChange = (sourceId: string) =>
    updateNews({ ...filter, sources: sourceId });

  const handleQueryChange = (query: string) => updateNews({ ...filter, query });

  const handleForceError = () => dispatch(getNewsForceErrorThunk());

  return (
    <Screen>
      <AppBar position="relative">
        <NewsToolbar>
          <Typography variant="h5">News</Typography>
          <ToolbarActionsContainer>
            <SearchBar
              initialValue={filter.query}
              onChange={handleQueryChange}
              debounceTime={500}
            />

            <div style={{ marginLeft: '10px' }}>
              <ArticleHistory />
            </div>

            <Tooltip title="Force error">
              <IconButton onClick={handleForceError}>
                <Error sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </ToolbarActionsContainer>
        </NewsToolbar>
      </AppBar>

      <Container>
        <SourcesContainer>
          <SourceFilter
            selectedSource={filter.sources ?? ''}
            onSourceChange={handleSourceChange}
          />
        </SourcesContainer>

        <ArticleListContainer>
          <ArticlesList />
        </ArticleListContainer>
      </Container>
    </Screen>
  );
}

const NewsToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Container = styled(FlexColumnContainer)`
  @media screen and (min-width: 1280px) {
    width: 1280px;
    align-self: center;
  }
`;

const ArticleListContainer = styled(FlexColumnContainer)`
  margin-top: 20px;
`;

const SourcesContainer = styled.div`
  padding: 10px;
`;

const ToolbarActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default News;
