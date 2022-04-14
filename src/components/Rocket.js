import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserved } from '../redux/rockets/rockets';
import styles from './Styles/Rocket.module.css';

const divContainerStyle = {
  padding: '1rem',
};

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    image, name, description, reserved, id,
  } = props;
  return (
    <div className={styles.card} style={divContainerStyle}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Rocket" />
      </div>
      <div className={styles.Rocket_Info}>
        <h2 className={styles.Rocket_Name}>{name}</h2>
        <div className={styles.Tag_and_Description}>
          <p className={styles.Description}>
            <span className={reserved ? styles.tag : styles.none}>Reserved</span>
            {description}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(toggleReserved(id))}
          className={reserved ? styles.btnReserved : styles.btnReserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
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
