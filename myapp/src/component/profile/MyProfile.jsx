import React from 'react';
import { useSelector } from 'react-redux';

import './MyProfile.scss';
import MissionProfile from './missions/MissionProfile';
import DragonProfile from './dragon/DragonProfile';

const MyProfile = () => {
  const { dragon } = useSelector((store) => store.dragon);
  // console.log(dragon)
  const dragonStatus = dragon.filter((dragon) => dragon.reserved);

  return (
    <div className="profile-container">
      {/* show missions on profile page */}
      <section className="mission-container">
        <div className="title">
          My Missions
        </div>
        <MissionProfile />
      </section>

      {/* show dragon on profile page */}
      <section className="dragon-container">
        <div className="title">
          My Dragons
        </div>
        {dragonStatus.length === 0 ? (
          <p>You have not reserved any dragon.</p>
        ) : (dragonStatus.length > 0 && (
          <ul className="reserved-dragon-list">
            {dragonStatus.map((dragon) => (
              <DragonProfile key={dragon.id} dragon={dragon} />
            ))}
          </ul>
        ))}
      </section>
    </div>
  );
};

export default MyProfile;
