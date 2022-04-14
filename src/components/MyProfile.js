import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const myProfileContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rocket, shallowEqual);
  const missionLists = useSelector((state) => state.missions.mission, shallowEqual) || [];

  return (
    <div className="my_profile" style={myProfileContainerStyle}>
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
      <div>
        <h2>My missions</h2>
        <ul>
          {
            missionLists.filter((mission) => mission.reserved)
              .map((mission) => (
                <li key={mission.id}>
                  {mission.name}
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
