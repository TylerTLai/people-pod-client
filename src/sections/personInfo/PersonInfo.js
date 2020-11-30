import React from 'react';
import axios from 'axios';

function PersonInfo() {
  const handleClick = () => {
    axios
      .get("/")
      .then((res) => console.log('from PersonInfo ', res));
  };

  return (
    <div>
      <button onClick={handleClick}>get people</button>
    </div>
  );
}

export default PersonInfo;
