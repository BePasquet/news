import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CenterLoader } from './shared/components/center-loader';

const News = lazy(() => import('./news/screens/news'));

const NewsDetail = lazy(() => import('./news/screens/news-detail'));

export function AppRoutes() {
  return (
    <Suspense fallback={<CenterLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Navigate to="/news" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
