import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';
import Layout from './components/Layout/Layout';
import { fetchDragon } from './redux/dragon/dragonSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
