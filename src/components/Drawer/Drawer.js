import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Heart, Users, PlusCircle } from 'react-feather';

import * as Styles from './DrawerStyles';
import { getGroups, getGroup } from '../../store/actions/groupActions';
import { getPeople } from '../../store/actions/personActions';
import { StyledDivider } from '../../styles/Divider/Divider';
import theme from '../../styles/theme';

const { colors } = theme;

function Drawer({ getGroups, groups, getGroup, getPeople, setModalInfo }) {
  useEffect(() => {
    getGroups();
  }, []);

  const showAddGroupModal = () => {
    setModalInfo((prevState) => ({
      show: true,
      modal: 'AddGroup',
    }));
  };

  // Make Links from groups
  // const drawerLinks = groups.map((groupObj) => {
  //   const groupSlug = groupObj.groupName.toLowerCase().replace(/\s/g, '');

  //   const content =
  //     groupObj.groupName === 'Favorite' ? null : (
  //       <Styles.StyledLink
  //         to={'/group/' + groupSlug}
  //         key={groupObj._id}
  //         onClick={() => getGroup(groupObj)}
  //       >
  //         <Users size={16} style={Styles.featherIconUsersStyles} />
  //         {groupObj.groupName}
  //       </Styles.StyledLink>
  //     );
  //   return content;
  // });

  return (
    <Styles.StyledContainer>
      <Styles.StyledGroupHeader>
        <div>
          <Styles.StyledGroupTitle>Groups</Styles.StyledGroupTitle>
        </div>
        <div>
          <PlusCircle
            size={18}
            style={Styles.featherIconPlusCicleStyles}
            onClick={showAddGroupModal}
          />
        </div>
      </Styles.StyledGroupHeader>
      <Styles.StyledLink to="/group/everyone" onClick={getPeople}>
        <Users size={16} style={Styles.featherIconUsersStyles} />
        Everyone
      </Styles.StyledLink>
      <Styles.StyledLink
        to="/group/favoirte"
        onClick={() => getGroup('favorite')}
      >
        <Heart size={16} style={Styles.featherIconHeartStyles} />
        Favorite
      </Styles.StyledLink>
      <StyledDivider
        margin="1rem 0"
        backgroundColor={colors.gray}
        color={colors.gray}
      />
      <p>drawerLinks</p>
    </Styles.StyledContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    groups: state.group.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),
    getGroups: () => dispatch(getGroups()),
    getGroup: (clickedGroup) => dispatch(getGroup(clickedGroup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
