import logo from './logo.svg';
import './App.css';
import ToDo from './components/Todo';
import List from './components/List';
import { useState } from 'react';

function App() {
  const[Todo,setTodo]=useState([]);

  const ListVeiw =(plans)=>{
    setTodo(Todo.concat({name: plans, completed: false}));
  }
  return (
    <div className="App">
      <ToDo mylist={ListVeiw}/>
      <hr></hr>
      <List myplan={Todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
