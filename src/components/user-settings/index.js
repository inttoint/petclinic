import React from 'react';
import { connect } from 'react-redux';
import { signOutUserRequest } from '../../redux/ac';

const UserSettings = ({ signOutUserRequest }) => {
  return (
    <div>
      <button className="red-btn" onClick={signOutUserRequest}>
        Выйти
      </button>
    </div>
  );
};

export default connect(null, { signOutUserRequest })(UserSettings);
