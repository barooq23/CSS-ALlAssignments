import React,{useState,useEffect} from 'react'

const PokemonApi = () => {
 const [people, setPeople] = useState([]);
 const [click,setClick]= useState(false);
 useEffect(() => {
   fetch(" https://pokeapi.co/api/v2/pokemon?limit=807")
     .then((response) => response.json())
     .then((response) => setPeople(response.results));
 },[]);
 const fetching=()=>{
    click?setClick(false): setClick(true)
 }

 return (
   <div>
     <button onClick={fetching}>fetching meeee....</button>
     
     {click
       ? people.map((person, index) => {
           return <div key={index}>{person.name}</div>;
         })
       : ""}
   </div>
 );
}

export default PokemonApi