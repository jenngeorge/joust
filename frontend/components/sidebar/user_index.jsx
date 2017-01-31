import React from 'react';
import { Link } from 'react-router';


const UserIndex = ({users}) => {

  return(
    <div className="user-index-container">
      {Object.keys(users).map(idx => (
        <li key={idx}>{users[idx].email}</li>
      ))}
    </div>
  );
};

export default UserIndex;
