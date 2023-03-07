import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListMovie = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;

  gap: 30px;
`;

export const MovieItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 250ms;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieImg = styled.img`
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 20px;

  margin-bottom: 10px;
  margin-top: 0;
  color: #010203;
`;

export const Text = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 200;
  color: #242a2f;
`;
