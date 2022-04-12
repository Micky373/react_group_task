import React from 'react';

const Rocket = (props) => {
  const {
    image, name, description, reserved, id,
  } = props;
  return (
    <div className="card">
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
        <button />
        {/* button to add */}
      </div>
    </div>
  );
};

export default Rocket;
