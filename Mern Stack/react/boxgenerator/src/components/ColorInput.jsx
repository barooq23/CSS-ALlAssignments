import React, { useState } from "react";
// import { Form, Form.Control } from 'react-bootstrap';

const ColorInput = (props) => {
  const [Color, setColor] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [value, setValue] = useState("");

  // function handleWidthChange(event) {
  //   setWidth(event.target.value);
  // }

  // function handleHeightChange(event) {
  //   setHeight(event.target.value);
  // }

  const handel = (e) => {
    e.preventDefault();
    // props.mycolor(Color);
    // props.size(height, width);
    props.mycolor(
      boxes.concat([{ color: Color, width: width, height: height }])
    );
    setColor("");
    setHeight("");
    setWidth("");
  };

  return (
    <div>
      <form
        onSubmit={handel}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          <label>
            Color:
            <input type="text" onChange={(e) => setColor(e.target.value)} value={Color} />
          </label>
        </p>
        <p>
          <label>
            Width:
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Height:
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ColorInput;
