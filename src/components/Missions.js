import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsReserved } from '../redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
};

const joinButtonStyle = {
  border: '1px solid #808080',
  backgroundColor: 'white',
  cursor: 'pointer',
  marginLeft: '0.5rem',
  padding: '0.5rem',
  fontSize: '1rem',
  color: '#808080',
};

const leaveButtonStyle = {
  border: '1px solid rgb(255,0,0)',
  backgroundColor: 'white',
  color: 'red',
  cursor: 'pointer',
  marginLeft: '0.5rem',
  padding: '0.5rem',
  fontSize: '1rem',
};

const membershipStyle = {
  border: 'none',
  backgroundColor: '#2d8f8f',
  color: '#ffffff',
  textTransform: 'uppercase',
};

const notMemberStyle = {
  border: 'none',
  backgroundColor: '#a9a9a9',
  color: '#ffffff',
  textTransform: 'uppercase',
};

const tableStyle = {
  margin: '1rem 1rem',
};

const descriptionColumnStyle = {
  width: '60%',
};

const missionStatusStyle = {
  padding: '0.1rem',
};

const missionNameStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const Missions = () => {
  const dispatch = useDispatch();
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;
  return (
    <div className="mission_container" style={missionsContainerStyle}>
      {(loadingStatus === false) ? (
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th className="table_header">Missions</th>
              <th className="table_header">Description</th>
              <th className="table_header">Status</th>
            </tr>
            {missionLists.missions.map((missions) => (
              <tr key={missions.id} className="mission_list">
                <td style={missionNameStyle}>{missions.name}</td>
                <td style={descriptionColumnStyle}>{missions.descriptions}</td>
                <td style={missionStatusStyle}>
                  <button type="button" style={missions.reserved ? membershipStyle : notMemberStyle}>{missions.reserved ? 'Active member' : 'Not a member'}</button>
                  <button type="button" style={missions.reserved ? leaveButtonStyle : joinButtonStyle} onClick={() => dispatch(toggleMissionsReserved(missions.id))}>{missions.reserved ? 'Leave Mission' : 'Join Mission'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h1>***Loading***</h1>}
    </div>
  );
};

export default Missions;
