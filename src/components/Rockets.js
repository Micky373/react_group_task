import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocket, shallowEqual);

  return (
    <div>
      {rocketList.map((rocket) => (
        <Rocket
          image={rocket.images[0]}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
          id={rocket.id}
          key={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
