import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const YourLuki = (props) => {
  const navigate =useNavigate();
  const handelSubmit=(e)=>{
    e.preventDefault()
      navigate(`/result/${props.term}/${props.id}`);
  }
  const handelchange=(e)=>{
    props.setTerm(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <p>
        <label>Search for:</label>
        <select onChange={handelchange}>
          <option value='people'>People</option>
          <option value='planets'>planets</option>
        </select>
        <label>ID:</label>
        <input type="number" onChange={(e)=> props.setId(e.target.value)}></input>
        <input type="submit"></input>
      </p>
      </form>
    </div>
  );
}

export default YourLuki