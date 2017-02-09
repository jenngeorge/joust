import React from 'react';
import { Link } from 'react-router';


const UserIndex = ({users}) => {

  return(
    <div className="user-index-container">
      {Object.keys(users).map(idx => (
        <li key={idx}>
          <Link to={`/users/${users[idx].id}`}>
            {users[idx].email}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default UserIndex;
