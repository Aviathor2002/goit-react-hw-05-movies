import { getMoviesQuery } from 'api/postAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');

  useEffect(() => {
    setStatus('loading');
    if (searchWord)
      getMoviesQuery(searchWord)
        .then(({ data }) => {
          setMovies(data.results);
          setStatus('fulfilled');
        })
        .catch(setStatus('error'))
        .finally(setStatus('idle'));
  }, [searchWord]);

  const handleFormSubmit = value => {
    setSearchParams({ searchWord: value });
  };

  if (status === 'idle') {
    return <h1> Loading...</h1>;
  }

  if (status === 'error') {
    return <h1> Smth went wrong. Eror 404</h1>;
  }

  return (
    <div>
      <h1>Search movie</h1>
      <SearchForm onSubmit={handleFormSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;

// import { getMoviesQuery } from 'api/postAPI';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import MovieList from './MovieList';
// import SearchForm from './SearchForm';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchWord = searchParams.get('searchWord');

//   useEffect(() => {
//     setStatus('loading');
//     if (searchWord) {
//       const fetchMovie = async () => {
//         try {
//           const { data } = await getMoviesQuery(searchWord);
//           setMovies(data.results);
//           setStatus('fulfilled');
//         } catch (error) {
//           setStatus('error');
//         } finally {
//           setStatus('idle');
//         }
//       };
//       fetchMovie();
//     }
//   }, [searchWord]);

//   const handleFormSubmit = value => {
//     setSearchParams(value);
//   };

//   if (status === 'idle') {
//     return <h1> Loading...</h1>;
//   }

//   if (status === 'error') {
//     return <h1> Smth went wrong. Eror 404</h1>;
//   }

//   return (
//     <div>
//       <h1>Search movie</h1>
//       <SearchForm onSubmit={handleFormSubmit} />
//       <MovieList movies={movies} />
//     </div>
//   );
// };

// export default Movies;
