import React from 'react';
import FilterBar from './FilterBar';
import * as Styles from './NavbarStyles';

function Navbar() {
  return (
    <Styles.StyledContainer>
      <Styles.StyledLink>
        <Styles.StyledLogo>
          <h2>PeoplePod</h2>
        </Styles.StyledLogo>
      </Styles.StyledLink>
      <FilterBar />
    </Styles.StyledContainer>
  );
}

export default Navbar;
