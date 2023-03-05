import { useEffect } from 'react';
import SearchForm from './SearchForm';

const Movies = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Search movie</h1>
      <SearchForm />
    </div>
  );
};

export default Movies;
