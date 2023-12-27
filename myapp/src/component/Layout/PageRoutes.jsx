import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Dragon from '../../pages/dragon/Dragon';
import Missions from '../missions/Missions';
import MyProfile from '../profile/MyProfile';

const PagesRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/Space-Travelers-Hub/" element={<Dragon />} />
      <Route path="/Space-Travelers-Hub/missions" element={<Missions />} />
      <Route path="/Space-Travelers-Hub/profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default PagesRoutes;
