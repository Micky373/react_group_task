import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rocket, shallowEqual);

  return (
    <div className="my_profile">
      <h1>This is the profile display page</h1>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {
          rocketList.filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <li key={rocket.id}>
                {rocket.name}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
