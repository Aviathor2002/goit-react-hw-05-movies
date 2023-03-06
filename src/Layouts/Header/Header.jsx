import { PATH } from 'router/Path';
import { Nav, NavContainer, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLinkStyled
          to={PATH.Home}
          style={({ isActive }) => {
            if (isActive) return { color: 'purple' };
          }}
        >
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to={PATH.Movies}
          style={({ isActive }) => {
            if (isActive) return { color: 'purple' };
          }}
        >
          Movies
        </NavLinkStyled>
      </Nav>
    </NavContainer>
  );
};

export default Header;
