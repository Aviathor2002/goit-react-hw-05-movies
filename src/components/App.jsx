import TreningMovie from 'Pages/TrendingMovie';
import ErrorPage from 'Pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { PATH } from 'router/Path';
import Movies from 'Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';
import { MainLayout } from 'Layouts/MainLayout';

import { Rewies } from './Rewies';
import { CastInfo } from './CastInfo';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.Home} element={<MainLayout />}>
          <Route index element={<TreningMovie />} />
          <Route path={PATH.Movies} element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastInfo />} />
            <Route path="reviews" element={<Rewies />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
