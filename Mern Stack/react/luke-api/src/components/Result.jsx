import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Result = () => {
    const[result,setResult]=useState({});
    const[loaded,setLoaded]=useState(false);
    const {id, term} = useParams();
    useEffect(
      () => {
      axios
        .get(`https://swapi.dev/api/${term}/${id}`)
        .then((res) => setResult(res.data))
        .then((res) => setLoaded(true))
        .catch((err) => console.log(err))}
        ,
      [id]
    );
  return (
    <>
      <div>Result</div>
      {loaded && term === "people" ? (
        <div>
          <h3>Name: {result.name}</h3>
          <h3>Mass: {result.mass}</h3>
          <h3>Hair: {result.hair_color}</h3>
          <h3>Skin: {result.skin_color}</h3>
        </div>
      ) : (
        <div>
          <h3>climate: {result.climate}</h3>
          <h3>Terrain: {result.terrain}</h3>
          <h3>surface_water: {result.surface_water}</h3>
          <h3>Population: {result.population}</h3>
        </div>
      )}
    </>
  );
}

export default Result