import React, { useState } from 'react';

import PersonItem from '../PersonItem/PersonItem';
import * as Styles from './PeopleListStyles';

function PeopleList({ setModalInfo }) {
  const [people, setPeople] = useState(['a', 'b', 'c', 'd', 'e']);

  const ppl = people.map((person) => {
    return <PersonItem name={person} setModalInfo={setModalInfo} />;
  });

  return <Styles.StyledContainer>{ppl}</Styles.StyledContainer>;

  //   return (
  //     <Styles.StyledContainer>
  //       <p>No people in the pod. Click "Add New Person" to add a person.</p>
  //     </Styles.StyledContainer>
  //   );
}

export default PeopleList;
