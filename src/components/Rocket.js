import React from 'react';
import PropTypes from 'prop-types';

const divContainerStyle = {
  padding: '1rem',
};

const Rocket = (props) => {
  const {
    image, name, description,
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
        <button type="button">Reserve</button>
        {/* button to add */}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
