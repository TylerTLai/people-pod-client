import React from 'react';
import { Search } from 'react-feather';

import * as Styles from './FilterBarStyles';
import { StyledButton } from '../../styles/Button/Button';

function FilterBar() {
  return (
    <Styles.StyledForm>
      <Styles.StyledFilter type="text" placeholder="Search for a person" />
      <StyledButton
        type="submit"
        style={{
          padding: '0 .8rem',
          borderLeft: 'none',
          borderRadius: '3px 3px 3px 0',
        }}
      >
        <Search size={16} />
      </StyledButton>
    </Styles.StyledForm>
  );
}

export default FilterBar;
