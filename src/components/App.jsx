import TreningMovie from 'Pages/TrendingMovie';
import ErrorPage from 'Pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { PATH } from 'router/Path';
import Movies from 'Pages/Movies';
import Header from './Header';
import MovieDetails from 'Pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={PATH.Home} element={<TreningMovie />} />
        <Route path={PATH.Movies} element={<Movies />} />
        <Route path={PATH.MovieDetails} element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};
