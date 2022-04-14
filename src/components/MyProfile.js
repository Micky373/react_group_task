import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const myProfileContainerStyle = {
  display: 'flex',
  gap: '5rem',
  justifyContent: 'center',
  padding: '2rem',
};

const profileListStyle = {
  border: '1px solid #bdb4b4',
  margin: '0',
  borderBottom: '0',
  padding: '0',
  borderRadius: '10px 10px 0 0',
  textAlign: 'center',
};

const reservationStyle = {
  borderBottom: '1px solid #bdb4b4',
  fontSize: '1.5rem',
  width: '20rem',
};

const headerStyle = {
  fontSize: '3rem',
  textAlign: 'center',
};

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rocket, shallowEqual);
  const missionLists = useSelector((state) => state.missions.missions, shallowEqual);

  return (
    <div className="my_profile" style={myProfileContainerStyle}>
      {
        (missionLists === undefined || rocketList === undefined)
          ? (<h1 style={headerStyle}>***Loading***</h1>) : (
            <>
              <div>
                <h1 style={headerStyle}>My Rockets</h1>
                <ul style={profileListStyle}>
                  {
                    rocketList.filter((rocket) => rocket.reserved)
                      .map((rocket) => (
                        <li key={rocket.id} style={reservationStyle}>
                          {rocket.name}
                        </li>
                      ))
                  }
                </ul>
              </div>
              <div>
                <h1 style={headerStyle}>My missions</h1>
                <ul style={profileListStyle}>
                  {
                    missionLists.filter((mission) => mission.reserved)
                      .map((mission) => (
                        <li key={mission.id} style={reservationStyle}>
                          {mission.name}
                        </li>
                      ))
                  }
                </ul>
              </div>
            </>
          )
      }
    </div>
  );
};

export default MyProfile;
