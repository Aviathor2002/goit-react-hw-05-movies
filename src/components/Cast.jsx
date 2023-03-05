const Cast = ({ casts }) => {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name}
            />
          )}

          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
