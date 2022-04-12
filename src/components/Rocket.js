import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserved } from '../redux/rockets/rockets';

const divContainerStyle = {
  padding: '1rem',
};

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    image, name, description, reserved, id,
  } = props;
  return (
    <div className="card" style={divContainerStyle}>
      <div className="imageContainer">
        <img src={image} alt="Rocket" />
      </div>
      <div className="Rocket_Info">
        <h2 className="Rocket_Name">{name}</h2>
        <div className="Tag_and_Description">
          <span className="Tag" />
          {/* tag to add */}
          <p className="Description">{description}</p>
        </div>
        <button type="button" onClick={() => dispatch(toggleReserved(id))}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        {/* button to style */}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
