import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const News = lazy(() => import('./news/components/news'));

const NewsDetail = lazy(() => import('./news/components/news-detail'));

export function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
