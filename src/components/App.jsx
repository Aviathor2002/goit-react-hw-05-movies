import { Routes, Route } from 'react-router-dom';
import { PATH } from 'router/Path';
import { MainLayout } from 'Layouts/MainLayout';
import { lazy } from 'react';

const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const ErrorPage = lazy(() => import('Pages/ErrorPage'));
const Movies = lazy(() => import('Pages/Movies'));
const TreningMovie = lazy(() => import('Pages/TrendingMovie'));
const CastInfo = lazy(() => import('./Movie/AddinionalInfo/CastInfo'));
const ReviewsInfo = lazy(() => import('./Movie/AddinionalInfo/ReviewsInfo'));

export const App = () => {
  return (
    <Routes>
      <Route path={PATH.Home} element={<MainLayout />}>
        <Route index element={<TreningMovie />} />
        <Route path={PATH.Movies} element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastInfo />} />
          <Route path="reviews" element={<ReviewsInfo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
