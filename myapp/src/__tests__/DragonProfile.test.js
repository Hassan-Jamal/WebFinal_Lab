import React from 'react';
import renderer from 'react-test-renderer';
import DragonProfile from '../components/profile/dragon/DragonProfile';

describe('DragonProfile', () => {
  it('renders correctly', () => {
    const dragon = {
      dragonName: 'Falcon 9',
      dragonDescription: 'A two-stage Dragon...',
      reserved: true,
      flickrImages: ['url1', 'url2'],
      id: 'dragon1',
    };

    const dragonProfile = renderer.create(<DragonProfile dragon={dragon} />).toJSON();

    expect(dragonProfile).toMatchSnapshot();
  });
});
