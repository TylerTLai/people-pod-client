import React from 'react';
import FeatherIcons from 'feather-icons-react';

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
        <FeatherIcons icon="search" size={16} />
      </StyledButton>
    </Styles.StyledForm>
  );
}

export default FilterBar;
