import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './components/Login';
import Layout from './components/common/Layout';
import UserContext from './context/UserContext';
import All_files from './pages/all_files';
import Ebooks from './pages/ebooks';
import Favourites from './pages/favourites';
import Settings from './pages/settings';

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);
  console.log(loggedIn);
  return (
    <UserContext.Provider value={{ user, setUser, loggedIn }}>
      <Router>
        {!loggedIn ? (
          <Login />
        ) : (
          <Layout>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/all' element={<All_files />} />
              <Route path='/ebooks' element={<Ebooks />} />
              <Route path='/favourites' element={<Favourites />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Layout>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
