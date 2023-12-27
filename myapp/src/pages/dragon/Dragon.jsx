import { useSelector } from 'react-redux';

import DragonItem from '../../components/dragon/DragonItem';
import './Dragon.scss';

const Dragon = () => {
  const { dragon } = useSelector((store) => store.dragon);

  if (!dragon) {
    return <div>Dragon Loading...</div>;
  }

  return (
    <div className="all-dragon">
      {dragon.length > 0 ? (
        <ul className="each-dragon">
          {dragon.map((dragonItem) => (
            <DragonItem dragonItem={dragonItem} key={dragonItem.id} />
          ))}
        </ul>
      ) : 'No Dragons' }
    </div>
  );
};

export default Dragon;
