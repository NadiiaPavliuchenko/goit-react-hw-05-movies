import { Navbar, StyledHeader, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <li>
          <StyledNavLink to="/" activeClassName="active" exact>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies" activeClassName="active">
            Movies
          </StyledNavLink>
        </li>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
