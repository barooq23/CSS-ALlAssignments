import React, { useState } from "react";

const btnStyle = {
  padding: "12px 15px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  background: "blue",
  color: "#fff",
  border: "none",
  width: "40%",
  margin: "0 auto",
  textAlign: "start",
  marginTop: "2px",
};
const UserForm = (props) => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [FirstnameError, setFirstnameError] = useState("");
  const [LastnameError, setLastnameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { Firstname, Lastname, Email, Password, ConfirmPassword };
    console.log("Welcome", newUser);
  };

  
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    if (e.target.value.length < 2) {
      setFirstnameError("Firstname is required!");
    } else if (e.target.value.length < 3) {
      setFirstnameError("Firstname must be 3 characters or longer!");
    } else {
      setFirstnameError("");
    }
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
    if (e.target.value.length < 2) {
      setLastnameError("Lastname is required!");
    } else if (e.target.value.length < 3) {
      setLastnameError("Lastname must be 3 characters or longer!");
    } else {
      setLastnameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 12) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 3) {
      setEmailError("Email must be 3 characters or longer!");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 2) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 3) {
      setPasswordError("Password must be 3 characters or longer!");
    } else {
      setPasswordError("");
    }
  };
    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      if (e.target.value.length < 2) {
        setConfirmPasswordError("ConfirmPassword is required!");
      } else if (e.target.value.length < 3) {
        setConfirmPasswordError("ConfirmPassword must be 3 characters or longer!");
      } else {
        setConfirmPasswordError("");
      }
    };

  return (
    <>
      <form onSubmit={createUser}>
        <div style={btnStyle}>
          <label>Firstname: </label>
          <input type="text" onChange={handleFirstname} />
          {FirstnameError ? (
            <p style={{ color: "red" }}>{FirstnameError}</p>
          ) : (
            ""
          )}
        </div>
        <div style={btnStyle}>
          <label>Lastname: </label>
          <input type="text" onChange={handleLastname} />
          {LastnameError ? <p style={{ color: "red" }}>{LastnameError}</p> : ""}
        </div>
        <div style={btnStyle}>
          <label>Email Address: </label>
          <input type="text" onChange={handleEmail} />
          {EmailError ? <p style={{ color: "red" }}>{EmailError}</p> : ""}
        </div>
        <div style={btnStyle}>
          <label>Password: </label>
          <input type="text" onChange={handlePassword} />
          {PasswordError ? <p style={{ color: "red" }}>{PasswordError}</p> : ""}
        </div>
        <div style={btnStyle}>
          <label>Confirmpassword: </label>
          <input type="text" onChange={handleConfirmPassword} />
          {ConfirmPasswordError ? <p style={{ color: "red" }}>{ConfirmPasswordError}</p> : ""}
        </div>
        <input type="submit" value="Create User" />
      </form>
      <p style={btnStyle}>Firstname:{Firstname}</p>
      <p style={btnStyle}>Lastname:{Lastname}</p>
      <p style={btnStyle}>Email:{Email}</p>
      <p style={btnStyle}>password:{Password}</p>
      <p style={btnStyle}>Confirmpassword:{ConfirmPassword}</p>
    </>
  );
};

export default UserForm;
