import TreningMovie from 'Pages/TrendingMovie';
import ErrorPage from 'Pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { PATH } from 'router/Path';
import SearchMovie from 'Pages/SearchMovie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.TrendingMovie} element={<TreningMovie />} />
        <Route path={PATH.SearchMovie} element={<SearchMovie />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};
