import React from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../store/actions/personActions';

import FilterBar from './FilterBar';
import * as Styles from './NavbarStyles';

function Navbar({ getPeople }) {
  return (
    <Styles.StyledContainer>
      <Styles.StyledLink to="/" onClick={getPeople}>
        <Styles.StyledLogo>
          <h2>PeoplePod</h2>
        </Styles.StyledLogo>
      </Styles.StyledLink>
      <FilterBar />
    </Styles.StyledContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
