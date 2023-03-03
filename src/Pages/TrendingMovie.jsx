import { getTrendingMovies } from 'api/postAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const TreningMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(({ data }) => {
      console.log(data.results);
      setTrendingMovies(data.results);
    });
  }, []);
  return (
    <>
      <h1>Hello i`m a trending movie page</h1>
      {trendingMovies.map(movie => {
        return <div key={movie.id}> {movie.title}</div>;
      })}
    </>
  );
};

export default TreningMovie;
