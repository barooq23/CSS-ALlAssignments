import logo from './logo.svg';
import{Router} from '@reach/router';
import './App.css';
import RoutingPractice from './components/RoutingPractice';
import NumberToWord from './components/NumberToWord';
import StyleWord from './components/StyleWord';

function App() {
  return (
    <div className="App">
      <Router>
        <RoutingPractice path="/home"></RoutingPractice>
        <NumberToWord path="/:number"></NumberToWord>
        <StyleWord path="/:hello/:color/:color1"></StyleWord>
      </Router>
    </div>
  );
}

export default App;
