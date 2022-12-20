import logo from './logo.svg';
import './App.css';
import YourLuki from './components/YourLuki';
import {Routes, Route}from 'react-router-dom';
import { useState } from 'react';
import Result from './components/Result';
function App() {
  const[term,setTerm]=useState("people");
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <YourLuki term={term} setTerm={setTerm} id={id} setId={setId}></YourLuki>
      <Routes>
        <Route path="/result/:term/:id" element={<Result/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
