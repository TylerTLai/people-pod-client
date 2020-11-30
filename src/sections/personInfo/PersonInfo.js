import React from 'react';
import axios from 'axios';

function PersonInfo() {
  const handleClick = () => {
    axios.get('/api/people').then((res) => console.log('using axios ', res.data));
  };

  return (
    <div>
      <button onClick={handleClick}>get people</button>
    </div>
  );
}

export default PersonInfo;
