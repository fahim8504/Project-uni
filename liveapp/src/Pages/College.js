import React from 'react';
import { Link } from 'react-router-dom';

function College() {
  const colleges = ['College A', 'College B', 'College C'];

  return (
    <div>
      <h2>Select Your College</h2>
      <ul>
        {colleges.map((college, index) => (
          <li key={index}>
            <Link to={`/department?college=${college}`}>{college}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default College;
