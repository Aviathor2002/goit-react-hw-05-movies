import { NavLink } from 'react-router-dom';
import { PATH } from 'router/Path';

const Header = () => {
  return (
    <>
      <NavLink
        to={PATH.Home}
        style={({ isActive }) => {
          if (isActive) return { color: 'purple' };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={PATH.Movies}
        style={({ isActive }) => {
          if (isActive) return { color: 'purple' };
        }}
      >
        Movies
      </NavLink>
    </>
  );
};

export default Header;
