import React, { useState } from "react";
    
const btnStyle = {
  padding: "12px 15px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  background: "blue",
  color: "#fff",
  border: "none",
  width:"40%",
  margin:"0 auto",
  textAlign: "start",
  marginTop:"2px",
};
const UserForm = (props) => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { Firstname, Lastname, Email, password, Confirmpassword };
    console.log("Welcome", newUser);
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div style={btnStyle}>
          <label>Firstname: </label>
          <input type="text" onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div style={btnStyle}>
          <label>Lastname: </label>
          <input type="text" onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div style={btnStyle}>
          <label>Email Address: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={btnStyle}>
          <label>Password: </label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={btnStyle}>
          <label>Confirmpassword: </label>
          <input type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Create User" />
      </form>
      <p style={btnStyle}>Firstname:{Firstname}</p>
      <p style={btnStyle}>Lastname:{Lastname}</p>
      <p style={btnStyle}>Email:{Email}</p>
      <p style={btnStyle}>password:{password}</p>
      <p style={btnStyle}>Confirmpassword:{Confirmpassword}</p>
    </>
  );
};

export default UserForm;
