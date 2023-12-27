import PropTypes from 'prop-types';

// import './dragonProfile.scss';

const DragonProfile = ({ dragon }) => (
  <li className="Dragon-reserved">
    {dragon.dragonName}
  </li>
);

DragonProfile.propTypes = {
  dragon: PropTypes.shape({
    dragonName: PropTypes.string,
    dragonDescription: PropTypes.string,
    reserved: PropTypes.bool,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
};

export default DragonProfile;
