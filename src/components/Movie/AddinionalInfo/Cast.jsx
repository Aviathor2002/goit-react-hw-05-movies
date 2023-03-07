import {
  CastItem,
  CastItemImage,
  CastItemLi,
  CastItemText,
  CastItemTextP,
} from './Cast.styled';

const Cast = ({ casts }) => {
  return (
    <CastItem>
      {casts.map(cast => (
        <CastItemLi key={cast.id}>
          <CastItemText>
            {cast.profile_path ? (
              <CastItemImage
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <CastItemImage
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                alt={cast.name}
              />
            )}

            <CastItemTextP> {cast.name}</CastItemTextP>
            <CastItemTextP>{cast.character}</CastItemTextP>
          </CastItemText>
        </CastItemLi>
      ))}
    </CastItem>
  );
};
export default Cast;
