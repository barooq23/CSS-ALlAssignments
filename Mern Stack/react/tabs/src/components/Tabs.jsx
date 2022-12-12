import React, { useState } from "react";

const Tabs = () => {
  const [numTabs, setNumTabs] = useState(0);
  const [msg, setMsg] = useState("");
  const tabs = [];

  for (let i = 0; i < numTabs; i++) {
    tabs.push({ i: "Tab " + (i + 1) + " content is showing." });
  }

  const tabStyle = {
    display: "flex",

    justifyContent: "space-evenly",
  };

  return (
    <div>
      <p>
        <span style={{ marginRight: "1%" }}>Specify number of tabs</span>
        <input
          type={"number"}
          name="num-of-tabs"
          onChange={(e) => setNumTabs(e.target.valueAsNumber)}
        ></input>
      </p>
      <div style={tabStyle}>
        {tabs.map((item, i) => (
        <div>
          <button onClick={() => setMsg(item.i)}>Tab {i + 1}</button>
          <span style={{marginLeft:"20px"}}>|</span>
          </div>
        ))}
      </div>
      <hr />
      <div>{msg}</div>
    </div>
  );
};

export default Tabs;
