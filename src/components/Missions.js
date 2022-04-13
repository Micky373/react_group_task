import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsReserved } from '../redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
};

const joinButtonStyle = {
  marginLeft: '3rem',
  cursor: 'pointer',
};

const leaveButtonStyle = {
  border: '1px solid rgb(255,0,0)',
  backgroundColor: 'white',
  color: 'red',
  marginLeft: '3rem',
  cursor: 'pointer',
};

const membershipStyle = {
  backgroundColor: '#00ffff',
  color: '#ffffff',
  marginRight: '2rem',
};

const notMemberStyle = {
  backgroundColor: '#a9a9a9',
  color: '#ffffff',
  marginRight: '2rem',
};

const listStyle = {
  margin: '1rem 1rem',
};

const Missions = () => {
  const dispatch = useDispatch();
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;
  return (
    <div className="mission_container" style={missionsContainerStyle}>
      {(loadingStatus === false) ? (
        <ul className="mission_list">
          {missionLists.missions.map((missions) => (
            <li key={missions.id} style={listStyle}>
              <button type="button" style={missions.reserved ? membershipStyle : notMemberStyle}>{missions.reserved ? 'Active member' : 'Not a member'}</button>
              {`id:${missions.id} and name:${missions.name}`}
              <button type="button" style={missions.reserved ? leaveButtonStyle : joinButtonStyle} onClick={() => dispatch(toggleMissionsReserved(missions.id))}>{missions.reserved ? 'Leave Mission' : 'Join Mission'}</button>
            </li>
          ))}
        </ul>
      ) : <h1>***Loading***</h1>}
    </div>
  );
};

export default Missions;
