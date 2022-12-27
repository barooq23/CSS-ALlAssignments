import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorList from './components/AuthorList';
import CreateParent from './components/CreateParent';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<AuthorList />} />
        <Route path='/authors/new' element={<CreateParent />} />
        <Route path='/authors/edit/:id' element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
