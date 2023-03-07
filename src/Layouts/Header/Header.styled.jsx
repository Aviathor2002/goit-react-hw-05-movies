import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;

  list-style: none;
`;

export const Nav = styled.nav`
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  margin-top: auto;

  justify-content: center;
  flex-direction: column;

  width: 125px;
  height: 50px;
  transition: background-position-x 0.9s linear;
  text-align: center;
  &:hover {
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==');
    animation: line 1s;
  }

  &:hover a {
    color: #d94f5c;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 22px;
  color: #777;
  text-decoration: none;
  transition: all 0.45s;

  &.active {
    color: #d94f5c;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;