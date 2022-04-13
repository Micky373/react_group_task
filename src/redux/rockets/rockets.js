const url = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ROCKETS = 'react_group_task/rockets/FETCH_ROCKETS';
const TOGGLE_RESERVED = 'react_group_task/rockets/TOGGLE_RESERVED';

export default function rocketReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.data.map((rocket) => {
        const {
          id, rocket_name: name, rocket_type: type, flickr_images: images, description,
        } = rocket;
        return {
          id, name, type, images, description, reserved: false,
        };
      });
    case TOGGLE_RESERVED:
      return state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: !rocket.reserved };
        } return rocket;
      });
    default:
      return state;
  }
}

export function toggleReserved(id) {
  console.log(id);
  return { type: TOGGLE_RESERVED, id };
}

export function getRocketList() {
  return async (dispatch) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_ROCKETS, data });
      });
  };
}
