import { PATH } from 'router/Path';
import { Item, Nav, NavContainer, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <Item>
          <NavLinkStyled
            to={PATH.Home}
            style={({ isActive }) => {
              if (isActive) return { color: 'purple' };
            }}
          >
            Home
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled
            to={PATH.Movies}
            style={({ isActive }) => {
              if (isActive) return { color: 'purple' };
            }}
          >
            Movies
          </NavLinkStyled>
        </Item>
      </NavContainer>
    </Nav>
  );
};

export default Header;
