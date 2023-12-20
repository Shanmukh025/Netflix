import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Browse from './components/Browse';
import Browse2 from './components/Browse2';
import Browse3 from './components/Browse3';
import Browse4 from './components/Browse4';
import LandingPage from './components/LandingPage';
import Profiles from './components/Profiles';
import Signin from './components/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile1" element={<Browse />} />
        <Route path="/profile2" element={<Browse2 />} />
        <Route path="/profile3" element={<Browse3 />} />
        <Route path="/profile4" element={<Browse4 />} />
      </Routes>
    </Router>
  );
}

export default App;
