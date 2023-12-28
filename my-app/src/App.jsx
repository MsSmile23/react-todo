import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Protected from './components/Protected/Protected.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Main from './components/Main/Main.jsx';
import fakeAuth from './utils/fakeAuth.js';

function App() {
  const navigate = useNavigate();
  const userJwtInLocalStorage = localStorage.getItem('jwt');
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    if (userJwtInLocalStorage) {
      fakeAuth.checkValidityUser(userJwtInLocalStorage)
        .then(data => {
          if (data.token) {
            setLoggedIn(true);

            navigate("/");
          }
        })
        .catch(err => console.log(err));
    }
  }, [])

  const handleSignout = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate('/signin');
  }

  return (
    <Routes>
      <Route
        path='/'
        element={<Protected
          element={Main}
          onSignout={handleSignout}
          loggedIn={loggedIn}
        />}
      />

      <Route
        path='/signin'
        element={
          <Login
            navigate={navigate}
            setCurrentUser={setLoggedIn}
          />
        }
      />

      <Route
        path='/signup'
        element={
          <Register
            navigate={navigate}
            setCurrentUser={setLoggedIn}
          />
        }
      />

    </Routes>
  );
}

export default App;
