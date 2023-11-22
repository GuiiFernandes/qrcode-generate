import { NavLink } from 'react-router-dom';

import { HeaderStyled, Nav } from './styled';

function Header() {
  return (
    <HeaderStyled>
      <Nav>
        <NavLink to="/">Gerar</NavLink>
        <NavLink to="/list">Lista</NavLink>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
