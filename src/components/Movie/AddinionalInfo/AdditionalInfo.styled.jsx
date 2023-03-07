import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 10px;
  border-bottom: 4px double #3da9fc;
  border-top: 4px double #3da9fc;
`;

export const LinkItemCast = styled(NavLink)`
  text-decoration: none;
  color: #094067;
  margin-right: 100px;
  font-size: 1.7rem;
  font-weight: bold;
  &.active {
    color: #d94f5c;
  }
`;

export const LinkItemReview = styled(NavLink)`
  text-decoration: none;
  color: #094067;
  font-size: 1.9rem;
  font-weight: bold;
  &.active {
    color: #d94f5c;
  }
`;
