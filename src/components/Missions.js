import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsList } from '../redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
};

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsList());
  }, []);
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;

  return (
    <div className="mission_container" style={missionsContainerStyle}>
      {(loadingStatus === false) ? (
        <ul className="mission_list">
          {missionLists.missions.map((missions) => (
            <li key={missions.id}>{`id:${missions.id} and name:${missions.name}`}</li>
          ))}
        </ul>
      ) : <h1>***Loading***</h1>}
    </div>
  );
};

export default Missions;
