import React from 'react';
import { connect } from 'react-redux';
import { filterPeople } from '../../store/actions/personActions';

import * as Styles from './FilterBarStyles';

function FilterBar({ filterPeople }) {
  const handleChange = (e) => {
    const term = e.target.value;
    filterPeople(term);
  };

  return (
    <Styles.StyledForm>
      <Styles.StyledFilter
        type="text"
        placeholder="Find a person..."
        onChange={handleChange}
      />
    </Styles.StyledForm>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterPeople: (term) => dispatch(filterPeople(term)),
  };
};

export default connect(null, mapDispatchToProps)(FilterBar);
