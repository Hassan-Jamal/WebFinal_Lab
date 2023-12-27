import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './DragonItem.scss';
import { cancelReserved, reserveDragon } from '../../redux/dragon/dragonSlice';

const DragonItem = ({ DragonItem }) => {
  const dispatch = useDispatch();

  const handleReseveDragon = (id) => {
    dispatch(reserveDragon(id));
  };

  const handleCancelReserve = (id) => {
    dispatch(cancelReserved(id));
  };

  if (!DragonItem) {
    return (
      <div>No Dragon</div>
    );
  }

  return (
    <div className="dragon-container">
      <img src={dragonItem.flickrImages[0]} alt="Dragon" className="dragon-image" />
      <div className="dragon-info">
        <div className="dragon-title">{dragonItem.dragonName}</div>
        <div className="dragon-description">
          {DragonItem?.reserved && <button type="button" className="reserved">reserved</button> }
          {DragonItem.dragonDescription}
        </div>
        {DragonItem?.reserved
          ? (
            <button type="button" className="cancel-reservation" onClick={() => handleCancelReserve(DragonItem.id)}>
              Cancel Reservation
            </button>
          )
          : (
            <button type="button" className="reserve-button" onClick={() => handleReseveDragon(DragonItem.id)}>
              Reserve Dragon
            </button>
          )}
      </div>
    </div>
  );
};

DragonItem.propTypes = {
  DragonItem: PropTypes.shape({
    dragonName: PropTypes.string,
    dragonDescription: PropTypes.string,
    reserved: PropTypes.bool,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
};

export default DragonItem;
