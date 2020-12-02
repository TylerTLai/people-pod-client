import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { getPeople } from '../../store/actions/personActions';
import PersonItem from '../PersonItem/PersonItem';
import * as Styles from './PeopleListStyles';

function PeopleList({
  getPeople,
  group,
  people,
  favorite,
  person,
  searchTerm,
  setModalInfo,
}) {
  const getPeopleBasedOnGroup = useCallback(() => {
    if (group === null || group === undefined) {
      return getPeople();
    } else if (group === 'favorite') {
      return getPeople('favorite');
    } else {
      return getPeople(group._id);
    }
  }, [group, people, person, favorite]);

  useEffect(() => {
    getPeopleBasedOnGroup();
  }, [group, person, favorite]);

  // console.log('from peoplelist ', people);

  const filteredPeople = people.filter((person) => {
    return person.fName.indexOf(searchTerm.toLowerCase()) !== -1;
  });

  if (filteredPeople.length > 0) {
    const listOfPeople = filteredPeople.map((person) => {
      return (
        <PersonItem
          person={person}
          key={person._id}
          setModalInfo={setModalInfo}
        />
      );
    });

    return <Styles.StyledContainer>{listOfPeople}</Styles.StyledContainer>;
  } else {
    return (
      <Styles.StyledContainer>
        <p>No people in the pod. Click "Add New Person" to add a person.</p>
      </Styles.StyledContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchTerm, people, person, favorite } = state.people;

  return {
    favorite,
    person,
    people,
    group: state.group.group,
    searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (groupId) => dispatch(getPeople(groupId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
