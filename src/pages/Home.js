import React from 'react';
import Feed from '../sections/feed/Feed';

function Home({ setModalInfo }) {
  return (
    <div>
      <Feed setModalInfo={setModalInfo} />
    </div>
  );
}

export default Home;
