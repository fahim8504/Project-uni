import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Department() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const college = params.get('college');

  const departments = ['Department A', 'Department B', 'Department C'];
  const year = '2024'; // For example purposes, static year is used.

  return (
    <div>
      <h2>Select Your Department in {college}</h2>
      <ul>
        {departments.map((department, index) => (
          <li key={index}>
            <Link to={`/chatroom/${college}/${department}/${year}`}>
              {department}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Department;
