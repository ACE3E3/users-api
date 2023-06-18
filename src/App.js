import AllUsers from './components/allUsers';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import ToDo from './components/ToDo';
import Gallery from './components/Gallery';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllUsers />}/>
        <Route path="/user" element={<UserProfile />}/>
        <Route path="/todo" element={<ToDo/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
