import PropTypes from 'prop-types';
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
      {casts.map(({ id, profile_path, name, character }) => (
        <CastItemLi key={id}>
          <CastItemText>
            {profile_path ? (
              <CastItemImage
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
              />
            ) : (
              <CastItemImage
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
              />
            )}

            <CastItemTextP> {name}</CastItemTextP>
            <CastItemTextP>{character}</CastItemTextP>
          </CastItemText>
        </CastItemLi>
      ))}
    </CastItem>
  );
};
export default Cast;

Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
