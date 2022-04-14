import axios from 'axios';

// Actions
const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';
const TOGGLE_RESERVED = 'TOGGLE_RESERVED';

// Initial state

const missions = [];

// Action creaters

export const fetchMissionsList = () => async (dispatch) => {
  dispatch({
    type: FETCH_MISSIONS_REQUEST,
  });
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = response.data;
    const payload = missions.map((missions) => ({
      id: missions.mission_id,
      name: missions.mission_name,
      descriptions: missions.description,
      reserved: false,
    }));
    dispatch({
      type: FETCH_MISSIONS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MISSIONS_FAILURE,
      payload: error.message,
    });
  }
};

export const toggleMissionsReserved = (id) => (
  {
    type: TOGGLE_RESERVED,
    id,
  }
);

// Reducers

const missionsReducer = (state = missions, action) => {
  const newState = { ...state };
  switch (action.type) {
    case FETCH_MISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
        loading: false,
      };
    case FETCH_MISSIONS_FAILURE:
      return {
        ...state,
        missions: [],
        loading: false,
        error: action.payload,
      };
    case TOGGLE_RESERVED:
      for (let i = 0; i < newState.missions.length; i += 1) {
        if (newState.missions[i].id === action.id) {
          newState.missions[i].reserved = !newState.missions[i].reserved;
        }
      }
      return newState;
    default: return state;
  }
};

export default missionsReducer;
