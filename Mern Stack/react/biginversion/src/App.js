import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="laith" lastName="barq" age={23} hair="blue" />
      <PersonCard firstName="zaki" lastName="nahhas" age={25} hair="yellow" />
      <PersonCard firstName="izz" lastName="mallakh" age={23} hair="black" />
      <PersonCard firstName="jamal" lastName="harb" age={30} hair="shayeb" />
    </div>
  );
}

export default App;
