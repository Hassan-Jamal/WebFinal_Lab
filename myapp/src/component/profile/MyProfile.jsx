import React from 'react';
import { useSelector } from 'react-redux';

import './MyProfile.scss';
import MissionProfile from './missions/MissionProfile';
import RocketProfile from './rockets/DragonProfile';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  // console.log(dragon)
  const rocketsStatus = rockets.filter((dragon) => dragon.reserved);

  return (
    <div className="profile-container">
      {/* show missions on profile page */}
      <section className="mission-container">
        <div className="title">
          My Missions
        </div>
        <MissionProfile />
      </section>

      {/* show rockets on profile page */}
      <section className="dragon-container">
        <div className="title">
          My Rockets
        </div>
        {rocketsStatus.length === 0 ? (
          <p>You have not reserved any rocket.</p>
        ) : (rocketsStatus.length > 0 && (
          <ul className="reserved-dragon-list">
            {rocketsStatus.map((dragon) => (
              <RocketProfile key={dragon.id} dragon={dragon} />
            ))}
          </ul>
        ))}
      </section>
    </div>
  );
};

export default MyProfile;
