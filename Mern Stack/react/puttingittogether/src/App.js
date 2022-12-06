import logo from './logo.svg';
import './App.css';
import PutTogu from './components/PutTogu';
function App() {
  return (
    <div className="App">
      <PutTogu firstName="laith" lastName="barq" age={23} hair="blue" />
      <PutTogu firstName="zaki" lastName="nahhas" age={25} hair="yellow" />
      <PutTogu firstName="izz" lastName="mallakh" age={23} hair="black" />
      <PutTogu firstName="jamal" lastName="harb" age={30} hair="shayeb" />
    </div>
  );
}

export default App;
