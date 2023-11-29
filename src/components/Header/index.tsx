import { NavLink } from 'react-router-dom';

import { HeaderStyled, Nav } from './styled';

function Header() {
  return (
    <HeaderStyled>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/lista">Lista</NavLink>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
