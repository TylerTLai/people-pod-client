import React from 'react';
import { Heart, Users, PlusCircle } from 'react-feather';

import * as Styles from './DrawerStyles';
import { StyledDivider } from '../../styles/Divider/Divider';
import theme from '../../styles/theme';

const { colors } = theme;

function Drawer() {
  return (
    <Styles.StyledContainer>
      <Styles.StyledGroupHeader>
        <Styles.StyledGroupTitle>Groups</Styles.StyledGroupTitle>
        <div>
          <PlusCircle size={18} style={Styles.featherIconPlusCicleStyles} />
        </div>
      </Styles.StyledGroupHeader>
      <Styles.StyledLink>
        <Users size={16} style={Styles.featherIconUsersStyles} />
        Everyone
      </Styles.StyledLink>
      <Styles.StyledLink>
        <Heart size={16} style={Styles.featherIconHeartStyles} />
        Favorite
      </Styles.StyledLink>
      <StyledDivider
        margin="1rem 0"
        backgroundColor={colors.gray}
        color={colors.gray}
      />
    </Styles.StyledContainer>
  );
}

export default Drawer;
