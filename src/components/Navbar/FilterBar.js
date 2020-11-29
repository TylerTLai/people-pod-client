import React from 'react'

import * as Styles from './FilterBarStyles';

function FilterBar() {
    return (
        <Styles.StyledForm>
            <Styles.StyledFilter type='text' placeholder='Search for a person' />
        </Styles.StyledForm>
    )
}

export default FilterBar
