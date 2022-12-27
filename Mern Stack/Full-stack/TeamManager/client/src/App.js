import { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/players');
  }, [])

  return (
    <div className="App">
      <Link to={'/players'}>Manage Players</Link> | <Link to={'/status/game/1'}>Manage Player Status</Link>
      <Routes>
        <Route path='/players/*' element={ <Main /> } />
      </Routes>
    </div>
  );
}

export default App;
