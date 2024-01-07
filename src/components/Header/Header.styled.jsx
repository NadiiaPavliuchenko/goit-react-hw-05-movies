import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;
