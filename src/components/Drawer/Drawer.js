import React from 'react';

import * as Styles from './DrawerStyles';
import FeatherIcon from 'feather-icons-react';

function Drawer() {
  return (
    <Styles.StyledContainer>
      <Styles.StyledGroupHeader>
        <Styles.StyledGroupTitle>Groups</Styles.StyledGroupTitle>
        <div>
          <FeatherIcon
            size={18}
            icon="plus-circle"
            style={Styles.featherIconPlusCicleStyles}
          />
        </div>
      </Styles.StyledGroupHeader>
      <Styles.StyledLink>
        <FeatherIcon
          icon="users"
          size={16}
          style={Styles.featherIconUsersStyles}
        />
        Everyone
      </Styles.StyledLink>
      <Styles.StyledLink>
        <FeatherIcon
          icon="heart"
          size={16}
          style={Styles.featherIconHeartStyles}
        />
        Favorite
      </Styles.StyledLink>
    </Styles.StyledContainer>
  );
}

export default Drawer;
