import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, StyledHeader, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navbar>
          <li>
            <StyledNavLink as={NavLink} to="/">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink as={NavLink} to="/movies">
              Movies
            </StyledNavLink>
          </li>
        </Navbar>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
