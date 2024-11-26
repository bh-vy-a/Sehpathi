import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindPartners from './pages/FindPartners';
import StudyGroups from './pages/StudyGroups';
import Resources from './pages/Resources';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-partners" element={<FindPartners />} />
          <Route path="/study-groups" element={<StudyGroups />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;