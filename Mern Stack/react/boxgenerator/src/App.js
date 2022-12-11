import logo from './logo.svg';
import './App.css';
import ColorInput from './components/ColorInput';
import BoxColor from './components/BoxColor';
import { useState } from 'react';


function App() {
  const [Paint, setPaint] = useState([]);
  // const [height, setHeight] = useState(0);
  // const [width, setWidth] = useState(0);
  // const [boxes, setBoxes] = useState([]);
  const Generate =(box)=>{
    setPaint(Paint.concat(box));
    // setHeight(height.concat(hei));
    // setWidth(width.concat(wid));
    // setBoxes()
  }
  return (
    <div className="App">
      <ColorInput mycolor={Generate}/>
      <hr></hr>
      <BoxColor laith={Paint}  />
      
    </div>
  );
}

export default App;
